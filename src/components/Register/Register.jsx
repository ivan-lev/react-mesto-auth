import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm.jsx';
import * as auth from '../../utils/auth.js';
import styles from './Register.module.css';

function Register({ title, name, submitButtonText }) {
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
    auth.register(formValue.password, formValue.email).then(response => {
      navigate('/sign-in', { replace: true });
    });
  };

  return (
    <section className={styles['auth-window']}>
      <AuthForm
        title={title}
        name={name}
        submitButtonText={submitButtonText}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
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
