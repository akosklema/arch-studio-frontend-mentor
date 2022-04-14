import linkedInIconDark from '../../images/icons/icon-linkedin-dark.svg';
import linkedInIconWhite from '../../images/icons/icon-linkedin-white.svg';

function LinkedInSVG({ className, color }) {
  return (
    color === 'dark' ? (
    <img className={className} src={linkedInIconDark} alt="LinkedIn Icon" />
    ) : (
      <img className={className} src={linkedInIconWhite} alt="LinkedIn Icon" />
    )
  );
};

export default LinkedInSVG;