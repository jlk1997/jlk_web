/** Single source of public facts. Missing fields stay `null` and are omitted from pages. */
export type Locale = "zh" | "en";

export type Missing = null;

export interface Localized {
  zh: string;
  en: string;
}

export interface SocialLink {
  id: string;
  label: Localized;
  url: string | Missing;
  sameAs: boolean;
}

export interface OrganizationFact {
  id: "yisuan" | "weichong";
  legalName: Localized;
  shortName: Localized;
  englishName: string;
  entityId: string;
  url: string;
  description: Localized;
  founded: string | Missing;
  creditCode: string | Missing;
  registeredAddress: Localized | Missing;
  legalType: Localized | Missing;
  registeredCapital: Localized | Missing;
  role: Localized;
  registrationAuthority: Localized | Missing;
  venueUrl: string | Missing;
  status: Localized;
  city: Localized;
  services: Localized[];
  softwareCopyrights: string[];
  patents: string[];
  awards: string[];
}

export interface PersonFact {
  name: Localized;
  latinName: string;
  givenName: Localized;
  familyName: Localized;
  alternateNames: string[];
  entityId: string;
  jobTitle: Localized;
  headline: Localized;
  tagline: Localized;
  description: Localized;
  nationality: Localized;
  city: Localized;
  knowsAbout: Localized[];
  languages: string[];
  email: string | Missing;
  telephone: string;
  wechat: string;
  school: Localized | Missing;
  researchField: Localized | Missing;
  lab: Localized | Missing;
  birthYear: string | Missing;
  image: string | Missing;
  imageAcademic: string | Missing;
}

export interface PaperFact {
  id: string;
  title: Localized;
  authors: string;
  venue: Localized;
  date: string;
  doi: string | Missing;
  url: string;
  kind: Localized;
  note: Localized;
}

export interface EducationFact {
  id: string;
  current: boolean;
  degree: Localized;
  school: Localized;
  schoolUrl: string;
  unit: Localized;
  field: Localized;
  note: Localized | Missing;
}

export const SITES = {
  me: {
    id: "me",
    host: "genvidtrade.cn",
    origin: "https://genvidtrade.cn",
    name: { zh: "江李铠", en: "Likai Jiang" } satisfies Localized,
  },
  yisuan: {
    id: "yisuan",
    host: "yisuan.genvidtrade.cn",
    origin: "https://yisuan.genvidtrade.cn",
    name: { zh: "上海蚁算智能科技", en: "Yisuan Intelligence" } satisfies Localized,
  },
  xiaoyuan: {
    id: "xiaoyuan",
    host: "loveaibaby.cn",
    origin: "https://loveaibaby.cn",
    name: { zh: "小源AI", en: "Xiaoyuan / Sourced" } satisfies Localized,
  },
  biteyin: {
    id: "biteyin",
    host: "superformersmusic.com",
    origin: "https://superformersmusic.com",
    name: { zh: "比特音", en: "比特音" } satisfies Localized,
  },
  teacherDemo: {
    id: "teacherDemo",
    host: "119.45.39.61",
    origin: "http://119.45.39.61/",
    name: { zh: "蚁算老师演示", en: "Yisuan Teacher demo" } satisfies Localized,
  },
  keyanDemo: {
    id: "keyanDemo",
    host: "139.199.90.218:18080",
    origin: "http://139.199.90.218:18080/",
    name: { zh: "蚁算科研演示", en: "Yisuan Research demo" } satisfies Localized,
  },
} as const;

export const school = {
  name: { zh: "上海理工大学", en: "University of Shanghai for Science and Technology" } satisfies Localized,
  short: { zh: "上海理工大学", en: "USST" } satisfies Localized,
  url: "https://www.usst.edu.cn",
  entityId: "https://www.usst.edu.cn/#organization",
};

export const lab = {
  name: {
    zh: "多媒体智能计算与安全实验室",
    en: "Multimedia Intelligent Computing & Security Lab",
  } satisfies Localized,
  short: { zh: "MICS 实验室", en: "MICS Lab" } satisfies Localized,
  url: "https://mics.usst.edu.cn",
  entityId: "https://mics.usst.edu.cn/#organization",
  parent: school,
};

export const person: PersonFact = {
  name: { zh: "江李铠", en: "Likai Jiang" },
  latinName: "Likai Jiang",
  givenName: { zh: "李铠", en: "Likai" },
  familyName: { zh: "江", en: "Jiang" },
  alternateNames: ["江李铠", "Likai Jiang", "Jiang Likai", "Jiang LiKai", "JLK", "cjlk"],
  entityId: `${SITES.me.origin}/#person`,
  jobTitle: {
    zh: "上海理工大学人工智能在读博士，蚁算智能创始人",
    en: "PhD student in AI at USST, founder of Yisuan",
  },
  headline: {
    zh: "我是江李铠。在读博士，公司是蚁算。",
    en: "I am Likai Jiang. PhD student. I run Yisuan.",
  },
  tagline: {
    zh: "随性但认真。找合作，也找能把事情做成的人。",
    en: "Casual, but serious. Looking for partners who actually ship.",
  },
  description: {
    zh: "江李铠，英文名 Likai Jiang，上海人。上海理工大学人工智能在读博士，方向是 AI 安全和音乐生成模型水印。美术生出身，做过漫画、UI、产品和前端。公司是蚁算智能，给中小企业做智能体、小程序、App 和网站。另外开了微宠时光。",
    en: "Likai Jiang (江李铠) is from Shanghai, a PhD student in AI at USST, working on AI security and watermarks for music models. He trained as an art student, then comics, UI, product, and front-end. He runs Yisuan, which builds agents, mini programs, apps, and sites for smaller companies, and also Weichong Time.",
  },
  nationality: { zh: "中国", en: "China" },
  city: { zh: "上海", en: "Shanghai" },
  knowsAbout: [
    { zh: "AI Agent", en: "AI agents" },
    { zh: "人工智能安全", en: "AI security" },
    { zh: "音乐生成模型水印", en: "Watermarks for music-generation models" },
    { zh: "企业 AI 应用开发", en: "AI applications for companies" },
    { zh: "生成引擎优化 GEO", en: "Generative Engine Optimization (GEO)" },
    { zh: "科研 Agent", en: "Research agents" },
    { zh: "教学 Agent", en: "Teaching agents" },
    { zh: "AI 音乐生成与发行", en: "AI music generation and distribution" },
    { zh: "UI 设计与产品", en: "UI design and product" },
    { zh: "Unity 游戏开发", en: "Unity game development" },
    { zh: "宠物数字化", en: "Pet-industry digitalization" },
  ],
  languages: ["zh-CN", "en"],
  email: "1055207634@qq.com",
  telephone: "+86 13651946700",
  wechat: "cjlk112233",
  school: school.name,
  researchField: {
    zh: "人工智能安全，以及音乐生成模型的水印。硕士阶段的论文是计算机图形学和实时渲染。",
    en: "AI security, and watermarks for music-generation models. The master’s papers are in computer graphics and real-time rendering.",
  },
  lab: {
    zh: "多媒体智能计算与安全实验室（MICS Lab）",
    en: "Multimedia Intelligent Computing & Security Lab (MICS Lab)",
  },
  birthYear: "1997",
  image: "/images/likai-jiang.jpg",
  imageAcademic: "/images/likai-jiang-academic.jpg",
};

