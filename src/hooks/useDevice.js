import { useState, useEffect } from 'react';

import useViewportWidth from './useViewportWidth';

function useDevice() {
  const [device, setDevice] = useState();
  
  const viewportWidth = useViewportWidth();

  useEffect(() => {
    if (viewportWidth < 768) {
      setDevice('mobile');
    } else if (viewportWidth < 1440) {
      setDevice('tablet');
    } else {
      setDevice('desktop');
    }
  }, [viewportWidth]);

  return device;
};

export default useDevice;