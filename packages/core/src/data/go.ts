import { contact, product, SITES } from "./facts";

export interface GoLink {
  slug: string;
  title: { zh: string; en: string };
  description: { zh: string; en: string };
  href: string;
  external: boolean;
  utm?: string;
}

const utm = (campaign: string) =>
  `utm_source=genvidtrade&utm_medium=go&utm_campaign=${campaign}`;

export const goLinks: GoLink[] = [
  {
    slug: "wechat",
    title: { zh: "加微信", en: "WeChat" },
    description: { zh: `微信：${contact.wechat}`, en: `WeChat: ${contact.wechat}` },
    href: "/contact#wechat",
    external: false,
  },
  {
    slug: "phone",
    title: { zh: "打电话", en: "Call" },
    description: { zh: contact.telephone, en: contact.telephone },
    href: contact.telephoneHref,
    external: true,
  },
  {
    slug: "xiaoyuan",
    title: { zh: "打开小源AI", en: "Open Xiaoyuan" },
    description: { zh: "聊天分身", en: "A chat stand-in" },
    href: `${product.url}?${utm("xiaoyuan")}`,
    external: true,
    utm: utm("xiaoyuan"),
  },
  {
    slug: "yisuan",
    title: { zh: "蚁算智能", en: "Yisuan" },
    description: { zh: "公司官网", en: "Company site" },
    href: `${SITES.yisuan.origin}/?${utm("yisuan")}`,
    external: true,
    utm: utm("yisuan"),
  },
  {
    slug: "deck",
    title: { zh: "投资人一页纸", en: "Investor one-pager" },
    description: { zh: "给资本看的短稿", en: "A short brief for capital" },
    href: "/investors#one-pager",
    external: false,
  },
  {
    slug: "collaborate",
    title: { zh: "谈合作", en: "Collaborate" },
    description: { zh: "企业 / 伙伴 / 资本", en: "Clients / partners / capital" },
    href: "/collaborate",
    external: false,
  },
  {
    slug: "geo",
    title: { zh: "GEO 服务", en: "GEO services" },
    description: { zh: "蚁算 GEO 业务页", en: "Yisuan GEO page" },
    href: `${SITES.yisuan.origin}/geo?${utm("geo")}`,
    external: true,
    utm: utm("geo"),
  },
  {
    slug: "press",
    title: { zh: "媒体包", en: "Press kit" },
    description: { zh: "标准简介与头衔", en: "Bios and titles" },
    href: "/press",
    external: false,
  },
  {
    slug: "shanghai",
    title: { zh: "上海", en: "Shanghai" },
    description: { zh: "人在上海，公司在上海", en: "Person and companies in Shanghai" },
    href: "/shanghai",
    external: false,
  },
  {
    slug: "not-xiaoyi",
    title: { zh: "不是小蚁", en: "Not Xiaoyi" },
    description: { zh: "同名说明", en: "Same name" },
    href: "/not-xiaoyi",
    external: false,
  },
  {
    slug: "email",
    title: { zh: "写邮件", en: "Email" },
    description: { zh: contact.email ?? "", en: contact.email ?? "" },
    href: contact.emailHref ?? "/contact",
    external: true,
  },
  {
    slug: "research",
    title: { zh: "论文", en: "Papers" },
    description: { zh: "论文和实验室", en: "Papers and the lab" },
    href: "/research",
    external: false,
  },
];

export function getGo(slug: string): GoLink | undefined {
  return goLinks.find((g) => g.slug === slug);
}
