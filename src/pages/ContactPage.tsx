import { ArrowLeft, ArrowUpRight, Copy, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { PageTransitionShell } from "../components/PageTransitionShell";
import { RevealBlock } from "../components/RevealBlock";
import type { SiteCopy } from "../content";

interface ContactPageProps {
  copy: SiteCopy;
}

export const ContactPage = ({ copy }: ContactPageProps) => {
  return (
    <PageTransitionShell className="relative min-h-screen px-5 pt-28 pb-20 md:px-6 md:pt-32 md:pb-24">
      <div className="max-w-6xl mx-auto space-y-10 md:space-y-14">
        <RevealBlock className="border-b border-white/8 pb-10">
          <Link to="/" className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.34em] text-white/45 hover:text-white">
            <ArrowLeft size={14} />
            {copy.archive.backHome}
          </Link>
          <div className="mt-8 grid grid-cols-1 items-end gap-7 md:mt-10 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7 space-y-3 md:space-y-5">
              <p className="archive-accent-pill w-fit font-mono text-[8px] uppercase tracking-[0.3em] md:text-[10px] md:tracking-[0.42em]">
                {copy.contact.pageEyebrow}
              </p>
              <h1 className="archive-title text-pretty max-w-[9ch] text-[3.2rem] font-serif italic leading-[0.9] tracking-[-0.05em] text-white md:max-w-none md:text-7xl">
                {copy.contact.pageTitle}
              </h1>
            </div>
            <div className="lg:col-span-5 space-y-3 md:space-y-5">
              <p className="max-w-[28rem] text-sm leading-[1.85] text-white/52 md:text-lg">
                {copy.contact.pageBody}
              </p>
              <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-accent-blue/80 md:text-[10px] md:tracking-[0.32em]">
                {copy.contact.availability}
              </p>
            </div>
          </div>
        </RevealBlock>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
          <RevealBlock className="rounded-[1.25rem] border border-white/10 bg-white/[0.02] p-5 md:rounded-[1.5rem] md:p-10">
            <div className="space-y-4 md:space-y-6">
              {copy.contact.methods.map((method) => {
                const card = (
                  <div className="archive-hover-frame flex items-start justify-between gap-4 rounded-[1rem] border border-white/8 bg-black/20 px-4 py-4 md:px-5 md:py-5">
                    <div className="max-w-[26rem] space-y-1.5 md:space-y-2">
                      <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-white/35 md:text-[9px] md:tracking-[0.32em]">
                        {method.label}
                      </p>
                      <p className="break-all text-base text-white/90 md:text-xl">{method.value}</p>
                      {method.note ? (
                        <p className="text-[13px] leading-[1.7] text-white/45 md:text-sm">{method.note}</p>
                      ) : null}
                    </div>
                    <div className="mt-1 shrink-0 text-white/35">
                      {method.href?.startsWith("mailto:") ? <Mail size={16} /> : <ArrowUpRight size={16} />}
                    </div>
                  </div>
                );

                return method.href ? (
                  <a key={method.label} href={method.href} className="block">
                    {card}
                  </a>
                ) : (
                  <div key={method.label}>{card}</div>
                );
              })}
            </div>
          </RevealBlock>

          <RevealBlock className="rounded-[1.25rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-5 md:rounded-[1.5rem] md:p-10" delay={0.08}>
            <div className="space-y-5 md:space-y-7">
              <div className="space-y-2 md:space-y-3">
                <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-white/35 md:text-[9px] md:tracking-[0.34em]">
                  collaboration
                </p>
                <h2 className="max-w-[10ch] text-[2rem] font-serif italic tracking-[-0.04em] text-white md:max-w-none md:text-4xl">
                  发我项目、时间、预算。
                </h2>
              </div>

              <div className="max-w-[23rem] space-y-3 text-sm leading-[1.8] text-white/55 md:max-w-[26rem] md:text-base">
                <p>品牌方直接发需求、时间和预算。</p>
                <p>招聘方直接发岗位和合作方式。</p>
              </div>

              <div className="rounded-[1rem] border border-dashed border-white/10 px-4 py-4 text-[13px] leading-[1.7] text-white/45 md:px-5 md:py-5 md:text-sm">
                这里只放合作入口。
              </div>

              <div className="flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.22em] text-white/35 md:text-[10px] md:tracking-[0.3em]">
                <Copy size={14} />
                后续可补二维码
              </div>
            </div>
          </RevealBlock>
        </div>
      </div>
    </PageTransitionShell>
  );
};
