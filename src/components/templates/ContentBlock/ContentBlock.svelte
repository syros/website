<script lang="ts">
  export let id: string | undefined = undefined;
  export let title: string | undefined = undefined;
  export let titleTheme: 'dark' | 'light' = 'dark'
</script>

<div class='block-container'>
  {#if (title || id)}
    <h2 class="block-title ${titleTheme}" {id}>{title}</h2>
  {/if}
  <slot />
</div>
<style>
  @import "./content-block.css";
</style>
