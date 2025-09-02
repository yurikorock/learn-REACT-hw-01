import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from './tasksOps.js';

const slice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  //звичайний власний редюсер
  //   reducers: {
  //     a: () => {}
  //     b: () => {}
  //   }
  // extraReducers для обробки зовнішніх екшенів, тому що вони не були створені тут
  // вони до нього не належать, за допомогою createSlice тільки для цього slice,

  // зразок ===== extraReducers: (builder) => builder.addCase("c", ()=> {}).addCase("d", ()=> {})
  // щоб обробити нам треба отримати посилання на fetchTasks

  extraReducers: (builder) =>
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        // action.payload - це дані від бекенду (return res.data)
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.error = true;
      }),
});

export default slice.reducer;
