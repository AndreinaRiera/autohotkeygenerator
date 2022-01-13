import { useEffect } from 'react';

const useScript = (url, attrs = {}) => {
  useEffect(() => {
    const script = document.createElement('script');
      script.src = url;
      script.async = true;

    for (const key in attrs) {
      script.setAttribute(key, attrs[key]);
    }

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url, attrs]);
};

export default useScript;