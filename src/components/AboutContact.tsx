import { motion } from "motion/react";
import { Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { SiteCopy } from "../content";

interface AboutContactProps {
  copy: SiteCopy["about"];
  contactCopy: SiteCopy["contact"];
}

export const AboutContact = ({ copy, contactCopy }: AboutContactProps) => {
  return (
    <div className="relative">
      <section id="about" className="relative flex min-h-screen items-center overflow-hidden bg-paper py-24 text-ink md:py-40">
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 md:px-6 lg:grid-cols-2 lg:gap-24">
          <div className="order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2px] border border-ink/5 shadow-2xl shadow-ink/10 lg:mx-0"
            >
              <img
                src={copy.portraitImage}
                alt={copy.portraitAlt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute -left-10 top-1/2 hidden -translate-y-1/2 font-mono text-[7px] tracking-[0.4em] uppercase opacity-30 md:block vertical-rl rotate-180">
              {copy.sideLabel}
            </div>
          </div>

          <div className="order-1 space-y-10 lg:order-2 lg:space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[38rem]"
            >
              <span className="mb-6 block font-mono text-[8px] uppercase tracking-[0.34em] text-ink/42 md:mb-8 md:text-[9px] md:tracking-[0.54em]">
                {copy.eyebrow}
              </span>
              <h2 className="mb-6 text-[2.9rem] font-serif italic leading-[0.94] tracking-[-0.05em] md:mb-10 md:text-7xl">
                {copy.heading.before} <span className="not-italic">{copy.heading.normal}</span> {copy.heading.middle}{" "}
                <span className="text-accent-blue/80">{copy.heading.accent}</span> {copy.heading.after}
              </h2>
              <p className="max-w-[32rem] text-base leading-[1.9] text-ink/70 md:text-xl">{copy.body}</p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 border-t border-ink/10 pt-8 font-mono text-[8px] uppercase tracking-[0.22em] text-ink/40 md:grid-cols-2 md:gap-12 md:pt-12 md:text-[9px] md:tracking-[0.28em]">
              <div className="space-y-4">
                <span className="text-ink font-bold tracking-[0.5em] block">{copy.disciplinesLabel}</span>
                <ul className="space-y-2 opacity-80">
                  {copy.disciplines.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <span className="text-ink font-bold tracking-[0.5em] block">{copy.focusLabel}</span>
                <ul className="space-y-2 opacity-80">
                  {copy.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-bg-primary px-5 pt-28 pb-20 text-center md:px-6 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <h2 className="text-pretty mx-auto max-w-[10ch] text-[3rem] font-serif italic tracking-[-0.05em] chromatic-text md:max-w-none md:text-8xl">
            {contactCopy.heading}
          </h2>

          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/connect"
                className="group relative flex overflow-hidden rounded-full border border-white/20 px-8 py-4 transition-[border-color,transform] duration-300 hover:border-white md:px-12 md:py-6"
              >
                <span className="relative z-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] md:text-xs md:tracking-[0.2em]">
                  <Mail size={16} /> {contactCopy.primaryCta}
                </span>
                <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-5" />
              </Link>
            </motion.div>

            <Link
              to="/connect"
              className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.28em] text-text-primary/40 transition-[color,transform] duration-300 hover:translate-x-1 hover:text-text-primary md:text-[10px] md:tracking-[0.36em]"
            >
              {contactCopy.secondaryCta} <ArrowUpRight size={12} />
            </Link>
          </div>
        </motion.div>

        <div className="absolute bottom-8 flex w-full flex-col items-center justify-between gap-3 px-5 text-[7px] font-mono tracking-[0.2em] text-white/20 md:bottom-12 md:flex-row md:gap-4 md:px-6 md:text-[8px] md:tracking-[0.3em]">
          <div>{contactCopy.footer}</div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {contactCopy.socials.map((social) => (
              social.href ? (
                <a key={social.label} href={social.href} className="hover:text-white transition-colors">
                  {social.label}
                </a>
              ) : (
                <span key={social.label}>{social.label}</span>
              )
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
