import { useState, useEffect } from 'react';

import classes from './TextInput.module.css';

function TextInput({ id, type = "text", value, label, handleInput, errorMessage }) {
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    setIsEmpty(value === '' ? true : false);
  }, [value]);

  return (
    <div className={classes['input-container']}>
      <label
        htmlFor={id}
        className={`
          ${classes['input-label']}
          ${type === 'textarea' && classes['textarea-label']}
          ${!isEmpty && classes['input-label--active']}
          ${errorMessage && classes['input-label-error']}`
        }
      >
        {label}
      </label>
      {
        type === 'textarea' ?
        (
          <textarea
            className={`
              ${classes['text-input']}
              ${classes['textarea-input']}
              ${!isEmpty && classes['text-input--active']}
              ${errorMessage && classes['text-input-error']}`
            }
            name={id}
            id={id}
            rows="2"
            value={value}
            onChange={handleInput}
          ></textarea>
        ) : (
          <input
            id={id}
            className={`
              ${classes['text-input']}
              ${!isEmpty && classes['text-input--active']}
              ${errorMessage && classes['text-input-error']}`
            }
            value={value}
            type="text"
            onChange={handleInput}
          />
        )
      }
      {errorMessage && <p className={classes['input-error-message']}>{errorMessage}</p>}
    </div>
  );
};

export default TextInput;