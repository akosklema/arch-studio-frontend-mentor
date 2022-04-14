import ImageWithTextLayout from '../../layouts/ImageWithTextLayout';

import mobileAboutUsHero from '../../images/about/mobile/image-hero.jpg'
import tabletAboutUsHero from '../../images/about/tablet/image-hero.jpg'
import desktopAboutUsHero from '../../images/about/desktop/image-hero.jpg'

function YourTeamSection({ className }) {
  return (
    <section className={className}>
      <ImageWithTextLayout
        srcObject={{
          mobile: mobileAboutUsHero,
          tablet: tabletAboutUsHero,
          desktop: desktopAboutUsHero
        }}
        title="Your team of professionals"
        largeTitle="About"
        alt="Blueprint on a laptop"
      >
        Our small team of world-class professionals will work with you every step of the way.
        Strong relationships are at the core of everything we do. This extends to the relationship
        our projects have with their surroundings.
      </ImageWithTextLayout>
    </section>
  );
};

export default YourTeamSection;