import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svgr, { OptimizeOptions } from 'vite-plugin-svelte-svgr';
import { sveltrisVitePlugins } from 'sveltris';

const svgoConfig: OptimizeOptions = {
  plugins: [
    {
      name: "removeAttrs",
      params: {
        attrs: "fill"
      }
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          { fill: 'currentColor' },
          { focusable: false },
        ],
      },
    },
  ],
};

export default defineConfig({
  // site: 'https://AdmiralDS.github.io',
  // base: '/website/',
  // output: 'static',
  // base: ''
  plugins: [sveltekit(), svgr({ svgo: svgoConfig }), sveltrisVitePlugins()],
});