export const organizations: Record<"yisuan" | "weichong", OrganizationFact> = {
  yisuan: {
    id: "yisuan",
    legalName: {
      zh: "上海蚁算智能科技有限公司",
      en: "Shanghai Yisuan Intelligence Technology Co., Ltd.",
    },
    shortName: { zh: "蚁算智能", en: "Yisuan" },
    englishName: "Yisuan Intelligence",
    entityId: `${SITES.yisuan.origin}/#organization`,
    url: SITES.yisuan.origin,
    description: {
      zh: "上海的公司。做小程序电商：现成的商城按年用，品牌要独一份就深度定制小程序，店里可以放一个 AI 导购。也做智能体、App 和网站。创始人江李铠。",
      en: "A Shanghai company. Mini-program shops: a ready shop by the year, a custom mini program when a brand wants its own, and an AI guide in the shop. Agents, apps, and websites too. Founder: Likai Jiang.",
    },
    founded: "2026-03-08",
    creditCode: null,
    registeredAddress: {
      zh: "上海市松江区泖港镇泖新公路1278号6号楼2层（集中登记地）",
      en: "Floor 2, Building 6, 1278 Maoxin Road, Maogang Town, Songjiang, Shanghai (shared registration address)",
    },
    legalType: {
      zh: "有限责任公司（自然人投资或控股）",
      en: "Limited liability company (natural-person invested or controlled)",
    },
    registeredCapital: null,
    role: { zh: "法定代表人 / 创始人", en: "Legal representative / founder" },
    registrationAuthority: null,
    venueUrl: null,
    status: { zh: "存续（以工商登记为准）", en: "Active (per business registry)" },
    city: { zh: "上海", en: "Shanghai" },
    services: [
      { zh: "小程序电商", en: "Mini-program shops" },
      { zh: "AI 智能体电商", en: "An AI guide for the shop" },
      { zh: "高端定制小程序", en: "Custom mini programs" },
      { zh: "GEO 优化", en: "GEO" },
      { zh: "比特音", en: "比特音" },
      { zh: "小源AI", en: "Xiaoyuan" },
      { zh: "蚁算老师", en: "Yisuan Teacher" },
      { zh: "蚁算科研", en: "Yisuan Research" },
    ],
    softwareCopyrights: [],
    patents: [],
    awards: [],
  },
  weichong: {
    id: "weichong",
    legalName: {
      zh: "上海市杨浦区殷行街道微宠时光软件工作室（个体工商户）",
      en: "Weichong Time Software Studio, Yinhang Subdistrict, Yangpu, Shanghai (sole proprietorship)",
    },
    shortName: { zh: "微宠时光", en: "Weichong Time" },
    englishName: "Weichong Time",
    entityId: `${SITES.me.origin}/ventures/weichong#organization`,
    url: `${SITES.me.origin}/ventures/weichong`,
    description: {
      zh: "江李铠开的宠物数字化工作室。跟蚁算不是一家。",
      en: "Likai Jiang’s pet-digitalization studio. A separate company from Yisuan.",
    },
    founded: "2025-04-29",
    creditCode: null,
    registeredAddress: {
      zh: "仅限通过互联网从事经营活动。",
      en: "Internet-only operations.",
    },
    legalType: { zh: "个体工商户（个人经营）", en: "Sole proprietorship (individually operated)" },
    registeredCapital: null,
    role: { zh: "经营者 / 创始人", en: "Operator / founder" },
    registrationAuthority: {
      zh: "上海市杨浦区市场监督管理局",
      en: "Yangpu Administration for Market Regulation, Shanghai",
    },
    venueUrl: null,
    status: { zh: "存续（以工商登记为准）", en: "Active (per business registry)" },
    city: { zh: "上海", en: "Shanghai" },
    services: [
      { zh: "宠物数字化", en: "Pet-industry digitalization" },
      { zh: "行业信息化产品", en: "Vertical software products" },
    ],
    softwareCopyrights: [],
    patents: [],
    awards: [],
  },
};

export const product = {
  id: "xiaoyuan",
  name: { zh: "小源AI", en: "Xiaoyuan / Sourced" } satisfies Localized,
  alternateName: "Sourced",
  url: SITES.xiaoyuan.origin,
  entityId: `${SITES.xiaoyuan.origin}/#product`,
  description: {
    zh: "小源是社交软件里的 AI 分身。先替你接住对话，按你的说法回复，也把数字身份整理归档。",
    en: "Xiaoyuan is an AI stand-in for chat apps. It takes the first reply in your voice, and keeps a record of that digital identity.",
  },
  priceNote: {
    zh: "价格以 loveaibaby.cn 为准。项目交付和年度维护另算，不写在这里。",
    en: "Price lives on loveaibaby.cn. Project work and yearly upkeep are quoted separately, and are not listed here.",
  },
};

export type OfferingGroup = "service" | "product";
export type OfferingStatus = "live" | "beta" | "demo" | "incubating" | "research";

export const offeringGroups: Record<OfferingGroup, Localized> = {
  service: { zh: "主营", en: "The work" },
  product: { zh: "自研产品", en: "Products" },
};

export interface Offering {
  id: string;
  group: OfferingGroup;
  name: Localized;
  audience: Localized;
  summary: Localized;
  host: Localized;
  status: OfferingStatus;
  statusLabel: Localized;
  detailHref: string;
  actionHref: string;
  actionExternal?: boolean;
  actionLabel: Localized;
}

