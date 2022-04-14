import ArrowSVG from '../../SVGs/ArrowSVG';

import classes from './Button.module.css';

function Button({ className, children, handleClick }) {
  return (
    <button className={`${classes['button']} ${className}`} onClick={handleClick}>
      {children}
      <ArrowSVG />
    </button>
  );
};

export default Button;