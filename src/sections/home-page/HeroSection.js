import { useState } from 'react';

import HeroCarousel from '../../components/UI/HeroCarousel';
import CarouselButtonGroup from '../../components/UI/CarouselButtonGroup';

import classes from './HeroSection.module.css';

function HeroSection({ className }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={`${classes['hero-section']} ${className}`}>
      <div className={classes['hero-image-container']}>
        <HeroCarousel activeIndex={activeIndex} />
      </div>
      <CarouselButtonGroup
        className={classes['carousel-buttons']}
        count="4"
        setActiveIndex={setActiveIndex}
      />
    </section>
  );
};

export default HeroSection;