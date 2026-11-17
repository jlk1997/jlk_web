# Cloudflare Pages

同一个 Git 仓库建两个 Pages 项目。根目录都填仓库根，Node 22。

| 项目 | 构建命令 | 输出目录 | 域名 |
| --- | --- | --- | --- |
| genvidtrade | `pnpm install && pnpm --filter @jlk/me build` | `apps/me/dist` | `genvidtrade.cn`、`www.genvidtrade.cn` |
| yisuan | `pnpm install && pnpm --filter @jlk/yisuan build` | `apps/yisuan/dist` | `yisuan.genvidtrade.cn` |

DNS（Cloudflare 托管 `genvidtrade.cn` 时）：

1. 个人站：apex 与 `www` CNAME 到个人 Pages 项目
2. 蚁算站：`yisuan` CNAME 到蚁算 Pages 项目
3. `www` 301 到 apex

Linux 构建机若没有中文字体，OG 图里的汉字会缺字。在构建命令前加：

```bash
apt-get update && apt-get install -y fonts-noto-cjk
```

或在 Cloudflare 用自定义镜像。Windows 本地构建会用微软雅黑。
