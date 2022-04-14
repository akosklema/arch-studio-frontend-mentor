import useResponsiveImage from '../../hooks/useResponsiveImage';

function HeroImage({ srcObject, alt, className }) {
  const src = useResponsiveImage(srcObject)

  return (
    <img className={className} src={src} alt={alt} />
  );
};

export default HeroImage;