import classes from './Paragraph.module.css';

function Paragraph({ children, className }) {
  return (
    <p className={`${classes['paragraph']} ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;