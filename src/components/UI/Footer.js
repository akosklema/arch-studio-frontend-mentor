import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import LogoSVG from '../SVGs/LogoSVG';
import Button from './buttons/Button';

import classes from './Footer.module.css';

function Footer() {
  const navigate = useNavigate();

  return (
    <motion.footer
      className={classes['footer-container']}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: '100%' }}
    >
      <div className={classes['logo-container']}>
        <LogoSVG className={classes['logo']} type="white" onClick={() => navigate('/')} />
      </div>
      <div className={classes['links']}>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Button className={classes['footer-button']} handleClick={() => navigate('/portfolio')}>See Our Portfolio</Button>
    </motion.footer>
  );
};

export default Footer;