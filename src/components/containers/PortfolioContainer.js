import PortfolioImage from '../UI/PortfolioImage';

import portfolio from '../../portfolio';

function PortfolioContainer() {
  return (
    portfolio.map(project => {
      return (
        <PortfolioImage
          key={project.project}
          onPortfolio
          title={project.project}
          alt={project.project}
          date={project.date}
          srcObject={project.srcObject}
        />
      )
    })
  );
};

export default PortfolioContainer;