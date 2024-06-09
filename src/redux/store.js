import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

//40 min

const initialState = {
  account: { balance: 0 },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'account/deposit':
      return { account: { balance: state.account.balance + action.payload } };
    case 'account/withdraw':
      return {
        account: {
          balance: state.account.balance - action.payload,
        },
      };
    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);

export const deposit = value => {
  return {
    type: 'account/deposit',
    payload: value,
  };
};

export const withdraw = value => {
  return {
    type: 'account/withdraw',
    payload: value,
  };
};
