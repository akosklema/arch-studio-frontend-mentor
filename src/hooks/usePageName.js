import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

function usePageName(pageName) {
  const setPageName = useOutletContext();

  useEffect(() => {
    setPageName(pageName)
  }, [pageName, setPageName]);
};

export default usePageName;