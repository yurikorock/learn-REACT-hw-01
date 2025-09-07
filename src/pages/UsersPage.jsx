// import axios from 'axios';
import { useEffect, useState } from 'react';
import UserList from '../components/UserList/UserList.jsx';
import { fetchUsers } from '../services/userService.js';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from 'use-debounce';

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  // useSearchParams() хук щоб витягнути параметри з URL після знаку питання
  // http://rozetka/dashboard?brand=samsung
  // і потім використати метод get  --- searchParams.get("імя параметру в адресній строкі")

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

// робимо відкладений пошук з інпута
  const [debouncedQuery] = useDebounce(query, 1000)

  // це можливість зберігати значення не в стан а в URL
  const changeSearchQuery = (event) => {
    // беремо з інпута значення
    const newQuery = event.target.value;
    // робимо копію поточних searchParams
    const nextSearchParams = new URLSearchParams(searchParams);

    if (newQuery !== '') {
      // змінити копію
      nextSearchParams.set('query', newQuery);
    } else {
        // стираємо негарний рядок в URL, який залишається якщо нічого не вводимо в інпут
      nextSearchParams.delete('query');
    }

    // відправити копію в URL
    setSearchParams(nextSearchParams);
  };

  useEffect(() => {
    // axios
    //   .get('https://dummyjson.com/users')
    //   .then((res) => setUsers(res.data.users));
    // фільтрація контактів через інпут відбувається на бекенді і повертається на фронтенд
    fetchUsers(debouncedQuery).then((data) => setUsers(data));
  }, [debouncedQuery]);

  return (
    <div>
      {/* // робимо контрольований елемент input */}
      <input type="text" value={query} onChange={changeSearchQuery}></input>
      {users.length > 0 && <UserList users={users} />}
      {/* {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.firstName} {user.lastName}
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
}
