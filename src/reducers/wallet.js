// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { GET_INFOS_API,
  GET_INFOS_API_SUCCESS,
  GET_INFOS_API_FAIL,
  SAVE_FORM_WALLET,
  DELETE_ITEM } from '../actions';

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
          exchangeRates: action.payload.exchangeRates,
        },
      ],
    };

  case GET_INFOS_API:
    return {
      ...state,
    };
  case GET_INFOS_API_SUCCESS:
    return {
      ...state,
      currencies: Object.keys(action.payload),
    };
  case GET_INFOS_API_FAIL:
    return {
      ...state,
      error: 'ERRO NA API',
    };
  case DELETE_ITEM:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
    };
  default:
    return state;
  }
};

export default wallet;
