// Coloque aqui suas actions

export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_FORM_WALLET = 'SAVE_FORM_WALLET';

export const saveEmail = (payload) => (
  {
    type: SAVE_EMAIL, payload,
  });

export const saveFormWallet = (payload) => ({
  type: SAVE_FORM_WALLET, payload,
});
