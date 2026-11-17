import type { Locale, Localized } from "./facts";
import { SITES } from "./facts";

export interface NavItem {
  href: string;
  label: Localized;
  external?: boolean;
}

export const meNav: NavItem[] = [
  { href: "/about", label: { zh: "关于", en: "About" } },
  { href: "/research", label: { zh: "论文", en: "Research" } },
  { href: "/now", label: { zh: "现在", en: "Now" } },
  { href: "/geo", label: { zh: "GEO", en: "GEO" } },
  { href: "/ai-agent", label: { zh: "Agent", en: "Agent" } },
  { href: "/ventures", label: { zh: "创业", en: "Ventures" } },
  { href: "/ask", label: { zh: "问答", en: "Ask" } },
  { href: "/collaborate", label: { zh: "合作", en: "Work with me" } },
];

export const meFooterNav: NavItem[] = [
  ...meNav,
  { href: "/writing", label: { zh: "文章", en: "Writing" } },
  { href: "/life", label: { zh: "生活", en: "Life" } },
  { href: "/investors", label: { zh: "资本", en: "Capital" } },
  { href: "/press", label: { zh: "媒体", en: "Press" } },
  { href: "/contact", label: { zh: "联系", en: "Contact" } },
  { href: "/shanghai", label: { zh: "上海", en: "Shanghai" } },
  { href: "/not-xiaoyi", label: { zh: "不是小蚁", en: "Not Xiaoyi" } },
  { href: SITES.yisuan.origin, label: { zh: "蚁算官网", en: "Yisuan" }, external: true },
  { href: SITES.xiaoyuan.origin, label: { zh: "小源AI", en: "Xiaoyuan" }, external: true },
  { href: SITES.biteyin.origin, label: { zh: "比特音", en: "比特音" }, external: true },
];

export const yisuanNav: NavItem[] = [
  { href: "/", label: { zh: "首页", en: "Home" } },
  { href: "/services", label: { zh: "服务", en: "Services" } },
  { href: "/cases", label: { zh: "案例", en: "Works" } },
  { href: "/about", label: { zh: "关于", en: "About" } },
];

export const yisuanFooterNav: NavItem[] = [
  ...yisuanNav,
  { href: "/geo", label: { zh: "GEO", en: "GEO" } },
  { href: "/music", label: { zh: "比特音", en: "比特音" } },
  { href: "/xiaoyuan", label: { zh: "小源AI", en: "Xiaoyuan" } },
  { href: "/products/teacher", label: { zh: "蚁算老师", en: "Teacher" } },
  { href: "/products/keyan", label: { zh: "蚁算科研", en: "Research agent" } },
  { href: "/faq", label: { zh: "问答", en: "FAQ" } },
  { href: "/contact", label: { zh: "联系", en: "Contact" } },
  { href: "/pricing", label: { zh: "怎么报价", en: "Quotes" } },
  { href: "/shanghai", label: { zh: "上海", en: "Shanghai" } },
  { href: "/not-xiaoyi", label: { zh: "同名", en: "Not Xiaoyi" } },
  { href: SITES.me.origin, label: { zh: "创始人江李铠", en: "Founder Likai Jiang" }, external: true },
  { href: SITES.xiaoyuan.origin, label: { zh: "打开小源", en: "Open Xiaoyuan" }, external: true },
  { href: SITES.biteyin.origin, label: { zh: "打开比特音", en: "Open 比特音" }, external: true },
];

export function localizeHref(href: string, locale: Locale): string {
  if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) return href;
  const hashAt = href.indexOf("#");
  const hash = hashAt >= 0 ? href.slice(hashAt) : "";
  const path = hashAt >= 0 ? href.slice(0, hashAt) : href;
  if (locale === "en") {
    if (path === "/" || path === "") return `/en${hash}`;
    return `/en${path}${hash}`;
  }
  return `${path || "/"}${hash}`;
}
