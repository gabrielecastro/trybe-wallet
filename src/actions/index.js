import getCurrency from '../services/currencyAPI';

// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_FORM_WALLET = 'SAVE_FORM_WALLET';
export const GET_INFOS_API = 'GET_INFOS_API';
export const GET_INFOS_API_SUCCESS = 'GET_INFOS_API_SUCCESS';
export const GET_INFOS_API_FAIL = 'GET_INFOS_API_FAIL';
export const DELETE_ITEM = 'DELETE_ITEM';
/* export const DELETE_EXPENSE = 'DELETE_EXPENSE'; */

/* export const deleteExpense = (id) => (
  {
    type: DELETE_EXPENSE, id,
  }
); */

export const saveEmail = (payload) => (
  {
    type: SAVE_EMAIL, payload,
  });

export const saveFormWallet = (payload) => ({
  type: SAVE_FORM_WALLET, payload,
});

// Action que pede as informações da API
export const getInfosAPI = () => ({
  type: GET_INFOS_API,
});

// Action caso a requisição dê certo
export const getInfosAPISuccess = (payload) => ({
  type: GET_INFOS_API_SUCCESS,
  // informações que eu quero
  payload,
});

// Action caso a requisição dê errado
export const getInfosAPIFail = () => ({
  type: GET_INFOS_API_FAIL,
});

export const deteleItem = (id) => ({
  type: DELETE_ITEM, id,
});

// Função que retorna outra função e faz a requisição para a API
export const getInfosThunk = () => (dispatch) => {
  dispatch(getInfosAPI());
  getCurrency()
    .then((payload) => dispatch(getInfosAPISuccess(payload)))
    .catch(() => dispatch(getInfosAPIFail));
};
