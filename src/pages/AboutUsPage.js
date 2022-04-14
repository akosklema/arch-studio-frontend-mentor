import { motion } from 'framer-motion';

import usePageName from '../hooks/usePageName';
import useScrollToTop from '../hooks/useScrollToTop';

import YourTeamSection from '../sections/about-us-page/YourTeamSection';
import OurHeritageSection from '../sections/about-us-page/OurHeritageSection';
import LeadersSection from '../sections/about-us-page/LeadersSection';

import classes from './AboutUsPage.module.css';

function AboutUsPage() {
  usePageName('about us');
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
      <YourTeamSection className={classes['hero']} />
      <OurHeritageSection className={classes['heritage']} /> 
      <LeadersSection className={classes['leaders']} /> 
    </motion.div>
  );
};

export default AboutUsPage;