export const offerings: Offering[] = [
  {
    id: "ecommerce",
    group: "service",
    name: { zh: "小程序电商", en: "Mini-program shop" },
    audience: { zh: "做电商小程序的商家", en: "Merchants running an ecommerce mini program" },
    host: { zh: "按年", en: "By the year" },
    summary: {
      zh: "现成的微信小程序商城。开通就能卖。服务器、维护和升级归我们。",
      en: "A ready WeChat mini-program shop. Open it and start selling. The server, upkeep, and upgrades stay with us.",
    },
    status: "live",
    statusLabel: { zh: "在做", en: "Open" },
    detailHref: "/ecommerce",
    actionHref: "/ecommerce",
    actionLabel: { zh: "看做法", en: "See it" },
  },
  {
    id: "ai-commerce",
    group: "service",
    name: { zh: "AI 智能体电商", en: "AI guide" },
    audience: { zh: "想让店里有人答疑的商家", en: "Shops that want answers in the store" },
    host: { zh: "按年", en: "By the year" },
    summary: {
      zh: "店里放一个 AI 导购。按你的商品资料回答，帮客人挑货、下单。答不上来的转人工。",
      en: "An AI guide in the shop. It answers from your product notes, helps a customer choose, and can place an order. What it cannot answer goes to a person.",
    },
    status: "live",
    statusLabel: { zh: "在做", en: "Open" },
    detailHref: "/ai-commerce",
    actionHref: "/ai-commerce",
    actionLabel: { zh: "看做法", en: "See it" },
  },
  {
    id: "custom",
    group: "service",
    name: { zh: "高端定制小程序", en: "Custom mini program" },
    audience: { zh: "要单独做一套的品牌", en: "Brands that want their own" },
    host: { zh: "按项目", en: "Per project" },
    summary: {
      zh: "从界面到功能单独设计、单独开发。代码和数据归你。",
      en: "The screens and the functions are designed and built for you. The code and the data are yours.",
    },
    status: "live",
    statusLabel: { zh: "在做", en: "Open" },
    detailHref: "/custom",
    actionHref: "/contact",
    actionLabel: { zh: "聊需求", en: "Talk" },
  },
  {
    id: "geo",
    group: "service",
    name: { zh: "GEO 优化", en: "GEO" },
    audience: { zh: "想被 AI 答对的品牌", en: "Brands that want a correct answer" },
    host: { zh: "按项目", en: "Per project" },
    summary: {
      zh: "别人问 AI 的时候，名字、店、产品被说对。测过才算，不打包票。",
      en: "When someone asks an AI, the name, the shop, and the product come out right. Tested counts. A mention is not promised.",
    },
    status: "live",
    statusLabel: { zh: "在做", en: "Open" },
    detailHref: "/geo",
    actionHref: "/geo",
    actionLabel: { zh: "了解", en: "Read" },
  },
  {
    id: "biteyin",
    group: "product",
    name: SITES.biteyin.name,
    audience: { zh: "要做音乐的人", en: "People making music" },
    host: { zh: SITES.biteyin.host, en: SITES.biteyin.host },
    summary: {
      zh: "写一首歌，再发到各个音乐平台的创作者后台。生成模型正在更换，暂时不能生成。",
      en: "Write a track, then send it to creator dashboards. The generator is being replaced, so generation is off for now.",
    },
    status: "beta",
    statusLabel: { zh: "内测", en: "Beta" },
    detailHref: "/music",
    actionHref: SITES.biteyin.origin,
    actionExternal: true,
    actionLabel: { zh: "打开", en: "Open" },
  },
  {
    id: "xiaoyuan",
    group: "product",
    name: { zh: "小源AI", en: "Xiaoyuan" },
    audience: { zh: "在聊天软件里接待客人的人", en: "People who reply in chat apps" },
    host: { zh: SITES.xiaoyuan.host, en: SITES.xiaoyuan.host },
    summary: {
      zh: "社交软件里的 AI 分身。先接住对话，按你的说法回复，也把数字身份归档。",
      en: "An AI stand-in for chat apps. It takes the first reply in your voice, and files the digital identity.",
    },
    status: "live",
    statusLabel: { zh: "在线", en: "Live" },
    detailHref: "/xiaoyuan",
    actionHref: SITES.xiaoyuan.origin,
    actionExternal: true,
    actionLabel: { zh: "打开", en: "Open" },
  },
  {
    id: "teacher",
    group: "product",
    name: { zh: "蚁算老师", en: "Yisuan Teacher" },
    audience: { zh: "讲课和备课", en: "Teaching and prep" },
    host: { zh: "演示", en: "Demo" },
    summary: {
      zh: "给它一篇论文或一个知识点，它讲成一节有互动、有实验的课。",
      en: "Give it a paper or a concept. It turns that into a class with interaction and a lab.",
    },
    status: "demo",
    statusLabel: { zh: "可体验", en: "Try it" },
    detailHref: "/products/teacher",
    actionHref: SITES.teacherDemo.origin,
    actionExternal: true,
    actionLabel: { zh: "打开演示", en: "Demo" },
  },
  {
    id: "keyan",
    group: "product",
    name: { zh: "蚁算科研", en: "Yisuan Research" },
    audience: { zh: "企业研发和高校实验室", en: "Company and university labs" },
    host: { zh: "演示", en: "Demo" },
    summary: {
      zh: "把科研做成有进度的事。给企业研发部门和高校实验室用。",
      en: "Research with a visible schedule. For company R&D and university labs.",
    },
    status: "demo",
    statusLabel: { zh: "可体验", en: "Try it" },
    detailHref: "/products/keyan",
    actionHref: SITES.keyanDemo.origin,
    actionExternal: true,
    actionLabel: { zh: "打开演示", en: "Demo" },
  },
];

export const ecommerceIncludes: Localized[] = [
  { zh: "一个微信小程序店：商品、购物车、微信付款、订单。", en: "A WeChat mini-program shop: products, a cart, WeChat Pay, and orders." },
  { zh: "电脑上的商家后台：管商品、看订单、发货。", en: "A shop desk on a computer: products, orders, and shipping." },
  { zh: "服务器、图片存储和安全证书，由我们出。", en: "The server, image storage, and the security certificate, on us." },
  { zh: "帮你提交微信审核。上线后坏了修，微信规则变了跟着改。", en: "We submit it for WeChat review. After launch we fix what breaks, and follow when WeChat changes the rules." },
];

export const ecommerceOutside: Localized[] = [
  { zh: "微信认证费，交给微信，用你公司的名义办。", en: "WeChat verification, paid to WeChat, in your company’s name." },
  { zh: "微信支付手续费，按微信的规则走。", en: "WeChat Pay fees, on WeChat’s rules." },
  { zh: "商品拍照、文案、上架。这些你可以自己做，也可以另请我们做。", en: "Photos, copy, and listing products. You can do these, or ask us as extra work." },
  { zh: "抖音、支付宝小程序。要做的话单独聊。", en: "Douyin or Alipay mini programs. Those are a separate conversation." },
];

export type SolutionLine = "saas" | "ai" | "custom";

