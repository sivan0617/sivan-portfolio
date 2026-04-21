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
    <PageTransitionShell className="relative min-h-screen px-6 pt-32 pb-24">
      <div className="max-w-7xl mx-auto space-y-14">
        <RevealBlock className="border-b border-white/8 pb-10">
          <Link to="/" className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.34em] text-white/45 hover:text-white">
            <ArrowLeft size={14} />
            {copy.archive.backHome}
          </Link>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-4">
                <p className="archive-accent-pill font-mono text-[10px] uppercase tracking-[0.42em]">
                  {copy.work.indicator}
                </p>
                <div className="h-px w-16 bg-gradient-to-r from-accent-blue/80 to-transparent" />
              </div>
              <h1 className="archive-title text-5xl md:text-7xl font-serif italic leading-[0.9] tracking-tighter text-white">
                {copy.archive.title}
              </h1>
            </div>
            <p className="lg:col-span-5 text-lg text-white/45 leading-relaxed max-w-xl">
              {copy.archive.intro}
            </p>
          </div>
        </RevealBlock>

        <div className="space-y-8">
          {copy.work.projects.map((project, index) => (
            <RevealBlock
              key={project.slug}
              as="article"
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-white/8 pb-8"
            >
              <Link to={`/work/${project.slug}`} className="lg:col-span-7 group block overflow-hidden rounded-[2px] bg-black os-panel-shadow">
                <div className="relative aspect-[16/8]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading={index < 2 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index === 0 ? "high" : "auto"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2.5s] ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/12 via-transparent to-black/4" />
                  <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(59,130,246,0.14)]" />
                  <div className="absolute bottom-6 left-6 font-mono text-[8px] uppercase tracking-[0.45em] text-white/35">
                    {copy.work.sequenceFrame} // {project.year}
                  </div>
                </div>
              </Link>

              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 font-mono text-[8px] uppercase tracking-[0.45em] text-white/30">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div className="w-8 h-[1px] bg-white/10" />
                    <span>{project.category}</span>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-serif italic leading-[0.88] tracking-tighter text-white/90">
                    {project.titleLines.map((line, lineIndex) => (
                      <span key={line}>
                        {lineIndex > 0 ? <br /> : null}
                        {line}
                      </span>
                    ))}
                  </h2>
                </div>
                <p className="text-white/45 text-lg leading-relaxed max-w-md">{project.description}</p>
                <Link to={`/work/${project.slug}`} className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.38em] text-white/70 hover:text-accent-blue transition-colors">
                  {copy.archive.openCase}
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </RevealBlock>
          ))}
        </div>
      </div>
    </PageTransitionShell>
  );
};