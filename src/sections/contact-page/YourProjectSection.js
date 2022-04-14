import ImageWithTextLayout from '../../layouts/ImageWithTextLayout';

import mobileContactHero from '../../images/contact/mobile/image-hero.jpg';
import tabletContactHero from '../../images/contact/tablet/image-hero.jpg';
import desktopContactHero from '../../images/contact/desktop/image-hero.jpg';

function YourProjectSection({ className }) {
  return (
    <section className={className}>
      <ImageWithTextLayout
        srcObject={{
          mobile: mobileContactHero,
          tablet: tabletContactHero,
          desktop: desktopContactHero
        }}
        title="Tell us about your project"
        largeTitle="Contact"
        alt="Image of a phone"
      >
        We’d love to hear more about your project. Please, leave a message below or give us a call.
        We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!
      </ImageWithTextLayout>
    </section>
  );
};

export default YourProjectSection;