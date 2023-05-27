import { useLayoutEffect, useState } from 'react';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]); 

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.screen.availWidth, window.screen.availHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}

export { useWindowSize }