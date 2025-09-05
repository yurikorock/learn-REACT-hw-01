import { createSlice, createSelector } from '@reduxjs/toolkit';
import {
  addTask,
  deleteTask,
  fetchTasks,
  toggleCompleted,
} from './tasksOps.js';
import { selectTextFilter } from './filterSlice.js';

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
      })
      .addCase(deleteTask.pending, (state) => {
        state.loading = true; //завантаження йде
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false; // завантаження все припинилось
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id,
        );
      })
      .addCase(addTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(toggleCompleted.pending, (state) => {
        state.loading = true;
      })
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
      }),
});

export default slice.reducer;

// селектор робимо зовнішньою функцією, щоб не дублювати код, та
// використовуємо де потрібно (від стану повертає шматки стану)
// назва селектору повинна починатись з select... рекомендація розробників Редакс

// прості селектори беруть відповідну частину стану та повертають у компонент без обчислень
// export const selectA = (state) => state.task.a;

export const selectTask = (state) => state.tasks.items;

// Складні селектори повертають результат обчислення,
// яке базується на частинках редакс стану
// ЗАВЖДИ ТРЕБА МЕМОЇЗУВАТИ Складні селектори !!!

// export const selectSum = (state) => {
//   const a = state.tasks.a;
//   const b = state.tasks.b;
//   return a + b;
// };

// no memiozatia
// export const selectVisibleTask = (state) => {
//   const tasks = selectTask(state);
//   const textFilter = selectTextFilter(state);

//   return tasks.filter((task) =>
//     task.text.toLowerCase().includes(textFilter.toLowerCase()),
//   );
// };

// with memoize
// export const select.....Name = createSelector([], ()=>{}); zrazok
// createSelector([] - масив залежностей селекторів, ()=>{} - функція для мемоізації); zrazok

export const selectVisibleTask = createSelector(
  [selectTask, selectTextFilter],
  (tasks, textFilter) => {
    return tasks.filter((task) =>
      task.text.toLowerCase().includes(textFilter.toLowerCase()),
    );
  },
);
// no memiozatia
// export const selectTaskCount = (state) => {
//   const tasks = selectTask(state);
//   return tasks.reduce(
//     (acc, task) => {
//       if (task.complited) {
//         acc.complited += 1;
//       } else {
//         acc.active += 1;
//       }
//       return acc;
//     },
//     { active: 0, complited: 0, total: tasks.length },
//   );
// };
// with memoize
export const selectTaskCount = createSelector([selectTask], (tasks) => {
  return tasks.reduce(
    (acc, task) => {
      if (task.complited) {
        acc.complited += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, complited: 0, total: tasks.length },
  );
});
