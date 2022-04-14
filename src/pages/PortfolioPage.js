import { motion } from 'framer-motion';

import usePageName from '../hooks/usePageName';
import useScrollToTop from '../hooks/useScrollToTop';

import PortfolioSection from '../sections/portfolio-page/PortfolioSection';

import classes from './PortfolioPage.module.css';

function PortfolioPage() {
  usePageName('portfolio');
  useScrollToTop();

  return (
      <motion.div
        initial={{
          x: '100vw',
          opacity: 0
        }}
        animate={{
          x: '0',
          opacity: 1
        }}
        transition={{
          duration: 0.4
        }}
        exit={{
          opacity: 0,
          x: '-100vw'
        }}
    >
      <PortfolioSection className={classes['portfolio']} />
    </motion.div>
  );
};

export default PortfolioPage;