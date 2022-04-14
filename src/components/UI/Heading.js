import classes from './Heading.module.css';

function Heading({ children, level, large = false, className }) {
  const HeadingTag = 'h' + level;

  let headingClass;

  if (large) {
    headingClass = classes['heading-large'];
  } else {
    headingClass = classes[`heading-${level}`];
  }

  return (
    <HeadingTag className={`${headingClass} ${className}`}>
      {children}
    </HeadingTag>
  );
};

export default Heading;