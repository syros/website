<script lang="ts">
  import { onMount } from 'svelte';
  import Theme from './icons/theme.svelte';
  import Accessability from './icons/accessability.svelte';
  import Global from './icons/global.svelte';
  import Mobile from './icons/mobile.svelte';
  import { fly } from 'svelte/transition';
  // import text from './text.json';

  export let name: string;
  // export let Icon;
  // export let mainText: string;
  // export let infoText: string;

  const TEXT: Record<string, { mainText: string; infoText: string }> = {
    theme: {
      mainText: '+5 темизаций сформировано',
      infoText: 'Можно создать уникальный визуальный стиль для продукта, не отвязывая от дизайн-системы Адмирал',
    },
    accessibility: {
      mainText: 'Доступность ДЛЯ всех',
      infoText: 'Базовые материалы визуального языка соответствуют гайдлайнам доступности продукта WCAG',
    },
    global: {
      mainText: 'мыслим только глобально',
      infoText: 'Более 20 стран могут свободно применять нашу дизайн-систему, не заботясь о переработке компонентов',
    },
    mobile: {
      mainText: 'Мобильность,<br/>Всё на борту',
      infoText: 'Для вашего удобства дизайн-система Адмирал поддерживает мобильную библиотеку компонентов',
    },
  };

  const getIcon = () => {
    switch (name) {
      case 'theme':
        return Theme;
      case 'accessibility':
        return Accessability;
      case 'global':
        return Global;
      case 'mobile':
        return Mobile;
    }
  };

  onMount(async () => {
    // Icon = (await import(`./${name}.svelte`)).default;
  });
</script>

{#key name}
  <div class="ability-info" in:fly={{ x: 100, duration: 400, delay: 150 }}
  out:fly={{ x: 0, duration: 0 }}>
    <svelte:component this={getIcon()} />
    <div class="main-text">{@html TEXT[name].mainText}</div>
    <div class="info-text">{@html TEXT[name].infoText}</div>
  </div>
  {/key}

<style>
    .ability-info {
        width: 100%;
        height: 380px;
        border-radius: 12px;
        background: var(--Dark_blue_gradient);
        padding: 40px 44px;

        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        align-items: center;
    }

    .main-text {
        color: var(--White, #fff);
        text-align: center;
        font-variant-numeric: lining-nums tabular-nums;

        /* 40/40 */
        font-family: CoFo Kak;
        font-size: 40px;
        font-style: normal;
        font-weight: 800;
        line-height: 40px; /* 100% */
        text-transform: uppercase;

        margin: 60px 0 10px;
    }

    .info-text {
        color: var(--Light_grey, #e6eaf0);
        text-align: center;
        font-variant-numeric: lining-nums tabular-nums;

        /* 20/25 */
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 25px; /* 125% */
    }
</style>
