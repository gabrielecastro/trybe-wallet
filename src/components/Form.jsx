import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveFormWallet } from '../actions';
import getCurrency from '../services/currencyAPI';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  onSubmitForm = async (event) => {
    event.preventDefault();
    const response = await getCurrency();
    /* .filter((cur) => cur !== 'USDT'); */
    this.setState({ exchangeRates: response }, () => {
      const { dispatchSaveForm } = this.props;
      dispatchSaveForm(this.state);
      this.clearInputs();
    });
  }

  clearInputs = () => {
    this.setState({
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
      exchangeRates: {},
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    /* console.log(exchangeRates); */
    /* const currencies = Object.keys(exchangeRates); */
    /*     console.log(currencys);
 */
    return (
      <section>
        <div>
          <form>
            <input
              data-testid="value-input"
              type="text"
              placeholder="Valor"
              onChange={ this.handleChange }
              value={ value }
              name="value"
            />
            <input
              data-testid="description-input"
              type="text"
              placeholder="Descrição"
              onChange={ this.handleChange }
              value={ description }
              name="description"
            />

            <select
              id="moeda"
              onChange={ this.handleChange }
              data-testid="currency-input"
              value={ currency }
              name="currency"
              aria-label="moeda"

            >
              {currencies
                .filter((cur) => cur !== 'USDT')
                .map((elem) => (
                  <option
                    data-testid={ elem }
                    value={ elem }
                    key={ elem }
                    name="moeda"
                  >
                    {elem}
                  </option>
                ))}
            </select>

            <select
              id="method"
              value={ method }
              name="method"
              data-testid="method-input"
              onChange={ this.handleChange }
            >
              <option
                name="Dinheiro"
                key="Dinheiro"
                value="Dinheiro"
              >
                Dinheiro
              </option>
              <option
                name="Cartão de crédito"
                key="Cartão de crédito"
                value="Cartão de crédito"
              >
                Cartão de crédito
              </option>
              <option
                name="Cartão de débito"
                key="Cartão de débito"
                value="Cartão de débito"
              >
                Cartão de débito
              </option>
            </select>

            <select
              id="tag"
              value={ tag }
              name="tag"
              data-testid="tag-input"
              onChange={ this.handleChange }
            >
              <option
                name="Alimentação"
                key="Alimentação"
                value="Alimentação"
              >
                Alimentação
              </option>
              <option
                name="Lazer"
                key="Lazer"
                value="Lazer"
              >
                Lazer
              </option>
              <option
                name="Trabalho"
                key="Trabalho"
                value="Trabalho"
              >
                Trabalho
              </option>
              <option
                name="Transporte"
                key="Transporte"
                value="Transporte"
              >
                Transporte
              </option>
              <option name="Saúde" key="Saúde" value="Saúde">Saúde</option>
            </select>

            <button
              type="button"
              onClick={ this.onSubmitForm }
            >
              Adicionar despesa
            </button>
          </form>
        </div>
      </section>
    );
  }
}

Form.propTypes = {
  dispatchSaveForm: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  exchangeRates: state.wallet.exchangeRates,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSaveForm: (infos) => dispatch(saveFormWallet(infos)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
