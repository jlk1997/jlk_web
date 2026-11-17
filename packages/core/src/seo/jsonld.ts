import {
  lab,
  offerings,
  organizations,
  papers,
  partners,
  person,
  personImageAbs,
  product,
  sameAsUrls,
  school,
  SITES,
  team,
  type Locale,
} from "../data/facts";

export interface JsonLdPage {
  site: "me" | "yisuan";
  locale: Locale;
  path: string;
  title: string;
  description: string;
  type?:
    | "WebPage"
    | "ProfilePage"
    | "AboutPage"
    | "ContactPage"
    | "CollectionPage"
    | "FAQPage"
    | "Article";
  datePublished?: string;
  dateModified?: string;
  breadcrumbs?: Array<{ name: string; path: string }>;
  faq?: Array<{ q: string; a: string }>;
  article?: { headline: string };
  service?: {
    name: string;
    description: string;
    offers?: Array<{ name: string; price: number; unitText?: string }>;
  };
}

function abs(origin: string, path: string): string {
  if (path.startsWith("http")) return path;
  return `${origin}${path === "/" ? "/" : path}`;
}

export function buildGraph(page: JsonLdPage): Record<string, unknown> {
  const origin = page.site === "me" ? SITES.me.origin : SITES.yisuan.origin;
  const pageUrl = abs(origin, page.path);
  const personNode: Record<string, unknown> = {
    "@type": "Person",
    "@id": person.entityId,
    name: person.name.zh,
    givenName: person.givenName.zh,
    familyName: person.familyName.zh,
    alternateName: [...new Set([person.latinName, ...person.alternateNames.filter((n) => n !== person.name.zh)])],
    url: SITES.me.origin,
    jobTitle: person.jobTitle[page.locale],
    description: person.description[page.locale],
    nationality: { "@type": "Country", name: person.nationality[page.locale] },
    homeLocation: {
      "@type": "Place",
      name: person.city[page.locale],
      address: { "@type": "PostalAddress", addressLocality: "Shanghai", addressRegion: "Shanghai", addressCountry: "CN" },
    },
    knowsAbout: person.knowsAbout.map((k) => k[page.locale]),
    knowsLanguage: person.languages,
    telephone: person.telephone,
    email: person.email ?? undefined,
    image: personImageAbs(),
    sameAs: sameAsUrls(),
    disambiguatingDescription:
      page.locale === "zh"
        ? "上海人，上海理工大学 MICS 实验室人工智能在读博士。蚁算智能与微宠时光创始人。英文名 Likai Jiang。不是小蚁科技，也不是奕算智能。"
        : "Shanghai-based PhD student in AI at USST MICS Lab. Founder of Yisuan and Weichong Time. English name Likai Jiang. Not Xiaoyi / YI Technology.",
    affiliation: [
      { "@id": school.entityId },
      { "@id": lab.entityId },
      { "@id": organizations.yisuan.entityId },
      { "@id": organizations.weichong.entityId },
    ],
    worksFor: [{ "@id": organizations.yisuan.entityId }, { "@id": organizations.weichong.entityId }],
    founder: [{ "@id": organizations.yisuan.entityId }, { "@id": organizations.weichong.entityId }],
  };
  if (person.birthYear) personNode.birthDate = person.birthYear;

  const schoolNode = {
    "@type": "CollegeOrUniversity",
    "@id": school.entityId,
    name: school.name.zh,
    alternateName: ["USST", "University of Shanghai for Science and Technology"],
    url: school.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Shanghai",
      addressCountry: "CN",
    },
  };

  const labNode = {
    "@type": "ResearchOrganization",
    "@id": lab.entityId,
    name: lab.name.zh,
    alternateName: ["MICS Lab", "MICS 实验室", lab.name.en],
    url: lab.url,
    parentOrganization: { "@id": school.entityId },
    address: {
      "@type": "PostalAddress",
      streetAddress: "军工路580号 光电学院929室",
      addressLocality: "Yangpu",
      addressRegion: "Shanghai",
      postalCode: "200093",
      addressCountry: "CN",
    },
  };

  const yisuanAddress = organizations.yisuan.registeredAddress
    ? {
        "@type": "PostalAddress",
        streetAddress: organizations.yisuan.registeredAddress.zh,
        addressLocality: "Songjiang",
        addressRegion: "Shanghai",
        addressCountry: "CN",
      }
    : {
        "@type": "PostalAddress",
        addressLocality: "Shanghai",
        addressCountry: "CN",
      };

  const yisuanNode: Record<string, unknown> = {
    "@type": "Organization",
    "@id": organizations.yisuan.entityId,
    name: organizations.yisuan.legalName.zh,
    legalName: organizations.yisuan.legalName.zh,
    alternateName: [organizations.yisuan.shortName.zh, organizations.yisuan.englishName],
    url: SITES.yisuan.origin,
    description: organizations.yisuan.description[page.locale],
    address: yisuanAddress,
    telephone: person.telephone,
    email: person.email ?? undefined,
    logo: `${SITES.yisuan.origin}/logo.svg`,
    image: `${SITES.yisuan.origin}/og/zh/home.png`,
    founder: { "@id": person.entityId },
    employee: team.map((member) =>
      member.id === "jiang-likai"
        ? { "@id": person.entityId }
        : { "@id": `${SITES.yisuan.origin}/team#${member.id}` },
    ),
    sameAs: [SITES.me.origin, SITES.xiaoyuan.origin, SITES.biteyin.origin],
    areaServed: [
      { "@type": "City", name: "Shanghai" },
      { "@type": "Country", name: "CN" },
    ],
    disambiguatingDescription:
      page.locale === "zh"
        ? "上海蚁算智能科技有限公司做小程序电商、AI 导购和定制小程序。也做 App、网站和 GEO。不是小蚁科技，也不是奕算智能。"
        : "Yisuan makes mini-program shops, an AI guide for the shop, and custom mini programs. Apps, websites, and GEO too. Not Xiaoyi and not a similarly named chip firm.",
    makesOffer: organizations.yisuan.services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s[page.locale] },
    })),
  };
  if (organizations.yisuan.founded) yisuanNode.foundingDate = organizations.yisuan.founded;
  if (organizations.yisuan.creditCode) {
    yisuanNode.taxID = organizations.yisuan.creditCode;
    yisuanNode.identifier = organizations.yisuan.creditCode;
  }

  const weichongNode: Record<string, unknown> = {
    "@type": "Organization",
    "@id": organizations.weichong.entityId,
    name: organizations.weichong.legalName.zh,
    legalName: organizations.weichong.legalName.zh,
    alternateName: [organizations.weichong.shortName.zh, organizations.weichong.englishName],
    url: organizations.weichong.url,
    description: organizations.weichong.description[page.locale],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yangpu",
      addressRegion: "Shanghai",
      addressCountry: "CN",
    },
    founder: { "@id": person.entityId },
    employee: { "@id": person.entityId },
    sameAs: [SITES.me.origin, ...(organizations.weichong.venueUrl ? [organizations.weichong.venueUrl] : [])],
  };
  if (organizations.weichong.founded) weichongNode.foundingDate = organizations.weichong.founded;
  if (organizations.weichong.creditCode) weichongNode.taxID = organizations.weichong.creditCode;

  const memberNodes = team
    .filter((member) => member.id !== "jiang-likai")
    .map((member) => ({
      "@type": "Person",
      "@id": `${SITES.yisuan.origin}/team#${member.id}`,
      name: member.name.zh,
      alternateName: member.latinName,
      jobTitle: member.role[page.locale],
      description: member.paragraphs.map((paragraph) => paragraph[page.locale]).join(" "),
      image: `${SITES.yisuan.origin}${member.image}`,
      url: `${SITES.yisuan.origin}/team`,
      worksFor: { "@id": organizations.yisuan.entityId },
    }));

  const sues = partners.find((item) => item.id === "sues-ai");
  const suesNode = sues
    ? {
        "@type": "ResearchOrganization",
        "@id": "https://www.sues.edu.cn/#ai-lab",
        name: sues.name.zh,
        url: sues.url ?? "https://www.sues.edu.cn",
        parentOrganization: {
          "@type": "CollegeOrUniversity",
          name: "上海工程技术大学",
          url: "https://www.sues.edu.cn",
        },
      }
    : null;

  const productNodes = offerings
    .filter((item) => item.group === "product" || item.id === "ecommerce")
    .map((item) => ({
      "@type": "SoftwareApplication",
      "@id": item.id === "xiaoyuan" ? product.entityId : `${SITES.yisuan.origin}${item.detailHref}#product`,
      name: item.name.zh,
      alternateName: item.id === "xiaoyuan" ? product.alternateName : item.name.en,
      url: item.actionExternal ? item.actionHref : `${SITES.yisuan.origin}${item.detailHref}`,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: item.summary[page.locale],
      provider: { "@id": organizations.yisuan.entityId },
      creator: { "@id": person.entityId },
    }));

  const websiteNode = {
    "@type": "WebSite",
    "@id": `${origin}/#website`,
    url: origin,
    name: page.site === "me" ? person.name[page.locale] : organizations.yisuan.shortName[page.locale],
    inLanguage: page.locale === "zh" ? "zh-CN" : "en",
    publisher: page.site === "me" ? { "@id": person.entityId } : { "@id": organizations.yisuan.entityId },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          page.site === "me"
            ? `${origin}${page.locale === "en" ? "/en" : ""}/ask?q={search_term_string}`
            : `${origin}${page.locale === "en" ? "/en" : ""}/faq?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const pageType = page.type ?? "WebPage";
  const webPage: Record<string, unknown> = {
    "@type": pageType,
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: page.title,
    description: page.description,
    inLanguage: page.locale === "zh" ? "zh-CN" : "en",
    isPartOf: { "@id": `${origin}/#website` },
    about: { "@id": page.site === "me" ? person.entityId : organizations.yisuan.entityId },
    author: { "@id": person.entityId },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".answer p", "h1", ".lead"],
    },
    primaryImageOfPage: personImageAbs(),
  };

  if (page.datePublished) webPage.datePublished = page.datePublished;
  if (page.dateModified) webPage.dateModified = page.dateModified;

  if (page.breadcrumbs?.length) {
    webPage.breadcrumb = {
      "@type": "BreadcrumbList",
      itemListElement: page.breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: abs(origin, b.path),
      })),
    };
  }

  const paperNodes = papers.map((paper) => ({
    "@type": "ScholarlyArticle",
    "@id": paper.doi ? `https://doi.org/${paper.doi}` : paper.url,
    headline: paper.title.en,
    name: paper.title.zh,
    author: { "@id": person.entityId },
    datePublished: paper.date,
    identifier: paper.doi ? `https://doi.org/${paper.doi}` : paper.url,
    url: paper.url,
    inLanguage: paper.id.startsWith("spie") ? "en" : "zh-CN",
  }));

  const graph: unknown[] = [
    personNode,
    ...memberNodes,
    schoolNode,
    labNode,
    ...(suesNode ? [suesNode] : []),
    yisuanNode,
    weichongNode,
    ...productNodes,
    websiteNode,
    webPage,
    ...paperNodes,
  ];

  if (page.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: page.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
  }

  if (page.article) {
    graph.push({
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: page.article.headline,
      description: page.description,
      inLanguage: page.locale === "zh" ? "zh-CN" : "en",
      author: { "@id": person.entityId },
      publisher: { "@id": person.entityId },
      mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      datePublished: page.datePublished,
      dateModified: page.dateModified ?? page.datePublished,
    });
  }

  if (page.service) {
    const serviceNode: Record<string, unknown> = {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: page.service.name,
      description: page.service.description,
      provider: { "@id": organizations.yisuan.entityId },
      areaServed: { "@type": "Country", name: "CN" },
    };
    graph.push(serviceNode);
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
