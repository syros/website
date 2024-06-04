<script lang="ts">
  // import Logo from './admiral.svelte';
  import Logo from './admiral.svg';
  import { onMount } from 'svelte';
  import { NavigationMenu, type NavigationItem } from '@components/molecules';
  import { joinAbsoluteUrlPath } from '@components/tools';
  import { type Page, pageInfo, setCurrentPage, setPreviousPage } from '@store/page';
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
    }
  }

  onMount(() => {
    const page = getPageRoot(window.location.pathname)
    // console.log('PANE:', `previous page ${$pageInfo.previous}`);
    // console.log('PANE:', `current page ${$pageInfo.current}`);

    opened = new Array<string>(1).fill(page);
    active = page;

    // if ($pageInfo.previous && $pageInfo.current && $pageInfo.previous !== $pageInfo.current) {
    //   opened = new Array<string>(1).fill(getPageRoot($pageInfo.previous));
    //   setTimeout(() => {
    //     opened = new Array<string>(1).fill(getPageRoot($pageInfo.current as Page));
    //   });
    // }
  });

  const BASE_URL = import.meta.env.BASE_URL;

  const onItemClick = (key: string, item: NavigationItem) => {
    const newPage = item.page;
    const basePath = joinAbsoluteUrlPath(window.location.origin, BASE_URL);

    console.log(newPage);
    // if ($pageInfo.current !== newPage) {
    //   setPreviousPage($pageInfo.current as Page);
    //   setCurrentPage(newPage as Page);
    // }

    const url = new URL(basePath + '/' + item.href);
    if (item.anchor) url.hash = item.anchor;
    goto(url);
  };
</script>

<nav class="side-nav">
  <NavigationMenu {items} bind:active {opened} {onItemClick}>
    <a href={BASE_URL} slot="logo">
      <Logo />
    </a>
  </NavigationMenu>
</nav>

<style>
  @import 'navigationPane.css';
</style>
