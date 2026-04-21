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
    <PageTransitionShell className="relative min-h-screen px-6 pt-32 pb-24">
      <div className="max-w-6xl mx-auto space-y-14">
        <RevealBlock className="border-b border-white/8 pb-10">
          <Link to="/" className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.34em] text-white/45 hover:text-white">
            <ArrowLeft size={14} />
            {copy.archive.backHome}
          </Link>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 space-y-5">
              <p className="archive-accent-pill font-mono text-[10px] uppercase tracking-[0.42em]">
                {copy.contact.pageEyebrow}
              </p>
              <h1 className="archive-title text-5xl md:text-7xl font-serif italic leading-[0.9] tracking-tighter text-white">
                {copy.contact.pageTitle}
              </h1>
            </div>
            <div className="lg:col-span-5 space-y-5">
              <p className="text-lg text-white/50 leading-relaxed max-w-xl">
                {copy.contact.pageBody}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-accent-blue/80">
                {copy.contact.availability}
              </p>
            </div>
          </div>
        </RevealBlock>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8">
          <RevealBlock className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-8 md:p-10">
            <div className="space-y-8">
              {copy.contact.methods.map((method) => {
                const card = (
                  <div className="flex items-start justify-between gap-5 rounded-[1rem] border border-white/8 bg-black/20 px-5 py-5 transition-colors hover:border-accent-blue/40">
                    <div className="space-y-2">
                      <p className="font-mono text-[9px] uppercase tracking-[0.34em] text-white/35">
                        {method.label}
                      </p>
                      <p className="text-lg md:text-xl text-white/90 break-all">{method.value}</p>
                      {method.note ? (
                        <p className="text-sm text-white/45 leading-relaxed">{method.note}</p>
                      ) : null}
                    </div>
                    <div className="mt-1 text-white/35">
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

          <RevealBlock className="rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 md:p-10">
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="font-mono text-[9px] uppercase tracking-[0.34em] text-white/35">
                  collaboration note
                </p>
                <h2 className="text-3xl md:text-4xl font-serif italic tracking-tighter text-white">
                  先给我一个明确起点。
                </h2>
              </div>

              <div className="space-y-4 text-white/55 leading-relaxed">
                <p>如果你是品牌方或项目方，发我这 3 件事就够了：项目方向、时间节点、你现在最想解决的问题。</p>
                <p>如果你是招聘方，直接发送岗位信息、团队方向和合作方式，会比泛泛地“聊聊”更有效。</p>
              </div>

              <div className="rounded-[1rem] border border-dashed border-white/10 px-5 py-5 text-sm text-white/45 leading-relaxed">
                暂时不放真实照片，也不公开客户名。这个页面会保留联系方式与合作入口，但不暴露不必要的个人信息。
              </div>

              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.32em] text-white/35">
                <Copy size={14} />
                后续可补微信二维码或单独跳转页
              </div>
            </div>
          </RevealBlock>
        </div>
      </div>
    </PageTransitionShell>
  );
};
