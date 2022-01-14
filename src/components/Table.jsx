import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { infos } = this.props;
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
        <tbody>
          {
            infos !== [] && (
              infos.map((info) => (
                <tr key={ info.id }>
                  <td>{info.description}</td>
                  <td>{info.tag}</td>
                  <td>{info.method}</td>
                  <td>{info.value}</td>
                  <td>{info.exchangeRates[info.currency].name.split('/', 1)}</td>
                  <td>{Number(info.exchangeRates[info.currency].ask).toFixed(2)}</td>
                  <td>
                    {
                      (Number(info.exchangeRates[info.currency].ask)
                        * Number(info.value))
                        .toFixed(2)
                    }
                  </td>
                  <td>Real</td>
                </tr>
              ))
            )
          }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  infos: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = (state) => ({
  infos: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
