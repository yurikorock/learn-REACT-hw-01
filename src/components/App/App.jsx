import { NavLink, Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import AppHeader from './AppHeader/AppHeader.jsx';
// import HomePage from '../../pages/HomePage.jsx';
// import UsersPage from '../../pages/UsersPage.jsx';
// import NotFoundPage from '../../pages/NotFoundPage.jsx';
// import UserDetailsPage from '../../pages/UserDetailsPage.jsx';
// import UserPosts from '../UserPosts/UserPosts.jsx';
// import UserTodos from '../UserTodos/UserTodos.jsx';

// динамічний імпорт, це можливість розділити наш джаваскрипт на 
// файликів додатку і завантажувати той js, який нам потрібно
// це коли вже збілджений проект (npm run build), в розробці ми не побачимо це
// а в редакшені будуть завантажуватись окремі файлики на сторінку
// це для швидкості завантаження в браузері сторінки
// робиться тільки для сторінок (маршрути)
import { lazy, Suspense } from 'react';
// lazy(()=> import(шлях до файлу)); zrazok
// і це вже проміси, а не компонент, обовязково огорнути роути в Suspense fallback={null}
const HomePage = lazy(()=> import("../../pages/HomePage.jsx"));
const UsersPage = lazy(()=> import("../../pages/UsersPage.jsx"));
const NotFoundPage = lazy(()=> import("../../pages/NotFoundPage.jsx"));
const UserDetailsPage = lazy(()=> import("../../pages/UserDetailsPage.jsx"));
const UserPosts = lazy(()=> import("../UserPosts/UserPosts.jsx"));
const UserTodos = lazy(()=> import("../UserTodos/UserTodos.jsx"));

function App() {
  return (
    <div className={css.container}>
      <AppHeader />
      <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<UsersPage />} />
        <Route path="/dashboard/:userId" element={<UserDetailsPage />}>
          {/* /* вкладені маршрути */}
          <Route path="posts" element={<UserPosts/>} />
          <Route path="todos" element={<UserTodos/>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;

// Link звичайний тег |a| , але не перезавантажує сторінку а змінює URL
// NavLink те саме, але для того щоб добавляти стилі (в нього добавляється class=active)
// <Routes 1 -шлях path="/", 2 - що бажаєм рендерити element={}/>
// !!! Link to=...
// !!! Route path=...
