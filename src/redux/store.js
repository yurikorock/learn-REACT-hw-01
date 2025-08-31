import { configureStore, createAction } from '@reduxjs/toolkit';

//фабрика екшенів (функція яка створює обє`кт)
export const deposit = createAction('balance/deposit');
export const withdraw = createAction('balance/withdraw');
export const changeLang = createAction("locale/changeLang")
// const action = deposit(5);

const initialState = {
  balance: {
    value: 100,
  },
  locale: {
    lang:"uk"
  },
};
//функція зміни стану
function rootReducer(state = initialState, action) {
  // console.log("rootReduser",action);

//мінімум редюсера ===
//   switch (action.type) {
//     default:
//       return state;
//   }  
//мінімум редюсера ===

switch(action.type){
    case "balance/deposit":
        return{
            ...state,//робимо завжди копію існуючого стану
            balance: {
                value: state.balance.value + action.payload,
            }
        }
case "balance/withdraw":
        return{
            ...state,
            balance: {
                value: state.balance.value - action.payload,
            }
        }
        case "locale/changeLang":
            return{
                ...state,
                locale: {
                    lang: action.payload,
                }
            }
    default: return state;
}
}

export default configureStore({
  reducer: rootReducer,
});
