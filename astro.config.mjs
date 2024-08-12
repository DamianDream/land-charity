import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://DamianDream.github.io',
  base: 'charity',
  compressHTML: true,
  integrations: [tailwind(), sitemap()],
});
