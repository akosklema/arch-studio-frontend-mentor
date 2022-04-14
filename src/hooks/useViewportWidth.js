import { useState, useEffect } from 'react';

function useViewportWidth() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const listener = () => setViewportWidth(window.innerWidth);

    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, []);

  return viewportWidth;
};

export default useViewportWidth;