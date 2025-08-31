import { configureStore} from '@reduxjs/toolkit';
import balanceReducer from './balanceSlice.js';
import localeReducer from './localeSlice.js';



// const action = deposit(5);

// const initialState = {
//   balance: {
//     value: 100,
//   },
//   locale: {
//     lang: 'uk',
//   },
// };
//функція зміни стану
// function rootReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'balance/deposit':
//       return {
//         ...state, //робимо завжди копію існуючого стану
//         balance: {
//           value: state.balance.value + action.payload,
//         },
//       };
//     case 'balance/withdraw':
//       return {
//         ...state,
//         balance: {
//           value: state.balance.value - action.payload,
//         },
//       };
//     case 'locale/changeLang':
//       return {
//         ...state,
//         locale: {
//           lang: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// }

export const store = configureStore({
  reducer: {
    balance: balanceReducer,//відповідає за властивість стану balance
    locale: localeReducer, //відповідає за властивість стану locale
  },
});
