import { useEffect, useState } from 'react';
import css from './UserTodos.module.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function UserTodos() {
  const { userId } = useParams();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${userId}/todos`)
      .then((res) => setTodos(res.data.todos));
  },[userId]);

  return (
    <div className={css.container}>
      {/* <h2 className={css.header}>User Todos</h2> */}
      <ul className={css.list}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? css.completed : css.pending}
          >
            {todo.todo}
          </li>
        ))}
      </ul>
    </div>
  );
}
