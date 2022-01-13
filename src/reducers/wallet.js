// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { GET_INFOS_API,
  GET_INFOS_API_SUCCESS,
  GET_INFOS_API_FAIL,
  SAVE_FORM_WALLET } from '../actions';

const initialState = {
  expenses: [],
  currencies: [],
  error: '',
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_FORM_WALLET:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          id: state.expenses.length,
          value: action.payload.value,
          description: action.payload.description,
          currency: action.payload.currency,
          method: action.payload.method,
          tag: action.payload.tag,
          exchangeRates: state.exchangeRates,
        },
      ],
      /* values: [...state.values, Number(action.payload.value)], */
    };
  case GET_INFOS_API:
    return {
      ...state,
    };
  case GET_INFOS_API_SUCCESS:
    return {
      ...state,
      exchangeRates: action.payload,
      currencies: Object.keys(action.payload),
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
