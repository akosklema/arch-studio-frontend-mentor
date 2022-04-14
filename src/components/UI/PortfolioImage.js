import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import useResponsiveImage from '../../hooks/useResponsiveImage';

import Heading from './Heading';
import Paragraph from './Paragraph';

import classes from './PortfolioImage.module.css';

function PortfolioImage({ srcObject, alt, title, date, onPortfolio }) {
  const src = useResponsiveImage(srcObject);

  return (
    <motion.div
      className={classes['image-container']}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <img src={src} alt={alt} className={classes['image']} />
      <div className={classes['image-text-container']}>
        <Heading level="3" className={classes['image-title']}>{title}</Heading>
        {
          onPortfolio
          ? <Paragraph className={classes['date']}>{date}</Paragraph>
          : <Link to="/portfolio" className={classes['link']}>View All Projects</Link>
        }
      </div>
    </motion.div>
  );
};

export default PortfolioImage;