import logoWhite from '../../images/icons/logo-white.svg';
import logoDark from '../../images/icons/logo-dark.svg';

function LogoSVG({ className, type = 'dark', onClick }) {
  let src = logoDark;
  if (type === 'white') {
    src = logoWhite;
  }

  return (
    <img className={className} src={src} alt="Arch Logo" onClick={onClick} />
  );
};

export default LogoSVG;