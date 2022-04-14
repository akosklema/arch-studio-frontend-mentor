import { Link } from 'react-router-dom';

import useDevice from '../../hooks/useDevice';

import Heading from '../../components/UI/Heading';
import Button from '../../components/UI/buttons/Button';

import mobileImageSmallTeam from '../../images/home/mobile/image-small-team.jpg';
import tabletImageSmallTeam from '../../images/home/tablet/image-small-team.jpg';
import desktopImageSmallTeam from '../../images/home/desktop/image-small-team.jpg';

import classes from './SmallTeamSection.module.css';

function SmallTeamSection({ className }) {
  const device = useDevice();

  let src = mobileImageSmallTeam;

  if (device === 'tablet') {
    src = tabletImageSmallTeam;
  } else if (device === 'desktop') {
    src = desktopImageSmallTeam;
  }

  return (
    <section className={`${classes['small-team-section']} ${className}`}>
      <img src={src} alt="A building" />
      <div className={classes['small-team-text']}>
        <Heading level="2" className={classes['small-team-title']}>Small team,<br /> bid ideas</Heading>
        <Link to="/about">
          <Button>About Us</Button>
        </Link>
      </div>
    </section>
  );
};

export default SmallTeamSection;