export const solutionLines: Record<SolutionLine, Localized> = {
  saas: { zh: "小程序电商", en: "Mini-program shop" },
  ai: { zh: "AI 导购", en: "AI guide" },
  custom: { zh: "定制小程序", en: "Custom mini program" },
};

export const solutionLabel: Localized = { zh: "方案示例", en: "Sample plan" };

export const solutionDisclaimer: Localized = {
  zh: "方案示例，不是客户案例。",
  en: "A sample plan, not a client.",
};

export interface Solution {
  slug: string;
  city: Localized;
  industry: Localized;
  title: Localized;
  summary: Localized;
  line: SolutionLine;
  points: Localized[];
  image: string;
}

export const solutions: Solution[] = [
  {
    slug: "shanghai-fashion",
    city: { zh: "上海", en: "Shanghai" },
    industry: { zh: "女装品牌", en: "A women’s clothing brand" },
    title: { zh: "会员商城", en: "A members’ shop" },
    summary: {
      zh: "上新提醒、积分、门店自提。页面按这个品牌的样子单独排，不套通用模板。",
      en: "New-arrival notices, points, and store pickup. The screens follow this brand, not a shared template.",
    },
    line: "custom",
    points: [
      { zh: "会员等级和积分写进小程序。", en: "Member levels and points live in the mini program." },
      { zh: "上新可以推给已经买过的人。", en: "A new arrival can reach people who already bought." },
      { zh: "下单后可选门店自提。", en: "After an order, pickup at a store is a choice." },
    ],
    image: "/images/solutions/shanghai-fashion.webp",
  },
  {
    slug: "shanghai-coffee",
    city: { zh: "上海", en: "Shanghai" },
    industry: { zh: "精品咖啡连锁", en: "A specialty coffee chain" },
    title: { zh: "点单和储值", en: "Orders and stored value" },
    summary: {
      zh: "到店点单、外卖、储值卡。用现成的商城改菜单和门店，不开一套新系统。",
      en: "In-store orders, delivery, and a stored-value card. The ready shop is fitted to the menu and the stores.",
    },
    line: "saas",
    points: [
      { zh: "菜单按门店分开。", en: "The menu can differ by store." },
      { zh: "外卖和到店取在同一个下单页。", en: "Delivery and pickup share one order page." },
      { zh: "储值卡余额在小程序里能看见。", en: "The stored-value balance is visible in the mini program." },
    ],
    image: "/images/solutions/shanghai-coffee.webp",
  },
  {
    slug: "beijing-tea",
    city: { zh: "北京", en: "Beijing" },
    industry: { zh: "茶叶礼盒", en: "Tea gift boxes" },
    title: { zh: "企业团购", en: "Company orders" },
    summary: {
      zh: "个人能买，公司也能批量下单、开票。礼盒按套装卖。",
      en: "A person can buy one box. A company can order in bulk and ask for an invoice. Sets are sold as sets.",
    },
    line: "saas",
    points: [
      { zh: "批量下单，地址可以填多个。", en: "A bulk order can carry more than one address." },
      { zh: "开票信息留在后台。", en: "Invoice details stay in the desk." },
      { zh: "礼盒套装按一套卖，不拆成散茶。", en: "A gift set sells as one item." },
    ],
    image: "/images/solutions/beijing-tea.webp",
  },
  {
    slug: "beijing-pet",
    city: { zh: "北京", en: "Beijing" },
    industry: { zh: "宠物用品", en: "Pet supplies" },
    title: { zh: "定期配送", en: "Repeat delivery" },
    summary: {
      zh: "粮和耗材按周期送到家。AI 导购只按你写的喂养说明回答，不自己编。",
      en: "Food and supplies go out on a cycle. The AI guide answers only from the feeding notes you wrote.",
    },
    line: "ai",
    points: [
      { zh: "定期配送，下一期日期在订单里。", en: "Repeat delivery, with the next date on the order." },
      { zh: "导购回答喂养问题，依据是商品资料。", en: "The guide answers feeding questions from the product notes." },
      { zh: "资料里没有的，转给客服。", en: "If the notes do not say, the chat goes to staff." },
    ],
    image: "/images/solutions/beijing-pet.webp",
  },
  {
    slug: "guangzhou-beauty",
    city: { zh: "广州", en: "Guangzhou" },
    industry: { zh: "美妆护肤", en: "Skincare" },
    title: { zh: "按肤质推荐", en: "A recommendation by skin" },
    summary: {
      zh: "客人说肤质和在意的问题，导购从在售商品里挑。直播间可以跳进店。",
      en: "A customer names a skin type and a concern. The guide picks from what you actually sell. A live room can jump into the shop.",
    },
    line: "ai",
    points: [
      { zh: "推荐只来自在售商品。", en: "A recommendation only uses products on sale." },
      { zh: "可以把两件放在一起比。", en: "Two products can sit side by side." },
      { zh: "直播间的链接直接进对应商品。", en: "A link from a live room opens that product." },
    ],
    image: "/images/solutions/guangzhou-beauty.webp",
  },
  {
    slug: "guangzhou-furniture",
    city: { zh: "广州", en: "Guangzhou" },
    industry: { zh: "定制家具", en: "Custom furniture" },
    title: { zh: "预约量尺", en: "A measuring visit" },
    summary: {
      zh: "案例展示、预约量尺、在线出报价单。尺寸和工艺不走标准商城，单独做。",
      en: "Case photos, a measuring visit, and a quote in the mini program. Sizes and making are not a standard catalog, so this one is built apart.",
    },
    line: "custom",
    points: [
      { zh: "案例按空间分类。", en: "Cases are grouped by room." },
      { zh: "预约量尺，选时间和地址。", en: "A measuring visit picks a time and an address." },
      { zh: "报价单在小程序里打开，改一版留一版。", en: "The quote opens in the mini program, and each revision stays." },
    ],
    image: "/images/solutions/guangzhou-furniture.webp",
  },
  {
    slug: "shenzhen-digital",
    city: { zh: "深圳", en: "Shenzhen" },
    industry: { zh: "数码配件", en: "Device accessories" },
    title: { zh: "经销商下单", en: "A dealer shop" },
    summary: {
      zh: "经销商登录后按数量分档看价。零售客人看的是另一套页面。",
      en: "After a dealer signs in, the price follows the quantity. A retail customer sees a different set of screens.",
    },
    line: "custom",
    points: [
      { zh: "经销商账号和零售客人分开。", en: "Dealer accounts and retail customers stay apart." },
      { zh: "数量到一档，价格换一档。", en: "A quantity band changes the price band." },
      { zh: "后台能看每个经销商的订单。", en: "The desk can see each dealer’s orders." },
    ],
    image: "/images/solutions/shenzhen-digital.webp",
  },
  {
    slug: "shenzhen-baby",
    city: { zh: "深圳", en: "Shenzhen" },
    industry: { zh: "母婴用品", en: "Baby products" },
    title: { zh: "社群团购", en: "Group buying" },
    summary: {
      zh: "群里发团，小程序里接龙下单。AI 客服回答尺码和月龄，依据是你写的说明。",
      en: "A group post opens orders in the mini program. The AI answers size and age from the notes you wrote.",
    },
    line: "ai",
    points: [
      { zh: "一团一个链接，到点截止。", en: "One link per group, with a cutoff." },
      { zh: "客服回答尺码和月龄。", en: "The guide answers size and age in months." },
      { zh: "说明里没有的，转给店里的人。", en: "If the notes do not say, a person takes the chat." },
    ],
    image: "/images/solutions/shenzhen-baby.webp",
  },
];

