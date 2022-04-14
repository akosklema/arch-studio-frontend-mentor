import React from 'react';

function CarouselItem({ children, className, ...other }) {
  return (
    React.cloneElement(children, {
      className,
      isActive: other.isActive
    })
  );
};

export default CarouselItem;