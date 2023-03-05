import { useEffect, useState } from "react";

export const useIsSP = (): boolean => {
  const [isSP, setIsSP] = useState(false);
  const getIsSP = () => window.matchMedia("(max-width: 768px)").matches;
  useEffect(() => {
    return window.addEventListener("resize", () => setIsSP(getIsSP));
  }, []);
  return isSP;
};