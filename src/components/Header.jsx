import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  sumValues = () => {
    const { value } = this.props;
    if (value !== 0) {
      const valueTotal = value.reduce((acc, prev) => acc + prev, 0);
      return valueTotal;
    }
    return 0;
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <div className="container">
          <div className="email-user">
            <span data-testid="email-field">{ email }</span>
          </div>
          <span data-testid="total-field">{ this.sumValues() }</span>
          <span data-testid="header-currency-field" className="cambio-header">BRL</span>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  value: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  value: state.wallet.values,
});

export default connect(mapStateToProps)(Header);
