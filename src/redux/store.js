import { configureStore} from '@reduxjs/toolkit';
import balanceReducer from './balanceSlice.js';
import localeReducer from './localeSlice.js';


export const store = configureStore({
  reducer: {
    balance: balanceReducer,//відповідає за властивість стану balance
    locale: localeReducer, //відповідає за властивість стану locale
  },
});
