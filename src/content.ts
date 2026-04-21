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
      titleStart: "做影像，",
      titleAccent: "也做品牌视觉",
      titleEnd: "",
      titleLast: "。",
      scrollHint: "往下看，会更快知道我在意什么。",
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
            "我用矿物感和冷白材质，做了一套从识别到包装都能落地的品牌视觉。",
          image: asset("/portfolio/kuang/cover.jpg"),
          clips: [
            {
              title: "饰品宣发片 / 成片",
              video: asset("/portfolio/kuang/film/kuang-jewelry-film.mp4"),
              poster: asset("/portfolio/kuang/film/cover.jpg"),
            },
          ],
          gallery: [
            asset("/portfolio/kuang/intro.jpg"),
            asset("/portfolio/kuang/logo-system.jpg"),
            asset("/portfolio/kuang/type-system.jpg"),
            asset("/portfolio/kuang/color-system.jpg"),
            asset("/portfolio/kuang/packaging-structure.jpg"),
            asset("/portfolio/kuang/store.jpg"),
            asset("/portfolio/kuang/website.jpg"),
            asset("/portfolio/kuang/brand-book.jpg"),
            asset("/portfolio/kuang/display-system.jpg"),
            asset("/portfolio/kuang/product-card.jpg"),
            asset("/portfolio/kuang/packaging-render.jpg"),
            asset("/portfolio/kuang/story-wall.jpg"),
            asset("/portfolio/kuang/metro-ad.jpg"),
            asset("/portfolio/kuang/magazine-ad.jpg"),
            asset("/portfolio/kuang/shopping-bag.jpg"),
            asset("/portfolio/kuang/gift-box.jpg"),
            asset("/portfolio/kuang/film/cover.jpg"),
            asset("/portfolio/kuang/film/still-1.jpg"),
            asset("/portfolio/kuang/film/still-2.jpg"),
            asset("/portfolio/kuang/film/model-sheet.jpg"),
          ],
        },
        {
          slug: "redtail-intercept",
          titleLines: ["绝对拦截", "广告项目"],
          title: "赤尾大广赛｜绝对拦截",
          category: "广告 / 比赛项目",
          year: "2026",
          description:
            "我把拦截感和武器动势压进一支高压广告短片里，重点是成片节奏和关键镜头。",
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
            {
              title: "创意片版本",
              video: asset("/portfolio/redtail/creative-cut-web.mp4"),
              poster: asset("/portfolio/redtail/brand-mark.jpg"),
            },
          ],
          gallery: [
            asset("/portfolio/redtail/cover.png"),
            asset("/portfolio/redtail/gun-shot.jpg"),
            asset("/portfolio/redtail/bullet-side.jpg"),
            asset("/portfolio/redtail/bullet-wrap.jpg"),
            asset("/portfolio/redtail/brand-mark.jpg"),
            asset("/portfolio/redtail/membrane-wrap.jpg"),
            asset("/portfolio/redtail/background-match.jpg"),
            asset("/portfolio/redtail/final-frame.jpg"),
          ],
        },
        {
          slug: "mthayas-film",
          titleLines: ["藏地时尚", "影像成片"],
          title: "藏地时尚影像",
          category: "藏地时尚 / 影像成片",
          year: "2026",
          description:
            "我把藏地服饰、风感和人物气息收进一支时尚影像里，重点是氛围和人物状态。",
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
            asset("/portfolio/mthayas/stills/film-cover.jpg"),
            asset("/portfolio/mthayas/stills/closeup.jpg"),
            asset("/portfolio/mthayas/stills/snow-walk.jpg"),
            asset("/portfolio/mthayas/stills/reflection.jpg"),
          ],
        },
        {
          slug: "march-28-film",
          titleLines: ["藏地时尚", "3月28日"],
          title: "3月28日",
          category: "藏地时尚 / 短片变体",
          year: "2026",
          description:
            "这是同一组母题的另一版短片，我把镜头拉得更近，也保留了多种不同节奏的剪辑版本。",
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
            {
              title: "替代剪辑版",
              video: asset("/portfolio/march-28/march-28-alt-web.mp4"),
              poster: asset("/portfolio/march-28/cover.jpg"),
            },
          ],
          gallery: [
            asset("/portfolio/march-28/cover.jpg"),
            asset("/portfolio/kling/cover.jpg"),
            asset("/portfolio/march-28/frame-1.jpg"),
            asset("/portfolio/march-28/frame-2.jpg"),
            asset("/portfolio/redtail/brand-mark.jpg"),
            asset("/portfolio/redtail/final-frame.jpg"),
          ],
        },
        {
          slug: "tibet-editorial",
          titleLines: ["藏地时尚", "静帧图集"],
          title: "藏地时尚静帧",
          category: "藏地时尚 / 静帧图集",
          year: "2026",
          description:
            "我把同一组时尚影像拆成静帧，去看服饰层次、发型结构和人物状态。",
          image: asset("/portfolio/tibet-editorial/walk.jpg"),
          gallery: [
            asset("/portfolio/tibet-editorial/profile.jpg"),
            asset("/portfolio/tibet-editorial/braids.jpg"),
            asset("/portfolio/tibet-editorial/model-sheet.jpg"),
            asset("/portfolio/tibet-editorial/lake.jpg"),
            asset("/portfolio/tibet-editorial/upside-down.jpg"),
            asset("/portfolio/tibet-editorial/opening-frame.jpg"),
            asset("/portfolio/tibet-editorial/bodnath.jpg"),
            asset("/portfolio/tibet-editorial/video-cover.jpg"),
          ],
        },
        {
          slug: "starship-pov",
          titleLines: ["飞船起飞", "POV 视频"],
          title: "赛博朋克飞船起飞 POV",
          category: "视频概念 / 科幻 POV",
          year: "2025",
          description:
            "我用第一视角做了一段飞船起飞概念，重点是城市层级和起飞瞬间的压迫感。",
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
            "我把几组动态实验放在一起，集中看故障感、通勤感和超现实镜头的差别。",
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
            {
              title: "终端参考 / CRT 启动",
              video: asset("/portfolio/experimental/videos/crt-terminal.mp4"),
              poster: asset("/portfolio/experimental/crt-threshold.jpg"),
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
            asset("/portfolio/experimental/archive-sheet.jpg"),
          ],
        },
        {
          slug: "cyber-poster-series",
          titleLines: ["赛博故障", "实验排版"],
          title: "赛博故障 / 实验排版海报",
          category: "海报 / 实验风格",
          year: "2025",
          description:
            "我把赛博、监控和故障感压进一组海报里，重点是图像张力和字的攻击性。",
          image: asset("/portfolio/optimized/poster-y2k-cyber.jpg"),
          gallery: [
            asset("/portfolio/optimized/poster-y2k-cyber.jpg"),
            asset("/portfolio/poster-surveillance-cyber.jpeg"),
            asset("/portfolio/optimized/poster-glitch-portrait.jpg"),
            asset("/portfolio/poster-focus.jpeg"),
            asset("/portfolio/posters/experimental/avant-garde.jpg"),
            asset("/portfolio/posters/experimental/editorial-layers.jpg"),
            asset("/portfolio/posters/experimental/cyber-grid.jpg"),
            asset("/portfolio/posters/experimental/metal-figure.jpg"),
          ],
        },
        {
          slug: "commercial-poster-series",
          titleLines: ["高饱和消费", "视觉合集"],
          title: "高饱和消费视觉海报",
          category: "海报 / 高饱和消费视觉",
          year: "2025",
          description:
            "我用高饱和色彩做了一组消费海报，重点是货架感和直接的商业冲击。",
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
            asset("/portfolio/posters/commercial/cabbage-food.jpg"),
            asset("/portfolio/posters/commercial/fruit-food.jpg"),
            asset("/portfolio/posters/commercial/hotpot-base.jpg"),
            asset("/portfolio/posters/commercial/beef-food.jpg"),
            asset("/portfolio/posters/commercial/cat-snack.jpg"),
          ],
        },
        {
          slug: "urban-industrial-series",
          titleLines: ["冷调城市", "工业视觉"],
          title: "冷调城市 / 工业视觉海报",
          category: "海报 / 城市空间 / 工业冷调",
          year: "2025",
          description:
            "我把城市、工业和建筑感收进一组冷调海报里，重点是空间和金属气息。",
          image: asset("/portfolio/optimized/poster-jiangnan-shipyard.jpg"),
          gallery: [
            asset("/portfolio/optimized/poster-jiangnan-shipyard.jpg"),
            asset("/portfolio/posters/commercial/urban-residence.jpg"),
            asset("/portfolio/posters/commercial/chengdu-tour.jpg"),
            asset("/portfolio/posters/commercial/chongqing-tour.jpg"),
            asset("/portfolio/posters/industrial/urban-residence-alt.jpg"),
            asset("/portfolio/posters/industrial/blue-structure.jpg"),
            asset("/portfolio/posters/industrial/jiangnan-shipyard-alt.jpg"),
          ],
        },
        {
          slug: "portrait-poster-series",
          titleLines: ["人物叙事", "潮流肖像"],
          title: "人物叙事 / 潮流肖像海报",
          category: "海报 / 人物叙事 / 潮流肖像",
          year: "2025",
          description:
            "我用人物主体和表情张力做了一组肖像海报，整体更靠近潮流摄影的语气。",
          image: asset("/portfolio/posters/portrait/child-magenta.jpg"),
          gallery: [
            asset("/portfolio/posters/portrait/you-me.jpg"),
            asset("/portfolio/posters/portrait/child-blue.jpg"),
            asset("/portfolio/posters/portrait/child-red.jpg"),
            asset("/portfolio/posters/portrait/night-bartender.jpg"),
            asset("/portfolio/posters/portrait/sports-legend.jpg"),
            asset("/portfolio/posters/portrait/sports-legend-alt.jpg"),
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
        before: "图像",
        normal: "、镜头",
        middle: "与",
        accent: "识别度",
        after: "。",
      },
      body:
        "我偏爱有情绪的画面，也迷恋清楚的视觉系统。图像、镜头、排版和界面，在我这里不是分开的东西。它们最后都该长成一种能被记住的语言。",
      disciplinesLabel: "方向",
      disciplines: ["品牌视觉系统", "短片概念与镜头气质", "UI 系统视觉设计"],
      focusLabel: "近期关注",
      focus: ["数字风与超前艺术表达", "广告 / 影像项目合作", "品牌视觉与内容延展"],
    },
    contact: {
      heading: "有项目，直接联系我。",
      primaryCta: "联系方式",
      secondaryCta: "合作入口",
      pageEyebrow: "// contact / collaboration",
      pageTitle: "联系与合作",
      pageBody: "我接全职，也接品牌视觉和影像合作。",
      availability: "全职 / 品牌合作 / 影像合作",
      methods: [
        {
          label: "邮箱",
          value: "xanven@foxmail.com",
          href: "mailto:xanven@foxmail.com",
          note: "正式合作直接发邮件",
        },
        {
          label: "微信",
          value: "Yaooooooxw",
          note: "聊得快就加微信",
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
      titleStart: "I make moving image,",
      titleAccent: "and brand visuals too",
      titleEnd: "",
      titleLast: ".",
      scrollHint: "Scroll down and you will see what I care about.",
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
          clips: [
            {
              title: "Jewelry Promo Film / Main Cut",
              video: asset("/portfolio/kuang/film/kuang-jewelry-film.mp4"),
              poster: asset("/portfolio/kuang/film/cover.jpg"),
            },
          ],
          gallery: [
            asset("/portfolio/kuang/intro.jpg"),
            asset("/portfolio/kuang/logo-system.jpg"),
            asset("/portfolio/kuang/type-system.jpg"),
            asset("/portfolio/kuang/color-system.jpg"),
            asset("/portfolio/kuang/packaging-structure.jpg"),
            asset("/portfolio/kuang/store.jpg"),
            asset("/portfolio/kuang/website.jpg"),
            asset("/portfolio/kuang/brand-book.jpg"),
            asset("/portfolio/kuang/display-system.jpg"),
            asset("/portfolio/kuang/product-card.jpg"),
            asset("/portfolio/kuang/packaging-render.jpg"),
            asset("/portfolio/kuang/story-wall.jpg"),
            asset("/portfolio/kuang/metro-ad.jpg"),
            asset("/portfolio/kuang/magazine-ad.jpg"),
            asset("/portfolio/kuang/shopping-bag.jpg"),
            asset("/portfolio/kuang/gift-box.jpg"),
            asset("/portfolio/kuang/film/cover.jpg"),
            asset("/portfolio/kuang/film/still-1.jpg"),
            asset("/portfolio/kuang/film/still-2.jpg"),
            asset("/portfolio/kuang/film/model-sheet.jpg"),
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
            {
              title: "Creative Cut",
              video: asset("/portfolio/redtail/creative-cut-web.mp4"),
              poster: asset("/portfolio/redtail/brand-mark.jpg"),
            },
          ],
          gallery: [
            asset("/portfolio/redtail/cover.png"),
            asset("/portfolio/redtail/gun-shot.jpg"),
            asset("/portfolio/redtail/bullet-side.jpg"),
            asset("/portfolio/redtail/bullet-wrap.jpg"),
            asset("/portfolio/redtail/brand-mark.jpg"),
            asset("/portfolio/redtail/membrane-wrap.jpg"),
            asset("/portfolio/redtail/background-match.jpg"),
            asset("/portfolio/redtail/final-frame.jpg"),
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
            asset("/portfolio/mthayas/stills/film-cover.jpg"),
            asset("/portfolio/mthayas/stills/closeup.jpg"),
            asset("/portfolio/mthayas/stills/snow-walk.jpg"),
            asset("/portfolio/mthayas/stills/reflection.jpg"),
          ],
        },
        {
          slug: "march-28-film",
          titleLines: ["Tibetan Fashion", "March 28"],
          title: "March 28",
          category: "Tibetan Fashion / Film Variation",
          year: "2026",
          description:
            "A variation within the same visual world, leaning further into close-up emotion, stillness, and multiple alternate edits with different pacing.",
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
            {
              title: "Alternate Edit",
              video: asset("/portfolio/march-28/march-28-alt-web.mp4"),
              poster: asset("/portfolio/march-28/cover.jpg"),
            },
          ],
          gallery: [
            asset("/portfolio/march-28/cover.jpg"),
            asset("/portfolio/kling/cover.jpg"),
            asset("/portfolio/march-28/frame-1.jpg"),
            asset("/portfolio/march-28/frame-2.jpg"),
            asset("/portfolio/redtail/brand-mark.jpg"),
            asset("/portfolio/redtail/final-frame.jpg"),
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
            asset("/portfolio/tibet-editorial/opening-frame.jpg"),
            asset("/portfolio/tibet-editorial/bodnath.jpg"),
            asset("/portfolio/tibet-editorial/video-cover.jpg"),
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
            {
              title: "CRT Reference / Terminal Boot",
              video: asset("/portfolio/experimental/videos/crt-terminal.mp4"),
              poster: asset("/portfolio/experimental/crt-threshold.jpg"),
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
            asset("/portfolio/experimental/archive-sheet.jpg"),
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
            asset("/portfolio/posters/experimental/avant-garde.jpg"),
            asset("/portfolio/posters/experimental/editorial-layers.jpg"),
            asset("/portfolio/posters/experimental/cyber-grid.jpg"),
            asset("/portfolio/posters/experimental/metal-figure.jpg"),
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
            asset("/portfolio/posters/commercial/cabbage-food.jpg"),
            asset("/portfolio/posters/commercial/fruit-food.jpg"),
            asset("/portfolio/posters/commercial/hotpot-base.jpg"),
            asset("/portfolio/posters/commercial/beef-food.jpg"),
            asset("/portfolio/posters/commercial/cat-snack.jpg"),
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
            asset("/portfolio/posters/industrial/urban-residence-alt.jpg"),
            asset("/portfolio/posters/industrial/blue-structure.jpg"),
            asset("/portfolio/posters/industrial/jiangnan-shipyard-alt.jpg"),
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
            asset("/portfolio/posters/portrait/sports-legend-alt.jpg"),
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
        before: "Images,",
        normal: "shot language",
        middle: "and",
        accent: "recognition",
        after: ".",
      },
      body:
        "I like images with mood, and I am equally drawn to visual systems that stay clear. Image-making, shot language, typography, and interface are not separate things to me. They should all grow into something recognisable.",
      disciplinesLabel: "Fields",
      disciplines: ["Brand Visual Systems", "Short-Film Concepts & Shot Language", "UI Visual Systems"],
      focusLabel: "Current Focus",
      focus: ["Futuristic Digital Aesthetics", "Advertising & Moving-Image Collaborations", "Brand Visual Extensions"],
    },
    contact: {
      heading: "If you have a project, contact me.",
      primaryCta: "Contact",
      secondaryCta: "Channels",
      pageEyebrow: "// contact / collaboration",
      pageTitle: "Contact & Collaboration",
      pageBody:
        "I am open to full-time roles, branding work, and moving-image collaborations.",
      availability: "Full-time / Branding / Moving-image",
      methods: [
        {
          label: "Email",
          value: "xanven@foxmail.com",
          href: "mailto:xanven@foxmail.com",
          note: "Best for formal inquiries",
        },
        {
          label: "WeChat",
          value: "Yaooooooxw",
          note: "Faster for direct contact",
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
