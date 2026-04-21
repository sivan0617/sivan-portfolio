import { motion } from "motion/react";
import { Mail, ArrowUpRight } from "lucide-react";
import type { SiteCopy } from "../content";

interface AboutContactProps {
  copy: SiteCopy["about"];
  contactCopy: SiteCopy["contact"];
}

export const AboutContact = ({ copy, contactCopy }: AboutContactProps) => {
  return (
    <div className="relative">
      <section id="about" className="relative min-h-screen flex items-center bg-paper py-40 overflow-hidden text-ink">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
              className="aspect-[4/5] w-full max-w-sm rounded-[2px] overflow-hidden border border-ink/5 mx-auto lg:mx-0 shadow-2xl shadow-ink/10"
            >
              <img
                src={copy.portraitImage}
                alt={copy.portraitAlt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 font-mono text-[7px] tracking-[0.4em] uppercase vertical-rl rotate-180 opacity-30">
              {copy.sideLabel}
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            >
              <span className="font-mono text-[9px] tracking-[0.6em] text-ink/40 mb-10 block uppercase">
                {copy.eyebrow}
              </span>
              <h2 className="text-5xl md:text-7xl font-serif italic mb-12 leading-[0.95] tracking-tighter">
                {copy.heading.before} <span className="not-italic">{copy.heading.normal}</span> {copy.heading.middle}{" "}
                <span className="text-accent-blue/80">{copy.heading.accent}</span> {copy.heading.after}
              </h2>
              <p className="text-xl text-ink/70 leading-relaxed font-light font-sans max-w-xl">{copy.body}</p>
            </motion.div>

            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-ink/10 font-mono text-[9px] uppercase tracking-[0.3em] text-ink/40">
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

      <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center bg-bg-primary pt-40 pb-20 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="space-y-12"
        >
          <h2 className="text-5xl md:text-8xl font-serif italic tracking-tighter chromatic-text">
            {contactCopy.heading}
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {contactCopy.email ? (
              <>
                <motion.a
                  href={`mailto:${contactCopy.email}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-12 py-6 rounded-full border border-white/20 overflow-hidden hover:border-white transition-colors"
                >
                  <span className="relative z-10 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em]">
                    <Mail size={16} /> {contactCopy.primaryCta}
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity" />
                </motion.a>

                <a
                  href={`mailto:${contactCopy.email}`}
                  className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.4em] text-text-primary/40 hover:text-text-primary transition-colors"
                >
                  {contactCopy.secondaryCta} <ArrowUpRight size={12} />
                </a>
              </>
            ) : (
              <>
                <div className="group relative px-12 py-6 rounded-full border border-white/10 text-white/35">
                  <span className="relative z-10 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em]">
                    <Mail size={16} /> {contactCopy.primaryCta}
                  </span>
                </div>

                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.4em] text-text-primary/30">
                  {contactCopy.secondaryCta} <ArrowUpRight size={12} />
                </div>
              </>
            )}
          </div>
        </motion.div>

        <div className="absolute bottom-12 w-full px-6 flex flex-col md:flex-row justify-between items-center text-[8px] font-mono tracking-[0.3em] text-white/20 gap-4">
          <div>{contactCopy.footer}</div>
          <div className="flex gap-8">
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