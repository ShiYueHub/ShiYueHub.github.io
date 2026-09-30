import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { games } from './src/games';
import { renderPages } from './src/render';

export default defineConfig({
  plugins: [{
    name: 'static-game-pages',
    transformIndexHtml: { order: 'pre', handler: renderPages },
    handleHotUpdate(context) {
      if (context.file.endsWith('/src/games.ts') || context.file.endsWith('/src/render.ts')) {
        context.server.restart();
        return [];
      }
    },
  }],
  build: {
    cssMinify: true,
    sourcemap: false,
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        games: resolve(import.meta.dirname, 'games/index.html'),
        ...Object.fromEntries(games.map(game => [game.slug, resolve(import.meta.dirname, `games/${game.slug}/index.html`)])),
      },
    },
  },
});
