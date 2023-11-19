import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm.jsx';
import * as auth from '../../utils/auth.js';
import styles from './Login.module.css';

function Login({ title, name, submitButtonText, setUserEmail, setLoggedIn }) {
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!formValue.email || !formValue.password) {
      return;
    }
    auth
      .authorize(formValue.password, formValue.email)
      .then(data => {
        localStorage.setItem('token', data.token);
        setUserEmail(formValue.email);
        setLoggedIn(true);
        setFormValue({ email: '', password: '' });
        navigate('/', { replace: true });
      })
      .catch(error => {
        console.log(error);
        alert('Неверные логин или пароль');
      });
  };

  return (
    <section className={styles['login-window']}>
      <AuthForm
        title={title}
        name={name}
        submitButtonText={submitButtonText}
        onChange={handleChange}
        onSubmit={handleSubmit}
        autocompleteParams={{ email: 'email', password: 'current-password' }}
      />
    </section>
  );
}

export default Login;
