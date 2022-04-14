import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

function Modal({ children, className }) {
  return (
    ReactDOM.createPortal(
      <div className={`${classes['modal']} ${className}`}>
        {children}
      </div>,
      document.getElementById('modal-root')
    )
  );
};

export default Modal;