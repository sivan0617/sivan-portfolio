import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { PageTransitionShell } from "../components/PageTransitionShell";
import { RevealBlock } from "../components/RevealBlock";
import { getProjectBySlug, type ProjectClip, type SiteCopy } from "../content";

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
  const playableClips: ProjectClip[] =
    project.clips && project.clips.length > 0
      ? project.clips
      : project.video
        ? [
            {
              title: project.title,
              video: project.video,
              externalUrl: project.externalUrl,
              poster: project.image,
            },
          ]
        : [];
  const primaryClip = playableClips[0];
  const heroImage = project.gallery?.[0] ?? project.image;
  const heroPoster = primaryClip?.poster ?? project.image;
  const galleryFrames = primaryClip?.video
    ? project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.image]
    : project.gallery && project.gallery.length > 1
      ? project.gallery.slice(1)
      : [];

  return (
    <PageTransitionShell className="relative min-h-screen px-5 pt-28 pb-20 md:px-6 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto space-y-10 md:space-y-14">
        <RevealBlock className="space-y-8">
          <Link to="/work" className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.34em] text-white/45 hover:text-white">
            <ArrowLeft size={14} />
            {copy.detail.backArchive}
          </Link>

          <div className="grid grid-cols-1 items-end gap-7 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7 space-y-3 md:space-y-5">
              <div className="flex flex-wrap items-center gap-3 font-mono text-[7px] uppercase tracking-[0.26em] text-white/32 md:gap-4 md:text-[8px] md:tracking-[0.42em]">
                <span>{project.category}</span>
                <div className="w-8 h-[1px] bg-white/10" />
                <span>{project.year}</span>
              </div>
              <h1 className="text-pretty max-w-[9ch] text-[3.1rem] font-serif italic leading-[0.88] tracking-[-0.05em] text-white/92 md:max-w-none md:text-7xl">
                {project.title}
              </h1>
              <p className="max-w-[32rem] text-sm leading-[1.85] text-white/48 md:text-lg">{project.description}</p>
            </div>
          </div>
        </RevealBlock>

        <RevealBlock offset={18} scale={1.02}>
          <div className="relative overflow-hidden rounded-[2px] bg-black os-panel-shadow">
            {primaryClip?.video ? (
              <video
                src={primaryClip.video}
                poster={heroPoster}
                controls
                playsInline
                preload="none"
                className="w-full aspect-[4/5] object-cover md:aspect-[16/8]"
              />
            ) : (
              <img
                src={heroImage}
                alt={project.title}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full aspect-[4/5] object-cover md:aspect-[16/8]"
              />
            )}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            <div className="absolute bottom-4 left-4 font-mono text-[7px] uppercase tracking-[0.28em] text-white/35 md:bottom-8 md:left-8 md:text-[8px] md:tracking-[0.42em]">
              {copy.work.sequenceFrame} // {project.year}
            </div>
          </div>
        </RevealBlock>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <RevealBlock className="lg:col-span-4 space-y-4" delay={0.04}>
            <p className="font-mono text-[8px] uppercase tracking-[0.26em] text-accent-blue/70 md:text-[9px] md:tracking-[0.42em]">{copy.detail.overview}</p>
            <div className="soft-panel space-y-4 p-5 md:p-6">
              <div className="font-mono text-[7px] uppercase tracking-[0.26em] text-white/32 md:text-[8px] md:tracking-[0.42em]">
                {project.category} // {project.year}
              </div>
              <p className="text-sm leading-[1.85] text-white/48 md:text-base">{project.description}</p>
              {primaryClip?.externalUrl ? (
                <a
                  href={primaryClip.externalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 border border-white/12 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.24em] text-white/70 transition-[border-color,color,transform] duration-300 hover:translate-x-1 hover:border-white/25 hover:text-white md:text-[10px] md:tracking-[0.32em]"
                >
                  {copy.detail.watchExternal}
                  <ArrowRight size={14} />
                </a>
              ) : null}
            </div>
          </RevealBlock>

          {playableClips.length > 0 ? (
            <RevealBlock className="lg:col-span-8 space-y-4" delay={0.1} offset={18}>
              <p className="font-mono text-[8px] uppercase tracking-[0.26em] text-accent-blue/70 md:text-[9px] md:tracking-[0.42em]">{copy.detail.motion}</p>
              <div className="grid grid-cols-1 gap-6">
                {playableClips.map((clip, index) => (
                  <div key={`${project.slug}-clip-${index}`} className="archive-hover-frame overflow-hidden rounded-[2px] border border-white/8 bg-black/60 p-3 md:p-4">
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <div className="font-mono text-[8px] uppercase tracking-[0.24em] text-white/58 md:text-[9px] md:tracking-[0.36em]">
                        {clip.title}
                      </div>
                      {clip.externalUrl ? (
                        <a
                          href={clip.externalUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.2em] text-accent-blue/80 transition-[color,transform] duration-300 hover:translate-x-1 hover:text-white md:text-[9px] md:tracking-[0.32em]"
                        >
                          {copy.detail.watchExternal}
                          <ArrowRight size={14} />
                        </a>
                      ) : null}
                    </div>
                    {clip.video ? (
                      <video
                        src={clip.video}
                        poster={clip.poster ?? project.image}
                        controls
                        playsInline
                        preload="none"
                        className="w-full aspect-[4/5] object-cover md:aspect-[16/8]"
                      />
                    ) : (
                      <img
                        src={clip.poster ?? project.image}
                        alt={clip.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full aspect-[4/5] object-cover md:aspect-[16/8]"
                      />
                    )}
                  </div>
                ))}
              </div>
            </RevealBlock>
          ) : null}

          {galleryFrames.length > 0 ? (
            <RevealBlock className="lg:col-span-8 space-y-4" delay={0.16} offset={20}>
              <p className="font-mono text-[8px] uppercase tracking-[0.26em] text-accent-blue/70 md:text-[9px] md:tracking-[0.42em]">{copy.detail.gallery}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {galleryFrames.map((frame, index) => (
                  <div key={`${project.slug}-${index}`} className="archive-hover-frame overflow-hidden rounded-[2px] bg-black os-panel-shadow">
                    <img
                      src={frame}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-[4/3] object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
                    />
                  </div>
                ))}
              </div>
            </RevealBlock>
          ) : null}
        </div>

        <RevealBlock className="grid grid-cols-1 gap-4 border-t border-white/8 pt-8 md:grid-cols-2 md:gap-6 md:pt-10" delay={0.14}>
          <Link to={`/work/${previousProject.slug}`} className="archive-hover-frame border border-white/8 p-5 md:p-6">
            <div className="font-mono text-[7px] uppercase tracking-[0.3em] text-white/30 md:text-[8px] md:tracking-[0.45em]">{copy.detail.previous}</div>
            <div className="mt-3 text-[2rem] font-serif italic tracking-[-0.03em] text-white/92 md:mt-4 md:text-3xl">{previousProject.title}</div>
          </Link>
          <Link to={`/work/${nextProject.slug}`} className="archive-hover-frame group border border-white/8 p-5 md:p-6">
            <div className="font-mono text-[7px] uppercase tracking-[0.3em] text-white/30 md:text-[8px] md:tracking-[0.45em]">{copy.detail.next}</div>
            <div className="mt-3 flex items-center justify-between gap-4 md:mt-4">
              <div className="text-[2rem] font-serif italic tracking-[-0.03em] text-white/92 md:text-3xl">{nextProject.title}</div>
              <ArrowRight size={18} className="text-white/45 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Link>
        </RevealBlock>
      </div>
    </PageTransitionShell>
  );
};
