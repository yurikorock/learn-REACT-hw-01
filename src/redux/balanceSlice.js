import { createAction } from '@reduxjs/toolkit';


//фабрика екшенів (функція яка створює обє`кт)
export const deposit = createAction('balance/deposit');
export const withdraw = createAction('balance/withdraw');


const initialState = {
  value: 100,
};

export default function balanceReducer(state = initialState, action) {
  switch (action.type) {
    case 'balance/deposit':
      return {
        ...state,
        value: state.value + action.payload,
      };
      case "balance/withdraw":
        return {
            ...state,
            value: state.value - action.payload,
        }
    default:
      return state;
  }
}
