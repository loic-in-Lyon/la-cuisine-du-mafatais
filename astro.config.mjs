// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://lacuisinedumafatais.fr', // <--- Indiquez bien votre domaine principal ici
  adapter: vercel(),
  integrations: [sitemap()]
});