import { useState, useRef } from 'react'

import Heading from '../../components/UI/Heading';
import ArrowSVG from '../../components/SVGs/ArrowSVG';
import Map from '../../components/UI/Map';

import classes from './DetailsSection.module.css';

function DetailsSection({ className }) {
  const [office, setOffice] = useState();
  const mapRef = useRef();

  const scrollToMap = () => {
    mapRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section className={`${classes['details-section']} ${className}`}>
      <div className={`${classes['details-container']} ${className}`}>
        <div className={classes['title-container']}>
          <div className={classes['line']}></div>
          <Heading className={classes['title']} level="2">
            Contact <br className={classes['title-line-break']} />Details
          </Heading>
        </div>
        <div className={classes['detail-text-container']}>
          <div>
            <p className={classes['office']}>Main Office</p>
            <address className={classes['details']}>
              <p>Mail: <a href="mailto:archone@mail.com">archone@mail.com</a></p>
              <p>Address: 1892 Chenoweth Drive TN</p>
              <p>Phone: <a href="tel:123-456-3451">123-456-3451</a></p>
            </address>
          </div>
          <div>
            <button
              className={classes['view-on-map-btn']}
              onClick={() => {
                scrollToMap();
                setOffice('main');
              }}
            >
              <span>View on Map</span>
              <ArrowSVG className={classes['arrow-icon']} />
            </button>
          </div>
        </div>

        <div className={classes['detail-text-container']}>
          <div>
            <p className={classes['office']}>Office II</p>
            <address className={classes['details']}>
              <p>Mail: <a href="mailto:archtwo@mail.com">archtwo@mail.com</a></p>
              <p>Address: 3399 Wines Lane TX</p>
              <p>Phone: <a href="tel:832-123-4321">832-123-4321</a></p>
            </address>
          </div>
          <div>
            <button
              className={classes['view-on-map-btn']}
              onClick={() => {
                scrollToMap();
                setOffice('secondary');
              }}
            >
              <span>View on Map</span>
              <ArrowSVG className={classes['arrow-icon']} />
            </button>
          </div>
        </div>
      </div>
      <div ref={mapRef}>
        <Map className={classes['map']} office={office} />
      </div>
    </section>
  );
};

export default DetailsSection;