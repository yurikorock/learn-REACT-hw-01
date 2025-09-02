import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

// операція це функція, яка дозволяє виконати http запит
// createAsyncThunk повертає цю функцію, вам необхідно її діспатчити при сабміті, кліки тощо
// операція це просто можливість виконати асинхронну фунцію поза компонентом 
export const fetchTasks = createAsyncThunk('tasks/getAll', async () => {
//   console.log('fetchTasks');
const res = await axios.get("/tasks");
return res.data; //повертаємо те що нам дає бекенд (масив даних наприклад), це по суті є payload екшена
});
// операція fetchTasks під капотом діспатчить нам pending, fulfilled, rejected (createAsyncThunk їх створює)
// console.dir(fetchTasks.pending, fetchTasks.fulfilled, fetchTasks.rejected);