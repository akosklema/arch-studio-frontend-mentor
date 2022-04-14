import { Link  } from 'react-router-dom';

import Heading from './Heading';
import Paragraph from './Paragraph';
import Button from './buttons/Button';

import classes from './HeroTextContent.module.css';

function HeroTextContent({ className, title, children, isActive }) {
  return (
    <div
      className={`${classes['content-container']} ${className} ${isActive && classes['content-container--active']}`}
    >
      <Heading className={classes['content-title']} level="1">
        {title}
      </Heading>
      <Paragraph className={classes['content']}>
        {children}
      </Paragraph>
      <Link to="portfolio">
        <Button className={classes['button']}>See Our Portfolio</Button>
      </Link>
    </div>
  );
};

export default HeroTextContent;