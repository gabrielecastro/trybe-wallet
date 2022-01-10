import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <div className="container">
          <div className="email-user">
            <span data-testid="email-field">{ email }</span>
          </div>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field" className="cambio-header">BRL</span>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
