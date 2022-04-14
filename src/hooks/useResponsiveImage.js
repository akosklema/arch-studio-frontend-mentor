import useDevice from './useDevice';

function useResponsiveImage(srcObject) {
  const device = useDevice();

  let src = srcObject.mobile;

  if (device === 'tablet') {
    src = srcObject.tablet;
  } else if (device === 'desktop') {
    src = srcObject.desktop;
  }

  return src;
};

export default useResponsiveImage;