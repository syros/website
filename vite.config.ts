import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svelte-svgr';
import { sveltrisVitePlugins } from 'sveltris';

export default defineConfig({
  // base: '/website/',
  output: 'static',
  plugins: [sveltekit(), svgr(), sveltrisVitePlugins()],
});
