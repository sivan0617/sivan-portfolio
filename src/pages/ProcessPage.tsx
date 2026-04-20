import { AboutContact } from "../components/AboutContact";
import { PageTransitionShell } from "../components/PageTransitionShell";
import type { SiteCopy } from "../content";

interface ProcessPageProps {
  copy: SiteCopy;
}

export const ProcessPage = ({ copy }: ProcessPageProps) => {
  return (
    <PageTransitionShell className="relative">
      <AboutContact copy={copy.about} contactCopy={copy.contact} />
    </PageTransitionShell>
  );
};
