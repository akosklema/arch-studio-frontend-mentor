import CarouselItem from './CarouselItem';
import CarouselItemContainer from './CarouselItemContainer';
import HeroImage from './HeroImage';
import HeroTextContent from './HeroTextContent';

import classes from './HeroCarousel.module.css';

import desktopImageParamour from '../../images/home/desktop/image-hero-paramour.jpg';
import desktopImageSeraph from '../../images/home/desktop/image-hero-seraph.jpg';
import desktopImageFederal from '../../images/home/desktop/image-hero-federal.jpg';
import desktopImageTrinity from '../../images/home/desktop/image-hero-trinity.jpg';

import tabletImageParamour from '../../images/home/tablet/image-hero-paramour.jpg';
import tabletImageSeraph from '../../images/home/tablet/image-hero-seraph.jpg';
import tabletImageFederal from '../../images/home/tablet/image-hero-federal.jpg';
import tabletImageTrinity from '../../images/home/tablet/image-hero-trinity.jpg';

import mobileImageParamour from '../../images/home/mobile/image-hero-paramour.jpg';
import mobileImageSeraph from '../../images/home/mobile/image-hero-seraph.jpg';
import mobileImageFederal from '../../images/home/mobile/image-hero-federal.jpg';
import mobileImageTrinity from '../../images/home/mobile/image-hero-trinity.jpg';

function HeroCarousel({ activeIndex }) {
  return (
    <div className={classes['carousel']}>
      <CarouselItemContainer
        className={classes['carousel-image-container']}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        <CarouselItem className={classes['carousel-image-item']} number="01">
          <HeroImage
            srcObject ={{
              mobile: mobileImageParamour,
              tablet: tabletImageParamour,
              desktop: desktopImageParamour
            }}
            alt="Image of Project Paramour"
          />
        </CarouselItem>
        <CarouselItem className={classes['carousel-image-item']} number="02">
          <HeroImage
            srcObject ={{
              mobile: mobileImageSeraph,
              tablet: tabletImageSeraph,
              desktop: desktopImageSeraph
            }}
            alt="Image of Project Seraph Station"
          />
        </CarouselItem>
        <CarouselItem className={classes['carousel-image-item']} number="03">
          <HeroImage
            srcObject ={{
              mobile: mobileImageFederal,
              tablet: tabletImageFederal,
              desktop: desktopImageFederal
            }}
            alt="Image of Project Federal II Tower"
          />
        </CarouselItem>
        <CarouselItem className={classes['carousel-image-item']} number="04">
          <HeroImage
            srcObject ={{
              mobile: mobileImageTrinity,
              tablet: tabletImageTrinity,
              desktop: desktopImageTrinity
            }}
            alt="Image of Project Trinity Bank Tower"
          />
        </CarouselItem>
      </CarouselItemContainer>

      <CarouselItemContainer
        className={classes['carousel-text-container']}
        activeIndex={activeIndex}
      >
        <CarouselItem className={classes['carousel-text-item']} number="01">
          <HeroTextContent title="Project Paramout">
            Project made for an art museum near Southwest London.
            Project Paramour is a statement of bold, modern architecture.
          </HeroTextContent>
        </CarouselItem>
        <CarouselItem className={classes['carousel-text-item']} number="02">
          <HeroTextContent title="Seraph Station">
            The Seraph Station project challenged us to design a unique station
            that would transport people through time. The result is a fresh and futuristic model
            inspired by space stations.
          </HeroTextContent>
        </CarouselItem>
        <CarouselItem className={classes['carousel-text-item']} number="03">
          <HeroTextContent title="Federal II Tower">
            A sequel theme project for a tower originally built in the 1800s.
            We achieved this with a striking look of brutal minimalism with modern touches.
          </HeroTextContent>
        </CarouselItem>
        <CarouselItem className={classes['carousel-text-item']} number="04">
          <HeroTextContent title="Trinity Bank Tower">
            Trinity Bank challenged us to make a concept for a 84 story building located in
            the middle of a city with a high earthquake frequency. For this project we used curves
            to blend design and stability to meet our objectives.
          </HeroTextContent>
        </CarouselItem>
      </CarouselItemContainer>
    </div>
  );
};

export default HeroCarousel;