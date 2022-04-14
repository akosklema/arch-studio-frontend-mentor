import { motion } from 'framer-motion';

import usePageName from '../hooks/usePageName';
import useScrollToTop from '../hooks/useScrollToTop';

import YourProjectSection from '../sections/contact-page/YourProjectSection';
import DetailsSection from '../sections/contact-page/DetailsSection';
import ConnectSection from '../sections/contact-page/ConnectSection';

import classes from './ContactPage.module.css';

function ContactPage() {
  usePageName('contact');
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
      <YourProjectSection className={classes['your-project']} />
      <DetailsSection className={classes['details']} />
      <ConnectSection className={classes['connect']} />
    </motion.div>
  );
};

export default ContactPage;