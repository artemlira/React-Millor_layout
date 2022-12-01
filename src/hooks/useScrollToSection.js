import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const useScrollToSection = () => {
  const locaion = useLocation();
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (locaion.hash.indexOf('#')) {
      handleClick();
    }
  }, [locaion.hash]);

  return [ref, handleClick];
};

export default useScrollToSection;