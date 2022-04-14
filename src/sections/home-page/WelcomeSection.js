import Heading from '../../components/UI/Heading';
import Paragraph from '../../components/UI/Paragraph';

import imageWelcome from '../../images/home/desktop/image-welcome.jpg';

import classes from './WelcomeSection.module.css';

function WelcomeSection({ className }) {
  return (
    <section className={`${classes['welcome-section']} ${className}`}>
      <Heading level="1" className={classes['large-title']} large={true}>Welcome</Heading>
      <div className={classes['dekstop-columns']}>
        <div>
          <Heading level="2" className={classes['welcome-title']}>Welcome to<br />Arch Studio</Heading>
          <div className={classes['paragaphs-container']}>
            <Paragraph className={classes['welcome-text']}>
              We have a unique network and skillset to help bring your projects to life.
              Our small team of highly skilled individuals combined with our large network
              put us in a strong position to deliver exceptional results.
            </Paragraph>
            <Paragraph className={classes['welcome-text']}>
              Over the past 10 years, we have worked on all kinds of projects.
              From stations to high-rise buildings, we create spaces that inspire and delight.
            </Paragraph>
            <Paragraph className={classes['welcome-text']}>
              We work closely with our clients so that we understand the intricacies of each project.
              This allows us to work in harmony the surrounding area to create truly stunning projects
              that will stand the test of time.
            </Paragraph>
          </div>
        </div>
        <img className={classes['welcome-image']} src={imageWelcome} alt="An architectrual structure" />
      </div>
    </section>
  );
};

export default WelcomeSection;