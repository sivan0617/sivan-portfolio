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
          titleLines: ["品牌设计：", "礦-Kuang"],
          title: "品牌设计：礦-Kuang",
          category: "品牌设计：礦-kuang",
          year: "2026",
          description:
            "按你本地的品牌分类收拢后，这一组完整放品牌系统、包装延展、空间应用和饰品宣发静帧。",
          image: asset("/portfolio/kuang/cover.jpg"),
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
          slug: "mthayas-film",
          titleLines: ["藏x水晶", "服饰宣发片"],
          title: "藏x水晶服饰宣发片",
          category: "藏x水晶服饰宣发片",
          year: "2026",
          description:
            "这组现在按你的原文件夹合并，包含主成片、变体剪辑和静帧图，统一归到同一个项目里。",
          image: asset("/portfolio/mthayas/video-cover.jpg"),
          video: asset("/portfolio/mthayas/mthayas-film.mp4"),
          externalUrl: "https://www.bilibili.com/video/BV13SdkBLEmM/",
          clips: [
            {
              title: "成片",
              video: asset("/portfolio/mthayas/mthayas-film.mp4"),
              externalUrl: "https://www.bilibili.com/video/BV13SdkBLEmM/",
              poster: asset("/portfolio/mthayas/video-cover.jpg"),
            },
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
            asset("/portfolio/mthayas-cover.jpg"),
            asset("/portfolio/mthayas/video-cover.jpg"),
            asset("/portfolio/mthayas-walk.jpeg"),
            asset("/portfolio/mthayas-lake.jpeg"),
            asset("/portfolio/mthayas/stills/film-cover.jpg"),
            asset("/portfolio/mthayas/stills/closeup.jpg"),
            asset("/portfolio/mthayas/stills/snow-walk.jpg"),
            asset("/portfolio/mthayas/stills/reflection.jpg"),
            asset("/portfolio/march-28/cover.jpg"),
            asset("/portfolio/march-28/frame-1.jpg"),
            asset("/portfolio/march-28/frame-2.jpg"),
            asset("/portfolio/kling/cover.jpg"),
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
          slug: "redtail-intercept",
          titleLines: ["绝对拦截", "广告项目"],
          title: "赤尾大广赛｜绝对拦截",
          category: "赤尾大广赛",
          year: "2026",
          description:
            "这一类按你的比赛文件夹展开，主广告片之外，把关键帧、标识生成和参考图都收进来了。",
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
            asset("/portfolio/redtail/brand-mark.jpg"),
            asset("/portfolio/redtail/membrane-wrap.jpg"),
            asset("/portfolio/redtail/background-match.jpg"),
            asset("/portfolio/redtail/final-frame.jpg"),
          ],
        },
        {
          slug: "experimental-motion-atlas",
          titleLines: ["实验性", "短片作品"],
          title: "实验性短片作品",
          category: "实验性短片作品",
          year: "2025",
          description:
            "这里按你本地实验短片文件夹归并，放的是已经成型的动态实验、概念片和可直接代表气质的片段。",
          image: asset("/portfolio/experimental/crowd-digitized.jpg"),
          clips: [
            {
              title: "飞船起飞 POV",
              video: asset("/portfolio/starship/starship-pov-web.mp4"),
              externalUrl: "https://www.bilibili.com/video/BV1GmdkB2Eto/",
              poster: asset("/portfolio/starship/video-cover.jpg"),
            },
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
            asset("/portfolio/experimental/archive-sheet.jpg"),
            asset("/portfolio/optimized/video-starship-pov-cover.jpg"),
            asset("/portfolio/video-sci-fi-city.jpeg"),
            asset("/portfolio/video-station-cover.png"),
          ],
        },
        {
          slug: "starship-pov",
          titleLines: ["动效", "参考"],
          title: "动效参考",
          category: "动效参考",
          year: "2025",
          description:
            "这个条目专门留给你文件夹里的动效参考，先用现有参考帧和系统画面归档，不再额外塞重视频。",
          image: asset("/portfolio/experimental/crt-threshold.jpg"),
          gallery: [
            asset("/portfolio/experimental/crt-threshold.jpg"),
            asset("/portfolio/experimental/archive-sheet.jpg"),
            asset("/portfolio/experimental/astronaut-terminal.jpg"),
            asset("/portfolio/experimental/error-quarantine.jpg"),
            asset("/portfolio/experimental/paper-collapse.jpg"),
          ],
        },
        {
          slug: "commercial-poster-series",
          titleLines: ["商业", "海报"],
          title: "海报 / 商业海报",
          category: "海报 / 商业海报",
          year: "2025",
          description:
            "这里对齐你桌面里的商业海报文件夹，消费品、食品、电商物料和促销画面统一放这一组。",
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
          slug: "cyber-poster-series",
          titleLines: ["实验艺术", "海报"],
          title: "海报 / 实验艺术海报",
          category: "海报 / 实验艺术海报",
          year: "2025",
          description:
            "这一组对应你的实验艺术海报文件夹，重点是故障感、Y2K、监控气质和更偏概念的排版海报。",
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
          slug: "urban-industrial-series",
          titleLines: ["海报", "其他"],
          title: "海报 / 其他",
          category: "海报 / 其他",
          year: "2025",
          description:
            "这个条目收你海报文件夹里的其他类，包含工业空间、城市建筑和人物导向的单张海报。",
          image: asset("/portfolio/optimized/poster-jiangnan-shipyard.jpg"),
          gallery: [
            asset("/portfolio/optimized/poster-jiangnan-shipyard.jpg"),
            asset("/portfolio/posters/industrial/jiangnan-shipyard-alt.jpg"),
            asset("/portfolio/posters/industrial/urban-residence-alt.jpg"),
            asset("/portfolio/posters/industrial/blue-structure.jpg"),
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
        "现在按你本地整理后的分类展开：品牌设计、宣发片、比赛项目、实验短片、动效参考和海报分类都各自归档。",
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
          titleLines: ["Brand Design:", "KUANG"],
          title: "Brand Design: KUANG",
          category: "Brand Design / KUANG",
          year: "2026",
          description:
            "Re-grouped to match your local brand folder, this project now holds the full KUANG system: identity, packaging, spatial applications, and jewelry promo stills.",
          image: asset("/portfolio/kuang/cover.jpg"),
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
          slug: "mthayas-film",
          titleLines: ["Tibetan x Crystal", "Fashion Promo"],
          title: "Tibetan x Crystal Fashion Promo",
          category: "Tibetan x Crystal Fashion Promo",
          year: "2026",
          description:
            "Merged to match your local folder, this project now combines the main film, alternate edits, and still frames into one complete fashion-promo entry.",
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
            {
              title: "March 28",
              video: asset("/portfolio/march-28/march-28.mp4"),
              externalUrl: "https://www.bilibili.com/video/BV1ZjdCBdEqG/",
              poster: asset("/portfolio/march-28/cover.jpg"),
            },
            {
              title: "Kling Version",
              video: asset("/portfolio/kling/kling-film.mp4"),
              externalUrl: "https://www.bilibili.com/video/BV1kMdCBwERw/",
              poster: asset("/portfolio/kling/cover.jpg"),
            },
          ],
          gallery: [
            asset("/portfolio/mthayas-cover.jpg"),
            asset("/portfolio/mthayas/video-cover.jpg"),
            asset("/portfolio/mthayas-walk.jpeg"),
            asset("/portfolio/mthayas-lake.jpeg"),
            asset("/portfolio/mthayas/stills/film-cover.jpg"),
            asset("/portfolio/mthayas/stills/closeup.jpg"),
            asset("/portfolio/mthayas/stills/snow-walk.jpg"),
            asset("/portfolio/mthayas/stills/reflection.jpg"),
            asset("/portfolio/march-28/cover.jpg"),
            asset("/portfolio/march-28/frame-1.jpg"),
            asset("/portfolio/march-28/frame-2.jpg"),
            asset("/portfolio/kling/cover.jpg"),
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
          slug: "redtail-intercept",
          titleLines: ["Absolute", "Interception"],
          title: "Redtail Competition / Absolute Interception",
          category: "Redtail Competition",
          year: "2026",
          description:
            "Expanded from your competition folder, this entry now keeps the main ad cut together with key frames, brand-mark output, and reference-driven stills.",
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
            asset("/portfolio/redtail/brand-mark.jpg"),
            asset("/portfolio/redtail/membrane-wrap.jpg"),
            asset("/portfolio/redtail/background-match.jpg"),
            asset("/portfolio/redtail/final-frame.jpg"),
          ],
        },
        {
          slug: "experimental-motion-atlas",
          titleLines: ["Experimental Short", "Film Works"],
          title: "Experimental Short Film Works",
          category: "Experimental Short Film Works",
          year: "2025",
          description:
            "Grouped to match your local experimental-film folder, this section keeps the formed motion studies, concept cuts, and strongest style fragments in one place.",
          image: asset("/portfolio/experimental/crowd-digitized.jpg"),
          clips: [
            {
              title: "Starship Lift-Off POV",
              video: asset("/portfolio/starship/starship-pov-web.mp4"),
              externalUrl: "https://www.bilibili.com/video/BV1GmdkB2Eto/",
              poster: asset("/portfolio/starship/video-cover.jpg"),
            },
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
            asset("/portfolio/experimental/archive-sheet.jpg"),
            asset("/portfolio/optimized/video-starship-pov-cover.jpg"),
            asset("/portfolio/video-sci-fi-city.jpeg"),
            asset("/portfolio/video-station-cover.png"),
          ],
        },
        {
          slug: "starship-pov",
          titleLines: ["Motion", "Reference"],
          title: "Motion Reference",
          category: "Motion Reference",
          year: "2025",
          description:
            "This entry is reserved for the motion-reference folder, using existing reference stills and system frames instead of adding extra heavy video files.",
          image: asset("/portfolio/experimental/crt-threshold.jpg"),
          gallery: [
            asset("/portfolio/experimental/crt-threshold.jpg"),
            asset("/portfolio/experimental/archive-sheet.jpg"),
            asset("/portfolio/experimental/astronaut-terminal.jpg"),
            asset("/portfolio/experimental/error-quarantine.jpg"),
            asset("/portfolio/experimental/paper-collapse.jpg"),
          ],
        },
        {
          slug: "commercial-poster-series",
          titleLines: ["Commercial", "Posters"],
          title: "Posters / Commercial",
          category: "Posters / Commercial",
          year: "2025",
          description:
            "Aligned with your local commercial-poster folder, this group collects beverage, food, retail, and direct consumer-facing poster work.",
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
          slug: "cyber-poster-series",
          titleLines: ["Experimental Art", "Posters"],
          title: "Posters / Experimental Art",
          category: "Posters / Experimental Art",
          year: "2025",
          description:
            "This group follows your experimental-art poster folder, centered on glitch texture, Y2K tension, surveillance mood, and concept-heavy typography.",
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
          slug: "urban-industrial-series",
          titleLines: ["Posters", "Other"],
          title: "Posters / Other",
          category: "Posters / Other",
          year: "2025",
          description:
            "This entry collects the remaining poster category from your local folder, including industrial space, urban structure, and figure-led standalone posters.",
          image: asset("/portfolio/optimized/poster-jiangnan-shipyard.jpg"),
          gallery: [
            asset("/portfolio/optimized/poster-jiangnan-shipyard.jpg"),
            asset("/portfolio/posters/industrial/jiangnan-shipyard-alt.jpg"),
            asset("/portfolio/posters/industrial/urban-residence-alt.jpg"),
            asset("/portfolio/posters/industrial/blue-structure.jpg"),
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
        "The archive now follows the folders you organised locally: brand design, promo films, competition work, experimental shorts, motion reference, and poster categories.",
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
