//import React, { useState } from 'react';
import styles from './InfoTooltip.module.css';

const InfoToolTip = ({ icon, message, isOpened, onClose }) => {
  //const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={`popup ${isOpened ? 'popup_opened' : ''}`}>
      {/* <div className={`popup popup_opened`}> */}
      <div className={`popup__container ${styles['infotooltip-container']}`}>
        <img className={styles['infotooltip-icon']} src={icon} alt="Иконка" />
        <div className={styles['infotooltip-message']}>{message}</div>

        <button
          id="close-photo-window-button"
          type="button"
          className="button popup__close-button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};

export default InfoToolTip;
