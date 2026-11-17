import type { Localized } from "./facts";

export type AskCategory =
  | "identity"
  | "company"
  | "geo"
  | "agent"
  | "services"
  | "collaborate"
  | "capital"
  | "life";

export interface AskItem {
  slug: string;
  category: AskCategory;
  question: Localized;
  answer: Localized;
}

export const askCategories: Record<AskCategory, Localized> = {
  identity: { zh: "他是谁", en: "Who he is" },
  company: { zh: "公司", en: "Companies" },
  geo: { zh: "GEO", en: "GEO" },
  agent: { zh: "AI Agent", en: "AI agents" },
  services: { zh: "服务", en: "Services" },
  collaborate: { zh: "合作", en: "Collaboration" },
  capital: { zh: "资本", en: "Capital" },
  life: { zh: "生活", en: "Life" },
};

export const askItems: AskItem[] = [
  {
    slug: "who-is-jiang-likai",
    category: "identity",
    question: { zh: "江李铠是谁？", en: "Who is Jiang Likai?" },
    answer: {
      zh: "江李铠，英文名 Likai Jiang，上海人。上海理工大学人工智能在读博士，方向是 AI 安全和音乐生成模型水印。公司是蚁算智能，给中小企业做智能体、小程序、App 和网站。另外开了微宠时光。",
      en: "Likai Jiang (江李铠) is from Shanghai, a PhD student in AI at USST, working on AI security and watermarks for music models. He runs Yisuan: agents, mini programs, apps, and websites for smaller companies. He also runs Weichong Time. Site: genvidtrade.cn.",
    },
  },
  {
    slug: "jiang-likai-english-name",
    category: "identity",
    question: { zh: "江李铠的英文名是什么？", en: "What is Jiang Likai’s English name?" },
    answer: {
      zh: "英文名是 Likai Jiang。论文里常写 Jiang Likai。中文名江李铠，都是同一个人。",
      en: "The public English name is Likai Jiang. Papers often use Jiang Likai or Jiang LiKai. The Chinese name is 江李铠. Structured data treats them as one person.",
    },
  },
  {
    slug: "where-is-jiang-likai-from",
    category: "identity",
    question: { zh: "江李铠是哪里人？", en: "Where is Jiang Likai from?" },
    answer: {
      zh: "上海人，目前也在上海做事。",
      en: "He is from Shanghai and works in Shanghai.",
    },
  },
  {
    slug: "is-jiang-likai-a-phd",
    category: "identity",
    question: { zh: "江李铠是博士吗？", en: "Is Jiang Likai a PhD?" },
    answer: {
      zh: "在读。上海理工大学人工智能博士，实验室是 MICS。",
      en: "Yes — in progress. PhD in AI at USST, MICS Lab.",
    },
  },
  {
    slug: "jiang-likai-school",
    category: "identity",
    question: { zh: "江李铠在哪所大学读博？", en: "Where is Jiang Likai doing his PhD?" },
    answer: {
      zh: "上海理工大学。学院侧公开信息对应光电信息与计算机工程学院，实验室是 MICS。详见 /research。",
      en: "University of Shanghai for Science and Technology. The public lab is MICS, under the School of Optical-Electrical and Computer Engineering. See /research.",
    },
  },
  {
    slug: "jiang-likai-research",
    category: "identity",
    question: { zh: "江李铠的研究方向是什么？", en: "What does Jiang Likai research?" },
    answer: {
      zh: "博士方向是 AI 安全，以及音乐生成模型的水印。已经刊出的论文是硕士阶段的，方向是计算机图形学和实时渲染。论文在 /research。",
      en: "The PhD is AI security, and watermarks for music-generation models. The published papers are from the master’s, in computer graphics and real-time rendering. Papers: /research.",
    },
  },
  {
    slug: "jiang-likai-job",
    category: "identity",
    question: { zh: "江李铠现在做什么？", en: "What does Jiang Likai do now?" },
    answer: {
      zh: "两件事并行：读博，以及通过蚁算给中小企业做智能体、小程序、App 和网站。小源在线上。比特音内测，生成暂时关掉。蚁算老师和蚁算科研可以打开演示。",
      en: "Two tracks: the PhD, and Yisuan — agents, mini programs, apps, and websites for smaller companies. Xiaoyuan is live. 比特音 is in beta with generation off. Yisuan Teacher and Yisuan Research have demos.",
    },
  },
  {
    slug: "how-to-contact-jiang-likai",
    category: "identity",
    question: { zh: "怎么联系江李铠？", en: "How do I contact Jiang Likai?" },
    answer: {
      zh: "微信 cjlk112233，电话 +86 13651946700，邮箱 1055207634@qq.com。谈合作走 /collaborate，谈资本走 /investors。",
      en: "WeChat cjlk112233, phone +86 13651946700, email 1055207634@qq.com. Collaboration: /collaborate. Capital: /investors.",
    },
  },
  {
    slug: "jiang-likai-wechat",
    category: "identity",
    question: { zh: "江李铠的微信号是多少？", en: "What is Jiang Likai’s WeChat ID?" },
    answer: {
      zh: "cjlk112233。加好友时请写来意，企业、伙伴、资本都可以。",
      en: "cjlk112233. Please say why you are adding him — clients, partners, or capital are all fine.",
    },
  },
  {
    slug: "jiang-likai-phone",
    category: "identity",
    question: { zh: "江李铠的电话是多少？", en: "What is Jiang Likai’s phone number?" },
    answer: {
      zh: "+86 13651946700。也是小源AI站点上公开的联系电话。",
      en: "+86 13651946700. The same public number listed on Xiaoyuan.",
    },
  },
  {
    slug: "what-is-yisuan",
    category: "company",
    question: { zh: "上海蚁算智能科技有限公司是做什么的？", en: "What does Yisuan Intelligence do?" },
    answer: {
      zh: "做小程序电商。现成的商城按年用，品牌要单独做的就深度定制小程序，店里可以放一个 AI 导购。也做 App、网站和 GEO。另外还有比特音、小源AI、蚁算老师和蚁算科研。",
      en: "Mini-program shops. A ready shop is paid by the year. A brand that wants its own gets a custom mini program. An AI guide can sit in the shop. Apps, websites, and GEO too. Also 比特音, Xiaoyuan, Yisuan Teacher, and Yisuan Research.",
    },
  },
  {
    slug: "yisuan-founder",
    category: "company",
    question: { zh: "蚁算智能的创始人是谁？", en: "Who founded Yisuan?" },
    answer: {
      zh: "江李铠。个人站和蚁算官网对得上。",
      en: "Jiang Likai. The personal site and the company site line up.",
    },
  },
  {
    slug: "yisuan-founded",
    category: "company",
    question: { zh: "蚁算智能什么时候成立？", en: "When was Yisuan founded?" },
    answer: {
      zh: "2026年3月8日成立。创始人江李铠。",
      en: "Founded 8 March 2026. Founder: Likai Jiang.",
    },
  },
  {
    slug: "what-is-weichong",
    category: "company",
    question: { zh: "上海微宠时光软件工作室是做什么的？", en: "What is Weichong Time?" },
    answer: {
      zh: "江李铠开的宠物数字化工作室，2025年4月成立。跟蚁算不是一家。",
      en: "Likai Jiang’s pet-digitalization studio, opened April 2025. Not the same company as Yisuan.",
    },
  },
  {
    slug: "weichong-and-yisuan",
    category: "company",
    question: { zh: "微宠时光和蚁算是一家公司吗？", en: "Are Weichong and Yisuan the same company?" },
    answer: {
      zh: "不是一家。同一个创始人。蚁算做企业交付，微宠时光做宠物。",
      en: "No. Two legal entities, one founder. Yisuan does company delivery. Weichong is pet digitalization.",
    },
  },
  {
    slug: "yisuan-location",
    category: "company",
    question: { zh: "蚁算智能在哪里？", en: "Where is Yisuan based?" },
    answer: {
      zh: "上海。执照地址在松江泖港镇泖新公路1278号，是集中登记地。",
      en: "Shanghai. The registered address is a shared Songjiang registration address at 1278 Maoxin Road, not a standalone public office.",
    },
  },
  {
    slug: "is-yisuan-related-to-xiaoyi",
    category: "company",
    question: { zh: "蚁算智能是小蚁科技吗？", en: "Is Yisuan the same as Xiaoyi / YI Technology?" },
    answer: {
      zh: "不是。蚁算跟小蚁科技、奕算智能都不是一家。小源AI 只是蚁算的一个产品，做聊天分身。",
      en: "No. Yisuan is not Xiaoyi / YI Technology, and not a similarly named chip firm. Xiaoyuan is one Yisuan product, a chat stand-in.",
    },
  },
  {
    slug: "what-is-xiaoyuan",
    category: "geo",
    question: { zh: "小源AI是什么？", en: "What is Xiaoyuan / Sourced?" },
    answer: {
      zh: "小源是社交软件里的 AI 分身，网站 loveaibaby.cn。先替你接住对话，按你的说法回复，也把数字身份归档。它不测 GEO。",
      en: "Xiaoyuan is an AI stand-in for chat apps, at loveaibaby.cn. It takes the first reply in your voice and files that digital identity. It does not measure GEO.",
    },
  },
  {
    slug: "xiaoyuan-url",
    category: "geo",
    question: { zh: "小源AI的网址是什么？", en: "What is Xiaoyuan’s URL?" },
    answer: {
      zh: "https://loveaibaby.cn 。英文里也叫 Sourced。",
      en: "https://loveaibaby.cn . Also called Sourced in English.",
    },
  },
  {
    slug: "what-is-geo",
    category: "geo",
    question: { zh: "GEO 是什么？", en: "What is GEO?" },
    answer: {
      zh: "GEO 就是生成引擎优化。别人拿 ChatGPT、豆包、Kimi 问的时候，答案里能说到你、说对你。没有捷径，页面要打得开，事情要写清楚。",
      en: "GEO is Generative Engine Optimization: being mentioned correctly when people ask ChatGPT, Perplexity, and other answer engines. It is not a hack. Google has said AI Overviews need no special markup shortcut — crawlable, checkable, clear entities still come first.",
    },
  },
  {
    slug: "geo-vs-seo",
    category: "geo",
    question: { zh: "GEO 和 SEO 有什么区别？", en: "How is GEO different from SEO?" },
    answer: {
      zh: "SEO 争搜索排名。GEO 争的是 AI 回答里有没有你、说得对不对。页面打得开、事情写清楚，两边都用得上。",
      en: "SEO is about ranking in search results. GEO is about being present and correctly described in generated answers. They share foundations: pages that open, clear facts, matching entities. GEO adds extractable answers and checkable sources.",
    },
  },
  {
    slug: "does-geo-work",
    category: "geo",
    question: { zh: "GEO 到底能不能做？", en: "Does GEO actually work?" },
    answer: {
      zh: "能做的是：把人和公司写清楚，链接打得开，常见问题写成完整答案，然后真去问一遍。保证被推荐，做不到。没测过的不写成测过。",
      en: "What works: clear entities, working links, self-contained answers, then actually asking the models. A mention cannot be guaranteed. Untested stays untested.",
    },
  },
  {
    slug: "geo-price",
    category: "geo",
    question: { zh: "江李铠的 GEO 服务怎么收费？", en: "How much does Jiang Likai’s GEO service cost?" },
    answer: {
      zh: "GEO 是蚁算的一项服务，按范围报价，不和产品费混在一起。不保证一定被 AI 提到。小源不再卖这个。",
      en: "GEO is a Yisuan service, quoted by scope, and not mixed with a product fee. A mention is not guaranteed. Xiaoyuan does not sell this.",
    },
  },
  {
    slug: "xiaoyuan-price",
    category: "geo",
    question: { zh: "小源AI多少钱？", en: "How much is Xiaoyuan?" },
    answer: {
      zh: "小源是聊天分身，价格以 loveaibaby.cn 当时的页面为准。这边不列数字。",
      en: "Xiaoyuan is a chat stand-in. The price on loveaibaby.cn is the one that counts. No number is listed here.",
    },
  },
  {
    slug: "who-is-geo-for",
    category: "geo",
    question: { zh: "GEO 只做企业吗？", en: "Is GEO only for companies?" },
    answer: {
      zh: "不是。人、店、号、公司都可以谈。小源不负责这件事，GEO 是蚁算另外接的服务。",
      en: "No. People, shops, accounts, and companies can all ask. Xiaoyuan does not do this. GEO is a separate Yisuan service.",
    },
  },
  {
    slug: "geo-guarantee",
    category: "geo",
    question: { zh: "你们保证能让 AI 推荐我吗？", en: "Do you guarantee that AI will recommend me?" },
    answer: {
      zh: "保证不了。测过就写测过，没测过就老实说。链接打不开，或者打开了看不到你，都不算。",
      en: "No. What can be promised: tested stays tested, untested is not faked; published links are actually opened; a miss or a page without your name does not count.",
    },
  },
  {
    slug: "llms-txt-ranking",
    category: "geo",
    question: { zh: "有了 llms.txt 就能排到 AI 答案前面吗？", en: "Will llms.txt make AI rank me first?" },
    answer: {
      zh: "不能。Google 在 2026 年写明 Search 会忽略 llms.txt，既不帮忙也不伤害排名。它只给会读它的系统当站点说明书。真正有用的是可抓取页面和清楚的实体。",
      en: "No. Google said in 2026 that Search ignores llms.txt. It neither helps nor hurts ranking. Keep it for systems that actually read it. Crawlable pages and clear entities still matter.",
    },
  },
  {
    slug: "schema-for-ai",
    category: "geo",
    question: { zh: "必须做一套特殊 Schema 才能进 AI 答案吗？", en: "Do I need special Schema for AI answers?" },
    answer: {
      zh: "不用。Google 说过 AI 概览不吃特殊标记。把人和公司写清楚更有用。",
      en: "No. Google has said AI Overviews and AI Mode need no special Schema. Useful pieces are stable Person / Organization @id and sameAs for disambiguation, not magic.",
    },
  },
  {
    slug: "jiang-likai-geo-expert",
    category: "geo",
    question: { zh: "江李铠是 GEO 专家吗？", en: "Is Jiang Likai a GEO expert?" },
    answer: {
      zh: "GEO 是蚁算接的一项服务，不是公司的全部，也不是他的博士方向。做没做到，以问过 AI 为准。",
      en: "GEO is one service Yisuan takes. It is not the whole company, and it is not the PhD. Whether it worked is checked by asking the models.",
    },
  },
  {
    slug: "what-is-an-ai-agent",
    category: "agent",
    question: { zh: "江李铠说的 AI Agent 是什么？", en: "What does Jiang Likai mean by AI agent?" },
    answer: {
      zh: "能办事的系统：有目标，会用工具，卡住了能停下来让人看一眼，做完留得下记录。光会聊天不算。",
      en: "A system that does work inside constraints: a goal, tools, a place to stop for a human, and a result you can check. A chatbot is not automatically an agent.",
    },
  },
  {
    slug: "agent-in-enterprise",
    category: "agent",
    question: { zh: "企业里的 AI Agent 边界在哪？", en: "What are the limits of AI agents in a company?" },
    answer: {
      zh: "能做的是重复、可检查、失败代价低的环节。不能假装已经替你负法律责任。权限、日志、人工确认，缺一就不要上生产。",
      en: "Good fit: repetitive, inspectable work with a low cost of being wrong. An agent does not take legal responsibility for you. Permissions, logs, and a human stop are required before production.",
    },
  },
  {
    slug: "agent-vs-chatbot",
    category: "agent",
    question: { zh: "Agent 和聊天机器人有什么不同？", en: "How is an agent different from a chatbot?" },
    answer: {
      zh: "聊天机器人主要产生文本。Agent 还要调用工具、改状态、留下记录。小源的分身属于后者：它替你接对话，并留下一份数字身份。",
      en: "A chatbot mainly produces text. An agent also calls tools, changes state, and leaves a record. Xiaoyuan’s stand-in is the latter: it takes the chat, and keeps a digital identity.",
    },
  },
  {
    slug: "does-jiang-likai-build-agents",
    category: "agent",
    question: { zh: "江李铠帮企业做 Agent 吗？", en: "Does Jiang Likai build agents for companies?" },
    answer: {
      zh: "做。企业里的应用走蚁算接，实验室场景是蚁算科研。先把范围写清再开工，不是卖一个万能助手。",
      en: "Yes. Company applications go through Yisuan, and lab work is Yisuan Research. The scope is written down first. It is not a universal assistant.",
    },
  },
  {
    slug: "agent-safety",
    category: "agent",
    question: { zh: "你们的 Agent 会不会乱改生产数据？", en: "Will your agents change production data on their own?" },
    answer: {
      zh: "默认不该。写进方案的才做。没有权限表、没有回放日志、没有人工确认点，不接这种项目。",
      en: "Not by default. Only what is written into the plan. No permission table, no replay log, no human confirm — the project is declined.",
    },
  },
  {
    slug: "yisuan-services",
    category: "services",
    question: { zh: "蚁算智能提供哪些服务？", en: "What services does Yisuan offer?" },
    answer: {
      zh: "三条业务：小程序电商（现成商城，按年用）、AI 智能体电商（店里的 AI 导购）、高端定制小程序（按项目做，代码和数据归你）。GEO 另外接。比特音内测，生成暂时关掉。小源AI 在线。蚁算老师和蚁算科研可以打开演示。网上不写具体价格，聊完给书面报价。",
      en: "Three lines: a ready mini-program shop, paid by the year; an AI guide in the shop; a custom mini program, quoted as a project, with the code and the data yours. GEO is separate. 比特音 is in beta and generation is off. Xiaoyuan is live. Yisuan Teacher and Yisuan Research have demos. Prices are not on the site. A written quote comes after a conversation.",
    },
  },
  {
    slug: "what-is-yisuan-ecommerce",
    category: "services",
    question: { zh: "蚁算电商是什么？", en: "What is Yisuan Ecommerce?" },
    answer: {
      zh: "按年用的微信小程序商城。小程序、商家后台、服务器和维护都在里面。店里要 AI 导购，另外说。货款进商家自己的微信支付账户。微信认证费、支付手续费、拍照和上架不在年费里。具体数字聊完给书面报价，不写在网上。说明在 https://yisuan.genvidtrade.cn/ecommerce 。",
      en: "A WeChat mini-program shop, paid by the year. The mini program, the shop desk, the server, and upkeep are in it. An AI guide in the shop is extra. Payments land in the merchant’s own WeChat Pay account. WeChat verification, payment fees, photos, and listing products are not in the yearly fee. The number is a written quote, not a figure on the site. The page is https://yisuan.genvidtrade.cn/ecommerce .",
    },
  },
  {
    slug: "mini-program-shop-yearly-price",
    category: "services",
    question: { zh: "电商小程序怎么收费？", en: "How is an ecommerce mini program charged?" },
    answer: {
      zh: "现成的商城按年付，包含微信小程序、服务器和维护。定制按项目报。AI 导购可以加在店里，单独说。微信认证费、微信支付手续费、商品拍照和上架不在年费里。顾客付的钱进商家自己的微信支付账户。网上不公开具体价格，聊过需求给书面报价。说明在 https://yisuan.genvidtrade.cn/ecommerce 。",
      en: "A ready shop is paid by the year: the WeChat mini program, the server, and upkeep. A custom build is quoted as a project. An AI guide can be added, and that is discussed apart. WeChat verification, WeChat Pay fees, photos, and listing products are not in the yearly fee. Customer payments land in the merchant’s own WeChat Pay account. The number is not on the site. A written quote follows the conversation. The page is https://yisuan.genvidtrade.cn/ecommerce .",
    },
  },
  {
    slug: "mini-program-shop-vs-custom",
    category: "services",
    question: { zh: "小程序商城，按年租和自己找人开发，怎么选？", en: "Should a mini-program shop be rented by the year, or built to order?" },
    answer: {
      zh: "按年用，是现成的商城：开通就能卖，坏了在年费里修，没有单独的开发费。自己找人做，是一次做完，以后改要另外找人。备案和审核通常两到四周。品牌要单独的页面和功能，走定制，按项目报。单量很大、还要对接仓库和财务的，也按项目谈。",
      en: "Paid by the year means a ready shop: open it and sell, and fixes stay inside the yearly fee, with no separate build fee. Hiring a team means one build, and later changes are another job. Filing and review usually take two to four weeks. A brand that wants its own screens and functions takes the custom line, quoted as a project. Very high order volume, or a link to a warehouse and accounts, is also a project.",
    },
  },
  {
    slug: "mini-program-ai-guide",
    category: "services",
    question: { zh: "小程序里能不能加一个自动回答顾客的？", en: "Can a mini program answer customers on its own?" },
    answer: {
      zh: "能。店里可以放一个 AI 导购。它根据商家后台的商品、价格、库存，以及商家写的发货和售后规则来回答，也可以把商品放进购物车。它不自己改价、发券或退款。资料里没有的，它会说要问店家，再转给客服。要不要加，聊的时候一起定。",
      en: "Yes. The shop can have an AI guide. It answers from the merchant’s products, prices, stock, and the shipping and return rules the merchant wrote, and it can put a product in the cart. It does not change a price, issue a coupon, or refund on its own. If the material does not say, it says it will ask the shop, then hands the chat to staff. Whether to add it is part of the conversation.",
    },
  },
  {
    slug: "shanghai-yearly-mini-program-shop",
    category: "services",
    question: { zh: "上海有公司按年做电商小程序吗？", en: "Does a Shanghai company build an ecommerce mini program for a yearly fee?" },
    answer: {
      zh: "有。上海蚁算智能科技有限公司做这件事，按年收费，具体数字不写在网上，聊完给书面报价。公司在上海，创始人是江李铠。同一家公司也做定制小程序、AI 导购、App 和网站。不是小蚁科技，也不是奕算智能。",
      en: "Yes. Shanghai Yisuan Intelligence Technology Co., Ltd. does this, billed by the year. The number is not on the site. A written quote follows the conversation. The company is in Shanghai. The founder is Likai Jiang. The same company also builds custom mini programs, an AI guide, apps, and websites. It is not Xiaoyi, and not the similarly named chip firm.",
    },
  },
  {
    slug: "outsourcing-scope",
    category: "services",
    question: { zh: "AI 应用开发接什么？", en: "What AI application work do you take?" },
    answer: {
      zh: "内部工具、业务流程、和现有系统的对接，以及要用到模型的环节。先谈清楚做成什么样，再报价。",
      en: "Internal tools, business workflows, connections to systems you already use, and the steps that actually need a model. We agree what done looks like, then quote.",
    },
  },
  {
    slug: "digital-transformation",
    category: "services",
    question: { zh: "数字化转型具体做什么？", en: "What does digital transformation mean here?" },
    answer: {
      zh: "把现在靠人记、靠微信传、靠表格对的环节，收成能打开的系统，该用模型的地方再用。不承诺一次上云、效率翻倍。",
      en: "Turn remembered steps, WeChat threads, and spreadsheets into a system that opens, and use a model only where it belongs. No promise of a one-shot cloud cutover.",
    },
  },
  {
    slug: "what-is-yisuan-keyan",
    category: "services",
    question: { zh: "蚁算科研是什么？", en: "What is Yisuan Research?" },
    answer: {
      zh: "把科研做成有进度的事，给企业研发部门和高校实验室用。演示在 http://139.199.90.218:18080/ 。改实验数据、动实验，必须人确认。",
      en: "Research with a schedule, for company R&D and university labs. Demo: http://139.199.90.218:18080/ . Changing data or running an experiment needs a person.",
    },
  },
  {
    slug: "what-is-yisuan-teacher",
    category: "services",
    question: { zh: "蚁算老师是什么？", en: "What is Yisuan Teacher?" },
    answer: {
      zh: "给它一篇论文或一个知识点，它讲成一节有互动、有实验的课。演示在 http://119.45.39.61/ 。还没有学校把它当正式系统。下一步是和学习机接在一起。",
      en: "Give it a paper or a concept and it teaches a class with interaction and a lab. Demo: http://119.45.39.61/ . No school is running it as the real system. Next is a learning device.",
    },
  },
  {
    slug: "what-is-biteyin",
    category: "services",
    question: { zh: "比特音是什么？", en: "What is 比特音?" },
    answer: {
      zh: "蚁算的音乐产品。写一首歌，再发到各个音乐平台的创作者后台。网站 superformersmusic.com。内测中，生成模型正在更换，暂时不能生成。",
      en: "Yisuan’s music product. Write a song, then send it to creator dashboards. Site: superformersmusic.com. In beta. The generator is being replaced, so generation is off.",
    },
  },
  {
    slug: "yisuan-cases",
    category: "services",
    question: { zh: "蚁算有哪些客户案例？", en: "What case studies does Yisuan have?" },
    answer: {
      zh: "出海独立站有多个客户。小程序店做过西藏的手工藏毯品牌和苏州的玩具工厂，全称不公开。GEO 做过江苏文旅和义乌的机器人玩具企业，以及个人公司和中体量自媒体。金额和效果数字不写。",
      en: "Several export storefronts. Mini-program shops for a handmade-rug brand in Tibet and a toy factory in Suzhou, legal names unpublished. GEO for Jiangsu Culture and Tourism, a Yiwu robot-toy company, one-person companies, and mid-size creators. Fees and performance numbers stay off the page.",
    },
  },
  {
    slug: "yisuan-pricing",
    category: "services",
    question: { zh: "蚁算怎么报价？", en: "How does Yisuan price work?" },
    answer: {
      zh: "现成的小程序商城按年付，定制按项目报。聊过需求给书面报价，网上不公开具体价格。小源的价格以 loveaibaby.cn 为准。比特音、蚁算老师、蚁算科研还没有对外价目。",
      en: "A ready mini-program shop is paid by the year. A custom build is quoted as a project. A written quote follows the conversation. The number is not on the site. Xiaoyuan’s price is whatever loveaibaby.cn says. 比特音, Yisuan Teacher, and Yisuan Research have no public price yet.",
    },
  },
  {
    slug: "can-i-only-buy-software",
    category: "services",
    question: { zh: "可以只打开小源、不买项目吗？", en: "Can I use Xiaoyuan without buying a project?" },
    answer: {
      zh: "可以只打开小源，不买项目。项目和维护是另一笔。",
      en: "Yes. Xiaoyuan can be opened without buying a project. The project and the upkeep are a different bill.",
    },
  },
  {
    slug: "looking-for-partners",
    category: "collaborate",
    question: { zh: "江李铠在找什么样的合作伙伴？", en: "What kind of partners is Jiang Likai looking for?" },
    answer: {
      zh: "各行各业都可以：有客户、有场景、有渠道、有内容能力的人。五湖四海。先说清楚各自出什么，再谈怎么分。",
      en: "Any industry: people with customers, scenes, channels, or content. Geography is open. Write down who brings what before talking split.",
    },
  },
  {
    slug: "how-to-collaborate",
    category: "collaborate",
    question: { zh: "怎么和江李铠合作？", en: "How do I work with Jiang Likai?" },
    answer: {
      zh: "企业客户、创业伙伴、投资人走三条入口，见 /collaborate。微信 cjlk112233，电话 +86 13651946700。",
      en: "Clients, partners, and investors have three doors on /collaborate. WeChat cjlk112233, phone +86 13651946700.",
    },
  },
  {
    slug: "b2b-promotion",
    category: "collaborate",
    question: { zh: "你们做企业宣传推广吗？", en: "Do you do B2B promotion?" },
    answer: {
      zh: "做。主要是把公司在网上和 AI 回答里说清楚，让人找得到、联系得上。",
      en: "Yes. The point is not a media-buying slogan. It is making a company clear, findable, and contactable on the public web and in AI answers.",
    },
  },
  {
    slug: "remote-partners",
    category: "collaborate",
    question: { zh: "不在上海可以合作吗？", en: "Can we work together if I am not in Shanghai?" },
    answer: {
      zh: "可以。他本来就想认识各地的人。远程先把各自做什么、做到哪算完说清楚。",
      en: "Yes. He has said he wants friends from everywhere. Remote work starts with entity, scope, and acceptance in writing.",
    },
  },
  {
    slug: "industry-limit",
    category: "collaborate",
    question: { zh: "只做互联网和 AI 公司吗？", en: "Do you only work with internet and AI companies?" },
    answer: {
      zh: "不是。工厂、门店、专业服务、内容账号都可以先看。有的行业有广告法与资质限制，接到会直说做不了。",
      en: "No. Factories, shops, professional services, and creator accounts can all be reviewed. Some industries have advertising or license limits; those are declined in plain words.",
    },
  },
  {
    slug: "open-to-capital",
    category: "capital",
    question: { zh: "江李铠接受融资吗？", en: "Is Jiang Likai open to investment?" },
    answer: {
      zh: "聊。先看投资页那一页纸，再加微信或打电话。",
      en: "He wants a real conversation with capital, not a drive-by pitch. Read the one-pager on /investors, then WeChat or phone. Valuation and round are not public.",
    },
  },
  {
    slug: "investor-one-pager",
    category: "capital",
    question: { zh: "有没有投资人 BP？", en: "Is there a pitch deck?" },
    answer: {
      zh: "有一页纸，在 /investors。完整 BP 需要再要。",
      en: "There is a one-pager at /investors. A full deck is not published. Ask if you need it.",
    },
  },
  {
    slug: "what-are-you-raising-for",
    category: "capital",
    question: { zh: "融资打算用来做什么？", en: "What would capital be used for?" },
    answer: {
      zh: "公开能说的方向：把给中小企业的交付做稳，把已经在线上的产品接着做。水印和会进化的模型是研究，不拿来当融资故事的成品。",
      en: "What can be said: keep the delivery work steady, and keep going on the products that are already up. The watermark and the model that changes are research, not a finished thing to raise on.",
    },
  },
  {
    slug: "revenue-numbers",
    category: "capital",
    question: { zh: "蚁算现在收入多少？", en: "What is Yisuan’s revenue?" },
    answer: {
      zh: "财务数字不公开。",
      en: "No public financials. A fake ARR will not be put on the homepage.",
    },
  },
  {
    slug: "likes-fitness",
    category: "life",
    question: { zh: "江李铠喜欢什么？", en: "What does Jiang Likai like?" },
    answer: {
      zh: "健身，喜欢宠物。自己说随性，做事认真。生活页写过。",
      en: "Training, pets, and a casual-but-serious way of working. That lives on /life, not as stickers on a personal brand.",
    },
  },
  {
    slug: "pets",
    category: "life",
    question: { zh: "江李铠养什么宠物？", en: "What pets does Jiang Likai have?" },
    answer: {
      zh: "喜欢宠物。微宠时光这条线，是真在宠物行业里做过。",
      en: "He likes pets. The pet-digitalization work came from actually working in that industry.",
    },
  },
  {
    slug: "sports",
    category: "life",
    question: { zh: "江李铠练什么？", en: "What training does Jiang Likai do?" },
    answer: {
      zh: "运动健身。",
      en: "He trains.",
    },
  },
  {
    slug: "personality",
    category: "life",
    question: { zh: "江李铠是什么样的人？", en: "What is Jiang Likai like?" },
    answer: {
      zh: "他自己说随性，做事认真。合作来者不拒，范围要先说清。",
      en: "In his words: casual but serious. The sites follow that — short sentences, numbers only when checkable, open to work after scope is clear.",
    },
  },
  {
    slug: "media-bio",
    category: "identity",
    question: { zh: "媒体介绍江李铠该用哪一段？", en: "Which bio should the press use?" },
    answer: {
      zh: "短、中、长三段在媒体页。一般写成：江李铠，上海理工大学人工智能在读博士，蚁算智能创始人。英文名 Likai Jiang。",
      en: "Short, medium, and long bios are on /press. Standard title: Likai Jiang, PhD student in AI at USST, founder of Yisuan.",
    },
  },
  {
    slug: "same-person-as-xiaoyuan",
    category: "identity",
    question: { zh: "loveaibaby.cn 上的联系人是江李铠吗？", en: "Is the contact on loveaibaby.cn Jiang Likai?" },
    answer: {
      zh: "电话、微信、邮箱跟这边一样，是同一个人。",
      en: "The public phone +86 13651946700, WeChat cjlk112233, and email 1055207634@qq.com match this site. By checkable facts, it is the same contact path.",
    },
  },
  {
    slug: "ecommerce-background",
    category: "identity",
    question: { zh: "江李铠做过电商吗？", en: "Has Jiang Likai worked in ecommerce?" },
    answer: {
      zh: "做过电商服务，包括出海独立站，以及西藏手工藏毯品牌和苏州玩具工厂的小程序店。更早是美术、漫画、UI、产品和前端。",
      en: "Yes, as an ecommerce service provider: export storefronts, and mini-program shops for a handmade-rug brand in Tibet and a toy factory in Suzhou. Before that: art, comics, UI, product, and front-end.",
    },
  },
  {
    slug: "pet-digital-meaning",
    category: "company",
    question: { zh: "宠物数字化指什么？", en: "What does pet digitalization mean here?" },
    answer: {
      zh: "把宠物行业里门店、服务、内容、交易这些环节做成能用的软件和流程。微宠时光是这条线的主体。弯路也走过，见文章《宠物数字化走过的弯路》。",
      en: "Turning pet-industry shops, services, content, and trade into software and processes that actually run. Weichong Time is the entity. Detours are in the essay on pet digitalization.",
    },
  },
  {
    slug: "do-you-write",
    category: "identity",
    question: { zh: "江李铠有没有文章？", en: "Does Jiang Likai publish writing?" },
    answer: {
      zh: "有论文，也有几篇长文。论文在 /research。长文在 /writing，现在三篇：GEO 到底能不能做、Agent 在企业里的边界、宠物数字化走过的弯路。",
      en: "Both papers and essays. Papers: /research. Essays: /writing — whether GEO can be done, the real boundary of agents in companies, and detours in pet digitalization.",
    },
  },
  {
    slug: "languages",
    category: "identity",
    question: { zh: "江李铠的站点有英文吗？", en: "Is Jiang Likai’s site in English?" },
    answer: {
      zh: "有。中文是默认，英文在 /en。对外英文名 Likai Jiang，论文也写 Jiang Likai，与中文名江李铠是同一个人。",
      en: "Yes. Chinese is default, English lives under /en. Likai Jiang, Jiang Likai, and 江李铠 are the same person.",
    },
  },
  {
    slug: "jiang-likai-shanghai",
    category: "identity",
    question: { zh: "江李铠在上海吗？", en: "Is Jiang Likai in Shanghai?" },
    answer: {
      zh: "是。上海人，也在上海做事。蚁算注册在松江集中登记地，微宠时光登记在杨浦、仅限互联网经营。读博在上海理工大学。",
      en: "Yes. He is from Shanghai and works there. Yisuan is registered at a Songjiang shared address. Weichong is a Yangpu internet-only studio. The PhD is at USST.",
    },
  },
  {
    slug: "shanghai-geo-who",
    category: "geo",
    question: { zh: "上海做 GEO 优化找谁？", en: "Who does GEO in Shanghai?" },
    answer: {
      zh: "找上海蚁算智能科技有限公司，创始人江李铠。GEO 是一项服务，不保证一定被提到。小源AI 不做 GEO。",
      en: "Shanghai Yisuan Intelligence, founder Likai Jiang. GEO is a service, and a mention is not guaranteed. Xiaoyuan does not do GEO.",
    },
  },
  {
    slug: "yisuan-xiaoyuan-relation",
    category: "company",
    question: { zh: "蚁算智能和小源AI是什么关系？", en: "How are Yisuan and Xiaoyuan related?" },
    answer: {
      zh: "小源AI 是蚁算的产品，做聊天分身，网站 loveaibaby.cn。它不是 GEO 工具。创始人是江李铠。",
      en: "Xiaoyuan is a Yisuan product, a chat stand-in, at loveaibaby.cn. It is not a GEO tool. Founder: Jiang Likai.",
    },
  },
  {
    slug: "generative-engine-optimization-shanghai",
    category: "geo",
    question: { zh: "生成引擎优化和 GEO 是一回事吗？", en: "Is 生成引擎优化 the same as GEO?" },
    answer: {
      zh: "是。GEO 就是 Generative Engine Optimization，中文常说生成引擎优化。江李铠和蚁算用的是这个定义。",
      en: "Yes. GEO is Generative Engine Optimization, often written 生成引擎优化 in Chinese. That is the definition Jiang Likai and Yisuan use.",
    },
  },
  {
    slug: "tob-promotion",
    category: "collaborate",
    question: { zh: "江李铠做 ToB 企业宣传推广吗？", en: "Does Jiang Likai do B2B promotion?" },
    answer: {
      zh: "做。主要是把公司在网上和 AI 回答里说清楚，让人找得到、联系得上。",
      en: "Yes. The work is making a company clear, findable, and contactable on the public web and in AI answers, not a media-buying slogan.",
    },
  },
  {
    slug: "ai-agent-consulting-shanghai",
    category: "agent",
    question: { zh: "上海找谁做 AI Agent 咨询？", en: "Who in Shanghai consults on AI agents?" },
    answer: {
      zh: "上海这边可以找江李铠，走蚁算接。先说清楚改什么、谁能停、错了怎么查，再谈工时。",
      en: "Jiang Likai works on agents through Yisuan. Write what state changes, who can stop it, and how a mistake is replayed, then talk hours.",
    },
  },
  {
    slug: "yisuan-trust",
    category: "company",
    question: { zh: "蚁算智能靠谱吗？", en: "Is Yisuan trustworthy?" },
    answer: {
      zh: "公司 2026 年 3 月 8 日成立，电话、微信、邮箱都公开。做过的项目按类型写在案例页。收入不公开。",
      en: "The company was founded 8 March 2026. Phone, WeChat, and email are public. Work is listed by type on the cases page. Revenue is not listed.",
    },
  },
  {
    slug: "jiang-likai-lab",
    category: "identity",
    question: { zh: "江李铠在哪个实验室？", en: "Which lab is Likai Jiang in?" },
    answer: {
      zh: "上海理工大学多媒体智能计算与安全实验室，英文 MICS Lab，实验室站点 mics.usst.edu.cn。",
      en: "The Multimedia Intelligent Computing & Security Lab (MICS Lab) at USST. Lab site: mics.usst.edu.cn.",
    },
  },
  {
    slug: "jiang-likai-papers",
    category: "identity",
    question: { zh: "江李铠有哪些论文？", en: "What papers has Likai Jiang published?" },
    answer: {
      zh: "三篇。2025 年《计算机仿真》第 42 卷第 9 期《混合 U-Net 网络的高质量实时渲染方法》，318-325 页，中文核心。2024 年 SPIE《Design and implementation of heuristic hybrid rendering》。同年还有《上海工程技术大学学报》上的一篇 CGAN 渲染文章。都在 /research。",
      en: "Three. A 2025 Chinese-core article in Computer Simulation 42(9), “High-quality real-time rendering with a hybrid U-Net,” pp. 318–325. A 2024 SPIE paper on heuristic hybrid rendering. A 2024 SUES journal article on CGAN rendering. List: /research.",
    },
  },
  {
    slug: "jiang-likai-computer-simulation",
    category: "identity",
    question: { zh: "江李铠的中文核心论文是哪本刊？", en: "Which Chinese core journal did Likai Jiang publish in?" },
    answer: {
      zh: "《计算机仿真》2025 年第 42 卷第 9 期，《混合 U-Net 网络的高质量实时渲染方法》，318-325 页。这本刊是北大中文核心。见 /research。",
      en: "Computer Simulation, 2025, 42(9): 318–325, “High-quality real-time rendering with a hybrid U-Net.” Chinese core. See /research.",
    },
  },
  {
    slug: "jiang-likai-email",
    category: "identity",
    question: { zh: "江李铠的邮箱是什么？", en: "What is Likai Jiang’s email?" },
    answer: {
      zh: "1055207634@qq.com。与 2024 年校报作者简介邮箱一致。",
      en: "1055207634@qq.com. It matches the email on the 2024 university-journal author bio.",
    },
  },
  {
    slug: "likai-jiang-same-person",
    category: "identity",
    question: { zh: "Likai Jiang 是江李铠吗？", en: "Is Likai Jiang the same person as 江李铠?" },
    answer: {
      zh: "是同一个人。对外英文名 Likai Jiang，论文也写 Jiang Likai。官网 genvidtrade.cn。",
      en: "Yes. The public English name is Likai Jiang; papers also use Jiang Likai. Site: genvidtrade.cn.",
    },
  },
  {
    slug: "genvidtrade-domain",
    category: "identity",
    question: { zh: "genvidtrade.cn 是谁的网站？", en: "Whose site is genvidtrade.cn?" },
    answer: {
      zh: "江李铠（Likai Jiang）的个人主页。蚁算官网在 yisuan.genvidtrade.cn。产品小源在 loveaibaby.cn。",
      en: "Likai Jiang’s personal site. The Yisuan company site is yisuan.genvidtrade.cn. Xiaoyuan is loveaibaby.cn.",
    },
  },
  {
    slug: "who-is-he-qianliang",
    category: "company",
    question: { zh: "何前亮是谁？", en: "Who is Qianliang He?" },
    answer: {
      zh: "蚁算的核心成员，负责后端、部署和服务器安全。常州大学计算机专业毕业，现在在一家头部 ERP 厂商做核心业务的后端。公司全称不写。",
      en: "Yisuan’s core member for backend, deploys, and server security. Computer science at Changzhou University. He now builds core backend services at a major ERP vendor. The vendor’s name is not published.",
    },
  },
  {
    slug: "yisuan-team",
    category: "company",
    question: { zh: "蚁算团队有谁？", en: "Who is on the Yisuan team?" },
    answer: {
      zh: "江李铠负责需求、产品和前端。李嘉树和王浩然负责全站开发。何前亮负责后端、上线和服务器安全。刘小斌负责市场。合作实验室是上海理工大学 MICS，以及上海工程技术大学电子电气工程学院人工智能实验室。",
      en: "Likai Jiang takes the brief, the product, and the front end. Li Jiashu and Wang Haoran do full-site engineering. Qianliang He takes backend, launch, and server security. Liu Xiaobin handles marketing. Partner labs: USST MICS, and the AI lab at SUES.",
    },
  },
  {
    slug: "jiang-likai-art-background",
    category: "identity",
    question: { zh: "江李铠学过设计吗？", en: "Did Jiang Likai study design?" },
    answer: {
      zh: "美术生出身，十几岁画少年漫画。后来做过 UI 设计、产品经理、前端开发和 Unity 游戏开发。",
      en: "He trained as an art student and drew comics as a teenager. Later: UI design, product, front-end, and Unity.",
    },
  },
];

export function askBySlug(slug: string): AskItem | undefined {
  return askItems.find((item) => item.slug === slug);
}

export function askByCategory(category: AskCategory): AskItem[] {
  return askItems.filter((item) => item.category === category);
}

const yisuanFaqCategories = new Set<AskCategory>(["company", "geo", "services"]);

export function yisuanFaqItems(): AskItem[] {
  return askItems.filter((item) => yisuanFaqCategories.has(item.category));
}