export function solutionBySlug(slug: string): Solution | undefined {
  return solutions.find((item) => item.slug === slug);
}

export const ecommerceFaq: Array<{ q: Localized; a: Localized }> = [
  {
    q: { zh: "我不懂技术，能用吗？", en: "I am not technical. Can I use this?" },
    a: {
      zh: "能。你准备营业执照、商品图片和价格。小程序、服务器和上线由我们办。后台怎么改商品，我们教你。",
      en: "Yes. You prepare the business license, the product photos, and the prices. We handle the mini program, the server, and going live. We show you how to change products in the desk.",
    },
  },
  {
    q: { zh: "顾客付的钱进谁的账户？", en: "Whose account does the money land in?" },
    a: {
      zh: "进你自己的微信支付账户。我们不经手货款。",
      en: "Your own WeChat Pay account. We never touch the payments.",
    },
  },
  {
    q: { zh: "怎么收费？", en: "How do you charge?" },
    a: {
      zh: "现成的商城按年付，定制按项目报。聊过你卖什么、卖给谁之后，给一份书面报价。数字不写在网上。",
      en: "The ready shop is paid by the year. A custom build is quoted as a project. After we hear what you sell and who you sell it to, you get a written quote. The number is not on the website.",
    },
  },
  {
    q: { zh: "AI 导购会不会乱说？", en: "Will the AI guide make things up?" },
    a: {
      zh: "它只根据你后台的商品、价格、库存，以及你写的发货和售后规则来回答。你没卖的东西，它不能说有。资料里没有的，它会说「我问一下店家」，再转给你的客服。改价、发券、退款要你点头，它自己不做。",
      en: "It answers from your products, prices, and stock, plus the shipping and return rules you wrote. It cannot claim you sell something you do not. If the material does not say, it says it will ask the shop, then hands the chat to your staff. Changing a price, issuing a coupon, or refunding needs your say-so. It does not do those on its own.",
    },
  },
  {
    q: { zh: "能做抖音或支付宝小程序吗？", en: "Can you do Douyin or Alipay mini programs?" },
    a: {
      zh: "按年用的这一套先做微信小程序。抖音、支付宝要单独聊。",
      en: "The yearly shop starts as a WeChat mini program. Douyin and Alipay are a separate conversation.",
    },
  },
];

export const deliverables: Localized[] = [
  { zh: "智能体", en: "Agents" },
  { zh: "小程序", en: "Mini programs" },
  { zh: "App", en: "Apps" },
  { zh: "网站", en: "Websites" },
];

export const deliverySteps: Array<{ title: Localized; owner: Localized }> = [
  { title: { zh: "聊需求", en: "Talk it through" }, owner: { zh: "刘小斌、江李铠", en: "Liu Xiaobin, Likai Jiang" } },
  { title: { zh: "出方案", en: "Write the plan" }, owner: { zh: "江李铠", en: "Likai Jiang" } },
  { title: { zh: "做出来", en: "Build it" }, owner: { zh: "李嘉树、王浩然、何前亮", en: "Li Jiashu, Wang Haoran, Qianliang He" } },
  { title: { zh: "上线", en: "Go live" }, owner: { zh: "何前亮", en: "Qianliang He" } },
  { title: { zh: "接着管", en: "Stay on it" }, owner: { zh: "何前亮", en: "Qianliang He" } },
];

export interface TeamMember {
  id: string;
  name: Localized;
  latinName: string;
  role: Localized;
  initials: string;
  image: string;
  /** 二次元示意头像，不做照片那层灰度。 */
  illustrated?: boolean;
  paragraphs: Localized[];
}

export const team: TeamMember[] = [
  {
    id: "jiang-likai",
    name: { zh: "江李铠", en: "Likai Jiang" },
    latinName: "Likai Jiang",
    role: { zh: "创始人，负责产品与技术", en: "Founder, product and engineering" },
    initials: "JLK",
    image: "/images/team-likai.jpg",
    paragraphs: [
      {
        zh: "上海理工大学 MICS 实验室，人工智能在读博士。研究 AI 安全，以及音乐生成模型的水印。",
        en: "PhD student in AI at the USST MICS Lab. The work is AI security, and watermarks for music-generation models.",
      },
      {
        zh: "美术生出身，十几岁就开始画漫画，是国内少年漫画作者里比较专业的那一批。后来做过 UI 设计、产品经理、前端开发和 Unity 游戏开发。一个需求从画面、交互到代码，他能自己走完一遍。",
        en: "He trained as an art student and was drawing comics in his teens, among the more serious young cartoonists in China. Later: UI design, product, front-end, and Unity. A brief can go from picture to interaction to code without leaving his desk.",
      },
      {
        zh: "他问得最多的是两件事：这个东西谁会每天用，谁会为它付钱。",
        en: "He keeps asking two things: who will use this every day, and who will pay for it.",
      },
      {
        zh: "创办了上海蚁算智能科技有限公司和微宠时光软件工作室。",
        en: "He founded Yisuan Intelligence and Weichong Time.",
      },
    ],
  },
  {
    id: "he-qianliang",
    name: { zh: "何前亮", en: "Qianliang He" },
    latinName: "Qianliang He",
    role: { zh: "核心成员，负责后端与架构", en: "Core member, backend and architecture" },
    initials: "HQL",
    image: "/images/he-qianliang.jpg",
    paragraphs: [
      {
        zh: "常州大学计算机专业毕业。现在在国内一家头部 ERP 厂商做核心业务的后端开发，经手过多种业务场景，也扛过高并发、高负载。",
        en: "Computer science, Changzhou University. He now builds core backend services at a major ERP vendor, across several business lines, including high-concurrency and high-load work.",
      },
      {
        zh: "服务器安全和自动化部署是他的强项，按年租用的系统他很熟。",
        en: "Server security and automated deploys are his ground. Systems rented by the year are familiar territory.",
      },
      {
        zh: "蚁算交付的项目，上线和上线之后的稳定，都归他管。",
        en: "On Yisuan projects, launch and what happens after launch sit with him.",
      },
    ],
  },
  {
    id: "li-jiashu",
    name: { zh: "李嘉树", en: "Li Jiashu" },
    latinName: "Li Jiashu",
    role: { zh: "全站开发", en: "Full-site engineering" },
    initials: "LJS",
    image: "/images/team-li-jiashu.jpg",
    illustrated: true,
    paragraphs: [
      {
        zh: "小程序、网站和后台，从页面做到接口。",
        en: "Mini programs, websites, and the desk behind them, from the screen through to the interface.",
      },
      {
        zh: "电商小程序的页面和下单，他和王浩然一起做。",
        en: "He and Wang Haoran build the screens and checkout of an ecommerce mini program.",
      },
    ],
  },
  {
    id: "wang-haoran",
    name: { zh: "王浩然", en: "Wang Haoran" },
    latinName: "Wang Haoran",
    role: { zh: "全站开发", en: "Full-site engineering" },
    initials: "WHR",
    image: "/images/team-wang-haoran.jpg",
    illustrated: true,
    paragraphs: [
      {
        zh: "把方案做成顾客能打开、能下单的小程序，并接着改。",
        en: "He turns a plan into a mini program a customer can open and order from, then keeps changing it.",
      },
    ],
  },
  {
    id: "liu-xiaobin",
    name: { zh: "刘小斌", en: "Liu Xiaobin" },
    latinName: "Liu Xiaobin",
    role: { zh: "市场", en: "Marketing" },
    initials: "LXB",
    image: "/images/team-liu-xiaobin.jpg",
    illustrated: true,
    paragraphs: [
      {
        zh: "对接要做电商小程序的人，把做法讲成听得懂的话。",
        en: "He talks with people who want an ecommerce mini program, and says how it works in plain words.",
      },
    ],
  },
];

