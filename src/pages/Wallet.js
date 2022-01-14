import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getInfosThunk } from '../actions';
import Form from '../components/form';
import Header from '../components/Header';
import Table from '../components/Table';

class Wallet extends React.Component {
  componentDidMount() {
    const { getInfosProp } = this.props;
    getInfosProp();
  }

  render() {
    return (
      <section>
        <Header />
        <Form />
        <Table />
      </section>
    );
  }
}

Wallet.propTypes = {
  getInfosProp: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getInfosProp: () => dispatch(getInfosThunk()),
});

export default connect(null, mapDispatchToProps)(Wallet);
