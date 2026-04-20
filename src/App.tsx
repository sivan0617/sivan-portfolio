import { useEffect, useMemo, useState } from "react";
import { AnimatePresence } from "motion/react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { BootScreen } from "./components/BootScreen";
import { Effects } from "./components/Effects";
import { Navbar } from "./components/Navbar";
import { SiteFooter } from "./components/SiteFooter";
import { ScrollToTop } from "./components/ScrollToTop";
import { getPageTitle, siteContent, type Locale } from "./content";
import { HomePage } from "./pages/HomePage";
import { ProcessPage } from "./pages/ProcessPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { WorkIndexPage } from "./pages/WorkIndexPage";

const BOOT_KEY = "a001.bootSeen";
const LOCALE_KEY = "a001.locale";

const readLocale = (): Locale => {
  if (typeof window === "undefined") {
    return "zh";
  }

  const stored = window.localStorage.getItem(LOCALE_KEY);
  return stored === "en" ? "en" : "zh";
};

const hasSeenBoot = () => {
  if (typeof window === "undefined") {
    return false;
  }

  return window.sessionStorage.getItem(BOOT_KEY) === "1";
};

const hasDirectRoute = () => {
  if (typeof window === "undefined") {
    return false;
  }

  const hashPath = window.location.hash.replace(/^#/, "");
  return hashPath !== "" && hashPath !== "/";
};

export default function App() {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(
    () => hasSeenBoot() || hasDirectRoute() || location.pathname !== "/",
  );
  const [locale, setLocale] = useState<Locale>(readLocale);
  const copy = useMemo(() => siteContent[locale], [locale]);

  useEffect(() => {
    document.documentElement.lang = copy.meta.lang;
    document.title = getPageTitle(copy, location.pathname);
  }, [copy, location.pathname]);

  useEffect(() => {
    window.localStorage.setItem(LOCALE_KEY, locale);
  }, [locale]);

  useEffect(() => {
    if (!isLoaded && (location.pathname !== "/" || hasDirectRoute())) {
      setIsLoaded(true);
    }
  }, [isLoaded, location.pathname]);

  const completeBoot = () => {
    window.sessionStorage.setItem(BOOT_KEY, "1");
    setIsLoaded(true);
  };

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary selection:bg-accent-blue/30">
      <AnimatePresence mode="wait">
        {!isLoaded ? (
          <BootScreen key="boot" copy={copy.boot} onComplete={completeBoot} />
        ) : (
          <div key="site" className="relative min-h-screen">
            <ScrollToTop pathname={location.pathname} />
            <Effects />
            <Navbar copy={copy.navbar} locale={locale} onLocaleChange={setLocale} />
            <AnimatePresence mode="wait" initial={false}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage copy={copy} />} />
                <Route path="/work" element={<WorkIndexPage copy={copy} />} />
                <Route path="/work/:slug" element={<ProjectDetailPage copy={copy} />} />
                <Route path="/process" element={<ProcessPage copy={copy} />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </AnimatePresence>
            <SiteFooter copy={copy.contact} />
            <div className="fixed bottom-10 right-10 z-[100] hidden text-[8px] font-mono tracking-[0.5em] text-white/10 uppercase vertical-rl rotate-180 sm:block">
              {copy.ornament}
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
