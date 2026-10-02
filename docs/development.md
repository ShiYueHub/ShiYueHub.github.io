# 网站维护

正式地址：https://shiyuehub.github.io/。

网站使用 Vite + TypeScript 和原生 HTML/CSS，无 UI 框架或客户端路由。GitHub Pages 发布静态多页面，独立地址可直接访问和刷新。

## 本地开发

需要 Node.js 22.12+ 或 24+。

```sh
npm ci
npm run dev
```

打开 http://127.0.0.1:4173/。修改文件后自动更新。

```sh
npm run build
npm run preview
```

构建先做 TypeScript 检查，再输出 `dist/`。

## 文件入口

- `index.html`：首页与精选游戏入口。
- `games/index.html`：全部游戏。
- `games/<slug>/index.html`：独立游戏详情。
- `src/games.ts`：统一游戏资料，数组顺序决定展示顺序，首页取前三款。
- `src/render.ts`：开发服务和构建阶段生成游戏卡片与详情 HTML，浏览器不运行渲染脚本。
- `styles.css`：响应式样式。
- `public/assets/`：按原路径发布的图片素材。
- `public/games/slime-post/privacy/index.html`：《史莱姆邮差》TapTap 小游戏隐私政策，按原路径复制到 `dist/`，不依赖脚本或外部样式。
- `vite.config.ts`：多页面构建入口，详情入口由游戏资料生成。

新增游戏时，在 `src/games.ts` 添加资料，把图片放进 `public/assets/`，并参照现有详情页创建 `games/<slug>/index.html`。无需改首页或构建入口。

## 发布

推送到 `main` 后，GitHub Actions 执行 `npm ci` 和 `npm run build`，发布 `dist/`。根站点使用默认 `base: /`。确认工作流成功后检查正式网站。

隐私政策地址为 `https://shiyuehub.github.io/games/slime-post/privacy/`，入口位于《史莱姆邮差》详情页页脚。政策使用用户指定的 ShiYueHub 名称；TapTap 厂商改名申请处理完成后，再核对平台资料与政策名称的一致性。公开联系入口暂为 TapTap 游戏详情页及官方社区，专用邮箱注册完成后再补充。合并部署后，需用中国大陆无代理网络确认页面可访问，再将该地址填入 TapTap；GitHub Pages 部署成功不代表审核端一定可访问。

## 内容约定

对外统一使用 ShiYue。宣传插画、概念图和实机截图应准确标注。不添加未经确认的游戏地址或发布日期。

## 性能约定

游戏内容在构建时写入 HTML，生产页面零 JavaScript。图片除首屏主图外使用懒加载，图片区域固定尺寸。新增功能优先保持静态输出。

展示图片优先使用 WebP；原 JPEG 更小时保留 JPEG。小程序码保留 PNG，采用无损压缩并保留透明度。原始图片保存在 `assets-originals/`，不进入发布目录。

展示图附有 `srcset` 和 `sizes`，360px / 650px / 大尺寸版本位于 `public/assets/`，配置集中在 `src/images.ts`。首页仅预加载主图，并使用与图片相同的尺寸选择规则。手机样式包含单列卡片、窄屏导航和触屏按钮尺寸。

## 阅读性约定

保持暖色纸感、衬线标题与原有插画拼贴，使用编辑式排版层级，而非统一放大所有文字：`--text-body` 为 16px，`--text-copy` 为 15px，`--text-small` 为 14px，`--text-caption` 为 13px（均以 rem 定义）。正文和玩法说明使用 15–16px，中文分类、导航及重要辅助说明使用 14px；英文副标题、章节标记、状态与图片注记使用 13px，以字距、行距和留白区分层级。手机上的长段落使用 16px，不靠缩小字号来容纳内容。

次要文字统一使用 `--muted`，普通文字与背景的对比度至少 4.5:1。已上线状态使用轻量浅绿底，开发中状态不另加色块。卡片在中等屏宽上将分类与状态分为两行，桌面标题及底部链接应对齐，图片注记按内容自然增高，不留固定的大块空白。调整排版后同时检查首页、游戏列表与详情页，确保窄屏没有横向溢出、标签重叠或裁切。
