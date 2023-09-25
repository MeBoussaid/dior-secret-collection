import { useEffect, useState } from "react";
import Image from "next/image";
import { breakpoints } from "../../styles/breakpoints";

const TheKey: React.FC = () => {
  const oldWidth = 1855;
  const oldHeight = 4096;
  const [newHeight, setNewHeight] = useState(50);
  const newWidth = (oldWidth / oldHeight) * newHeight;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= parseInt(breakpoints.iPad)) {
        setNewHeight(44);
      } else {
        setNewHeight(54);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <Image
        src="/theKey.png"
        alt="The Key"
        width={newWidth}
        height={newHeight}
        style={{
          filter: "grayscale(100%) brightness(0%) contrast(100%)",
          WebkitFilter: "grayscale(100%) brightness(0%) contrast(100%)",
        }}
      />
    </div>
  );
};

export default TheKey;
