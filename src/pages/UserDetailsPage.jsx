// import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink, useParams, Outlet } from 'react-router-dom';
import UserInfo from '../components/UserInfo/UserInfo.jsx';
import { fetchUserById } from '../services/userService.js';

export default function UserDetailsPage() {
  // на любу сторінку яка рендериться з динамічними параметрами
  // можна викликати useParams і отримати обєкт параметрів
  // useParams можливість отримати із URL параметри і їх значення path='/dashboard/:userId'
  // useParams дозволяє працювати з динамічними параметрами адресного рядка
  const { userId } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    // axios
    //   .get(`https://dummyjson.com/users/${userId}`)
    //   .then((res) => setUser(res.data));
    fetchUserById(userId).then((data) => setUser(data));
  }, [userId]);
  return (
    <div>
      {user && <UserInfo user={user} />}
      <ul>
        <li>
          <NavLink to="posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="todos">Todos</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

// Outlet в те місце, куди треба рендерити розмітку JSX вкладених маршрутів
// Outlet просто можливість зарендерити вкладені маршрути в батьківський
