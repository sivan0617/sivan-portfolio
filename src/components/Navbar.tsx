import { motion } from "motion/react";
import { useLocation, useNavigate } from "react-router-dom";
import type { Locale, SiteCopy } from "../content";

interface NavbarProps {
  copy: SiteCopy["navbar"];
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export const Navbar = ({ copy, locale, onLocaleChange }: NavbarProps) => {
  const locales: Locale[] = ["zh", "en"];
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleNavigate = (href: string) => {
    if (href === "/") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      navigate("/");
      return;
    }

    if (href.startsWith("/#")) {
      const sectionId = href.slice(2);
      if (location.pathname === "/") {
        scrollToSection(sectionId);
      } else {
        navigate(`/?section=${sectionId}`);
      }
      return;
    }

    navigate(href);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 1.2 }}
      className="fixed top-0 left-0 w-full z-50 mix-blend-difference"
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <button
          type="button"
          onClick={() => handleNavigate("/")}
          className="font-serif text-lg tracking-tighter hover:opacity-100 transition-opacity"
        >
          {copy.brand}
        </button>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex items-center">
            {copy.items.map((item, index) => (
              <div key={item.label} className="flex items-center">
                {index > 0 && <div className="w-[1px] h-3 bg-white/10 mx-6 rotate-[20deg]" />}
                <button
                  type="button"
                  onClick={() => handleNavigate(item.href)}
                  className="group relative text-[9px] uppercase tracking-[0.4em] font-mono py-1 block"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right ease-[0.76,0,0.24,1]" />
                </button>
              </div>
            ))}
          </div>

          <div className="flex items-center rounded-full border border-white/15 bg-white/5 p-1 backdrop-blur-sm">
            {locales.map((code) => {
              const isActive = locale === code;

              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => onLocaleChange(code)}
                  className={`rounded-full px-3 py-1.5 font-mono text-[9px] tracking-[0.35em] transition-colors duration-300 ${
                    isActive ? "bg-white text-black" : "text-white/45 hover:text-white"
                  }`}
                >
                  {copy.locales[code]}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[calc(100%-4rem)] h-[1px] bg-white/[0.05]" />
    </motion.nav>
  );
};
