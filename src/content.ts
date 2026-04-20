export type Locale = "zh" | "en";

export interface ProjectEntry {
  slug: string;
  titleLines: string[];
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  gallery?: string[];
}

export interface SiteCopy {
  meta: {
    lang: string;
    title: string;
  };
  navbar: {
    brand: string;
    items: Array<{ label: string; href: string }>;
    locales: Record<Locale, string>;
  };
  boot: {
    mark: string;
    initialStatus: string;
    frames: string[];
    protocol: string;
    log: string;
    ready: string;
    rootDirectory: string;
    rootPath: string;
    user: string;
    module: string;
    bootStage: string;
  };
  hero: {
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    titleEnd: string;
    titleLast: string;
    scrollHint: string;
    stable: string;
    hardwareId: string;
    monitorGlyph: string;
  };
  work: {
    indicator: string;
    sequenceFrame: string;
    streamId: string;
    launch: string;
    sceneStage: string;
    projects: ProjectEntry[];
  };
  about: {
    portraitImage: string;
    portraitAlt: string;
    sideLabel: string;
    eyebrow: string;
    heading: {
      before: string;
      normal: string;
      middle: string;
      accent: string;
      after: string;
    };
    body: string;
    disciplinesLabel: string;
    disciplines: string[];
    focusLabel: string;
    focus: string[];
  };
  contact: {
    heading: string;
    primaryCta: string;
    secondaryCta: string;
    email?: string;
    footer: string;
    socials: Array<{ label: string; href?: string }>;
  };
  archive: {
    title: string;
    intro: string;
    openCase: string;
    backHome: string;
  };
  detail: {
    overview: string;
    gallery: string;
    backArchive: string;
    previous: string;
    next: string;
    notFoundTitle: string;
    notFoundBody: string;
  };
  ornament: string;
}

