import { Fragment } from 'react';

import useDevice from '../../hooks/useDevice';

import LinkedInSVG from '../SVGs/LinkedInSVG';
import TwitterSVG from '../SVGs/TwitterSVG';

import classes from './LeaderCard.module.css';

function LeaderCard({ image, name, position }) {
  const device = useDevice();

  return (
    <div className={classes['leader-card']}>
      <div className={classes['image-container']}>
        <img className={classes['leader-image']} src={image} alt={name} />
      </div>
      <p className={classes['leader-name']}>{name}</p>
      <p className={classes['leader-position']}>{position}</p>
      <div className={classes['icon-container']}>
        {
          device === 'desktop' ? (
            <Fragment>
              <LinkedInSVG className={classes['icon']} color="white" />
              <TwitterSVG className={classes['icon']} color="white" />
            </Fragment>
          ) : (
            <Fragment>
              <LinkedInSVG className={classes['icon']} color="dark" />
              <TwitterSVG className={classes['icon']} color="dark" />
            </Fragment>
          )
        }
      </div>
    </div>
  );
};

export default LeaderCard;