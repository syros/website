<script lang="ts">
  import { IconArrowLeft, IconArrowRight } from '@components/atoms';
  import './footer.css';
  import { onMount } from 'svelte';

  const currentYear = new Date().getFullYear();
  let currentPage: string;

  onMount(() => {
    currentPage = window.location.pathname.split('/')[2];
    console.log(window.location);
  });

  let nextPage: string;
  let nextPageLink: string;
  let prevPageLink: string;

  $: switch (currentPage) {
    case 'users':
      nextPage = 'Библиотека';
      nextPageLink = '/website/library/#library';
      prevPageLink = '/website/#ds-info';
      break;
    case 'library':
      nextPage = 'Дизайн-система';
      nextPageLink = '/website/#ds-info';
      prevPageLink = '/website/users/#users';
      break;
    default:
      nextPage = 'Пользователи';
      nextPageLink = '/website/users/#users';
      prevPageLink = '/website/library/#library';
      break;
  }
</script>

<div class="footer">
  <div class="buttons-block">
    <a href={prevPageLink} class="footer-button__prev-page">
      <IconArrowLeft />
    </a>
    <a href={nextPageLink} class="footer-button__next-page">
      <IconArrowRight />
      <span class="footer-button__next-page-title">{nextPage}</span>
    </a>
  </div>
  <div class="copyright">{`© Группа компаний «Иннотех», 2020-${currentYear}`}</div>
</div>
