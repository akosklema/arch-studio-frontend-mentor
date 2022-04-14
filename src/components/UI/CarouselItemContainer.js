import React from 'react';

function CarouselContentContainer({ className, style, children, activeIndex }) {
  return (
    <div className={className} style={style}>
      {children.map(child => {
        return React.cloneElement(child, {
          key: child.props.number,
          isActive: parseInt(child.props.number, 10) === (activeIndex + 1)
        });
      })}
    </div>
  );
};

export default CarouselContentContainer;