import { createAction } from '@reduxjs/toolkit';



export const changeLang = createAction('locale/changeLang');

const initialState = {
  lang: "uk",
};

export default function localeReducer(state = initialState, action) {
  switch (action.type) {
    case 'locale/changeLang':
      return {
        ...state,
        lang: action.payload,
      };
      
    default:
      return state;
  }
}