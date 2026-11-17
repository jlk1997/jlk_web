import { existsSync } from "node:fs";
import { createRequire } from "node:module";
import { Resvg } from "@resvg/resvg-js";
import type { Locale } from "../data/facts";
import type { OgPage } from "./pages";

const require = createRequire(import.meta.url);

function fontFiles(): string[] {
  const extras = [
    "C:\\Windows\\Fonts\\msyh.ttc",
    "C:\\Windows\\Fonts\\msyhbd.ttc",
    "C:\\Windows\\Fonts\\simsun.ttc",
    "/usr/share/fonts/truetype/noto/NotoSansCJK-Regular.ttc",
    "/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc",
    "/usr/share/fonts/truetype/wqy/wqy-microhei.ttc",
  ];
  try {
    extras.push(require.resolve("@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff"));
  } catch {
    /* optional */
  }
  return extras.filter((file) => existsSync(file));
}

function escapeXml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function wrapTitle(title: string, maxChars: number): string[] {
  if (/[\u3400-\u9fff]/.test(title)) {
    const lines: string[] = [];
    for (let i = 0; i < title.length; i += maxChars) lines.push(title.slice(i, i + maxChars));
    return lines.slice(0, 3);
  }
  const lines: string[] = [];
  let current = "";
  for (const word of title.split(/\s+/)) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 4);
}

export async function renderOg(
  page: OgPage,
  locale: Locale,
  siteLabel: string,
  theme: "ink" | "lime" = "ink",
): Promise<Uint8Array> {
  const title = page[locale];
  const kicker = escapeXml(page.kicker[locale]);
  const foot = locale === "zh" ? "江李铠 · genvidtrade.cn" : "Likai Jiang · genvidtrade.cn";
  const maxChars = locale === "zh" ? 16 : 28;
  const lines = wrapTitle(title, maxChars);
  const size = title.length > 28 ? 54 : 64;
  const lime = theme === "lime";
  const bg = "#000000";
  const ink = lime ? "#ffffff" : "#f3eee4";
  const accent = lime ? "#abfb24" : "#e8a317";
  const mute = lime ? "#abfb24" : "#9a9589";
  const textNodes = lines
    .map((line, i) => `<text x="72" y="${260 + i * (size + 12)}" fill="${ink}" font-size="${size}" font-family="Microsoft YaHei, Noto Sans CJK SC, IBM Plex Mono, sans-serif">${escapeXml(line)}</text>`)
    .join("\n  ");
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${bg}"/>
  <circle cx="1080" cy="-40" r="280" fill="${accent}" fill-opacity="${lime ? "0.16" : "0.08"}"/>
  <text x="72" y="92" fill="${accent}" font-size="22" font-family="Microsoft YaHei, Noto Sans CJK SC, IBM Plex Mono, sans-serif">${kicker}</text>
  <text x="1128" y="92" fill="${accent}" font-size="22" text-anchor="end" font-family="IBM Plex Mono, Microsoft YaHei, sans-serif">${escapeXml(siteLabel)}</text>
  ${textNodes}
  <text x="72" y="560" fill="${mute}" font-size="22" font-family="Microsoft YaHei, Noto Sans CJK SC, IBM Plex Mono, sans-serif">${foot}</text>
</svg>`;

  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: 1200 },
    font: {
      fontFiles: fontFiles(),
      defaultFontFamily: "Microsoft YaHei",
      defaultFontSize: 24,
      loadSystemFonts: true,
    },
  });
  return resvg.render().asPng();
}
