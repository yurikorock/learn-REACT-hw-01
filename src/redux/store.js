import { configureStore } from '@reduxjs/toolkit';
import balanceReducer from './balanceSlice.js';
import localeReducer from './localeSlice.js';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'user-balance',
  storage,
  //   whitelist: [value], якщо треба зберегти тільки одну властивість
  //   до localeStorage із багатьох існуючих
  //   наприклад з слайсу balanceSlice тільки властивість value:100
};

// візьми значення за яке відповідає balanceReducer (тобто весь обєкт слайсу)
// і збережи його в LocaleStorage з ключем 'user-balance
const persistedBalanceReducer = persistReducer(persistConfig, balanceReducer);

export const store = configureStore({
  reducer: {
    balance: persistedBalanceReducer, //відповідає за властивість стану balance
    locale: localeReducer, //відповідає за властивість стану locale // також можна зробити і для persistedLocaleReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
//також дивись main
export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: {
//     balance: balanceReducer,//відповідає за властивість стану balance
//     locale: localeReducer, //відповідає за властивість стану locale
//   },
// });
