import { useState, useEffect } from "react";

export function useWindowWidth():number {
    const [windowWidth, setWindowWidth] = useState<number>(0);
    useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowWidth;
  }