import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svelte-svgr';

export default defineConfig({
  // site: 'https://AdmiralDS.github.io',
  // base: '/website/',
  // output: 'static',
  // base: ''
  plugins: [sveltekit(), svgr()],
});
