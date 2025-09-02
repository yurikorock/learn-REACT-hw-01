import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../../redux/tasksOps.js';
import Loader from '../Loader/Loader.jsx';
import TaskList from '../TaskList/TaskList.jsx';
import Error from '../Error/Error.jsx';
import TaskForm from '../TaskForm/TaskForm.jsx';

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    // коли на діспатчі викликаємо unwrap(дає нам доступ до проміса),
    // він повертає проміс з результатом цієї операції
    // і вже на нього можна повішати then, catch або async/await
    dispatch(fetchTasks())
      .unwrap()
      .then((data) => {console.log(data);}) //можна вивести якийсь тостик або алерт ()=> alert (Success!!!)
      .catch((error) => {console.log(error)}); // ()=> alert (ERROR!!!)
  }, [dispatch]);

  return (
    <div>
      <h1>HTTP request with REDUX</h1>
      <TaskForm/>
      {loading && <Loader>Loading tasks, please wait ...</Loader>}
      {error && <Error>Error message</Error>}
      <TaskList />
    </div>
  );
}
