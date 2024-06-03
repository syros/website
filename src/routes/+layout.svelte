<script lang="ts">
  import { type NavigationItem, NavigationPane } from '@components/molecules';
  import { fade } from 'svelte/transition';

  export let data;

  const navItems: Array<NavigationItem> = [
    {
      page: 'about',
      href: '',
      anchor: 'ds-info',
      label: 'Дизайн-система',
      children: [
        {
          page: 'about',
          anchor: 'abilities',
          label: 'Возможности',
        },
        {
          page: 'about',
          anchor: 'team',
          label: 'Команда',
        },
        {
          page: 'about',
          anchor: 'products',
          label: 'Наши продукты',
        },
        {
          page: 'about',
          anchor: 'platforms',
          label: 'Платформы',
        },
      ],
    },
    {
      page: 'users',
      href: `users`,
      anchor: `users`,
      label: 'Пользователи',
      children: [
        {
          page: 'users',
          anchor: 'designers',
          label: 'Дизайнеры',
        },
        {
          page: 'users',
          anchor: 'developers',
          label: 'Разработчики',
        },
        {
          page: 'users',
          anchor: 'business',
          label: 'Бизнес',
        },
      ],
    },
    {
      page: 'library',
      href: `library`,
      anchor: `library`,
      label: 'Библиотека',
      children: [
        {
          page: 'library',
          anchor: 'fonts',
          label: 'Шрифт',
        },
        {
          page: 'library',
          anchor: 'palette',
          label: 'Палитра',
        },
        {
          page: 'library',
          anchor: 'icons',
          label: 'Иконки',
        },
        {
          page: 'library',
          anchor: 'accessibility',
          label: 'Доступность',
        },
        {
          page: 'library',
          anchor: 'customizing',
          label: 'Кастомизация',
        },
      ],
    },
  ];
</script>

<NavigationPane items={navItems} />
{#key data.pathname}
  <div class="main-container" in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }}>
    <slot />
  </div>
{/key}
