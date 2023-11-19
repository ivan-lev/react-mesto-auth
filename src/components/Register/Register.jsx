import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm.jsx';
import InfoToolTip from '../InfoToolTip/InfoTooltip.jsx';
import * as auth from '../../utils/auth.js';
import styles from './Register.module.css';

import successIcon from '../../images/icon-sucsess.svg';
import errorIcon from '../../images/icon-error.svg';

function Register({ title, name, submitButtonText }) {
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  });
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [showTooltipWindow, setShowTooltipWindow] = useState(false);

  const tooltipTypes = {
    success: {
      icon: successIcon,
      message: 'Вы успешно зарегистрировались!',
      onClose: () => {
        setShowTooltipWindow(false);
        navigate('/sign-in', { replace: true });
        setRegistrationStatus(null);
      }
    },
    error: {
      icon: errorIcon,
      message: 'Что-то пошло не так! Попробуйте ещё раз.',
      onClose: () => {
        setShowTooltipWindow(false);
        setRegistrationStatus(null);
      }
    }
  };

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
    auth
      .register(formValue.password, formValue.email)
      .then(response => {
        if (response.status === 400) {
          setRegistrationStatus(false);
        } else {
          setRegistrationStatus(true);
        }
        setShowTooltipWindow(true);
      })
      .catch(error => {
        console.log('Ошибка регистрации' + error);
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
        <Link className={styles['auth-window__link']} to="/sign-in">
          Войти
        </Link>
      </p>

      {showTooltipWindow && (
        <InfoToolTip
          content={registrationStatus ? tooltipTypes.success : tooltipTypes.error}
          isOpened={showTooltipWindow}
        />
      )}
    </section>
  );
}

export default Register;
