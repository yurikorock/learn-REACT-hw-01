// import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useParams, Outlet, useLocation } from 'react-router-dom';
import UserInfo from '../components/UserInfo/UserInfo.jsx';
import { fetchUserById } from '../services/userService.js';

export default function UserDetailsPage() {
  // на любу сторінку яка рендериться з динамічними параметрами
  // можна викликати useParams і отримати обєкт параметрів
  // useParams можливість отримати із URL параметри і їх значення path='/dashboard/:userId'
  // useParams дозволяє працювати з динамічними параметрами адресного рядка
  const { userId } = useParams();

  // хук повертає обєкт місцезнаходження, обєкт описує поточний URL
  // На Userlist в Link є пропс state{}, і ми цей state отримуємо в обєкті location
  // тобто в state є pathname(url сторінки) з якої ми прийшли
  
  const location = useLocation(); // отримуємо location поточної сторінки
// console.log(location);

// useRef для того щоб зберегти state між перевантаженнями сторінки
// беремо location.state який ми передали при кліку на Userlist Link
// зберігаємо це в useRef
const backlinkRef = useRef(location.state);

  const [user, setUser] = useState(null);

  useEffect(() => {
    // axios
    //   .get(`https://dummyjson.com/users/${userId}`)
    //   .then((res) => setUser(res.data));
    fetchUserById(userId).then((data) => setUser(data));
  }, [userId]);
  return (
    <div>
    {/* // повертаємось назад на сторінку звідки прийшли */}
    <Link to={backlinkRef.current}>Go back</Link>
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