export const siteContent: Record<Locale, SiteCopy> = {
  zh: {
    meta: {
      lang: "zh-CN",
      title: "姚茜文 | 视觉设计与 AIGC 作品集",
    },
    navbar: {
      brand: "SIVAN",
      items: [
        { label: "首页", href: "/" },
        { label: "作品", href: "/work" },
        { label: "关于", href: "/#about" },
        { label: "联系", href: "/#contact" },
      ],
      locales: {
        zh: "中",
        en: "EN",
      },
    },
    boot: {
      mark: "SIVAN",
      initialStatus: "视觉档案初始化中",
      frames: [
        "正在读取海报与影像项目……",
        "正在挂载品牌视觉素材……",
        "正在同步作品索引……",
        "正在整理个人资料……",
        "正在校准显示模块……",
        "档案已就绪",
      ],
      protocol: "作品集档案协议",
      log: "启动日志",
      ready: "点击进入",
      rootDirectory: "根目录",
      rootPath: "/PORTFOLIO/SIVAN",
      user: "用户",
      module: "模块",
      bootStage: "VISUAL_ARCHIVE_READY",
    },
    hero: {
      eyebrow: "// 姚茜文 / Sivan",
      titleStart: "姚茜文的",
      titleAccent: "视觉设计",
      titleEnd: "与",
      titleLast: "AIGC 作品集。",
      scrollHint: "向下查看更多真实项目",
      stable: "SIVAN_PORTFOLIO",
      hardwareId: "VISUAL DESIGNER",
      monitorGlyph: "S",
    },
    work: {
      indicator: "selected works // posters + moving images",
      sequenceFrame: "序列帧",
      streamId: "流编号",
      launch: "查看项目",
      sceneStage: "场景段落",
      projects: [
        {
          slug: "kuang-brand",
          titleLines: ["礦 KUANG", "品牌视觉"],
          title: "礦 KUANG 品牌视觉",
          category: "品牌 / 珠宝视觉",
          year: "2026",
          description:
            "以矿物感与冷白材质为线索完成的一组品牌视觉表达，强调产品气质、人物肖像与细节质感的统一。",
          image: "/portfolio/kuang-front.jpg",
          gallery: [
            "/portfolio/kuang-front.jpg",
            "/portfolio/kuang-profile.jpg",
            "/portfolio/kuang-detail.png",
          ],
        },
        {
          slug: "mthayas-film",
          titleLines: ["Mthayas", "影像实验"],
          title: "Mthayas 影像实验",
          category: "AIGC 影像 / 时尚叙事",
          year: "2026",
          description:
            "以藏地服饰、风、山体与仪式感为核心元素的一组 AIGC 影像实验，重点探索人物造型、环境尺度和情绪流动。",
          image: "/portfolio/mthayas-cover.jpg",
          gallery: [
            "/portfolio/mthayas-cover.jpg",
            "/portfolio/mthayas-lake.jpeg",
            "/portfolio/mthayas-walk.jpeg",
          ],
        },
        {
          slug: "cyber-poster-series",
          titleLines: ["赛博概念", "海报系列"],
          title: "赛博概念海报系列",
          category: "海报 / 概念视觉",
          year: "2025",
          description:
            "围绕赛博、监控、故障和高对比排版做的一组概念海报练习，偏重图像气氛、冲突色和彩噪信息层。",
          image: "/portfolio/poster-y2k-cyber.png",
          gallery: [
            "/portfolio/poster-y2k-cyber.png",
            "/portfolio/poster-surveillance-cyber.jpeg",
            "/portfolio/poster-glitch-portrait.png",
            "/portfolio/poster-focus.jpeg",
          ],
        },
        {
          slug: "beverage-poster-series",
          titleLines: ["气泡饮品", "海报系列"],
          title: "气泡饮品海报系列",
          category: "商业海报 / 食品饮品",
          year: "2025",
          description:
            "以草莓、蓝莓、西瓜、菠萝等口味为主题的一组饮品海报，重点处理产品质感、清爽氛围和商业画面完成度。",
          image: "/portfolio/poster-strawberry-soda.png",
          gallery: [
            "/portfolio/poster-strawberry-soda.png",
            "/portfolio/poster-blueberry-soda.png",
            "/portfolio/poster-watermelon-soda.png",
            "/portfolio/poster-pineapple-soda.png",
          ],
        },
        {
          slug: "industrial-poster",
          titleLines: ["江南造船", "工业海报"],
          title: "江南造船工业海报",
          category: "主题海报 / 工业叙事",
          year: "2025",
          description:
            "用强字重与工业摄影构建的一张主题海报，强调年代感、结构感和工业视觉叙事的力量。",
          image: "/portfolio/poster-jiangnan-shipyard.png",
          gallery: [
            "/portfolio/poster-jiangnan-shipyard.png",
            "/portfolio/poster-jiangnan-shipyard.png",
          ],
        },
        {
          slug: "loose-video-studies",
          titleLines: ["零散视频", "实验集合"],
          title: "零散视频实验集合",
          category: "AIGC 视频 / 氛围实验",
          year: "2025",
          description:
            "从零散视频目录里筛出的几段视觉实验，包含站台空间、天穹场景、赛博街景与科幻城市氛围。",
          image: "/portfolio/video-station-cover.png",
          gallery: [
            "/portfolio/video-station-cover.png",
            "/portfolio/video-celestial-cover.png",
            "/portfolio/video-cyber-girl-cover.png",
            "/portfolio/video-sci-fi-city.jpeg",
          ],
        },
        {
          slug: "starship-pov",
          titleLines: ["飞船起飞", "POV 视频"],
          title: "赛博朋克飞船起飞 POV",
          category: "视频概念 / 科幻 POV",
          year: "2025",
          description:
            "以第一视角飞船起飞为主题的短视频概念，画面重点放在城市层级、飞行载具与赛博氛围的快速建立。",
          image: "/portfolio/video-starship-pov-cover.png",
          gallery: [
            "/portfolio/video-starship-pov-cover.png",
            "/portfolio/video-sci-fi-city.jpeg",
            "/portfolio/video-station-cover.png",
          ],
        },
      ],
    },
    about: {
      portraitImage: "/portfolio/about-signal.jpeg",
      portraitAlt: "姚茜文作品图像",
      sideLabel: "视觉档案_01 // 2026 归档",
      eyebrow: "// 视觉设计师 / AIGC 创作者",
      heading: {
        before: "海报",
        normal: "设计",
        middle: "、品牌视觉与",
        accent: "影像",
        after: "实验。",
      },
      body:
        "姚茜文，24 岁，视觉设计师，毕业于四川农业大学设计艺术学（色彩设计方向）。近两年持续进行品牌视觉、海报设计、AIGC 影像、视频概念和动态广告实验，熟悉 AI、AE、PS、Figma 等工具。",
      disciplinesLabel: "方向",
      disciplines: ["品牌视觉", "海报设计", "AIGC 影像"],
      focusLabel: "近期关注",
      focus: ["视频概念实验", "商业海报表达", "动态广告探索"],
    },
    contact: {
      heading: "作品详情与联系信息可继续补充。",
      primaryCta: "联系方式待补",
      secondaryCta: "资料持续更新",
      footer: "Sivan Portfolio © 2026。内容持续整理中。",
      socials: [
        { label: "海报设计" },
        { label: "AIGC 视频" },
        { label: "品牌项目" },
      ],
    },
    archive: {
      title: "作品档案",
      intro: "当前已接入品牌视觉、海报系列和零散视频实验。后续可以继续补每个项目的过程稿、更多成片和正式说明。",
      openCase: "进入项目",
      backHome: "返回首页",
    },
    detail: {
      overview: "项目简介",
      gallery: "项目图像",
      backArchive: "返回作品索引",
      previous: "上一个",
      next: "下一个",
      notFoundTitle: "该项目暂未建立详情页。",
      notFoundBody: "先回到作品索引继续浏览，后续再补正式内容。",
    },
    ornament: "// SIVAN PORTFOLIO // v.2026",
  },
  en: {
    meta: {
      lang: "en",
      title: "Yaoxiwen | Visual Design & AIGC Portfolio",
    },
    navbar: {
      brand: "SIVAN",
      items: [
        { label: "Home", href: "/" },
        { label: "Work", href: "/work" },
        { label: "About", href: "/#about" },
        { label: "Contact", href: "/#contact" },
      ],
      locales: {
        zh: "中",
        en: "EN",
      },
    },
    boot: {
      mark: "SIVAN",
      initialStatus: "Initializing visual archive",
      frames: [
        "Loading posters and moving-image projects...",
        "Mounting brand assets...",
        "Syncing the work index...",
        "Collecting profile details...",
        "Calibrating display module...",
        "Archive ready",
      ],
      protocol: "Portfolio Archive Protocol",
      log: "Boot Log",
      ready: "Tap to enter",
      rootDirectory: "Root Directory",
      rootPath: "/PORTFOLIO/SIVAN",
      user: "User",
      module: "Module",
      bootStage: "VISUAL_ARCHIVE_READY",
    },
    hero: {
      eyebrow: "// YAO XIWEN / SIVAN",
      titleStart: "Yaoxiwen's",
      titleAccent: "Visual Design",
      titleEnd: "&",
      titleLast: "AIGC Portfolio.",
      scrollHint: "Scroll for more real projects",
      stable: "SIVAN_PORTFOLIO",
      hardwareId: "VISUAL DESIGNER",
      monitorGlyph: "S",
    },
    work: {
      indicator: "selected works // posters + moving images",
      sequenceFrame: "Sequence Frame",
      streamId: "Stream ID",
      launch: "Open Project",
      sceneStage: "Scene Stage",
      projects: [
        {
          slug: "kuang-brand",
          titleLines: ["KUANG", "Brand Visuals"],
          title: "KUANG Brand Visuals",
          category: "Brand / Jewelry Visuals",
          year: "2026",
          description:
            "A brand image series shaped by mineral forms, cool light, and material detail, balancing product mood, portrait styling, and surface texture.",
          image: "/portfolio/kuang-front.jpg",
          gallery: [
            "/portfolio/kuang-front.jpg",
            "/portfolio/kuang-profile.jpg",
            "/portfolio/kuang-detail.png",
          ],
        },
        {
          slug: "mthayas-film",
          titleLines: ["Mthayas", "Film Study"],
          title: "Mthayas Film Study",
          category: "AIGC Film / Fashion Narrative",
          year: "2026",
          description:
            "An AIGC image and film experiment built around Tibetan costume, wind, mountains, and ritual atmosphere, focused on scale, styling, and emotional flow.",
          image: "/portfolio/mthayas-cover.jpg",
          gallery: [
            "/portfolio/mthayas-cover.jpg",
            "/portfolio/mthayas-lake.jpeg",
            "/portfolio/mthayas-walk.jpeg",
          ],
        },
        {
          slug: "cyber-poster-series",
          titleLines: ["Cyber Concept", "Poster Series"],
          title: "Cyber Concept Poster Series",
          category: "Poster / Concept Visuals",
          year: "2025",
          description:
            "A poster set built around cyber themes, surveillance UI, glitch overlays, and high-contrast typography, with a focus on mood and visual noise.",
          image: "/portfolio/poster-y2k-cyber.png",
          gallery: [
            "/portfolio/poster-y2k-cyber.png",
            "/portfolio/poster-surveillance-cyber.jpeg",
            "/portfolio/poster-glitch-portrait.png",
            "/portfolio/poster-focus.jpeg",
          ],
        },
        {
          slug: "beverage-poster-series",
          titleLines: ["Beverage", "Poster Series"],
          title: "Beverage Poster Series",
          category: "Commercial Poster / Food & Drink",
          year: "2025",
          description:
            "A set of drink posters built around strawberry, blueberry, watermelon, and pineapple flavors, focused on material freshness and polished commercial presentation.",
          image: "/portfolio/poster-strawberry-soda.png",
          gallery: [
            "/portfolio/poster-strawberry-soda.png",
            "/portfolio/poster-blueberry-soda.png",
            "/portfolio/poster-watermelon-soda.png",
            "/portfolio/poster-pineapple-soda.png",
          ],
        },
        {
          slug: "industrial-poster",
          titleLines: ["Jiangnan", "Industrial Poster"],
          title: "Jiangnan Shipyard Poster",
          category: "Theme Poster / Industrial Narrative",
          year: "2025",
          description:
            "A single industrial poster driven by heavy typography and documentary-style photography, built to carry scale, structure, and historical mood.",
          image: "/portfolio/poster-jiangnan-shipyard.png",
          gallery: [
            "/portfolio/poster-jiangnan-shipyard.png",
            "/portfolio/poster-jiangnan-shipyard.png",
          ],
        },
        {
          slug: "loose-video-studies",
          titleLines: ["Loose Video", "Studies"],
          title: "Loose Video Studies",
          category: "AIGC Video / Atmosphere Studies",
          year: "2025",
          description:
            "A selection of video studies pulled from the loose video folder, spanning station spaces, celestial scenes, cyber streets, and sci-fi city moods.",
          image: "/portfolio/video-station-cover.png",
          gallery: [
            "/portfolio/video-station-cover.png",
            "/portfolio/video-celestial-cover.png",
            "/portfolio/video-cyber-girl-cover.png",
            "/portfolio/video-sci-fi-city.jpeg",
          ],
        },
        {
          slug: "starship-pov",
          titleLines: ["Starship Lift-Off", "POV Video"],
          title: "Cyberpunk Starship Lift-Off POV",
          category: "Video Concept / Sci-Fi POV",
          year: "2025",
          description:
            "A short POV concept centered on a cyberpunk starship launch, focused on fast worldbuilding through vehicles, city scale, and airborne motion.",
          image: "/portfolio/video-starship-pov-cover.png",
          gallery: [
            "/portfolio/video-starship-pov-cover.png",
            "/portfolio/video-sci-fi-city.jpeg",
            "/portfolio/video-station-cover.png",
          ],
        },
      ],
    },
    about: {
      portraitImage: "/portfolio/about-signal.jpeg",
      portraitAlt: "Selected work image by Yaoxiwen",
      sideLabel: "VISUAL_ARCHIVE_01 // 2026",
      eyebrow: "// VISUAL DESIGNER / AIGC CREATOR",
      heading: {
        before: "Poster",
        normal: "design",
        middle: "with brand visuals and moving-image",
        accent: "experiments",
        after: ".",
      },
      body:
        "Yaoxiwen is a 24-year-old visual designer graduating from Sichuan Agricultural University in design arts. Her recent work moves across brand visuals, poster design, AIGC films, video concepts, and dynamic ad experiments using AI, AE, PS, and Figma.",
      disciplinesLabel: "Fields",
      disciplines: ["Brand Visuals", "Poster Design", "AIGC Film"],
      focusLabel: "Current Focus",
      focus: ["Video Concept Studies", "Commercial Posters", "Dynamic Ad Ideas"],
    },
    contact: {
      heading: "More contact details can be added next.",
      primaryCta: "Contact Pending",
      secondaryCta: "Portfolio Updating",
      footer: "Sivan Portfolio © 2026. Content in progress.",
      socials: [
        { label: "Poster Design" },
        { label: "AIGC Video" },
        { label: "Brand Projects" },
      ],
    },
    archive: {
      title: "Work Archive",
      intro: "The archive now includes brand visuals, poster series, and loose video studies. Process notes and finished films can be expanded next.",
      openCase: "Open Project",
      backHome: "Back Home",
    },
    detail: {
      overview: "Overview",
      gallery: "Frames",
      backArchive: "Back to Work",
      previous: "Previous",
      next: "Next",
      notFoundTitle: "This project detail is not ready yet.",
      notFoundBody: "Return to the work archive and continue browsing while the full case page is still being assembled.",
    },
    ornament: "// SIVAN PORTFOLIO // v.2026",
  },
};

export const getPageTitle = (copy: SiteCopy, pathname: string) => {
  if (pathname === "/work") {
    return `${copy.archive.title} · ${copy.meta.title}`;
  }

  if (pathname.startsWith("/work/")) {
    const slug = pathname.split("/").pop();
    const project = copy.work.projects.find((entry) => entry.slug === slug);
    return project ? `${project.title} · ${copy.meta.title}` : copy.meta.title;
  }

  return copy.meta.title;
};

export const getProjectBySlug = (copy: SiteCopy, slug?: string) =>
  copy.work.projects.find((entry) => entry.slug === slug);
