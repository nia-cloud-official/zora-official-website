import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import icon from 'astro-icon';
import simpleStackForm from 'simple-stack-form';

export default defineConfig({
  site: 'https://zoralumin.com',
  output: 'dist',
  integrations: [
    mdx({
      syntaxHighlight: 'hiki',
      shikiConfig: {
        theme: 'github-dark-dimmed',
      },
      gfm: true,
    }),
    icon(),
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    simpleStackForm(),
  ],
  output: 'hybrid',
  adapter: vercel({
    analytics: true,
  }),
});