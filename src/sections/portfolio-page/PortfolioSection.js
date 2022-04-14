import classes from './PortfolioSection.module.css';

import PortfolioContainer from '../../components/containers/PortfolioContainer';

function PortfolioSection() {
  return (
    <section className={classes['portfolio-section']}>
      <PortfolioContainer />
    </section>
  );
};

export default PortfolioSection;