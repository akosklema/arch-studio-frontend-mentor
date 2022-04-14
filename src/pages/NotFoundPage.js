import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'

import Heading from '../components/UI/Heading';
import Paragraph from '../components/UI/Paragraph';
import EmptyButton from '../components/UI/buttons/EmptyButton';

import imgSrc from '../images/404-img.jpg';
// import imgSrc from '../images/404-img-2.jpg';
// import imgSrc from '../images/404-img-3.jpg';

import classes from './NotFoundPage.module.css';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      className={classes['page']}
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        scale: '1'
      }}
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
      {/* <img src={imgSrc} alt="" className={classes['image']} /> */}
      <div
        className={classes['image']}
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      <section className={classes['section-container']}>
        <header className={classes['header']}>
          <Heading level="1" large={false}>404</Heading>
          <Heading level="2">Page not found</Heading>
        </header>
        <Paragraph>We can't find the page that you're looking for.</Paragraph>
        <div className={classes['button-container']}>
          <EmptyButton handleClick={() => navigate('/')}>Home Page</EmptyButton>
          <EmptyButton handleClick={() => navigate('/contact')}>Contact Us</EmptyButton>
        </div>
      </section>
    </motion.div>
  );
};

export default NotFoundPage;