import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<string>("desktop");

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width <= 810) {
        setDeviceType("mobile");
      } else if (width > 810 && width <= 1199) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    checkScreenSize(); // Check on mount
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return deviceType;
};

export default useDeviceType;
