import { useEffect, useState } from "react";

const useVR = () => {
  const [supported, setSupported] = useState(false);
  useEffect(() => {
    const checkAndSetVrSupport = async () => {
      const support = await navigator?.xr?.isSessionSupported("immersive-vr");
      setSupported(!!support);
      //setSupported(false);
    };
    checkAndSetVrSupport();
  }, []);

  return {
    supported,
  };
};

export default useVR;
