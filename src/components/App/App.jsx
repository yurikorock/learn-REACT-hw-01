import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from '../../redux/tasksOps.js';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <h1>HTTP request with REDUX</h1>
    </div>
  );
}
