import Heading from '../../components/UI/Heading';
import Paragraph from '../../components/UI/Paragraph';

import heritageImage from '../../images/about/desktop/image-heritage.jpg'

import classes from './OurHeritage.module.css';

function OurHeritageSection({ className }) {
  return (
    <section className={`${classes['heritage-section']} ${className}`}>
      <div className={classes['left-col']}>
        <div className={classes['line']}></div>
        <Heading level="2" className={classes['title']}>Our<br />Heritage</Heading>
        <div className={classes['text-container']}>
          <Paragraph>
            Founded in 2007, we started as a trio of architects. Our complimentary skills and
            relentless attention to detail turned Arch into one of the most sought after boutique
            firms in the country.
          </Paragraph>
          <Paragraph>
            Speciliazing in Urban Design allowed us to focus on creating exceptional
            structures that live in harmony with their surroundings.
            We consider every detail from every surrounding element to inform our designs. 
          </Paragraph>
          <Paragraph>
            Our small team of world-class professionals provides input on every project.
          </Paragraph>
        </div>
      </div>
      <div className={classes['rigth-col']}>
        <img src={heritageImage} alt="A building with windows" />
      </div>
    </section>
  );
};

export default OurHeritageSection;