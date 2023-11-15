import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header({ loggedIn }) {
  return (
    <header className="header">
      <a href="#" className="header__logo"></a>
      <Routes>
        <Route
          path="/"
          element={
            <Link className={styles['header-link']} to="/">
              Выйти
            </Link>
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
