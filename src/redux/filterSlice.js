import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    text: '',
  },
  reducers: {
    changeTextFilter(state, action) {
      state.text = action.payload;
    },
  },
});

export const {changeTextFilter} = filterSlice.actions;
export default filterSlice.reducer;

export const selectTextFilter = (state) => state.filters.text;

// селектор робимо зовнішньою функцією, щоб не дублювати код, та 
// використовуємо де потрібно (від стану повертає шматки стану)
// назва селектору повинна починатись з select... рекомендація розробників Редакс