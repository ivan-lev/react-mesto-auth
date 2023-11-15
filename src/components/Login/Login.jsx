import React from 'react';
import AuthForm from '../AuthForm/AuthForm.jsx';
import styles from './Login.module.css';

function Login({ title, name, submitButtonText }) {
  return (
    <section className={styles['login-window']}>
      <AuthForm title={title} name={name} submitButtonText={submitButtonText} />
    </section>
  );
}

export default Login;