export interface PartnerFact {
  id: string;
  name: Localized;
  url: string | Missing;
  note: Localized;
}

export const partners: PartnerFact[] = [
  {
    id: "mics",
    name: lab.name,
    url: lab.url,
    note: {
      zh: "江李铠在这里读博。",
      en: "Likai Jiang’s PhD lab.",
    },
  },
  {
    id: "sues-ai",
    name: {
      zh: "上海工程技术大学电子电气工程学院人工智能实验室",
      en: "Institute of Artificial Intelligence, School of Electronic and Electrical Engineering, SUES",
    },
    url: "https://www.sues.edu.cn",
    note: {
      zh: "江李铠在这里读硕。",
      en: "Likai Jiang’s master’s lab.",
    },
  },
];

export interface ResearchTrack {
  id: string;
  title: Localized;
  body: Localized;
}

export const researchTracks: ResearchTrack[] = [
  {
    id: "watermark",
    title: { zh: "音乐生成过程水印", en: "Watermarks inside generated music" },
    body: {
      zh: "想在生成的时候就把身份写进音乐。压缩之后、从成片里任意切几秒、或者再合成一遍仍能认出，这些还没有做成。",
      en: "The aim is to write an identity in while the music is generated. Identifying it after compression, after an arbitrary few seconds cut from the finished file, or after a rebuild, is not done yet.",
    },
  },
  {
    id: "evolve",
    title: { zh: "会进化的模型", en: "A model that keeps changing" },
    body: {
      zh: "现在的模型是训练、测试、冻结权重、发布，再等下一代。我们想要的是边用边吸收经验、自己变好的模型。",
      en: "Today a model is trained, tested, frozen, and shipped, then you wait for the next one. We want a model that picks up experience while it is in use.",
    },
  },
];

export const incubating: Array<{ name: Localized; note: Localized }> = [
  {
    name: { zh: "舆情预测", en: "Opinion forecasting" },
    note: { zh: "斯坦福小镇式的多智能体模拟。", en: "A multi-agent simulation in the Stanford-town style." },
  },
  {
    name: { zh: "AI 足球实时预测", en: "Live football prediction" },
    note: { zh: "比赛进行中的预测。", en: "Predictions while a match is on." },
  },
  {
    name: { zh: "AI 视频金融化市场", en: "A market for AI video" },
    note: { zh: "把 AI 视频做成可以交易的东西。", en: "AI video treated as something that can be traded." },
  },
  {
    name: { zh: "GEO 优化推广系统", en: "A GEO promotion system" },
    note: { zh: "还在孵化，不是现在的服务页。", en: "Still incubating. Not the service page you can buy today." },
  },
  {
    name: { zh: "金融量化回测平台", en: "A quant backtest desk" },
    note: { zh: "策略先在历史行情里跑一遍。", en: "A strategy runs on past prices before it runs live." },
  },
];

export const education: EducationFact[] = [
  {
    id: "usst-phd",
    current: true,
    degree: { zh: "博士（在读）", en: "PhD (in progress)" },
    school: school.name,
    schoolUrl: school.url,
    unit: {
      zh: "光电信息与计算机工程学院 · 多媒体智能计算与安全实验室（MICS Lab）",
      en: "School of Optical-Electrical and Computer Engineering · MICS Lab",
    },
    field: { zh: "人工智能", en: "Artificial intelligence" },
    note: {
      zh: "实验室主页：mics.usst.edu.cn。",
      en: "Lab site: mics.usst.edu.cn.",
    },
  },
  {
    id: "sues-master",
    current: false,
    degree: { zh: "硕士（论文上的署名）", en: "Master’s (as signed on the papers)" },
    school: { zh: "上海工程技术大学", en: "Shanghai University of Engineering Science" },
    schoolUrl: "https://www.sues.edu.cn",
    unit: {
      zh: "电子电气工程学院人工智能实验室",
      en: "Institute of Artificial Intelligence, School of Electronic and Electrical Engineering",
    },
    field: { zh: "计算机图形学", en: "Computer graphics" },
    note: {
      zh: "2024、2025 年几篇论文的作者简介都写的是硕士生。",
      en: "The 2024 and 2025 author bios list a master’s student.",
    },
  },
];

