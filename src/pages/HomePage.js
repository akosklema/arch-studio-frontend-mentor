import { motion } from 'framer-motion';

import usePageName from '../hooks/usePageName';
import useScrollToTop from '../hooks/useScrollToTop';

import HeroSection from '../sections/home-page/HeroSection';
import WelcomeSection from '../sections/home-page/WelcomeSection';
import SmallTeamSection from '../sections/home-page/SmallTeamSection';
import FeaturedSection from '../sections/home-page/FeaturedSection';

import classes from './HomePage.module.css';

function HomePage() {
  usePageName('home');
  useScrollToTop();

  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
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
      <HeroSection className={classes['hero']} />
      <WelcomeSection className={classes['welcome']} />
      <SmallTeamSection className={classes['small-team']} />
      <FeaturedSection className={classes['featured']} />
    </motion.div>
);
};

export default HomePage;