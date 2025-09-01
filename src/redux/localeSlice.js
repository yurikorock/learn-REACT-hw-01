import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'locale',
  initialState: {
    lang: 'uk',
  },
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

// console.log(slice);

export const {changeLang} = slice.actions;

export default slice.reducer;

// export const changeLang = createAction('locale/changeLang');

// const initialState = {
//   lang: "uk",
// };

// export default function localeReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'locale/changeLang':
//       return {
//         ...state,
//         lang: action.payload,
//       };

//     default:
//       return state;
//   }
// }
