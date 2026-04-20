import type { SiteCopy } from "../content";

interface SiteFooterProps {
  copy: SiteCopy["contact"];
}

export const SiteFooter = ({ copy }: SiteFooterProps) => {
  return (
    <footer className="hidden">
      {copy.footer}
    </footer>
  );
};
