import EmptyButton from './EmptyButton';
import ArrowSVG from '../../SVGs/ArrowSVG';

import classes from './ArrowButton.module.css';

function ArrowButton({ className, handleClick, loading = false, disabled = false }) {
  return (
    <EmptyButton className={`${classes['button']} ${className}`} onClick={handleClick} disabled={disabled}>
      {
        loading 
        ? (<div className={classes['loading']}>
            <div className={classes['full-circle']}></div>
            <div className={classes['moving-circle']}></div>
            <div className={classes['moving-circle']}></div>
            <div className={classes['moving-circle']}></div>
          </div>)
        : <ArrowSVG />
      }
    </EmptyButton>
  );
};

export default ArrowButton;