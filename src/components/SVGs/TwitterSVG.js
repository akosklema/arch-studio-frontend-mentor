import twitterIconBlack from '../../images/icons/icon-twitter-dark.svg';
import twitterIconWhite from '../../images/icons/icon-twitter-white.svg';

function TwitterSVG({ className, color }) {
  return (
    color === 'dark' ? (
    <img className={className} src={twitterIconBlack} alt="LinkedIn Icon" />
    ) : (
      <img className={className} src={twitterIconWhite} alt="LinkedIn Icon" />
    )
  );
};

export default TwitterSVG;