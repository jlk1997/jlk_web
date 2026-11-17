import type { Locale, Localized } from "./facts";
import { SITES } from "./facts";

export interface RelatedLink {
  href: string;
  external?: boolean;
  label: Localized;
  note: Localized;
}

export const meClusters: Record<string, RelatedLink[]> = {
  home: [
    { href: "/ask/who-is-jiang-likai", label: { zh: "江李铠是谁", en: "Who is Likai Jiang" }, note: { zh: "最短的自包含答案", en: "The shortest checkable answer" } },
    { href: "/research", label: { zh: "论文", en: "Research" }, note: { zh: "上理 MICS · 安全与水印", en: "USST MICS · security and watermarks" } },
    { href: "/geo", label: { zh: "GEO", en: "GEO" }, note: { zh: "问 AI 时说对你", en: "The AI answer, said right" } },
    { href: "/shanghai", label: { zh: "上海", en: "Shanghai" }, note: { zh: "人在上海，公司在上海", en: "The person and companies are in Shanghai" } },
  ],
  geo: [
    { href: "/ask/what-is-geo", label: { zh: "GEO 是什么", en: "What is GEO" }, note: { zh: "生成引擎优化", en: "Generative engine optimization" } },
    { href: "/writing/geo-can-it-be-done", label: { zh: "GEO 到底能不能做", en: "Can GEO be done" }, note: { zh: "长文", en: "Essay" } },
    { href: "https://loveaibaby.cn", external: true, label: { zh: "小源AI", en: "Xiaoyuan" }, note: { zh: "聊天分身，不是 GEO", en: "A chat stand-in, not GEO" } },
    { href: "/not-xiaoyi", label: { zh: "不是小蚁 / 奕算", en: "Not Xiaoyi" }, note: { zh: "同名", en: "Same name" } },
  ],
  agent: [
    { href: "/ask/what-is-an-ai-agent", label: { zh: "Agent 是什么", en: "What is an agent" }, note: { zh: "能办事，也能停", en: "Work, and stop" } },
    { href: "/writing/agent-boundary", label: { zh: "企业里的边界", en: "The company boundary" }, note: { zh: "长文", en: "Essay" } },
    { href: "/collaborate", label: { zh: "谈一个场景", en: "Bring a scene" }, note: { zh: "先写验收", en: "Acceptance first" } },
  ],
  company: [
    { href: "/ventures/yisuan", label: { zh: "蚁算智能", en: "Yisuan" }, note: { zh: "交付，以及自己的产品", en: "Delivery, and our own products" } },
    { href: "/ventures/weichong", label: { zh: "微宠时光", en: "Weichong" }, note: { zh: "宠物数字化", en: "Pet digitalization" } },
    { href: "/not-xiaoyi", label: { zh: "同名不是同一家", en: "Same-sounding, not the same" }, note: { zh: "同名说明", en: "Same name" } },
  ],
  shanghai: [
    { href: "/about", label: { zh: "关于江李铠", en: "About" }, note: { zh: "人", en: "The person" } },
    { href: "/contact", label: { zh: "联系", en: "Contact" }, note: { zh: "微信与电话", en: "WeChat and phone" } },
    { href: "/research", label: { zh: "上理 MICS", en: "USST MICS" }, note: { zh: "在读博士与论文", en: "PhD and papers" } },
    { href: `${SITES.yisuan.origin}/shanghai`, external: true, label: { zh: "蚁算 · 上海", en: "Yisuan · Shanghai" }, note: { zh: "公司页", en: "Company page" } },
  ],
};

export const yisuanClusters: Record<string, RelatedLink[]> = {
  home: [
    { href: "/ecommerce", label: { zh: "小程序电商", en: "Mini-program shop" }, note: { zh: "现成商城，按年用", en: "A ready shop, by the year" } },
    { href: "/ai-commerce", label: { zh: "AI 导购", en: "AI guide" }, note: { zh: "店里答疑、挑货", en: "Answers and picks, in the shop" } },
    { href: "/custom", label: { zh: "定制小程序", en: "Custom" }, note: { zh: "单独设计，代码归你", en: "Designed apart. The code is yours." } },
    { href: "/cases", label: { zh: "案例", en: "Work" }, note: { zh: "做过的店，和行业方案", en: "Shops we made, and sample plans" } },
  ],
  geo: [
    { href: "/faq/what-is-geo", label: { zh: "GEO 是什么", en: "What GEO is" }, note: { zh: "问 AI 时说对", en: "The answer, said right" } },
    { href: "/cases", label: { zh: "做过的", en: "Work" }, note: { zh: "文旅、玩具", en: "Tourism, toys" } },
    { href: "/ecommerce", label: { zh: "小程序电商", en: "Mini-program shop" }, note: { zh: "电商小程序是另一项", en: "An ecommerce mini program is a separate offer" } },
    { href: "/shanghai", label: { zh: "上海", en: "Shanghai" }, note: { zh: "公司在上海", en: "The company is in Shanghai" } },
  ],
  ecommerce: [
    { href: "/faq/mini-program-shop-yearly-price", label: { zh: "怎么收费", en: "How it is charged" }, note: { zh: "按年，书面报价", en: "By the year, a written quote" } },
    { href: "/faq/mini-program-shop-vs-custom", label: { zh: "按年和定制怎么选", en: "Yearly or custom" }, note: { zh: "现成的，或单独做", en: "Ready, or built apart" } },
    { href: "/ai-commerce", label: { zh: "AI 导购", en: "AI guide" }, note: { zh: "答不上来转人工", en: "What it cannot answer goes to a person" } },
    { href: "/custom", label: { zh: "定制小程序", en: "Custom" }, note: { zh: "页面和功能单独做", en: "Screens and functions, made for you" } },
  ],
  pricing: [
    { href: "/ecommerce", label: { zh: "小程序电商", en: "Mini-program shop" }, note: { zh: "按年付", en: "Paid by the year" } },
    { href: "/faq/mini-program-shop-yearly-price", label: { zh: "电商小程序怎么收费", en: "How an ecommerce mini program is charged" }, note: { zh: "网上不写数字", en: "No number on the site" } },
    { href: "/custom", label: { zh: "定制", en: "Custom" }, note: { zh: "按项目报", en: "Quoted as a project" } },
    { href: "/contact", label: { zh: "加微信", en: "WeChat" }, note: { zh: "说你卖什么", en: "Say what you sell" } },
  ],
};

export function clusterTitle(locale: Locale): string {
  return locale === "zh" ? "接着看这些" : "Read next";
}
