<script lang="ts">
  import Logo from './admiral.svg';
  import { onMount } from 'svelte';
  import { NavigationMenu, type NavigationItem } from '@components/molecules';
  import { joinAbsoluteUrlPath } from '@components/tools';
  import { type Page } from '@store/page';
  import { goto } from '$app/navigation';

  export let items: Array<NavigationItem>;
  export let active: string | undefined;
  let prevActive: string | undefined;

  let opened: Array<string> = [];

  let currentPage: string = 'about';
  let previousPage: string;

  const getPageRoot = (page: Page) => {
    switch (page) {
      case '/':
        return '#ds-info';
      case '/users':
        return 'users/#users';
      case '/library':
        return 'library/#library';

      default:
        return '#ds-info';
    }
  };

  $: {
    if (prevActive !== active) {
      prevActive = active;
      opened = new Array<string>(1).fill(active);
    }
  }

  onMount(() => {
    const page = getPageRoot(window.location.pathname);

    opened = new Array<string>(1).fill(page);
    active = page;
  });

  const BASE_URL = import.meta.env.BASE_URL;

  const onItemClick = (key: string, item: NavigationItem) => {
    const newPage = getPageRoot(`/${item.href}`);
    const basePath = joinAbsoluteUrlPath(window.location.origin, BASE_URL);

    if (active !== newPage) {
      active = newPage;
      opened = new Array<string>(1).fill(newPage);
    }

    const url = new URL(basePath + '/' + item.href);
    if (item.anchor) url.hash = item.anchor;
    goto(url);
  };
</script>

<nav class="side-nav">
  <NavigationMenu {items} bind:active {opened} {onItemClick}>
    <a href={BASE_URL} slot="logo">
      <Logo fill="var(--Dark_grey, rgb(53, 56, 58))" />
    </a>
  </NavigationMenu>
</nav>

<style>
  @import 'navigationPane.css';
</style>
