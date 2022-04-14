import classes from './EmptyButton.module.css';

function EmptyButton({ children, className, handleClick, disabled = false }) {
  return (
    <button className={`${classes['empty-button']} ${className}`} onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default EmptyButton;