import { Link, useLocation } from 'react-router-dom';
import css from './UserList.module.css';
export default function UserList({ users }) {
    // всі компоненти які існують можуть отримувати свій location
    // обєкт місцеположення списку UserList
    const location = useLocation();
  return (
    <ul className={css.list}>
      {users.map((user) => (
        <li key={user.id} className={css.listItem}>
          <h3 className={css.username}>
            {user.firstName} {user.lastName}
          </h3>
          <p className={css.text}>{user.email}</p>
          <p className={css.text}>{user.phone}</p>
          <Link className={css.link} to={`/dashboard/${user.id}`} state={location}>Details</Link>
          {/* // можна між маршрутами передавати дані використовувати для Link пропс state={значення} */}
          {/* <a href="" className={css.link}>
            Details
          </a> */}
        </li>
      ))}
    </ul>
  );
}
// використовуємо Link, тому що при кліканні на Details, UserList зникає
// та відбувається перехід на сторінку деталей UserDetailsPage