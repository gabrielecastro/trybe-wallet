import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveFormWallet } from '../actions';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'dinheiro',
      tag: 'alimentação',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  onSubmitForm = (event) => {
    event.preventDefault();
    const { dispatchSaveForm } = this.props;
    dispatchSaveForm(this.state);
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
              value={ method }
              name="method"
              data-testid="method-input"
              onChange={ this.handleChange }
            >
              <option value="dinheiro">Dinheiro</option>
              <option value="cartao-credito">Cartão de crédito</option>
              <option value="cartao-debito">Cartão de débito</option>
            </select>

            <select
              value={ tag }
              name="tag"
              data-testid="tag-input"
              onChange={ this.handleChange }
            >
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>

            <button
              type="button"
              onClick={ this.onSubmitForm }
            >
              Adicionar
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
