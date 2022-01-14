import React, { Component } from 'react';
/* import { connect } from 'react-redux'; */

class Table extends Component {
  render() {
    /*  const { infos } = this.props; */
    console.log(infos);
    return (
      <table>
        <thead>
          <tr>
            <th role="columnheader">Descrição</th>
            <th role="columnheader">Tag</th>
            <th role="columnheader">Método de pagamento</th>
            <th role="columnheader">Valor</th>
            <th role="columnheader">Moeda</th>
            <th role="columnheader">Câmbio utilizado</th>
            <th role="columnheader">Valor convertido</th>
            <th role="columnheader">Moeda de conversão</th>
          </tr>
        </thead>
      </table>
    );
  }
}

/* const mapStateToProps = (state) => ({
  infos: state.wallet.exchangeRates,
}); */

export default Table;
