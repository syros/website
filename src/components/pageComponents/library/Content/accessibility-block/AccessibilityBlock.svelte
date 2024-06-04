<script>
  import { ContentBlock } from '@components/templates';
  import './accessibilityBlock.css';
  import accessibilityList from './accessibility-list.json';
  /*import { Icon } from 'astro-icon/components';*/
</script>

<ContentBlock id="accessibility" title="Доступность">
  <div class="accessibility__info">
    Все компоненты соответствуют стандарту доступности <br />
    WCAG AA и отлично отрабатывают в режимах VoiceOver <br />
    и Talkback для людей с нарушением зрения
  </div>
  <div class="accessibility__descr-wrapper">
    {#each accessibilityList as item}
      <div class="accessibility__descr-container">
        <!--<div class="accessibility__icon-wrapper">
          <Icon name={item.icon} />
        </div>-->
        <div class="accessibility__header">{item.title}</div>
        <div class="accessibility__description">{item.description}</div>
      </div>
    {/each}
  </div>
</ContentBlock>
