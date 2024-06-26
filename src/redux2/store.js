import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { accountReducer } from './accountSlice';
import { localeReducer } from './localeSlice';

// const initialState = { account: { balance: 0 }, locale: { lang: 'uk' } };




const rootReducer = combineReducers({
  account: accountReducer,
  locale: localeReducer,
});

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'account/deposit':
//       return {
//         ...state,
//         account: {
//           ...state.account,
//           balance: state.account.balance + action.payload,
//         },
//       };

//     case 'account/withdraw':
//       return {
//         ...state,
//         account: {
//           ...state.account,
//           balance: state.account.balance - action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);

