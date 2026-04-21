import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageTransitionShell } from "../components/PageTransitionShell";
import { RevealBlock } from "../components/RevealBlock";
import type { SiteCopy } from "../content";

interface WorkIndexPageProps {
  copy: SiteCopy;
}

export const WorkIndexPage = ({ copy }: WorkIndexPageProps) => {
  return (
    <PageTransitionShell className="relative min-h-screen px-5 pt-28 pb-20 md:px-6 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto space-y-10 md:space-y-14">
        <RevealBlock className="border-b border-white/8 pb-10">
          <Link to="/" className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.34em] text-white/45 hover:text-white">
            <ArrowLeft size={14} />
            {copy.archive.backHome}
          </Link>
          <div className="mt-8 grid grid-cols-1 items-end gap-7 md:mt-10 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7 space-y-4 md:space-y-5">
              <div className="flex flex-wrap items-center gap-4">
                <p className="archive-accent-pill font-mono text-[8px] uppercase tracking-[0.26em] md:text-[10px] md:tracking-[0.42em]">
                  {copy.work.indicator}
                </p>
                <div className="h-px w-16 bg-gradient-to-r from-accent-blue/80 to-transparent" />
              </div>
              <h1 className="archive-title max-w-[8ch] text-[3.2rem] font-serif italic leading-[0.9] tracking-[-0.05em] text-white md:max-w-none md:text-7xl">
                {copy.archive.title}
              </h1>
            </div>
            <p className="max-w-xl text-sm leading-[1.85] text-white/45 md:text-lg lg:col-span-5">
              {copy.archive.intro}
            </p>
          </div>
        </RevealBlock>

        <div className="space-y-8 md:space-y-10">
          {copy.work.projects.map((project, index) => (
            <RevealBlock
              key={project.slug}
              as="article"
              delay={index * 0.04}
              className="grid grid-cols-1 items-center gap-5 border-b border-white/8 pb-8 md:gap-7 lg:grid-cols-12 lg:gap-11"
            >
              <Link to={`/work/${project.slug}`} className="archive-hover-frame lg:col-span-7 group block overflow-hidden rounded-[2px] bg-black os-panel-shadow">
                <div className="relative aspect-[4/5] md:aspect-[16/8]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading={index < 2 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index === 0 ? "high" : "auto"}
                    className="h-full w-full object-cover transition-[transform,filter] duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035] group-hover:brightness-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/12 via-transparent to-black/4 transition-opacity duration-300 group-hover:opacity-90" />
                  <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(59,130,246,0.14)] transition-shadow duration-300 group-hover:shadow-[inset_0_0_0_1px_rgba(59,130,246,0.24)]" />
                  <div className="absolute bottom-4 left-4 font-mono text-[7px] uppercase tracking-[0.3em] text-white/35 transition-colors duration-300 group-hover:text-white/52 md:bottom-6 md:left-6 md:text-[8px] md:tracking-[0.45em]">
                    {copy.work.sequenceFrame} // {project.year}
                  </div>
                </div>
              </Link>

              <div className="space-y-4 lg:col-span-5 md:space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 font-mono text-[7px] uppercase tracking-[0.3em] text-white/30 md:gap-4 md:text-[8px] md:tracking-[0.45em]">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div className="w-8 h-[1px] bg-white/10" />
                    <span>{project.category}</span>
                  </div>
                  <h2 className="max-w-[8.5ch] text-[2.8rem] font-serif italic leading-[0.88] tracking-[-0.05em] text-white/92 md:max-w-none md:text-6xl">
                    {project.titleLines.map((line, lineIndex) => (
                      <span key={line}>
                        {lineIndex > 0 ? <br /> : null}
                        {line}
                      </span>
                    ))}
                  </h2>
                </div>
                <p className="max-w-md text-sm leading-[1.85] text-white/48 md:text-lg">{project.description}</p>
                <Link to={`/work/${project.slug}`} className="group inline-flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.28em] text-white/70 transition-[color,transform,letter-spacing] duration-300 hover:translate-x-1 hover:text-accent-blue md:text-[10px] md:tracking-[0.34em] md:hover:tracking-[0.38em]">
                  {copy.archive.openCase}
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </RevealBlock>
          ))}
        </div>
      </div>
    </PageTransitionShell>
  );
};
