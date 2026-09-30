export interface Game { slug: string; name: string; englishName: string; card: string }
export const games: Game[] = [
  {
    "slug": "slime-post",
    "name": "史莱姆邮差",
    "englishName": "SLIME POST",
    "card": "\n          <a class=\"game-art art-slime\" href=\"#detail-slime\"><img src=\"./assets/slime-post-detail.jpg\" alt=\"史莱姆邮差：阿沫跃过森林中的平台，踏上送信旅程\" loading=\"lazy\"><span class=\"art-label\">宣传插画</span><span class=\"art-arrow\" aria-hidden=\"true\">↗</span></a>\n          <div class=\"game-meta\"><span>弹跳冒险 · 轻解谜</span><span class=\"development released\"><i></i> 微信小游戏 · 已上线</span></div>\n          <h3><a href=\"#detail-slime\">史莱姆邮差</a></h3><p class=\"game-en\">SLIME POST</p>\n          <p class=\"game-description\">蓄力一跳，把心意送达。和小邮差一起穿过森林、沼泽与雪谷，让每一封信找到等待它的人。</p>\n          <details id=\"detail-slime\"><summary><span class=\"detail-label\"><span class=\"detail-show\">展开游戏介绍</span><span class=\"detail-hide\">收起游戏介绍</span></span><span class=\"detail-toggle\" aria-hidden=\"true\">＋</span></summary><div class=\"detail-body\"><p>按住蓄力、拖动瞄准、松手弹出。在弹台、风芽、炮台与冰面之间寻找下一处落点，抵达收件处后，收下一封回信。</p><p>已上线微信小游戏。六章、共 60 关，从青苔邮路一路走到熔光工坊。每一站都有新的机关与等待送达的心意。</p></div></details>\n          <div class=\"game-play\">\n            <a class=\"miniprogram-code\" href=\"./assets/slime-post-miniprogram.png\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"查看史莱姆邮差小程序码大图（新窗口）\"><img src=\"./assets/slime-post-miniprogram.png\" width=\"1254\" height=\"1254\" alt=\"史莱姆邮差微信小程序码\" loading=\"lazy\"></a>\n            <div><p class=\"play-title\">微信扫码，开始送信</p><p class=\"play-hint\">用微信扫一扫进入小游戏<br>手机浏览可保存图片后识别</p><a class=\"code-download\" href=\"./assets/slime-post-miniprogram.png\" download=\"史莱姆邮差小程序码.png\">保存小程序码 <span aria-hidden=\"true\">↓</span></a></div>\n          </div>\n        "
  },
  {
    "slug": "island-guard",
    "name": "小岛守卫战",
    "englishName": "ISLAND GUARD",
    "card": "\n          <a class=\"game-art art-guard\" href=\"#detail-guard\"><img src=\"./assets/island-guard.webp\" alt=\"小岛守卫战的高地营地美术概念，包含主城、资源建筑和防御塔\" loading=\"lazy\"><span class=\"art-label\">美术概念</span><span class=\"art-arrow\" aria-hidden=\"true\">↗</span></a>\n          <div class=\"game-meta\"><span>生存建造 · 策略塔防</span><span class=\"development\"><i></i> 敬请期待</span></div>\n          <h3><a href=\"#detail-guard\">小岛守卫战</a></h3><p class=\"game-en\">ISLAND GUARD</p>\n          <p class=\"game-description\">从一片高地开始，采集、建设、布置防线。让营地一点点长大，也让每一次坚守都有了意义。</p>\n          <details id=\"detail-guard\"><summary><span class=\"detail-label\"><span class=\"detail-show\">展开游戏介绍</span><span class=\"detail-hide\">收起游戏介绍</span></span><span class=\"detail-toggle\" aria-hidden=\"true\">＋</span></summary><div class=\"detail-body\"><p>发展木材与金币经济，升级主城，自由摆放防御塔，用连续的门墙守住入口。面对不同敌人，试着找到属于自己的防守节奏。</p><p>当前开发版本以高地建造与防守为核心。小岛世界观与人物故事正在完善，页面展示为美术概念。</p></div></details>\n        "
  },
  {
    "slug": "last-stop-island",
    "name": "末日小岛模拟器",
    "englishName": "LAST STOP ISLAND",
    "card": "\n          <a class=\"game-art art-island\" href=\"#detail-island\"><img src=\"./assets/last-stop-island.webp\" alt=\"末日小岛模拟器的像素海岛视觉概念，暖色灯火照亮补给站\" loading=\"lazy\"><span class=\"art-label\">视觉概念</span><span class=\"art-arrow\" aria-hidden=\"true\">↗</span></a>\n          <div class=\"game-meta\"><span>像素经营 · 营地防守</span><span class=\"development\"><i></i> 敬请期待</span></div>\n          <h3><a href=\"#detail-island\">末日小岛模拟器</a></h3><p class=\"game-en\">LAST STOP ISLAND</p>\n          <p class=\"game-description\">白天迎接来船，经营海岛上的补给站；夜晚守住营地。在不太温柔的世界里，把这一盏灯留下。</p>\n          <details id=\"detail-island\"><summary><span class=\"detail-label\"><span class=\"detail-show\">展开游戏介绍</span><span class=\"detail-hide\">收起游戏介绍</span></span><span class=\"detail-toggle\" aria-hidden=\"true\">＋</span></summary><div class=\"detail-body\"><p>在栖灯岛招募居民、安排生产、扩建营地。白天接收来船、积累物资，夜晚由守卫与炮台抵御威胁。</p><p>一款开发中的竖屏像素经营游戏。页面展示为早期视觉概念，最终场景与功能以正式发布版本为准。</p></div></details>\n        "
  }
];
