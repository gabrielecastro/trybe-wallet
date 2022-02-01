import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deteleItem } from '../actions';

class Table extends Component {
  render() {
    const { infos, dispatchDeleteItem } = this.props;
    console.log(infos);
    return (
      <table>
        <div className="div-table">
          <thead>
            <tr className="tr-table">
              <th role="columnheader">Descrição</th>
              <th role="columnheader">Tag</th>
              <th role="columnheader">Método de pagamento</th>
              <th role="columnheader">Valor</th>
              <th role="columnheader">Moeda</th>
              <th role="columnheader">Câmbio utilizado</th>
              <th role="columnheader">Valor convertido</th>
              <th role="columnheader">Moeda de conversão</th>
              <th role="columnheader">Editar/Excluir</th>
            </tr>
          </thead>
        </div>
        <tbody>
          {
            infos !== [] && (
              infos.map((
                { id, description, tag, method, value, exchangeRates, currency },
              ) => (
                <div key={ id } className="div-table">
                  <tr>
                    <td>{description}</td>
                    <td>{tag}</td>
                    <td>{method}</td>
                    <td>{value}</td>
                    <td>{exchangeRates[currency].name.split('/', 1)}</td>
                    <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                    <td>
                      {
                        (Number(exchangeRates[currency].ask)
                          * Number(value))
                          .toFixed(2)
                      }
                    </td>
                    <td>Real</td>
                    <td>
                      <button
                        className="delete-btn"
                        type="button"
                        data-testid="delete-btn"
                        onClick={ () => dispatchDeleteItem(id) }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </div>
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
  dispatchDeleteItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  infos: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchDeleteItem: (id) => dispatch(deteleItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