export const papers: PaperFact[] = [
  {
    id: "jsjfz-2025-unet",
    title: {
      zh: "混合 U-Net 网络的高质量实时渲染方法",
      en: "High-quality real-time rendering with a hybrid U-Net",
    },
    authors: "江李铠, 王国中, 赵海武",
    venue: {
      zh: "计算机仿真, 2025, 42(9): 318-325",
      en: "Computer Simulation, 2025, 42(9): 318-325",
    },
    date: "2025-09",
    doi: null,
    url: "http://www.jsjfz.com/",
    kind: { zh: "中文核心期刊", en: "Chinese core journal" },
    note: {
      zh: "上海工程技术大学电子电气工程学院。文章编号 10006-9348(2025)09-0318-08。",
      en: "School of Electronic and Electrical Engineering, SUES. Article no. 10006-9348(2025)09-0318-08.",
    },
  },
  {
    id: "spie-2024-hybrid",
    title: {
      zh: "Design and implementation of heuristic hybrid rendering",
      en: "Design and implementation of heuristic hybrid rendering",
    },
    authors: "Jiang LiKai, Wang GuoZhong, Zhao HaiWu",
    venue: {
      zh: "Proc. SPIE 13105, ICCAID 2023, 1310505",
      en: "Proc. SPIE 13105, International Conference on Computer Graphics, Artificial Intelligence, and Data Processing (ICCAID 2023), 1310505",
    },
    date: "2024-03-27",
    doi: "10.1117/12.3026398",
    url: "https://doi.org/10.1117/12.3026398",
    kind: { zh: "国际会议论文（SPIE）", en: "Conference paper (SPIE)" },
    note: {
      zh: "署名单位是上海工程技术大学。",
      en: "Affiliation: Shanghai University of Engineering Science.",
    },
  },
  {
    id: "sues-2024-cgan",
    title: {
      zh: "基于条件生成式对抗网络的高质量动态实时渲染方法",
      en: "High-quality dynamic real-time rendering method based on conditional generative adversarial networks",
    },
    authors: "江李铠, 王国中, 赵海武",
    venue: {
      zh: "上海工程技术大学学报, 2024, 38(4): 451-457",
      en: "Journal of Shanghai University of Engineering Science, 2024, 38(4): 451-457",
    },
    date: "2024-12-31",
    doi: "10.12299/jsues.24-0015",
    url: "https://xuebao.sues.edu.cn/cn/article/doi/10.12299/jsues.24-0015",
    kind: { zh: "校报", en: "University journal" },
    note: {
      zh: "作者简介写的是硕士生，1997 年生，做计算机图形学。",
      en: "Author bio: master’s student in computer graphics, born 1997.",
    },
  },
];

export const contact = {
  telephone: person.telephone,
  telephoneHref: "tel:+8613651946700",
  wechat: person.wechat,
  email: person.email,
  emailHref: person.email ? `mailto:${person.email}` : null,
  city: person.city,
};

export const icp = {
  number: "沪ICP备2026006513号-1",
  url: "https://beian.miit.gov.cn/",
  holder: {
    zh: "上海市杨浦区殷行街道微宠时光软件工作室",
    en: "Weichong Time Software Studio",
  } satisfies Localized,
};

export const socials: SocialLink[] = [
  {
    id: "xiaoyuan",
    label: { zh: "小源AI", en: "Xiaoyuan" },
    url: SITES.xiaoyuan.origin,
    sameAs: true,
  },
];

export const cases: Array<{
  name: Localized;
  metric: Localized | Missing;
  note: Localized;
  href?: string;
  image?: string;
}> = [
  {
    name: { zh: "出海独立站", en: "Export storefronts" },
    metric: null,
    note: {
      zh: "多个客户。站点从做到上线。",
      en: "Several clients. Sites built and shipped.",
    },
  },
  {
    name: { zh: "西藏 · 手工藏毯品牌", en: "Tibet · a handmade-rug brand" },
    metric: null,
    href: "/cases#done",
    image: "/images/ecommerce/scene-rug.webp",
    note: {
      zh: "品牌自己的小程序店。客户全称不公开。",
      en: "The brand’s own mini-program shop. The legal name stays private.",
    },
  },
  {
    name: { zh: "苏州 · 玩具工厂", en: "Suzhou · a toy factory" },
    metric: null,
    href: "/cases#done",
    image: "/images/ecommerce/scene-toy.webp",
    note: {
      zh: "工厂自己的小程序店。客户全称不公开。",
      en: "The factory’s own mini-program shop. The legal name stays private.",
    },
  },
  {
    name: { zh: "江苏文旅", en: "Jiangsu Culture and Tourism" },
    metric: null,
    note: {
      zh: "GEO 优化。",
      en: "GEO work.",
    },
  },
  {
    name: { zh: "义乌机器人玩具", en: "Yiwu robot toys" },
    metric: null,
    note: {
      zh: "GEO 优化。企业全称未授权，不写。",
      en: "GEO work. The legal name is not published.",
    },
  },
  {
    name: { zh: "个人 OPC 公司", en: "One-person companies" },
    metric: null,
    note: {
      zh: "做过这类客户，名单不公开。",
      en: "This kind of client. Names stay private.",
    },
  },
  {
    name: { zh: "中体量自媒体", en: "Mid-size creator accounts" },
    metric: null,
    note: {
      zh: "账号和相关工作人员。未授权的名字不列。",
      en: "Accounts and their staff. Names stay unpublished without clearance.",
    },
  },
];

export const now = {
  updated: "2026-10-15",
  items: [
    {
      zh: "蚁算现在主要做小程序电商：现成商城按年用，品牌要单独做的就深度定制，店里可以加 AI 导购。",
      en: "Yisuan’s main work is mini-program shops: a ready shop by the year, a custom mini program when a brand wants its own, and an AI guide in the shop if you want one.",
    },
    {
      zh: "另外还做 App、网站和 GEO。小源在线上。比特音内测，生成模型正在更换。蚁算老师和蚁算科研可以打开演示。",
      en: "Apps, websites, and GEO are still taken. Xiaoyuan is up. 比特音 is in beta while the generator is replaced. Yisuan Teacher and Yisuan Research have demos.",
    },
    {
      zh: "博士在上海理工大学 MICS 实验室，做 AI 安全和音乐生成模型的水印。",
      en: "The PhD is at USST MICS Lab: AI security, and watermarks for music-generation models.",
    },
    {
      zh: "照常健身，也照常带宠物。",
      en: "Still training, still living with pets.",
    },
  ] satisfies Localized[],
};

