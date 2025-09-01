import { createSlice } from '@reduxjs/toolkit';

// повертає нам обєктик слайсу => кореневий редюсер і екшн
// в createSlice передаємо обєкт налаштувань {}
const slice = createSlice({
  name: 'balance',
  initialState: {
    value: 100,
    // items: [],
  },
  reducers: {
    //case reducers
    // a: (state, action) => {};
    deposit: (state, action) => {
      // стан під капотом Immer робить точну копію стану,
      // яку можна змінювати напряму, без ...state, тому 
      state.value += action.payload;
      // return {
      //   ...state,
      //   value: state.value + action.payload,
      // };
    },
    withdraw: (state, action) => {
      state.value -= action.payload;
      // return {
      //   ...state,
      //   value: state.value - action.payload,
      // };
    },
    // addItem: (state, action) => {
    //   state.items.push(action.payload);
    // }
  },
});

// console.log(slice);


// отримуємо фабрики екшенів
// зберігаємо в змінній значення slice.actions, деструктуризуємо
// щоб отримати для зручності щоб експортувати обєкти екшну deposit, withdraw
export const { deposit, withdraw } = slice.actions;// фабрики зберігаються на властивості slice.actions
// export const deposit =  slice.actions.deposit;
// export const deposit =  slice.actions.withdraw;


//отримуємо редюсер слайса який передаємо в store
export default slice.reducer;

// //фабрика екшенів

// slice.actions.deposit(5);
// //{type: "balance/deposit", payload: 5}

// slice.actions.withdraw(10);
// //{type: "balance/withdraw", payload: 10}

// =========З попереднього урока=======
// //фабрика екшенів (функція яка створює обє`кт)
// export const deposit = createAction('balance/deposit');
// export const withdraw = createAction('balance/withdraw');

// const initialState = {
//   value: 100,
// };

// export default function balanceReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'balance/deposit':
//       return {
//         ...state,
//         value: state.value + action.payload,
//       };
//       case "balance/withdraw":
// return {
//     ...state,
//     value: state.value - action.payload,
// }
//     default:
//       return state;
//   }
// }
