export type Locale = "zh" | "en";

export interface ProjectClip {
  title: string;
  video?: string;
  externalUrl?: string;
  poster?: string;
}

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
  clips?: ProjectClip[];
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
    pageEyebrow: string;
    pageTitle: string;
    pageBody: string;
    availability: string;
    email?: string;
    methods: Array<{ label: string; value: string; href?: string; note?: string }>;
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
    motion: string;
    gallery: string;
    watchExternal: string;
    watchClip: string;
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
      titleStart: "AIGC",
      titleAccent: "视觉设计师",
      titleEnd: "、",
      titleLast: "品牌视觉设计师。",
      scrollHint: "向下查看影像、品牌与数字视觉项目",
      stable: "SIVAN_PORTFOLIO",
      hardwareId: "AIGC VISUAL DESIGNER",
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
          clips: [
            {
              title: "站内轻量版",
              video: asset("/portfolio/redtail/redtail-ad-web.mp4"),
              externalUrl: "https://www.bilibili.com/video/BV1dHdCBpEUe/",
              poster: asset("/portfolio/redtail/cover.jpg"),
            },
          ],
          gallery: [
            asset("/portfolio/redtail/cover.png"),
            asset("/portfolio/redtail/gun-shot.jpg"),
            asset("/portfolio/redtail/bullet-side.jpg"),
            asset("/portfolio/redtail/bullet-wrap.jpg"),
          ],
        },
        {
          slug: "mthayas-film",
          titleLines: ["藏地时尚", "影像成片"],
          title: "藏地时尚影像",
          category: "藏地时尚 / 影像成片",
          year: "2026",
          description:
            "围绕藏地服饰、自然地貌与仪式感造型展开的时尚影像，画面重点落在人物气息、风感和场域氛围的建立。",
          image: asset("/portfolio/mthayas/video-cover.jpg"),
          video: asset("/portfolio/mthayas/mthayas-film.mp4"),
          externalUrl: "https://www.bilibili.com/video/BV13SdkBLEmM/",
          clips: [
            {
              title: "正片",
              video: asset("/portfolio/mthayas/mthayas-film.mp4"),
              externalUrl: "https://www.bilibili.com/video/BV13SdkBLEmM/",
              poster: asset("/portfolio/mthayas/video-cover.jpg"),
            },
          ],
          gallery: [
            asset("/portfolio/mthayas-cover.jpg"),
            asset("/portfolio/mthayas-walk.jpeg"),
            asset("/portfolio/mthayas-lake.jpeg"),
          ],
        },
        {
          slug: "march-28-film",
          titleLines: ["藏地时尚", "3月28日"],
          title: "3月28日",
          category: "藏地时尚 / 短片变体",
          year: "2026",
          description:
            "延续同一组藏地时尚母题的短片表达，更靠近人物凝视、姿态和近景情绪，保留两种节奏不同的剪辑版本。",
          image: asset("/portfolio/march-28/cover.jpg"),
          video: asset("/portfolio/march-28/march-28.mp4"),
          externalUrl: "https://www.bilibili.com/video/BV1ZjdCBdEqG/",
          clips: [
            {
              title: "3月28日",
              video: asset("/portfolio/march-28/march-28.mp4"),
              externalUrl: "https://www.bilibili.com/video/BV1ZjdCBdEqG/",
              poster: asset("/portfolio/march-28/cover.jpg"),
            },
            {
              title: "Kling 版本",
              video: asset("/portfolio/kling/kling-film.mp4"),
              externalUrl: "https://www.bilibili.com/video/BV1kMdCBwERw/",
              poster: asset("/portfolio/kling/cover.jpg"),
            },
          ],
          gallery: [
            asset("/portfolio/march-28/cover.jpg"),
            asset("/portfolio/kling/cover.jpg"),
            asset("/portfolio/march-28/frame-1.jpg"),
            asset("/portfolio/march-28/frame-2.jpg"),
          ],
        },
        {
          slug: "tibet-editorial",
          titleLines: ["藏地时尚", "静帧图集"],
          title: "藏地时尚静帧",
          category: "藏地时尚 / 静帧图集",
          year: "2026",
          description:
            "从同一组视觉母题延展开的静帧图像，聚焦服饰层次、发型结构、雪山轮廓和人物状态之间的关系。",
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
          clips: [
            {
              title: "站内轻量版",
              video: asset("/portfolio/starship/starship-pov-web.mp4"),
              externalUrl: "https://www.bilibili.com/video/BV1GmdkB2Eto/",
              poster: asset("/portfolio/starship/video-cover.jpg"),
            },
          ],
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
            "把不同气质的动态实验集中到同一页里，按系统故障、赛博通勤、超现实抒情和空间奇观四种视觉语言展开。",
          image: asset("/portfolio/experimental/crowd-digitized.jpg"),
          clips: [
            {
              title: "系统阈值 / 人群数字化",
              video: asset("/portfolio/experimental/videos/crowd-digitized.mp4"),
              poster: asset("/portfolio/experimental/crowd-digitized.jpg"),
            },
            {
              title: "系统阈值 / 消失",
              video: asset("/portfolio/experimental/videos/system-vanishing.mp4"),
              poster: asset("/portfolio/experimental/error-quarantine.jpg"),
            },
            {
              title: "系统阈值 / 数字化",
              video: asset("/portfolio/experimental/videos/system-digitizing.mp4"),
              poster: asset("/portfolio/experimental/crowd-digitized.jpg"),
            },
            {
              title: "赛博通勤 / 机车冲击",
              video: asset("/portfolio/experimental/videos/motorcycle-impact.mp4"),
              poster: asset("/portfolio/experimental/motorcycle-cloud.jpg"),
            },
            {
              title: "超现实抒情 / 漂浮人物",
              video: asset("/portfolio/experimental/videos/woman-floating.mp4"),
              poster: asset("/portfolio/experimental/floating-field.jpg"),
            },
            {
              title: "空间奇观 / 穿越镜头",
              video: asset("/portfolio/experimental/videos/camera-pass-through.mp4"),
              poster: asset("/portfolio/experimental/celestial-gate.jpg"),
            },
            {
              title: "插画动态 / 读信女孩",
              video: asset("/portfolio/experimental/videos/illustrated-reader.mp4"),
              poster: asset("/portfolio/experimental/illustrated-reader.jpg"),
            },
            {
              title: "空间光效 / 翻书丁达尔",
              video: asset("/portfolio/experimental/videos/book-tyndall.mp4"),
              poster: asset("/portfolio/experimental/book-tunnel.jpg"),
            },
          ],
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
            "围绕赛博、监控、故障和高对比排版展开的一组海报，重点是图像压迫感、文字张力和实验气质。",
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
            "以饮品、餐饮、零售与消费品图像构成的一组高饱和商业海报，强调色彩冲击、货架感和消费欲望。",
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
            "以城市、地产、文旅和工业主题为基础的一组冷调海报，画面重心放在空间感、建筑感和金属气息。",
          image: asset("/portfolio/optimized/poster-jiangnan-shipyard.jpg"),
          gallery: [
            asset("/portfolio/optimized/poster-jiangnan-shipyard.jpg"),
            asset("/portfolio/posters/commercial/urban-residence.jpg"),
            asset("/portfolio/posters/commercial/chengdu-tour.jpg"),
            asset("/portfolio/posters/commercial/chongqing-tour.jpg"),
          ],
        },
        {
          slug: "portrait-poster-series",
          titleLines: ["人物叙事", "潮流肖像"],
          title: "人物叙事 / 潮流肖像海报",
          category: "海报 / 人物叙事 / 潮流肖像",
          year: "2025",
          description:
            "以人物主体、表情张力和画面叙事为核心的一组肖像海报，整体更靠近潮流摄影和角色化表达。",
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
      sideLabel: "视觉档案_01 // 2026",
      eyebrow: "// AIGC 视觉设计师 / 品牌视觉设计师",
      heading: {
        before: "品牌",
        normal: "视觉",
        middle: "、AIGC 影像与",
        accent: "数字叙事",
        after: "。",
      },
      body:
        "姚茜文是一名 AIGC 视觉设计师、品牌视觉设计师，主要处理品牌视觉、影像概念和数字风格表达相关的项目。她擅长从视觉气质出发，建立主画面、镜头方向与系统化延展，让作品既有创意辨识度，也具备商业展示与传播的完成度。目前重点关注品牌视觉系统、短片概念与镜头气质，以及 UI 系统视觉设计。",
      disciplinesLabel: "方向",
      disciplines: ["品牌视觉系统", "短片概念与镜头气质", "UI 系统视觉设计"],
      focusLabel: "近期关注",
      focus: ["数字风与超前艺术表达", "广告 / 影像项目合作", "品牌视觉与内容延展"],
    },
    contact: {
      heading: "如果你在寻找更有辨识度的视觉表达，欢迎联系我。",
      primaryCta: "进入联系方式",
      secondaryCta: "查看合作渠道",
      pageEyebrow: "// contact / collaboration",
      pageTitle: "联系与合作",
      pageBody:
        "目前开放全职机会，也接受品牌视觉、广告影像与创意合作项目。你可以通过邮件或社交平台联系我，简单说明项目方向、合作需求或岗位信息即可。",
      availability: "优先方向：全职 / 品牌项目合作 / 广告与影像项目合作",
      methods: [
        {
          label: "邮箱",
          value: "xanven@foxmail.com",
          href: "mailto:xanven@foxmail.com",
          note: "建议用于正式合作、岗位沟通与作品索取",
        },
        {
          label: "微信",
          value: "Yaooooooxw",
          note: "可直接通过微信添加，适合更快沟通合作与岗位机会",
        },
        {
          label: "小红书",
          value: "@待补充",
        },
        {
          label: "Instagram",
          value: "@待补充",
        },
      ],
      footer: "Sivan Portfolio © 2026。",
      socials: [
        { label: "海报设计" },
        { label: "AIGC 视频" },
        { label: "品牌项目" },
      ],
    },
    archive: {
      title: "作品档案",
      intro:
        "品牌、广告与影像项目独立展开，静帧、海报和动态实验则顺着各自的视觉语言进入不同系列。",
      openCase: "进入项目",
      backHome: "返回首页",
    },
    detail: {
      overview: "项目简介",
      motion: "动态版本",
      gallery: "项目图像",
      watchExternal: "去 B 站看完整版",
      watchClip: "查看该版本",
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
      titleStart: "AIGC",
      titleAccent: "Visual Designer",
      titleEnd: "&",
      titleLast: "Brand Visual Designer.",
      scrollHint: "Scroll for moving image, brand, and digital visual work",
      stable: "SIVAN_PORTFOLIO",
      hardwareId: "AIGC VISUAL DESIGNER",
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
          clips: [
            {
              title: "Lightweight Site Cut",
              video: asset("/portfolio/redtail/redtail-ad-web.mp4"),
              externalUrl: "https://www.bilibili.com/video/BV1dHdCBpEUe/",
              poster: asset("/portfolio/redtail/cover.jpg"),
            },
          ],
          gallery: [
            asset("/portfolio/redtail/cover.png"),
            asset("/portfolio/redtail/gun-shot.jpg"),
            asset("/portfolio/redtail/bullet-side.jpg"),
            asset("/portfolio/redtail/bullet-wrap.jpg"),
          ],
        },
        {
          slug: "mthayas-film",
          titleLines: ["Tibetan Fashion", "Film"],
          title: "Tibetan Fashion Film",
          category: "Tibetan Fashion / Film",
          year: "2026",
          description:
            "A fashion film built around Tibetan-inspired styling, natural terrain, and ritualized atmosphere, with emphasis on presence, wind, and spatial mood.",
          image: asset("/portfolio/mthayas/video-cover.jpg"),
          video: asset("/portfolio/mthayas/mthayas-film.mp4"),
          externalUrl: "https://www.bilibili.com/video/BV13SdkBLEmM/",
          clips: [
            {
              title: "Main Cut",
              video: asset("/portfolio/mthayas/mthayas-film.mp4"),
              externalUrl: "https://www.bilibili.com/video/BV13SdkBLEmM/",
              poster: asset("/portfolio/mthayas/video-cover.jpg"),
            },
          ],
          gallery: [
            asset("/portfolio/mthayas-cover.jpg"),
            asset("/portfolio/mthayas-walk.jpeg"),
            asset("/portfolio/mthayas-lake.jpeg"),
          ],
        },
        {
          slug: "march-28-film",
          titleLines: ["Tibetan Fashion", "March 28"],
          title: "March 28",
          category: "Tibetan Fashion / Film Variation",
          year: "2026",
          description:
            "A variation within the same Tibetan-fashion visual world, leaning further into close-up emotion, stillness, and a more intimate pacing across two edits.",
          image: asset("/portfolio/march-28/cover.jpg"),
          video: asset("/portfolio/march-28/march-28.mp4"),
          externalUrl: "https://www.bilibili.com/video/BV1ZjdCBdEqG/",
          clips: [
            {
              title: "March 28",
              video: asset("/portfolio/march-28/march-28.mp4"),
              externalUrl: "https://www.bilibili.com/video/BV1ZjdCBdEqG/",
              poster: asset("/portfolio/march-28/cover.jpg"),
            },
            {
              title: "Kling Cut",
              video: asset("/portfolio/kling/kling-film.mp4"),
              externalUrl: "https://www.bilibili.com/video/BV1kMdCBwERw/",
              poster: asset("/portfolio/kling/cover.jpg"),
            },
          ],
          gallery: [
            asset("/portfolio/march-28/cover.jpg"),
            asset("/portfolio/kling/cover.jpg"),
            asset("/portfolio/march-28/frame-1.jpg"),
            asset("/portfolio/march-28/frame-2.jpg"),
          ],
        },
        {
          slug: "tibet-editorial",
          titleLines: ["Tibetan Fashion", "Editorial Stills"],
          title: "Tibetan Fashion Editorial",
          category: "Tibetan Fashion / Editorial Stills",
          year: "2026",
          description:
            "A still-image extension of the same visual motif, focused on garment layers, braided silhouettes, mountain contours, and the subject's posture.",
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
          clips: [
            {
              title: "Lightweight Site Cut",
              video: asset("/portfolio/starship/starship-pov-web.mp4"),
              externalUrl: "https://www.bilibili.com/video/BV1GmdkB2Eto/",
              poster: asset("/portfolio/starship/video-cover.jpg"),
            },
          ],
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
            "A collection of motion studies arranged by visual language rather than file names, moving across system glitches, cyber commuting, surreal lyricism, and spatial spectacle.",
          image: asset("/portfolio/experimental/crowd-digitized.jpg"),
          clips: [
            {
              title: "System Threshold / Digitized Crowd",
              video: asset("/portfolio/experimental/videos/crowd-digitized.mp4"),
              poster: asset("/portfolio/experimental/crowd-digitized.jpg"),
            },
            {
              title: "System Threshold / Vanishing",
              video: asset("/portfolio/experimental/videos/system-vanishing.mp4"),
              poster: asset("/portfolio/experimental/error-quarantine.jpg"),
            },
            {
              title: "System Threshold / Digitizing",
              video: asset("/portfolio/experimental/videos/system-digitizing.mp4"),
              poster: asset("/portfolio/experimental/crowd-digitized.jpg"),
            },
            {
              title: "Cyber Commuting / Motorcycle Impact",
              video: asset("/portfolio/experimental/videos/motorcycle-impact.mp4"),
              poster: asset("/portfolio/experimental/motorcycle-cloud.jpg"),
            },
            {
              title: "Surreal Lyricism / Floating Figure",
              video: asset("/portfolio/experimental/videos/woman-floating.mp4"),
              poster: asset("/portfolio/experimental/floating-field.jpg"),
            },
            {
              title: "Spatial Spectacle / Camera Pass-Through",
              video: asset("/portfolio/experimental/videos/camera-pass-through.mp4"),
              poster: asset("/portfolio/experimental/celestial-gate.jpg"),
            },
            {
              title: "Illustrated Motion / Reading Girl",
              video: asset("/portfolio/experimental/videos/illustrated-reader.mp4"),
              poster: asset("/portfolio/experimental/illustrated-reader.jpg"),
            },
            {
              title: "Spatial Light / Book Tyndall",
              video: asset("/portfolio/experimental/videos/book-tyndall.mp4"),
              poster: asset("/portfolio/experimental/book-tunnel.jpg"),
            },
          ],
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
            "A poster group centered on cyber aesthetics, surveillance, glitches, and high-contrast typography, driven by image pressure and experimental tension.",
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
            "A set of beverage, food, retail, and consumer-facing posters unified by stronger color, shelf energy, and direct commercial punch.",
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
            "A cool-toned group of city, real-estate, travel, and industrial posters with a stronger emphasis on space, structure, and metallic atmosphere.",
          image: asset("/portfolio/optimized/poster-jiangnan-shipyard.jpg"),
          gallery: [
            asset("/portfolio/optimized/poster-jiangnan-shipyard.jpg"),
            asset("/portfolio/posters/commercial/urban-residence.jpg"),
            asset("/portfolio/posters/commercial/chengdu-tour.jpg"),
            asset("/portfolio/posters/commercial/chongqing-tour.jpg"),
          ],
        },
        {
          slug: "portrait-poster-series",
          titleLines: ["Narrative Figures", "Trend Portraits"],
          title: "Narrative Figure / Trend Portrait Posters",
          category: "Poster / Narrative Figures / Trend Portraits",
          year: "2025",
          description:
            "A portrait-driven poster group built around subject presence, narrative framing, and stylized fashion-photography energy.",
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
      eyebrow: "// AIGC VISUAL DESIGNER / BRAND VISUAL DESIGNER",
      heading: {
        before: "Brand",
        normal: "visuals",
        middle: "with AIGC moving image and",
        accent: "digital narratives",
        after: ".",
      },
      body:
        "Yaoxiwen is an AIGC visual designer and brand visual designer working across brand systems, moving-image concepts, and digitally driven visual expression. She builds key visuals, cinematic direction, and scalable design extensions so the work carries both a stronger creative identity and clearer commercial presentation. Her current focus is brand visual systems, short-film concepts and shot language, and UI visual systems.",
      disciplinesLabel: "Fields",
      disciplines: ["Brand Visual Systems", "Short-Film Concepts & Shot Language", "UI Visual Systems"],
      focusLabel: "Current Focus",
      focus: ["Futuristic Digital Aesthetics", "Advertising & Moving-Image Collaborations", "Brand Visual Extensions"],
    },
    contact: {
      heading: "If you need more distinctive visual work, let's talk.",
      primaryCta: "Open Contact Page",
      secondaryCta: "View Contact Channels",
      pageEyebrow: "// contact / collaboration",
      pageTitle: "Contact & Collaboration",
      pageBody:
        "I am currently open to full-time roles as well as branding, advertising film, and creative visual collaborations. Reach out by email or social platforms with your brief, role, or timeline.",
      availability: "Open to full-time roles, branding projects, and advertising or moving-image collaborations",
      methods: [
        {
          label: "Email",
          value: "xanven@foxmail.com",
          href: "mailto:xanven@foxmail.com",
          note: "Best for formal inquiries, roles, and project discussions",
        },
        {
          label: "WeChat",
          value: "Yaooooooxw",
          note: "Use WeChat for faster communication on collaborations and roles",
        },
        {
          label: "Xiaohongshu",
          value: "@to-be-added",
        },
        {
          label: "Instagram",
          value: "@to-be-added",
        },
      ],
      footer: "Sivan Portfolio © 2026.",
      socials: [
        { label: "Poster Design" },
        { label: "AIGC Video" },
        { label: "Brand Projects" },
      ],
    },
    archive: {
      title: "Work Archive",
      intro:
        "Brand, advertising, and film projects unfold as independent cases, while stills, posters, and motion studies move through their own visual series.",
      openCase: "Open Project",
      backHome: "Back Home",
    },
    detail: {
      overview: "Overview",
      motion: "Motion Versions",
      gallery: "Frames",
      watchExternal: "Watch Full Version on Bilibili",
      watchClip: "Open Version",
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

  if (pathname === "/connect") {
    return `${copy.contact.pageTitle} · ${copy.meta.title}`;
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
