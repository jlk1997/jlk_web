# 上线清单

两站都是静态输出。先定域名，再改 [`packages/core/src/data/facts.ts`](../packages/core/src/data/facts.ts) 里的 `SITES.origin`，以及两个 `astro.config.mjs` 的 `site`。

当前域名：

- 个人站 `https://genvidtrade.cn` → Cloudflare Pages 项目 `genvidtrade`，构建 `pnpm install && pnpm --filter @jlk/me build`，输出 `apps/me/dist`
- 蚁算站 `https://yisuan.genvidtrade.cn` → 项目 `yisuan`，构建 `pnpm install && pnpm --filter @jlk/yisuan build`，输出 `apps/yisuan/dist`
- 国内解析要先做 ICP 备案。`www.genvidtrade.cn` 301 到 apex。

## 1. 填事实，不要编

打开 `packages/core/src/data/facts.ts`，只填能核对的项。院校、实验室、成立日期、注册地址、照片、部分案例已填。仍空着的：

- 两家公司的统一社会信用代码（执照已看，未逐字核对清楚前不写）
- 《计算机仿真》那篇的题目、年卷期、DOI（期刊已指向，题录未核）
- 软著、专利、获奖
- 各平台主页 URL（LinkedIn / 知乎 / 小红书 / GitHub / 公众号 / X）

`sameAs` 只放能打开、能看出是同一个人的链接。空着比放死链好。

## 2. 搜索与 IndexNow

1. [Google Search Console](https://search.google.com/search-console) 验证两站，提交 `sitemap-index.xml`
2. Bing Webmaster 验证，打开 IndexNow；把 key 写进 `public/.well-known/indexnow-key.txt`，并在站点根再放一份 `{key}.txt`
3. 百度搜索资源平台：验证、提交 sitemap、用 API 做主动推送（国内域名备案后更稳）
4. 微信搜一搜：用公众号绑定官网，主体名称与本站法定名称一致

## 3. AI 爬虫

`robots.txt` 已放行 Googlebot、Baiduspider、Bytespider、GPTBot、OAI-SearchBot、PerplexityBot、ClaudeBot、Google-Extended。上线后用服务器日志看它们是否真的来。

`llms.txt` 与 `llms-full.txt` 已生成。Google Search 会忽略它们；留给会读的系统当说明书。

## 4. 站外实体

在下列档案把姓名、公司、官网写成同一套：

- 个人站 ↔ 蚁算站 ↔ [loveaibaby.cn](https://loveaibaby.cn)
- 知乎、小红书、公众号、LinkedIn、GitHub
- 有条目再考虑百科 / Wikidata，没有就不要买词条

小源页脚的电话、微信必须与 `facts.ts` 保持同一组。

## 5. 性能与无障碍

构建后本地预览，Chrome Lighthouse 对首页、关于、GEO、问答各跑一次。目标 100×4。已做：

- 静态 HTML，默认无客户端框架
- 自托管拉丁可变字体，中文走系统字体
- `prefers-reduced-motion`
- 跳过导航、可见焦点、按钮有名字

未做完、需要你补的：真实头像 `width/height`、备案号页脚。

## 6. Cloudflare Pages

同一 Git 仓库建两个 Pages 项目，根目录都是仓库根。环境变量不用。Node 22（见 `.node-version`）。

可选：Pages → Custom domains 绑主域和 `www`，`www` 跳主域。

构建命令与中文字体见 [`docs/cloudflare.md`](cloudflare.md)。
