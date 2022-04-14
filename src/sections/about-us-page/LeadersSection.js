import Heading from '../../components/UI/Heading';
import LeaderCard from '../../components/UI/LeaderCard';

import imageJake from '../../images/about/desktop/avatar-jake.jpg';
import imageThompson from '../../images/about/desktop/avatar-thompson.jpg';
import imageJackson from '../../images/about/desktop/avatar-jackson.jpg';
import imageMaria from '../../images/about/desktop/avatar-maria.jpg';

import classes from './LeadersSection.module.css';

function LeadersSection({ className }) {
  return (
    <section className={`${classes['leaders-section']} ${className}`}>
      <Heading level="2" className={classes['leaders-title']}>The<br />Leaders</Heading>
      <div className={classes['leaders-grid']}>
        <LeaderCard image={imageJake} name='Jake Richards' position="Chief Architect" />
        <LeaderCard image={imageThompson} name='Thompson Smith' position="Head of Finance" />
        <LeaderCard image={imageJackson} name='Jackson Rourke' position="Lead Designer" />
        <LeaderCard image={imageMaria} name='Maria Simpson' position="Senior Architect" />
      </div>
    </section>
  );
};

export default LeadersSection;