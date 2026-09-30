# ShiYue · 独立小游戏工作室

ShiYue 工作室网站，专注小游戏，展示《史莱姆邮差》《小岛守卫战》《末日小岛模拟器》。原生 HTML、CSS 和少量 JavaScript，无第三方前端依赖，适配手机与桌面。

## 本地预览

```sh
python3 scripts/build.py
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

打开 http://127.0.0.1:4173 。游戏介绍使用原生 details，即使 JavaScript 不可用仍可展开。

## GitHub Pages

推荐工作室地址 `https://shiyuehub.github.io`，对应仓库 `ShiYueHub/ShiYueHub.github.io`。已有个人站仓库 `qdsfdhvh/qdsfdhvh.github.io`，本项目不覆盖它。

在仓库 Settings → Pages 选择 GitHub Actions。推送 main 后，工作流仅发布 `dist/` 中的网页和明确列出的六项图片资源。开发记录和兄弟项目源码不会包含在 Pages 成品中。

修改简介：`index.html`。修改样式：`styles.css`。图标原图：`assets/studio-icon.png`。

内容与图片来源、品牌介绍见 [docs/brand-and-content.md](docs/brand-and-content.md)。
