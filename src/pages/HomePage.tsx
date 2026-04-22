import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AboutContact } from "../components/AboutContact";
import { ArchiveTransition } from "../components/ArchiveTransition";
import { Hero } from "../components/Hero";
import { PageTransitionShell } from "../components/PageTransitionShell";
import { WorkSection } from "../components/WorkSection";
import type { SiteCopy } from "../content";

interface HomePageProps {
  copy: SiteCopy;
}

export const HomePage = ({ copy }: HomePageProps) => {
  const location = useLocation();

  useEffect(() => {
    const section = new URLSearchParams(location.search).get("section");
    if (!section) {
      return;
    }

    requestAnimationFrame(() => {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [location.search]);

  return (
    <PageTransitionShell className="relative">
      <section id="home">
        <Hero copy={copy.hero} />
      </section>
      <section>
        <ArchiveTransition projects={copy.work.projects} />
      </section>
      <section>
        <WorkSection copy={copy.work} />
      </section>
      <section>
        <AboutContact copy={copy.about} contactCopy={copy.contact} />
      </section>
    </PageTransitionShell>
  );
};