export const timeline: Array<{
  period: Localized;
  title: Localized;
  body: Localized;
  href?: string;
}> = [
  {
    period: { zh: "现在", en: "Now" },
    title: { zh: "上海理工大学 · MICS 实验室博士在读", en: "PhD in progress · USST MICS Lab" },
    body: {
      zh: "院校：上海理工大学。实验室：多媒体智能计算与安全实验室。方向：AI 安全，以及音乐生成模型的水印。",
      en: "University of Shanghai for Science and Technology. Lab: MICS. Field: AI security, and watermarks for music models.",
    },
    href: "/research",
  },
  {
    period: { zh: "2026-03", en: "2026-03" },
    title: { zh: "成立上海蚁算智能科技有限公司", en: "Founded Yisuan Intelligence" },
    body: {
      zh: "2026年3月8日成立。给中小企业做智能体、小程序、App 和网站，也在做自己的产品。创始人江李铠。",
      en: "Founded 8 March 2026. Agents, mini programs, apps, and websites for smaller companies, plus our own products. Founder: Likai Jiang.",
    },
    href: "/ventures/yisuan",
  },
  {
    period: { zh: "2025-04", en: "2025-04" },
    title: { zh: "登记微宠时光软件工作室", en: "Registered Weichong Time Studio" },
    body: {
      zh: "2025年4月开的宠物数字化工作室。跟蚁算不是一家。",
      en: "Opened April 2025. Pet digitalization. A separate company from Yisuan.",
    },
    href: "/ventures/weichong",
  },
  {
    period: { zh: "2025-09", en: "2025-09" },
    title: { zh: "《计算机仿真》发了一篇中文核心", en: "Chinese core paper in Computer Simulation" },
    body: {
      zh: "《混合 U-Net 网络的高质量实时渲染方法》，计算机仿真 2025 年第 42 卷第 9 期，318-325 页。当时署名是上海工程技术大学。",
      en: "“High-quality real-time rendering with a hybrid U-Net,” Computer Simulation 42(9), 318–325. Affiliation then: SUES.",
    },
    href: "/research",
  },
  {
    period: { zh: "2024", en: "2024" },
    title: { zh: "两篇渲染方向论文", en: "Two rendering papers" },
    body: {
      zh: "一篇 SPIE 会议论文，一篇《上海工程技术大学学报》。署名都是上海工程技术大学。",
      en: "A SPIE conference paper and a SUES journal article. Affiliation: SUES.",
    },
    href: "/research",
  },
  {
    period: { zh: "此前", en: "Earlier" },
    title: { zh: "设计、产品和电商", en: "Design, product, and ecommerce" },
    body: {
      zh: "美术生出身，画过少年漫画。后来做过 UI、产品经理、前端和 Unity。中间也做过电商和别的产品，做成的、没做成的都有。",
      en: "Art school, then teen comics. Later UI, product, front-end, and Unity. Ecommerce and other products in between — some shipped, some didn’t.",
    },
  },
];

export const pressBios = {
  short: {
    zh: "江李铠（Likai Jiang），上海人，上海理工大学人工智能在读博士，蚁算智能创始人。",
    en: "Likai Jiang (江李铠), from Shanghai. PhD student in AI at USST. Founder of Yisuan.",
  },
  medium: {
    zh: "江李铠，英文名 Likai Jiang，上海人。上海理工大学人工智能在读博士，方向是 AI 安全和音乐生成模型水印。美术生出身，做过漫画、UI、产品和前端。公司是蚁算智能，给中小企业做智能体、小程序、App 和网站。以前做过宠物数字化和电商。",
    en: "Likai Jiang is a Shanghai-based PhD student in AI at USST, working on AI security and watermarks for music models. He trained in art, then comics, UI, product, and front-end. He runs Yisuan, which builds agents, mini programs, apps, and sites for smaller companies. He previously worked on pet digitalization and ecommerce.",
  },
  long: {
    zh: "江李铠，英文名 Likai Jiang，论文里也写 Jiang Likai。上海人，1997 年生，上海理工大学 MICS 实验室人工智能在读博士，方向是 AI 安全和音乐生成模型水印。美术生出身，十几岁画少年漫画，后来做过 UI 设计、产品经理、前端和 Unity。硕士阶段在上海工程技术大学发过图形学和实时渲染的论文，其中《计算机仿真》2025 年第 9 期有一篇。公司是上海蚁算智能科技有限公司（2026 年 3 月 8 日成立）和微宠时光软件工作室（2025 年 4 月 29 日登记）。蚁算做小程序电商：现成商城按年用，品牌要单独做的就深度定制，店里可以加 AI 导购。也做 App、网站和 GEO。自研产品还有比特音、小源AI、蚁算老师和蚁算科研。做过出海独立站、西藏的手工藏毯品牌、苏州的玩具工厂、江苏文旅和义乌的机器人玩具企业。核心成员何前亮负责后端、部署和服务器安全。李嘉树和王浩然负责全站开发。刘小斌负责市场。",
    en: "Likai Jiang (江李铠; also Jiang Likai on papers) is from Shanghai, born 1997, a PhD student in AI at USST MICS Lab. The PhD is on AI security and watermarks for music-generation models. He trained as an art student, drew comics as a teenager, then worked in UI, product, front-end, and Unity. Master’s papers from SUES are in graphics and real-time rendering, including a 2025 Computer Simulation article. He runs Yisuan Intelligence (founded 8 March 2026) and Weichong Time (registered 29 April 2025). Yisuan makes mini-program shops: a ready shop by the year, a custom mini program for one brand, and an AI guide in the shop. Apps, websites, and GEO too. Other products: 比特音, Xiaoyuan, Yisuan Teacher, and Yisuan Research. Work has included export storefronts, a handmade-rug brand in Tibet, a toy factory in Suzhou, Jiangsu Culture and Tourism, and a Yiwu robot-toy company. Qianliang He runs backend, deploys, and server security. Li Jiashu and Wang Haoran do full-site engineering. Liu Xiaobin handles marketing.",
  },
};

export const titles = {
  standard: {
    zh: "江李铠｜上海理工大学在读博士，蚁算智能创始人",
    en: "Likai Jiang | PhD student at USST, founder of Yisuan",
  },
  speaker: {
    zh: "江李铠，蚁算智能创始人",
    en: "Likai Jiang, founder of Yisuan",
  },
};

export function t(value: Localized, locale: Locale): string {
  return value[locale];
}

export function display<T>(
  value: T | Missing,
  locale: Locale,
  format?: (value: T) => string,
): string {
  if (value === null || value === undefined) return "";
  if (typeof value === "object" && value !== null && "zh" in value && "en" in value) {
    return (value as Localized)[locale];
  }
  return format ? format(value) : String(value);
}

export function sameAsUrls(): string[] {
  const urls = socials.filter((s) => s.sameAs && s.url).map((s) => s.url as string);
  urls.push(SITES.yisuan.origin, SITES.xiaoyuan.origin, `${SITES.me.origin}/ventures/weichong`);
  return [...new Set(urls)];
}

export function personImageAbs(): string {
  return person.image?.startsWith("http")
    ? person.image
    : `${SITES.me.origin}${person.image ?? "/og/zh/home.png"}`;
}

