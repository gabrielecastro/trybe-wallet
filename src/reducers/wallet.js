// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { GET_INFOS_API,
  GET_INFOS_API_SUCCESS,
  GET_INFOS_API_FAIL,
  SAVE_FORM_WALLET } from '../actions';

const initialState = {
  expenses: [
    {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: 'dinheiro',
      tag: 'alimentação',
    },
  ],
  exchangeRates: {},
  currencies: [],
  loading: false,
  error: '',
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_FORM_WALLET:
    return {
      ...state,
      expenses: action.payload,
    };
  case GET_INFOS_API:
    return {
      ...state,
      loading: true,
    };
  case GET_INFOS_API_SUCCESS:
    return {
      ...state,
      exchangeRates: action.payload,
      currencies: Object.keys(action.payload),
      loading: false,
    };
  case GET_INFOS_API_FAIL:
    return {
      ...state,
      error: 'ERRO NA API',
    };
  default:
    return state;
  }
};

export default wallet;
