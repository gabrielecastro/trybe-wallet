/* LINKS USADOS PARA CONSULTAR USO DO REGEX
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
REFERÊNCIAS USADAS NAS LINHAS 25 E 27
*/

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { saveEmail } from '../actions';
import '../css/Login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      buttonDisabled: true,
      email: '',
      senha: '',
      buttonClick: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton(event) {
    event.preventDefault();
    this.setState({ buttonClick: true });
    const { dispatchSaveEmail } = this.props;
    dispatchSaveEmail(this.state);
  }

  isSaveButtonDisabled = () => {
    const minLength = 6;
    const regex = /\S+@\S+\.\S/;
    const { senha, email } = this.state;
    if (senha.length >= minLength && regex.test(email)) {
      this.setState({
        buttonDisabled: false,
      });
    } else {
      this.setState({
        buttonDisabled: true,
      });
    }
  };

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      this.isSaveButtonDisabled();
    });
  }

  render() {
    const { buttonDisabled, email, senha, buttonClick } = this.state;

    if (buttonClick) {
      return <Redirect exac to="/carteira" />;
    }

    return (
      <div className="container-page">
        <div className="container-section-login">
          <div className="login">
            <p className="logo">TrybeWallet</p>
            <input
              type="email"
              placeholder="Email"
              data-testid="email-input"
              value={ email }
              name="email"
              onChange={ this.handleChange }
            />
            <input
              type="password"
              placeholder="Senha"
              data-testid="password-input"
              value={ senha }
              name="senha"
              onChange={ this.handleChange }
            />
            <button
              type="button"
              disabled={ buttonDisabled }
              onClick={ this.onClickButton }
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchSaveEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSaveEmail: (email) => dispatch(saveEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
