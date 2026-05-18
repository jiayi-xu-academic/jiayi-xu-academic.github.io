const nav = document.querySelector(".site-nav");
const themeToggle = document.querySelector(".theme-toggle");
const themeToggleText = document.querySelector(".theme-toggle__text");
const langButtons = document.querySelectorAll("[data-lang-button]");
const videoFrame = document.querySelector("[data-video-frame]");
const videoTitle = document.querySelector("[data-video-title]");
const videoDesc = document.querySelector("[data-video-desc]");
const videoPrev = document.querySelector("[data-video-prev]");
const videoNext = document.querySelector("[data-video-next]");
const videoCount = document.querySelector("[data-video-count]");
const revealItems = document.querySelectorAll(
  ".intro, .section-block, .news-list article, .research-grid article, .video-carousel, .publication, .compact-list article"
);

const researchVideos = [
  {
    id: "Q5PBvaR5hzA",
    titleKey: "videos.moheat.title",
    descKey: "videos.moheat.desc",
  },
];

let currentVideoIndex = 0;
let currentLanguage = "en";

const translations = {
  en: {
    metaTitle: "Jiayi Xu | Academic Homepage",
    metaDescription:
      "Jiayi Xu's academic homepage: haptics, virtual reality, human-computer interaction, and robotics.",
    "nav.about": "about",
    "nav.news": "news",
    "nav.videos": "videos",
    "nav.publications": "publications",
    "nav.awards": "awards",
    "nav.service": "service",
    "hero.name": "Jiayi Xu",
    "hero.subtitle": "Project Assistant Professor, The University of Tokyo",
    "hero.bio1":
      "My name is Jiayi Xu (許 佳禕). I received my Ph.D. degree in engineering from the University of Tsukuba, Tsukuba, Japan, in 2023. Since 2025, I have been a Project Assistant Professor in the Research Center for Advanced Science and Technology (RCAST) at The University of Tokyo.",
    "hero.bio2":
      "My research interests include haptics, virtual reality, human-computer interaction, and robotics. I design interactions that align with human affective perception by pushing the limits of haptic technology.",
    "links.email": "email",
    "links.publications": "publications",
    "links.fullPublications": "see full publication list",
    "profile.fields": "Haptics · VR · HCI · Robotics",
    "profile.address": "RCAST, The University of Tokyo<br>4-6-1 Komaba, Meguro-ku<br>Tokyo 153-8904 JAPAN",
    "sections.news": "news",
    "sections.research": "research interests",
    "sections.videos": "research videos",
    "sections.publications": "selected publications",
    "sections.awards": "awards",
    "sections.service": "academic service",
    "sections.skills": "skills & certificates",
    "sections.contact": "contact",
    "news.2026":
      "<strong>ChillFactor</strong> appears in IEEE Transactions on Visualization and Computer Graphics and IEEE VR.",
    "news.job": "Started as Project Assistant Professor at RCAST, The University of Tokyo.",
    "news.award":
      "Received the Bronze Award in the Grand Final at the 8th China Zhoushan Global Marine Economy Entrepreneurship and Innovation Competition.",
    "research.r1.title": "Developing presentation technologies",
    "research.r1.desc": "Development of presentation technologies",
    "research.r2.title": "Designing perceptual experiences",
    "research.r2.desc": "Design of perceptual experiences",
    "research.r3.title": "Modulating human affective perception",
    "research.r3.desc": "Modulation of human affective perception",
    "videos.intro": "Short research animations and demonstrations embedded from YouTube.",
    "videos.moheat.title": "MoHeat: Non-contact high-speed thermal display",
    "videos.moheat.desc":
      "A research demonstration of a thermal interface that presents fast, non-contact heating and cooling feedback.",
    "tags.journal": "journal",
    "tags.conference": "conference",
    "tags.thermal": "thermal feedback",
    "tags.haptics": "haptics",
    "tags.thermography": "thermography",
    "tags.cold": "cold sensation",
    "tags.vortex": "vortex effect",
    "awards.a1":
      "Bronze Award in the Grand Final, The 8th China Zhoushan Global Marine Economy Entrepreneurship and Innovation Competition.",
    "awards.a2": "Best Paper Awards Finalists, ICAT-EGVE 2024.",
    "awards.a3": "Honorable Mention Award, AsiaHaptics 2024.",
    "awards.a4": "The 8th Golden Gyro Awards for Best VR/AR Technology Innovation of the Year.",
    "awards.a5": "Academic Encouragement Award, The 27th Annual Conference of the Virtual Reality Society of Japan.",
    "awards.a6": "Best Demonstration Award Bronze Winner, AsiaHaptics 2022 Tokyo Satellite.",
    "service.s1": "Program Committee: SIGGRAPH Asia 2025 Emerging Technologies.",
    "service.s2": "Conference Reviewer: IEEE VR, IEEE WHC, etc.",
    "service.s3": "Journal Reviewer: IEEE Transactions on Haptics.",
    "skills.chinese": "Chinese: Mother tongue.",
    "skills.english": "English: TOEFL iBT 89/120.",
    "skills.japanese": "Japanese: JLPT level 1.",
    "skills.software": "Software Design Engineer certificate.",
    "contact.affiliation": "Research Center for Advanced Science and Technology, The University of Tokyo",
    footer: "© 2026 Jiayi Xu. Powered by a static al-folio inspired layout.",
  },
  zh: {
    metaTitle: "许佳祎 | 个人学术主页",
    metaDescription: "许佳祎的个人学术主页：触觉、虚拟现实、人机交互与机器人学。",
    "nav.about": "关于",
    "nav.news": "动态",
    "nav.videos": "视频",
    "nav.publications": "论文",
    "nav.awards": "获奖",
    "nav.service": "服务",
    "hero.name": "许佳祎",
    "hero.subtitle": "东京大学 项目助理教授",
    "hero.bio1":
      "我叫许佳祎（Jiayi Xu）。我于 2023 年在日本筑波大学获得工学博士学位。自 2025 年起，我在东京大学先进科学技术研究中心（RCAST）担任项目助理教授。",
    "hero.bio2":
      "我的研究兴趣包括触觉、虚拟现实、人机交互与机器人学。我致力于拓展触觉技术的边界，设计更贴近人类感性知觉的交互体验。",
    "links.email": "邮箱",
    "links.publications": "论文",
    "links.fullPublications": "查看完整论文列表",
    "profile.fields": "触觉 · 虚拟现实 · 人机交互 · 机器人学",
    "profile.address": "东京大学 先进科学技术研究中心<br>东京都目黑区驹场 4-6-1<br>邮编 153-8904 日本",
    "sections.news": "动态",
    "sections.research": "研究方向",
    "sections.videos": "研究视频",
    "sections.publications": "代表论文",
    "sections.awards": "获奖",
    "sections.service": "学术服务",
    "sections.skills": "语言与证书",
    "sections.contact": "联系方式",
    "news.2026": "<strong>ChillFactor</strong> 发表于 IEEE TVCG，并入选 IEEE VR。",
    "news.job": "在东京大学先进科学技术研究中心（RCAST）开始担任项目助理教授。",
    "news.award": "获得第八届中国舟山全球海洋经济创业创新大赛总决赛铜奖。",
    "research.r1.title": "开发感官呈现技术",
    "research.r1.desc": "面向触觉与温度感知的提示技术开发",
    "research.r2.title": "设计知觉体验",
    "research.r2.desc": "构建更自然、更沉浸的感知体验",
    "research.r3.title": "调节人类感性知觉",
    "research.r3.desc": "通过多模态刺激影响人类情感与身体感受",
    "videos.intro": "嵌入 YouTube 的研究动画与演示视频。",
    "videos.moheat.title": "MoHeat：非接触高速温度呈现装置",
    "videos.moheat.desc": "展示快速、非接触加热与冷却反馈的温度交互界面研究演示。",
    "tags.journal": "期刊",
    "tags.conference": "会议",
    "tags.thermal": "温度反馈",
    "tags.haptics": "触觉",
    "tags.thermography": "热成像",
    "tags.cold": "冷觉",
    "tags.vortex": "涡流效应",
    "awards.a1": "第八届中国舟山全球海洋经济创业创新大赛总决赛铜奖。",
    "awards.a2": "ICAT-EGVE 2024 最佳论文奖入围。",
    "awards.a3": "AsiaHaptics 2024 荣誉提名奖。",
    "awards.a4": "第八届金陀螺奖年度最佳 VR/AR 技术创新奖。",
    "awards.a5": "第 27 届日本虚拟现实学会大会 学术奖励奖。",
    "awards.a6": "AsiaHaptics 2022 Tokyo Satellite 最佳展示铜奖。",
    "service.s1": "程序委员会：SIGGRAPH Asia 2025 Emerging Technologies。",
    "service.s2": "会议审稿人：IEEE VR、IEEE WHC 等。",
    "service.s3": "期刊审稿人：IEEE Transactions on Haptics。",
    "skills.chinese": "中文：母语。",
    "skills.english": "英语：TOEFL iBT 89/120。",
    "skills.japanese": "日语：JLPT N1。",
    "skills.software": "软件设计工程师资格证书。",
    "contact.affiliation": "东京大学先进科学技术研究中心",
    footer: "© 2026 许佳祎。基于静态 al-folio 风格布局构建。",
  },
  ja: {
    metaTitle: "許 佳禕 | 個人学術ホームページ",
    metaDescription: "許佳禕の個人学術ホームページ：触覚、バーチャルリアリティ、ヒューマンコンピュータインタラクション、ロボティクス。",
    "nav.about": "概要",
    "nav.news": "ニュース",
    "nav.videos": "動画",
    "nav.publications": "業績",
    "nav.awards": "受賞",
    "nav.service": "活動",
    "hero.name": "許 佳禕",
    "hero.subtitle": "東京大学 特任助教",
    "hero.bio1":
      "私の名前は許佳禕（Jiayi Xu）です。2023 年に筑波大学で工学博士号を取得しました。2025 年より、東京大学先端科学技術研究センター（RCAST）にて特任助教を務めています。",
    "hero.bio2":
      "研究分野は触覚、バーチャルリアリティ、ヒューマンコンピュータインタラクション、ロボティクスです。触覚技術の限界を拡張し、人間の感性に寄り添うインタラクションをデザインしています。",
    "links.email": "メール",
    "links.publications": "業績",
    "links.fullPublications": "全業績リストを見る",
    "profile.fields": "触覚 · VR · HCI · ロボティクス",
    "profile.address": "東京大学 先端科学技術研究センター<br>東京都目黒区駒場 4-6-1<br>〒153-8904 日本",
    "sections.news": "ニュース",
    "sections.research": "研究関心",
    "sections.videos": "研究動画",
    "sections.publications": "主要業績",
    "sections.awards": "受賞",
    "sections.service": "学術活動",
    "sections.skills": "語学・資格",
    "sections.contact": "連絡先",
    "news.2026": "<strong>ChillFactor</strong> が IEEE TVCG および IEEE VR に掲載されました。",
    "news.job": "東京大学先端科学技術研究センター（RCAST）にて特任助教に着任しました。",
    "news.award": "第 8 回中国舟山グローバル海洋経済起業・イノベーションコンペティション決勝で銅賞を受賞しました。",
    "research.r1.title": "提示技術の開発",
    "research.r1.desc": "触覚・温度感覚を提示するための技術開発",
    "research.r2.title": "知覚体験の設計",
    "research.r2.desc": "自然で没入感のある知覚体験の設計",
    "research.r3.title": "人間感性の変調",
    "research.r3.desc": "多感覚刺激による感性・身体感覚の変調",
    "videos.intro": "YouTube から埋め込んだ研究アニメーションとデモ動画です。",
    "videos.moheat.title": "MoHeat：非接触高速温度提示装置",
    "videos.moheat.desc": "高速な非接触加熱・冷却フィードバックを提示する温度インタフェースの研究デモです。",
    "tags.journal": "論文誌",
    "tags.conference": "国際会議",
    "tags.thermal": "温度フィードバック",
    "tags.haptics": "触覚",
    "tags.thermography": "サーモグラフィ",
    "tags.cold": "冷覚",
    "tags.vortex": "ボルテックス効果",
    "awards.a1": "第 8 回中国舟山グローバル海洋経済起業・イノベーションコンペティション決勝 銅賞。",
    "awards.a2": "ICAT-EGVE 2024 Best Paper Awards Finalists。",
    "awards.a3": "AsiaHaptics 2024 Honorable Mention Award。",
    "awards.a4": "第 8 回 Golden Gyro Awards 年間最優秀 VR/AR 技術革新賞。",
    "awards.a5": "第 27 回日本バーチャルリアリティ学会大会 学術奨励賞。",
    "awards.a6": "AsiaHaptics 2022 Tokyo Satellite Best Demonstration Award Bronze Winner。",
    "service.s1": "Program Committee: SIGGRAPH Asia 2025 Emerging Technologies。",
    "service.s2": "Conference Reviewer: IEEE VR、IEEE WHC など。",
    "service.s3": "Journal Reviewer: IEEE Transactions on Haptics。",
    "skills.chinese": "中国語：母語。",
    "skills.english": "英語：TOEFL iBT 89/120。",
    "skills.japanese": "日本語：JLPT N1。",
    "skills.software": "ソフトウェア設計技術者資格。",
    "contact.affiliation": "東京大学 先端科学技術研究センター",
    footer: "© 2026 許佳禕。静的な al-folio 風レイアウトで構築。",
  },
};

