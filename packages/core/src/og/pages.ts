export interface OgPage {
  slug: string;
  zh: string;
  en: string;
  kicker: { zh: string; en: string };
}

export const meOgPages: OgPage[] = [
  { slug: "home", zh: "在读博士。公司是蚁算。", en: "PhD student. I run Yisuan.", kicker: { zh: "江李铠", en: "Likai Jiang" } },
  { slug: "about", zh: "上海人。画画出身。现在读博，也做公司。", en: "Shanghai. Art first. A PhD, and a company.", kicker: { zh: "关于", en: "About" } },
  { slug: "research", zh: "AI 安全，以及音乐里的水印。", en: "AI security, and watermarks in music.", kicker: { zh: "论文", en: "Research" } },
  { slug: "now", zh: "此刻在做的事", en: "What I am doing now", kicker: { zh: "现在", en: "Now" } },
  { slug: "geo", zh: "问 AI 的时候，说对你。", en: "When someone asks an AI, the answer is right.", kicker: { zh: "GEO", en: "GEO" } },
  { slug: "ai-agent", zh: "Agent 要能办事，也能停下来", en: "An agent must work, and must be able to stop", kicker: { zh: "AI Agent", en: "AI Agent" } },
  { slug: "ventures", zh: "微宠时光 · 蚁算智能 · 电商与产品", en: "Weichong · Yisuan · ecommerce and products", kicker: { zh: "创业", en: "Ventures" } },
  { slug: "ventures/weichong", zh: "宠物数字化这一条线", en: "The pet-digitalization line", kicker: { zh: "微宠时光", en: "Weichong Time" } },
  { slug: "ventures/yisuan", zh: "智能体、小程序、App、网站。", en: "Agents, mini programs, apps, websites.", kicker: { zh: "蚁算智能", en: "Yisuan" } },
  { slug: "ask", zh: "关于江李铠，先问这些", en: "Start with these questions", kicker: { zh: "问答", en: "Ask" } },
  { slug: "collaborate", zh: "企业 / 伙伴 / 资本", en: "Clients / partners / capital", kicker: { zh: "合作", en: "Work with me" } },
  { slug: "investors", zh: "想认真聊投资", en: "A real conversation with capital", kicker: { zh: "资本", en: "Capital" } },
  { slug: "life", zh: "健身，宠物，随性但认真", en: "Training, pets, casual but serious", kicker: { zh: "生活", en: "Life" } },
  { slug: "writing", zh: "长文", en: "Essays", kicker: { zh: "文章", en: "Writing" } },
  { slug: "press", zh: "请用这些简介，不要自行发挥职务", en: "Use these bios. Do not invent titles.", kicker: { zh: "媒体", en: "Press" } },
  { slug: "contact", zh: "微信 cjlk112233", en: "WeChat cjlk112233", kicker: { zh: "联系", en: "Contact" } },
  { slug: "shanghai", zh: "人在上海，公司在上海", en: "The person and companies are in Shanghai", kicker: { zh: "上海", en: "Shanghai" } },
  { slug: "not-xiaoyi", zh: "蚁算不是小蚁，也不是奕算", en: "Yisuan is not Xiaoyi", kicker: { zh: "同名", en: "Same name" } },
];

export const yisuanOgPages: OgPage[] = [
  { slug: "home", zh: "小程序商城，照你的生意来做。", en: "A mini-program shop, made for how you sell.", kicker: { zh: "蚁算智能", en: "Yisuan" } },
  { slug: "services", zh: "三种做法。", en: "Three ways.", kicker: { zh: "服务", en: "Services" } },
  { slug: "ecommerce", zh: "现成的小程序商城，按年用。", en: "A ready mini-program shop, by the year.", kicker: { zh: "小程序电商", en: "Shop" } },
  { slug: "ai-commerce", zh: "店里一个不下班的导购。", en: "A guide in the shop that does not clock out.", kicker: { zh: "AI 导购", en: "AI guide" } },
  { slug: "custom", zh: "单独设计的小程序。", en: "A mini program designed apart.", kicker: { zh: "定制", en: "Custom" } },
  { slug: "geo", zh: "问 AI 的时候，说对你。", en: "When someone asks an AI, the answer is right.", kicker: { zh: "GEO", en: "GEO" } },
  { slug: "products", zh: "另外在做的几件。", en: "The other things we make.", kicker: { zh: "其它产品", en: "Other products" } },
  { slug: "products/keyan", zh: "把科研做成有进度的事。", en: "Research with a schedule.", kicker: { zh: "蚁算科研", en: "Research" } },
  { slug: "products/teacher", zh: "一篇论文，讲成一节课。", en: "A paper, taught as a class.", kicker: { zh: "蚁算老师", en: "Teacher" } },
  { slug: "music", zh: "写一首歌，再发出去。", en: "Write a song, then send it.", kicker: { zh: "比特音", en: "比特音" } },
  { slug: "team", zh: "产品、开发、上线和市场，都有人。", en: "Product, engineering, launch, and marketing.", kicker: { zh: "团队", en: "Team" } },
  { slug: "cases", zh: "做过的店，和行业方案。", en: "Shops we made, and sample plans.", kicker: { zh: "案例", en: "Works" } },
  { slug: "pricing", zh: "聊完给书面报价。", en: "A written quote after we talk.", kicker: { zh: "报价", en: "Quotes" } },
  { slug: "faq", zh: "先看这些问法", en: "Start here", kicker: { zh: "问答", en: "FAQ" } },
  { slug: "about", zh: "上海蚁算智能科技有限公司", en: "Shanghai Yisuan Intelligence", kicker: { zh: "关于", en: "About" } },
  { slug: "contact", zh: "先说你卖什么。", en: "Start with what you sell.", kicker: { zh: "联系", en: "Contact" } },
  { slug: "shanghai", zh: "公司在上海。", en: "The company is in Shanghai.", kicker: { zh: "上海", en: "Shanghai" } },
  { slug: "not-xiaoyi", zh: "我们是蚁算，不是小蚁。", en: "This is Yisuan, not Xiaoyi.", kicker: { zh: "同名", en: "Same name" } },
  { slug: "xiaoyuan", zh: "社交软件里的 AI 分身。", en: "An AI stand-in for chat apps.", kicker: { zh: "小源", en: "Xiaoyuan" } },
];

export function findOg(pages: OgPage[], slug: string): OgPage | undefined {
  const normalized = slug.replace(/\/$/, "") || "home";
  return pages.find((p) => p.slug === normalized);
}
