import { useState, useEffect } from 'react';

import NumberedButton from './buttons/NumberedButton';

import classes from './CarouselButtonGroup.module.css';

function CarouselButtonGroup({ className, count, setActiveIndex }) {
  const [activeButton, setActiveButton] = useState('01');

  useEffect(() => {
    setActiveIndex(parseInt(activeButton, 10) - 1);
  }, [activeButton, setActiveIndex]);

  const numberList = [];

  for (let i = 1; i <= count; i++) {
    if (i < 10) {
      const numberString = '0' + i;
      numberList.push(numberString);
    } else {
      numberList.push(i.toString());
    }
  }

  return (
    <div className={`${classes['numbered-button-group']} ${className}`}>
      {
        numberList.map(numberString => {
          return (
            <NumberedButton
              key={numberString}
              isActive={numberString === activeButton}
              handleClick={() => setActiveButton(numberString)}
            >
              {numberString}
            </NumberedButton>
            )
        })
      }
    </div>
  );
};

export default CarouselButtonGroup;