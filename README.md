# 江李铠 / 蚁算智能

一个仓库，两个静态站。

- 个人主页 [`apps/me`](apps/me) → `https://genvidtrade.cn`
- 蚁算官网 [`apps/yisuan`](apps/yisuan) → `https://yisuan.genvidtrade.cn`
- 共享事实、设计令牌、JSON-LD [`packages/core`](packages/core)
- 产品小源AI 已在 [loveaibaby.cn](https://loveaibaby.cn)，本仓库只做交叉链接

## 开发

```bash
pnpm install
pnpm dev:me      # :4321
pnpm dev:yisuan  # :4322
```

```bash
pnpm build:me
pnpm build:yisuan
```

## 改内容

先改 [`packages/core/src/data/facts.ts`](packages/core/src/data/facts.ts)。没有的事实保持 `null`，页面会显示「暂无」。不要在视图里手写数字。

问答在 [`packages/core/src/data/ask.ts`](packages/core/src/data/ask.ts)。文章在 [`apps/me/src/content/writing`](apps/me/src/content/writing)。

上线步骤见 [`docs/launch-checklist.md`](docs/launch-checklist.md)。