const storage = {
  get(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      document.body.dataset[key] = value;
    }
  },
};

const updateNavShadow = () => {
  if (!nav) return;
  nav.classList.toggle("is-scrolled", window.scrollY > 8);
};

const getPreferredTheme = () => {
  const savedTheme = storage.get("theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const setTheme = (theme) => {
  document.body.dataset.theme = theme;

  const isDark = theme === "dark";
  themeToggle?.setAttribute("aria-pressed", String(isDark));
  themeToggle?.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");

  if (themeToggleText) {
    themeToggleText.textContent = isDark ? "Light" : "Dark";
  }
};

const renderVideo = (index) => {
  if (!videoFrame || researchVideos.length === 0) return;

  currentVideoIndex = (index + researchVideos.length) % researchVideos.length;
  const video = researchVideos[currentVideoIndex];
  const dictionary = translations[currentLanguage] || translations.en;

  videoFrame.src = `https://www.youtube-nocookie.com/embed/${video.id}?rel=0`;
  videoFrame.title = dictionary[video.titleKey] || "Research video";

  if (videoTitle) {
    videoTitle.textContent = dictionary[video.titleKey] || "";
  }

  if (videoDesc) {
    videoDesc.textContent = dictionary[video.descKey] || "";
  }

  if (videoCount) {
    videoCount.textContent = `${currentVideoIndex + 1} / ${researchVideos.length}`;
  }

  const hasMultipleVideos = researchVideos.length > 1;
  videoPrev?.toggleAttribute("disabled", !hasMultipleVideos);
  videoNext?.toggleAttribute("disabled", !hasMultipleVideos);
};

const getPreferredLanguage = () => {
  const savedLanguage = storage.get("language");
  if (savedLanguage && translations[savedLanguage]) {
    return savedLanguage;
  }

  const browserLanguage = navigator.language.toLowerCase();
  if (browserLanguage.startsWith("zh")) return "zh";
  if (browserLanguage.startsWith("ja")) return "ja";
  return "en";
};

const setLanguage = (language) => {
  const dictionary = translations[language] || translations.en;
  currentLanguage = translations[language] ? language : "en";

  document.documentElement.lang = language === "zh" ? "zh-CN" : language;
  document.title = dictionary.metaTitle;

  const description = document.querySelector('meta[name="description"]');
  description?.setAttribute("content", dictionary.metaDescription);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    const key = node.dataset.i18nHtml;
    if (dictionary[key]) {
      node.innerHTML = dictionary[key];
    }
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.langButton === language;
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderVideo(currentVideoIndex);
};

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.08,
    }
  );

  revealItems.forEach((item, index) => {
    item.classList.add("reveal");
    item.style.transitionDelay = `${Math.min(index * 35, 220)}ms`;
    revealObserver.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

updateNavShadow();
setTheme(getPreferredTheme());
setLanguage(getPreferredLanguage());

window.addEventListener("scroll", updateNavShadow, { passive: true });

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
  storage.set("theme", nextTheme);
  setTheme(nextTheme);
});

videoPrev?.addEventListener("click", () => {
  renderVideo(currentVideoIndex - 1);
});

videoNext?.addEventListener("click", () => {
  renderVideo(currentVideoIndex + 1);
});

if (researchVideos.length > 1) {
  window.setInterval(() => {
    renderVideo(currentVideoIndex + 1);
  }, 12000);
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextLanguage = button.dataset.langButton;
    storage.set("language", nextLanguage);
    setLanguage(nextLanguage);
  });
});
