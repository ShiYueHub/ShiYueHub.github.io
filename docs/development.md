# 网站维护

正式地址：[https://shiyuehub.github.io/](https://shiyuehub.github.io/)。

网站使用原生 HTML、CSS 和少量 JavaScript，无第三方前端依赖。构建脚本仅依赖 Python 3 标准库，GitHub Actions 当前使用 Python 3.13。

## 本地预览

在仓库根目录执行：

```sh
python3 scripts/build.py
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

打开 [本地预览](http://127.0.0.1:4173/)。修改源文件后，重新执行构建并刷新页面。

## 文件入口

| 文件 | 用途 |
| --- | --- |
| `index.html` | 页面内容、游戏简介、上线状态与页面元信息 |
| `styles.css` | 样式与响应式布局 |
| `app.js` | 游戏介绍深链接与页脚年份 |
| `assets/` | 工作室图标和游戏展示图片 |
| `scripts/build.py` | 生成用于发布的 `dist/` 目录 |
| `.github/workflows/pages.yml` | GitHub Pages 自动部署工作流 |

新增页面或资源时，同时更新构建脚本的文件清单。`dist/` 是生成目录，不直接编辑或提交。

## 发布

仓库已经启用 GitHub Pages，构建来源为 **GitHub Actions**。推送到 `main` 后，工作流构建网站并发布 `dist/`。也可以在 Actions 页面手动运行工作流。

- [部署记录](https://github.com/ShiYueHub/ShiYueHub.github.io/actions/workflows/pages.yml)
- [正式网站](https://shiyuehub.github.io/)

确认对应提交的工作流成功后，再检查正式网站。README 和维护文档不在网站构建清单中，但作为公开仓库内容可在 GitHub 阅读。

## 内容约定

- 对外统一使用 **ShiYue**，定位为专注小游戏的独立工作室。
- 《史莱姆邮差》已上线微信小游戏；《小岛守卫战》《末日小岛模拟器》标为「敬请期待」。
- 不添加未经确认的下载地址、小游戏码或发布日期。
- 宣传插画、概念图和实机截图应准确标注。
