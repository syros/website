<script lang="ts">
  import Switcher from './switcher.svelte';
  import { ContentBlock } from '@components/templates';
</script>

<ContentBlock id="abilities" title="Возможности" class="abilities-block">
  <div class="abilities-container">
    <Switcher />
  </div>
</ContentBlock>

<style>
  .abilities-block {
    padding-top: 6px;
  }
  .abilities-container {
    display: flex;
    column-gap: 10px;
    margin-top: 37px;
    position: relative;
  }
</style>
