import { NavLink } from 'react-router-dom';
import css from './AppHeader.module.css';
import clsx from 'clsx';

const getActiveClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function AppHeader() {
  return (
    <header className={css.header}>
      <nav>
        <NavLink to="/" className={getActiveClass}>
          Home
        </NavLink>
        <NavLink to="/dashboard" className={getActiveClass}>
          Dashboard
        </NavLink>
      </nav>
    </header>
  );
}
