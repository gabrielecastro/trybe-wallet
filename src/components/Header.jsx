import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  sumValues = () => {
    /* const { value } = this.props;
    console.log(value)
    if (value !== []) {
      const valueTotal = value.reduce((acc, prev) => acc + prev, 0);
      return valueTotal;
    }
    return 0; */

    const { totalExpenses } = this.props;
    const TotalValue = totalExpenses
      .map(({ exchangeRates, currency, value }) => (exchangeRates[currency].ask) * value);
    if (TotalValue !== []) {
      const total = TotalValue.reduce((acc, crr) => acc + crr, 0);
      return total.toFixed(2);
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
  totalExpenses: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
