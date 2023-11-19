import React from 'react';
import styles from './InfoTooltip.module.css';

const InfoToolTip = ({ content, isOpened }) => {
  return (
    <div className={`popup ${isOpened ? 'popup_opened' : ''}`}>
      <div className={`popup__container ${styles['infotooltip-container']}`}>
        <img className={styles['infotooltip-icon']} src={content.icon} alt="Иконка" />
        <div className={styles['infotooltip-message']}>{content.message}</div>

        <button
          id="close-photo-window-button"
          type="button"
          className="button popup__close-button"
          onClick={content.onClose}
        ></button>
      </div>
    </div>
  );
};

export default InfoToolTip;
