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
      currency: '',
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
            <input
              data-testid="currency-input"
              type="text"
              placeholder="Moeda"
              onChange={ this.handleChange }
              value={ currency }
              name="currency"
            />
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
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSaveForm: (infos) => dispatch(saveFormWallet(infos)),
});

export default connect(null, mapDispatchToProps)(Form);
