import EmptyButton from './EmptyButton';

import classes from './NumberedButton.module.css';

function NumberedButton({ children, className, handleClick, isActive }) {
  return (
    <EmptyButton
      className={`${classes['numbered-button']} ${isActive && classes['numbered-button--active']} ${className}`}
      handleClick={handleClick}
    >
      {children}
    </EmptyButton>
  );
};

export default NumberedButton;