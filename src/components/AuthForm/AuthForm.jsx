import React from 'react';
import styles from './AuthForm.module.css';

function AuthForm({ title, name, submitButtonText, ...props }) {
  return (
    <>
      <p className={`popup__heading ${styles['auth-form__heading']}`}>{title}</p>
      <form
        id="popup__register-form"
        name={`popup_type_${name}`}
        className={`popup__form ${styles['auth-form__form']}`}
        //onSubmit={onSubmit}
      >
        <fieldset className="popup__fieldset">
          <input
            type="email"
            placeholder="Email"
            id="register-email"
            name="register-email"
            className={`popup__input ${styles['auth-form__input']}`}
            required
          />
          <span className="popup__error avatar-photo-link-error"></span>
        </fieldset>
        <fieldset className="popup__fieldset">
          <input
            type="password"
            placeholder="Пароль"
            id="register-password"
            name="register-password"
            className={`popup__input ${styles['auth-form__input']}`}
            required
          />
          <span className="popup__error avatar-photo-link-error"></span>
        </fieldset>

        <button type="submit" className={`button ${styles['auth-form__button']}`}>
          {submitButtonText}
        </button>
      </form>
      {props.children}
    </>
  );
}

export default AuthForm;
