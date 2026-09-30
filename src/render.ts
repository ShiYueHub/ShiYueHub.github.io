import { games } from './games';
import { images } from './images';

function cardMarkup(card: string, slug: string): string {
  return card.replaceAll('./assets/', '/assets/')
    .replace(/href="#detail-[^"]+"/g, `href="/games/${slug}/"`);
}

export function renderPages(html: string): string {
  const rendered = html
    .replace(/<div class="game-grid" data-games="(featured|all)"><\/div>/g, (_, kind: string) => {
      const selected = kind === 'featured' ? games.slice(0, 3) : games;
      const cards = selected.map(game => {
        const body = cardMarkup(game.card, game.slug)
          .replace(/<details[\s\S]*?<\/details>/, '')
          .replace(/<div class="game-play">[\s\S]*$/, '');
        return `<article class="game-card" id="${game.slug}">${body}<a class="game-detail-link" href="/games/${game.slug}/">了解游戏 <span aria-hidden="true">↗</span></a></article>`;
      }).join('');
      return `<div class="game-grid">${cards}</div>`;
    })
    .replace(/<div class="game-detail" data-game="([^"]+)"><\/div>/g, (_, slug: string) => {
      const game = games.find(game => game.slug === slug);
      if (!game) throw new Error(`Unknown game: ${slug}`);
      const body = cardMarkup(game.card, game.slug)
        .replace(/<details[^>]*><summary>[\s\S]*?<\/summary>/, '<section class="game-introduction" aria-label="游戏介绍"><h2>游戏介绍</h2>')
        .replace('</details>', '</section>')
        .replace('loading="lazy"', 'loading="eager" fetchpriority="high"')
        .replace(/<h3><a[^>]*>(.*?)<\/a><\/h3>/, '<h1 class="game-title">$1</h1>');
      return `<div class="game-detail">${body}</div>`;
    })
    .replace(/<span id="year">\d+<\/span>/g, `<span id="year">${new Date().getFullYear()}</span>`);
  const isDetail = rendered.includes('class="game-detail"');
  const responsive = rendered.replace(/<img\b[^>]*>/g, (tag: string) => {
    const src = tag.match(/src="([^"]+)"/)?.[1];
    if (!src || !images[src]) return tag;
    const image = images[src];
    const sizes = tag.includes('fetchpriority="high"') && !isDetail
      ? '(max-width: 760px) 280px, 360px'
      : isDetail ? '(max-width: 760px) calc(100vw - 40px), 760px'
      : '(max-width: 760px) calc(100vw - 40px), (max-width: 1050px) calc((100vw - 104px) / 3), 382px';
    return tag.replace(/\s(width|height)="[^"]*"/g, '').replace(/>$/, ` width="${image.width}" height="${image.height}" srcset="${image.srcset}" sizes="${sizes}" decoding="async">`);
  });
  if (rendered.includes('class="hero wrap"')) {
    const hero = images['/assets/slime-post.webp'];
    return responsive.replace('</head>', `<link rel="preload" as="image" href="/assets/slime-post.webp" imagesrcset="${hero.srcset}" imagesizes="(max-width: 760px) 280px, 360px" fetchpriority="high"></head>`);
  }
  return responsive;
}

