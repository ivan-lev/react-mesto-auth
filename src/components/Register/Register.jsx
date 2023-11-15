import React from 'react';
import AuthForm from '../AuthForm/AuthForm.jsx';
import styles from './Register.module.css';

function Register({ title, name, submitButtonText }) {
  return (
    <section className={styles['auth-window']}>
      <AuthForm title={title} name={name} submitButtonText={submitButtonText} />
      <p className={styles['auth-window__text']}>
        Уже зарегистрированы?&nbsp;
        <a className={styles['auth-window__link']} href="/sign-in">
          Войти
        </a>
      </p>
    </section>
  );
}

export default Register;
