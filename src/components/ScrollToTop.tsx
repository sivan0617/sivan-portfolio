import { useEffect } from "react";

interface ScrollToTopProps {
  pathname: string;
}

export const ScrollToTop = ({ pathname }: ScrollToTopProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
