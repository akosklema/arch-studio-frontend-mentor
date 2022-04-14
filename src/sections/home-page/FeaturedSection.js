import { useNavigate } from 'react-router-dom';

import Heading from '../../components/UI/Heading';
import Button from '../../components/UI/buttons/Button';
import PortfolioImage from '../../components/UI/PortfolioImage';

import mobileDelSol from '../../images/portfolio/mobile/image-del-sol.jpg';
import tabletDelSol from '../../images/portfolio/tablet/image-del-sol.jpg';
import desktopDelSol from '../../images/portfolio/desktop/image-del-sol.jpg';

import mobile228 from '../../images/portfolio/mobile/image-228b.jpg';
import tablet228 from '../../images/portfolio/tablet/image-228b.jpg';
import desktop228 from '../../images/portfolio/desktop/image-228b.jpg';

import mobilePrototype from '../../images/portfolio/mobile/image-prototype.jpg';
import tabletPrototype from '../../images/portfolio/tablet/image-prototype.jpg';
import desktopPrototype from '../../images/portfolio/desktop/image-prototype.jpg';

import classes from './FeaturedSection.module.css';

function FeaturedSection({ className }) {
  const navigate = useNavigate();

  return (
    <section className={`${classes['featured-section']} ${className}`}>
      <div className ={classes['images-container']}>
        <div className={classes['image']}>
          <PortfolioImage
            srcObject={{
              mobile: mobileDelSol,
              tablet: tabletDelSol,
              desktop: desktopDelSol
            }}
            title="Project Del Sol"
          />
          <span className={classes['image-number']}>1</span>
        </div>
        <div className={classes['image']}>
          <PortfolioImage
            srcObject={{
              mobile: mobile228,
              tablet: tablet228,
              desktop: desktop228
            }}
            title="Project Del Sol"
          />
          <span className={classes['image-number']}>2</span>
        </div>
        <div className={classes['image']}>
          <PortfolioImage
            srcObject={{
              mobile: mobilePrototype,
              tablet: tabletPrototype,
              desktop: desktopPrototype
            }}
            title="Project Del Sol"
          />
          <span className={classes['image-number']}>3</span>
        </div>
      </div>
      <Heading level="2" className={classes['featured-title']}>Featured</Heading>
        <Button className={classes['button']} handleClick={() => navigate('/portfolio')}>See All</Button>
    </section>
  );
};

export default FeaturedSection;