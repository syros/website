<script lang="ts">
  import Cover from './image.png';

  import { HeaderBlock } from '@components/templates';
  import { Divider } from '@components/atoms';
</script>

<HeaderBlock id={'users'} class="users-header-image" style="background: url({Cover})">
  <Divider />
  <div class="header__wrapper">
    <span class="header-text">
      С адмирал <br />
      все говорят <br />
      на одном языке
    </span>
  </div>
</HeaderBlock>

<style>
    :global(.users-header-image) {
        height: 352px;
        flex: 0 0 352px;
    }

  .header__wrapper {
    margin-top: 20px;
  }

  .header-text {
    color: var(--White, #fff);
    font-variant-numeric: lining-nums tabular-nums;
    font-family: 'CoFo Kak';
    font-size: 60px;
    font-style: normal;
    font-weight: 800;
    line-height: 60px;
    letter-spacing: -0.1px;
    text-transform: uppercase;
  }
</style>
