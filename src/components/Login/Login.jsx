import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm.jsx';
import * as auth from '../../utils/auth.js';
import styles from './Login.module.css';

function Login({ title, name, submitButtonText, onLogin }) {
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
    onLogin(formValue.password, formValue.email);
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
