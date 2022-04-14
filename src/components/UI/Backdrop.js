import { motion } from 'framer-motion';

import classes from './Backdrop.module.css';

function Backdrop() {
  return (
    <motion.div
      className={classes['backdrop']}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0 }}
    >
    </motion.div>
  );
};

export default Backdrop;