import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

import classes from './Overlay.module.css';

function Overlay({ children }) {
  return (
    ReactDOM.createPortal(
      <motion.div
        className={classes['overlay']}
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 0.7
        }}
        transition={{
          duration: 0.2
        }}
        exit={{
          opacity: 0
        }}
      >
        {children}
      </motion.div>,
      document.getElementById('overlay-root')
    )
  );
};

export default Overlay;