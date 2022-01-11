// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { SAVE_FORM_WALLET } from '../actions';

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
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_FORM_WALLET:
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
