import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

function Header({ userEmail, setUserEmail }) {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem('token');
    navigate('/sign-in', { replace: true });
    setUserEmail('');
  };

  return (
    <header className="header">
      <a href="#" className="header__logo"></a>
      <Routes>
        <Route
          path="/"
          element={
            <span className={styles['header-content']}>
              <span className={styles['header-email']}>{userEmail}</span>
              <span className={styles['header-link']} onClick={signOut}>
                Выйти
              </span>
            </span>
          }
        ></Route>
        <Route
          path="/sign-up"
          element={
            <Link className={styles['header-link']} to="/sign-in">
              Войти
            </Link>
          }
        ></Route>
        <Route
          path="/sign-in"
          element={
            <Link className={styles['header-link']} to="/sign-up">
              Зарегистрироваться
            </Link>
          }
        ></Route>
      </Routes>
    </header>
  );
}

export default Header;
