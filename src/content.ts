export type Locale = "zh" | "en";

export interface ProjectEntry {
  slug: string;
  titleLines: string[];
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  video?: string;
  externalUrl?: string;
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
    watchExternal: string;
    backArchive: string;
    previous: string;
    next: string;
    notFoundTitle: string;
    notFoundBody: string;
  };
  ornament: string;
}

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

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
            "围绕矿物感、冷白材质与精品包装展开的一套品牌视觉系统，覆盖识别、包装、空间与数字触点。",
          image: asset("/portfolio/kuang/cover.jpg"),
          gallery: [
            asset("/portfolio/kuang/intro.jpg"),
            asset("/portfolio/kuang/logo-system.jpg"),
            asset("/portfolio/kuang/type-system.jpg"),
            asset("/portfolio/kuang/color-system.jpg"),
            asset("/portfolio/kuang/packaging-structure.jpg"),
            asset("/portfolio/kuang/store.jpg"),
            asset("/portfolio/kuang/website.jpg"),
          ],
        },
        {
          slug: "redtail-intercept",
          titleLines: ["绝对拦截", "广告项目"],
          title: "赤尾大广赛｜绝对拦截",
          category: "广告 / 比赛项目",
          year: "2026",
          description:
            "以高速拦截、武器动势和高压广告语气构建的一支比赛广告短片，现阶段已收敛出主成片和关键分镜画面。",
          image: asset("/portfolio/redtail/cover.jpg"),
          video: asset("/portfolio/redtail/redtail-ad-web.mp4"),
          externalUrl: "https://www.bilibili.com/video/BV1dHdCBpEUe/",
          gallery: [
            asset("/portfolio/redtail/cover.png"),
            asset("/portfolio/redtail/gun-shot.jpg"),
            asset("/portfolio/redtail/bullet-side.jpg"),
            asset("/portfolio/redtail/bullet-wrap.jpg"),
          ],
        },
        {
          slug: "mthayas-film",
          titleLines: ["时尚大片", "影像成片"],
          title: "时尚大片成片",
          category: "AIGC 影像 / 时尚叙事",
          year: "2026",
          description:
            "从多版成片中收敛出的主视频版本，以人物造型、自然元素和仪式化氛围构成一支完整的时尚叙事短片。",
          image: asset("/portfolio/mthayas/video-cover.jpg"),
          video: asset("/portfolio/mthayas/mthayas-film.mp4"),
          externalUrl: "https://www.bilibili.com/video/BV13SdkBLEmM/",
          gallery: [
            asset("/portfolio/mthayas-cover.jpg"),
            asset("/portfolio/mthayas-walk.jpeg"),
            asset("/portfolio/mthayas-lake.jpeg"),
          ],
        },
        {
          slug: "march-28-film",
          titleLines: ["3月28日", "Kling 参赛版"],
          title: "3月28日 / Kling 参赛版",
          category: "AIGC 短片 / 参赛版本",
          year: "2026",
          description:
            "同一影像项目的主版与参赛版统一收束到一个案例里，站内以《3月28日》为主视频，同时保留 Kling 参赛版封面和版本关系。",
          image: asset("/portfolio/march-28/cover.jpg"),
          video: asset("/portfolio/march-28/march-28.mp4"),
          externalUrl: "https://www.bilibili.com/video/BV1ZjdCBdEqG/",
          gallery: [
            asset("/portfolio/march-28/cover.jpg"),
            asset("/portfolio/kling/cover.jpg"),
            asset("/portfolio/march-28/frame-1.jpg"),
            asset("/portfolio/march-28/frame-2.jpg"),
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
          image: asset("/portfolio/starship/video-cover.jpg"),
          video: asset("/portfolio/starship/starship-pov-web.mp4"),
          externalUrl: "https://www.bilibili.com/video/BV1GmdkB2Eto/",
          gallery: [
            asset("/portfolio/optimized/video-starship-pov-cover.jpg"),
            asset("/portfolio/video-sci-fi-city.jpeg"),
            asset("/portfolio/video-station-cover.png"),
          ],
        },
        {
          slug: "experimental-motion-atlas",
          titleLines: ["实验视频", "风格切片"],
          title: "实验性视频风格切片",
          category: "实验影像 / 风格合集",
          year: "2025",
          description:
            "把之前漏掉的大量实验短视频按风格重新归档，集中成一页风格切片：系统故障、赛博通勤、超现实抒情和空间奇观，而不是继续散落在文件名里。",
          image: asset("/portfolio/experimental/crowd-digitized.jpg"),
          gallery: [
            asset("/portfolio/experimental/crt-threshold.jpg"),
            asset("/portfolio/experimental/error-quarantine.jpg"),
            asset("/portfolio/experimental/paper-collapse.jpg"),
            asset("/portfolio/experimental/cyber-train.jpg"),
            asset("/portfolio/experimental/rainy-alley.jpg"),
            asset("/portfolio/experimental/rainy-platform.jpg"),
            asset("/portfolio/experimental/astronaut-terminal.jpg"),
            asset("/portfolio/experimental/floating-field.jpg"),
            asset("/portfolio/experimental/garden-reader.jpg"),
            asset("/portfolio/experimental/hillside-postman.jpg"),
            asset("/portfolio/experimental/book-tunnel.jpg"),
            asset("/portfolio/experimental/celestial-gate.jpg"),
            asset("/portfolio/experimental/motorcycle-cloud.jpg"),
            asset("/portfolio/experimental/wasteland-dome.jpg"),
            asset("/portfolio/experimental/illustrated-reader.jpg"),
            asset("/portfolio/experimental/starship-silhouette.jpg"),
          ],
        },
        {
          slug: "cyber-poster-series",
          titleLines: ["赛博故障", "实验排版"],
          title: "赛博故障 / 实验排版海报",
          category: "海报 / 实验风格",
          year: "2025",
          description:
            "围绕赛博、监控、故障和高对比排版整理出来的一组风格海报，重点是图像压迫感、文字张力和实验气质。",
          image: asset("/portfolio/optimized/poster-y2k-cyber.jpg"),
          gallery: [
            asset("/portfolio/optimized/poster-y2k-cyber.jpg"),
            asset("/portfolio/poster-surveillance-cyber.jpeg"),
            asset("/portfolio/optimized/poster-glitch-portrait.jpg"),
            asset("/portfolio/poster-focus.jpeg"),
          ],
        },
        {
          slug: "commercial-poster-series",
          titleLines: ["高饱和消费", "视觉合集"],
          title: "高饱和消费视觉海报",
          category: "海报 / 高饱和消费视觉",
          year: "2025",
          description:
            "把饮品、餐饮、零售与消费品图像按高饱和商业语言重新归组，保留色彩和货架感最强的一批作品。",
          image: asset("/portfolio/optimized/poster-strawberry-soda.jpg"),
          gallery: [
            asset("/portfolio/optimized/poster-strawberry-soda.jpg"),
            asset("/portfolio/optimized/poster-blueberry-soda.jpg"),
            asset("/portfolio/optimized/poster-watermelon-soda.jpg"),
            asset("/portfolio/optimized/poster-pineapple-soda.jpg"),
            asset("/portfolio/posters/commercial/noodles.jpg"),
            asset("/portfolio/posters/commercial/mushroom-hotpot.jpg"),
            asset("/portfolio/posters/commercial/new-opening.jpg"),
            asset("/portfolio/posters/commercial/avon.jpg"),
            asset("/portfolio/posters/commercial/crystal.jpg"),
          ],
        },
        {
          slug: "urban-industrial-series",
          titleLines: ["冷调城市", "工业视觉"],
          title: "冷调城市 / 工业视觉海报",
          category: "海报 / 城市空间 / 工业冷调",
          year: "2025",
          description:
            "把城市、地产、文旅和工业主题里偏冷调、空间感和建筑感更强的作品单独归成一组，避免再和消费视觉混在一起。",
          image: asset("/portfolio/optimized/poster-jiangnan-shipyard.jpg"),
          gallery: [
            asset("/portfolio/optimized/poster-jiangnan-shipyard.jpg"),
            asset("/portfolio/posters/commercial/urban-residence.jpg"),
            asset("/portfolio/posters/commercial/chengdu-tour.jpg"),
            asset("/portfolio/posters/commercial/chongqing-tour.jpg"),
          ],
        },
        {
          slug: "tibet-editorial",
          titleLines: ["藏地时尚", "静帧图集"],
          title: "藏地时尚静帧图集",
          category: "时尚静帧 / 藏地 editorial",
          year: "2026",
          description:
            "从同一人物、服饰和雪山语境里抽出的时尚静帧组，只保留 editorial 语义，不再和任何品牌项目混类。",
          image: asset("/portfolio/tibet-editorial/walk.jpg"),
          gallery: [
            asset("/portfolio/tibet-editorial/profile.jpg"),
            asset("/portfolio/tibet-editorial/braids.jpg"),
            asset("/portfolio/tibet-editorial/model-sheet.jpg"),
            asset("/portfolio/tibet-editorial/lake.jpg"),
            asset("/portfolio/tibet-editorial/upside-down.jpg"),
          ],
        },
        {
          slug: "portrait-poster-series",
          titleLines: ["人物叙事", "潮流肖像"],
          title: "人物叙事 / 潮流肖像海报",
          category: "海报 / 人物叙事 / 潮流肖像",
          year: "2025",
          description:
            "把人物主体更强、叙事感更明显的一批海报抽出来，统一落在人物叙事和潮流肖像的风格分组里。",
          image: asset("/portfolio/posters/portrait/child-magenta.jpg"),
          gallery: [
            asset("/portfolio/posters/portrait/you-me.jpg"),
            asset("/portfolio/posters/portrait/child-blue.jpg"),
            asset("/portfolio/posters/portrait/child-red.jpg"),
            asset("/portfolio/posters/portrait/night-bartender.jpg"),
            asset("/portfolio/posters/portrait/sports-legend.jpg"),
          ],
        },
      ],
    },
    about: {
      portraitImage: asset("/portfolio/about-signal.jpeg"),
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
      intro:
        "当前档案已重新整理为完整项目与风格化合集两条线：品牌、广告、主视频项目保持独立，实验视频与散碎海报则按风格重新归组。",
      openCase: "进入项目",
      backHome: "返回首页",
    },
    detail: {
      overview: "项目简介",
      gallery: "项目图像",
      watchExternal: "去 B 站看完整版",
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
            "A brand system built around mineral forms, cool-white materials, premium packaging, and spatial presentation across identity, packaging, store, and digital touchpoints.",
          image: asset("/portfolio/kuang/cover.jpg"),
          gallery: [
            asset("/portfolio/kuang/intro.jpg"),
            asset("/portfolio/kuang/logo-system.jpg"),
            asset("/portfolio/kuang/type-system.jpg"),
            asset("/portfolio/kuang/color-system.jpg"),
            asset("/portfolio/kuang/packaging-structure.jpg"),
            asset("/portfolio/kuang/store.jpg"),
            asset("/portfolio/kuang/website.jpg"),
          ],
        },
        {
          slug: "redtail-intercept",
          titleLines: ["Absolute", "Interception"],
          title: "Redtail Ad Competition | Absolute Interception",
          category: "Advertising / Competition Film",
          year: "2026",
          description:
            "A competition ad built around high-speed interception, weapon motion, and compressed commercial tension, now narrowed down to a main cut with key still frames.",
          image: asset("/portfolio/redtail/cover.jpg"),
          video: asset("/portfolio/redtail/redtail-ad-web.mp4"),
          externalUrl: "https://www.bilibili.com/video/BV1dHdCBpEUe/",
          gallery: [
            asset("/portfolio/redtail/cover.png"),
            asset("/portfolio/redtail/gun-shot.jpg"),
            asset("/portfolio/redtail/bullet-side.jpg"),
            asset("/portfolio/redtail/bullet-wrap.jpg"),
          ],
        },
        {
          slug: "mthayas-film",
          titleLines: ["Fashion Film", "Final Cut"],
          title: "Fashion Film Final Cut",
          category: "AIGC Film / Fashion Narrative",
          year: "2026",
          description:
            "The selected final version from a larger fashion-film exploration, shaped by styling, natural elements, and a more ritualized emotional rhythm.",
          image: asset("/portfolio/mthayas/video-cover.jpg"),
          video: asset("/portfolio/mthayas/mthayas-film.mp4"),
          externalUrl: "https://www.bilibili.com/video/BV13SdkBLEmM/",
          gallery: [
            asset("/portfolio/mthayas-cover.jpg"),
            asset("/portfolio/mthayas-walk.jpeg"),
            asset("/portfolio/mthayas-lake.jpeg"),
          ],
        },
        {
          slug: "march-28-film",
          titleLines: ["March 28", "Kling Entry"],
          title: "March 28 / Kling Entry",
          category: "AIGC Short Film / Competition Versions",
          year: "2026",
          description:
            "The main cut and the Kling competition version are now consolidated into one case page, using March 28 as the primary film while keeping the entry-version relationship visible.",
          image: asset("/portfolio/march-28/cover.jpg"),
          video: asset("/portfolio/march-28/march-28.mp4"),
          externalUrl: "https://www.bilibili.com/video/BV1ZjdCBdEqG/",
          gallery: [
            asset("/portfolio/march-28/cover.jpg"),
            asset("/portfolio/kling/cover.jpg"),
            asset("/portfolio/march-28/frame-1.jpg"),
            asset("/portfolio/march-28/frame-2.jpg"),
          ],
        },
        {
          slug: "starship-pov",
          titleLines: ["Starship Lift-Off", "POV Video"],
          title: "Cyberpunk Starship Lift-Off POV",
          category: "Video Concept / Sci-Fi POV",
          year: "2025",
          description:
            "A first-person starship launch concept focused on rapid worldbuilding through airborne motion, vehicle scale, and cyberpunk city atmosphere.",
          image: asset("/portfolio/starship/video-cover.jpg"),
          video: asset("/portfolio/starship/starship-pov-web.mp4"),
          externalUrl: "https://www.bilibili.com/video/BV1GmdkB2Eto/",
          gallery: [
            asset("/portfolio/optimized/video-starship-pov-cover.jpg"),
            asset("/portfolio/video-sci-fi-city.jpeg"),
            asset("/portfolio/video-station-cover.png"),
          ],
        },
        {
          slug: "experimental-motion-atlas",
          titleLines: ["Experimental Motion", "Style Atlas"],
          title: "Experimental Motion Style Atlas",
          category: "Experimental Motion / Style Collection",
          year: "2025",
          description:
            "A regrouped archive of the previously omitted motion studies, organized by style rather than file names: system glitches, cyber commuting, surreal lyricism, and spatial spectacle.",
          image: asset("/portfolio/experimental/crowd-digitized.jpg"),
          gallery: [
            asset("/portfolio/experimental/crt-threshold.jpg"),
            asset("/portfolio/experimental/error-quarantine.jpg"),
            asset("/portfolio/experimental/paper-collapse.jpg"),
            asset("/portfolio/experimental/cyber-train.jpg"),
            asset("/portfolio/experimental/rainy-alley.jpg"),
            asset("/portfolio/experimental/rainy-platform.jpg"),
            asset("/portfolio/experimental/astronaut-terminal.jpg"),
            asset("/portfolio/experimental/floating-field.jpg"),
            asset("/portfolio/experimental/garden-reader.jpg"),
            asset("/portfolio/experimental/hillside-postman.jpg"),
            asset("/portfolio/experimental/book-tunnel.jpg"),
            asset("/portfolio/experimental/celestial-gate.jpg"),
            asset("/portfolio/experimental/motorcycle-cloud.jpg"),
            asset("/portfolio/experimental/wasteland-dome.jpg"),
            asset("/portfolio/experimental/illustrated-reader.jpg"),
            asset("/portfolio/experimental/starship-silhouette.jpg"),
          ],
        },
        {
          slug: "cyber-poster-series",
          titleLines: ["Cyber Glitch", "Experimental Type"],
          title: "Cyber Glitch / Experimental Posters",
          category: "Poster / Experimental Style",
          year: "2025",
          description:
            "A poster group centered on cyber aesthetics, surveillance, glitches, and high-contrast typography, reorganized as a style cluster rather than a loose concept dump.",
          image: asset("/portfolio/optimized/poster-y2k-cyber.jpg"),
          gallery: [
            asset("/portfolio/optimized/poster-y2k-cyber.jpg"),
            asset("/portfolio/poster-surveillance-cyber.jpeg"),
            asset("/portfolio/optimized/poster-glitch-portrait.jpg"),
            asset("/portfolio/poster-focus.jpeg"),
          ],
        },
        {
          slug: "commercial-poster-series",
          titleLines: ["High-Saturation", "Consumer Visuals"],
          title: "High-Saturation Consumer Posters",
          category: "Poster / High-Saturation Consumer Visuals",
          year: "2025",
          description:
            "A regrouped set of beverage, food, retail, and consumer-facing posters unified by stronger color, shelf energy, and commercial saturation.",
          image: asset("/portfolio/optimized/poster-strawberry-soda.jpg"),
          gallery: [
            asset("/portfolio/optimized/poster-strawberry-soda.jpg"),
            asset("/portfolio/optimized/poster-blueberry-soda.jpg"),
            asset("/portfolio/optimized/poster-watermelon-soda.jpg"),
            asset("/portfolio/optimized/poster-pineapple-soda.jpg"),
            asset("/portfolio/posters/commercial/noodles.jpg"),
            asset("/portfolio/posters/commercial/mushroom-hotpot.jpg"),
            asset("/portfolio/posters/commercial/new-opening.jpg"),
            asset("/portfolio/posters/commercial/avon.jpg"),
            asset("/portfolio/posters/commercial/crystal.jpg"),
          ],
        },
        {
          slug: "urban-industrial-series",
          titleLines: ["Cool-Tone City", "Industrial Visuals"],
          title: "Cool-Tone City / Industrial Posters",
          category: "Poster / Urban Space / Industrial Mood",
          year: "2025",
          description:
            "City, real-estate, travel, and industrial pieces with stronger spatial and cool-tone qualities are grouped here instead of being mixed into consumer poster sets.",
          image: asset("/portfolio/optimized/poster-jiangnan-shipyard.jpg"),
          gallery: [
            asset("/portfolio/optimized/poster-jiangnan-shipyard.jpg"),
            asset("/portfolio/posters/commercial/urban-residence.jpg"),
            asset("/portfolio/posters/commercial/chengdu-tour.jpg"),
            asset("/portfolio/posters/commercial/chongqing-tour.jpg"),
          ],
        },
        {
          slug: "tibet-editorial",
          titleLines: ["Tibetan Fashion", "Editorial Stills"],
          title: "Tibetan Fashion Editorial Stills",
          category: "Fashion Stills / Tibetan Editorial",
          year: "2026",
          description:
            "A standalone editorial still-frame set built around one character, one wardrobe language, and a shared mountain setting, kept fully separate from the KUANG brand system.",
          image: asset("/portfolio/tibet-editorial/walk.jpg"),
          gallery: [
            asset("/portfolio/tibet-editorial/profile.jpg"),
            asset("/portfolio/tibet-editorial/braids.jpg"),
            asset("/portfolio/tibet-editorial/model-sheet.jpg"),
            asset("/portfolio/tibet-editorial/lake.jpg"),
            asset("/portfolio/tibet-editorial/upside-down.jpg"),
          ],
        },
        {
          slug: "portrait-poster-series",
          titleLines: ["Narrative Figures", "Trend Portraits"],
          title: "Narrative Figure / Trend Portrait Posters",
          category: "Poster / Narrative Figures / Trend Portraits",
          year: "2025",
          description:
            "A poster group organized around character presence, narrative framing, and stylized portrait energy instead of mixed topical labels.",
          image: asset("/portfolio/posters/portrait/child-magenta.jpg"),
          gallery: [
            asset("/portfolio/posters/portrait/you-me.jpg"),
            asset("/portfolio/posters/portrait/child-blue.jpg"),
            asset("/portfolio/posters/portrait/child-red.jpg"),
            asset("/portfolio/posters/portrait/night-bartender.jpg"),
            asset("/portfolio/posters/portrait/sports-legend.jpg"),
          ],
        },
      ],
    },
    about: {
      portraitImage: asset("/portfolio/about-signal.jpeg"),
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
      intro:
        "The archive is now split into two clear tracks: complete projects stay independent, while fragmented posters and motion studies are regrouped into style-based collections.",
      openCase: "Open Project",
      backHome: "Back Home",
    },
    detail: {
      overview: "Overview",
      gallery: "Frames",
      watchExternal: "Watch Full Version on Bilibili",
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
