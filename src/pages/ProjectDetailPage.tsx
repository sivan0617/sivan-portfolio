import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { PageTransitionShell } from "../components/PageTransitionShell";
import { RevealBlock } from "../components/RevealBlock";
import { getProjectBySlug, type SiteCopy } from "../content";

interface ProjectDetailPageProps {
  copy: SiteCopy;
}

export const ProjectDetailPage = ({ copy }: ProjectDetailPageProps) => {
  const { slug } = useParams();
  const project = getProjectBySlug(copy, slug);

  if (!project) {
    return (
      <PageTransitionShell className="min-h-screen px-6 pt-32 pb-24">
        <div className="max-w-5xl mx-auto space-y-8">
          <Link to="/work" className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.34em] text-white/45 hover:text-white">
            <ArrowLeft size={14} />
            {copy.detail.backArchive}
          </Link>
          <div className="border border-white/8 bg-black/30 p-8 md:p-10">
            <h1 className="text-4xl md:text-5xl font-serif italic text-white">{copy.detail.notFoundTitle}</h1>
            <p className="mt-5 max-w-2xl text-white/45 text-lg leading-relaxed">{copy.detail.notFoundBody}</p>
          </div>
        </div>
      </PageTransitionShell>
    );
  }

  const projectIndex = copy.work.projects.findIndex((entry) => entry.slug === project.slug);
  const previousProject = copy.work.projects[(projectIndex - 1 + copy.work.projects.length) % copy.work.projects.length];
  const nextProject = copy.work.projects[(projectIndex + 1) % copy.work.projects.length];
  const heroImage = project.gallery?.[0] ?? project.image;
  const galleryFrames = project.video
    ? project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.image]
    : project.gallery && project.gallery.length > 1
      ? project.gallery.slice(1)
      : [];

  return (
    <PageTransitionShell className="relative min-h-screen px-6 pt-32 pb-24">
      <div className="max-w-7xl mx-auto space-y-14">
        <RevealBlock className="space-y-8">
          <Link to="/work" className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.34em] text-white/45 hover:text-white">
            <ArrowLeft size={14} />
            {copy.detail.backArchive}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-4 font-mono text-[8px] uppercase tracking-[0.45em] text-white/30">
                <span>{project.category}</span>
                <div className="w-8 h-[1px] bg-white/10" />
                <span>{project.year}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif italic leading-[0.88] tracking-tighter text-white/90">
                {project.title}
              </h1>
              <p className="max-w-xl text-lg text-white/45 leading-relaxed">{project.description}</p>
            </div>
          </div>
        </RevealBlock>

        <RevealBlock>
          <div className="relative overflow-hidden rounded-[2px] bg-black os-panel-shadow">
            {project.video ? (
              <video
                src={project.video}
                poster={project.image}
                controls
                playsInline
                preload="none"
                className="w-full aspect-[16/8] object-cover brightness-95 saturate-110"
              />
            ) : (
              <img
                src={heroImage}
                alt={project.title}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full aspect-[16/8] object-cover brightness-95 saturate-110"
              />
            )}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            <div className="absolute bottom-8 left-8 font-mono text-[8px] uppercase tracking-[0.45em] text-white/35">
              {copy.work.sequenceFrame} // {project.year}
            </div>
          </div>
        </RevealBlock>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <RevealBlock className="lg:col-span-4 space-y-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.45em] text-accent-blue/70">{copy.detail.overview}</p>
            <div className="border border-white/8 p-6 space-y-4">
              <div className="font-mono text-[8px] uppercase tracking-[0.45em] text-white/30">
                {project.category} // {project.year}
              </div>
              <p className="text-white/45 leading-relaxed">{project.description}</p>
              {project.externalUrl ? (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 border border-white/12 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.34em] text-white/70 transition-colors hover:border-white/25 hover:text-white"
                >
                  {copy.detail.watchExternal}
                  <ArrowRight size={14} />
                </a>
              ) : null}
            </div>
          </RevealBlock>

          {galleryFrames.length > 0 ? (
            <RevealBlock className="lg:col-span-8 space-y-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.45em] text-accent-blue/70">{copy.detail.gallery}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {galleryFrames.map((frame, index) => (
                  <div key={`${project.slug}-${index}`} className="overflow-hidden rounded-[2px] bg-black os-panel-shadow">
                    <img
                      src={frame}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-[4/3] object-cover brightness-95 saturate-110"
                    />
                  </div>
                ))}
              </div>
            </RevealBlock>
          ) : null}
        </div>

        <RevealBlock className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/8 pt-10">
          <Link to={`/work/${previousProject.slug}`} className="border border-white/8 p-6 hover:border-white/20 transition-colors">
            <div className="font-mono text-[8px] uppercase tracking-[0.45em] text-white/30">{copy.detail.previous}</div>
            <div className="mt-4 text-3xl font-serif italic text-white/90">{previousProject.title}</div>
          </Link>
          <Link to={`/work/${nextProject.slug}`} className="border border-white/8 p-6 hover:border-white/20 transition-colors">
            <div className="font-mono text-[8px] uppercase tracking-[0.45em] text-white/30">{copy.detail.next}</div>
            <div className="mt-4 flex items-center justify-between gap-4">
              <div className="text-3xl font-serif italic text-white/90">{nextProject.title}</div>
              <ArrowRight size={18} className="text-white/45" />
            </div>
          </Link>
        </RevealBlock>
      </div>
    </PageTransitionShell>
  );
};
