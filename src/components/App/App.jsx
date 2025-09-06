import { NavLink, Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import AppHeader from './AppHeader/AppHeader.jsx';
import HomePage from '../../pages/HomePage.jsx';
import UsersPage from '../../pages/UsersPage.jsx';
import NotFoundPage from '../../pages/NotFoundPage.jsx';
import UserDetailsPage from '../../pages/UserDetailsPage.jsx';

function App() {
  return (
    <div className={css.container}>
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/dashboard" element={<UsersPage/>} />
        <Route path='/dashboard/:userId' element={<UserDetailsPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

// Link звичайний тег |a| , але не перезавантажує сторінку а змінює URL
// NavLink те саме, але для того щоб добавляти стилі (в нього добавляється class=active)
// <Routes 1 -шлях path="/", 2 - що бажаєм рендерити element={}/>
