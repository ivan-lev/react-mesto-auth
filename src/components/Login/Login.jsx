import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm.jsx';
import * as auth from '../../utils/auth.js';
import styles from './Login.module.css';

function Login({ title, name, submitButtonText, handleLogin }) {
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
        //console.log(data);
        if (data.token) {
          handleLogin(formValue.email);
          setFormValue({ email: '', password: '' });
          //handleLogin();
          navigate('/', { replace: true });
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <section className={styles['login-window']}>
      <AuthForm
        title={title}
        name={name}
        submitButtonText={submitButtonText}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </section>
  );
}

export default Login;
