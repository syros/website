<script>
  import { ContentWrapper } from '../ContentWrapper';
  import { fade } from 'svelte/transition';</script>
<main transition:fade >
  <slot name="header" >
    Header Slot
  </slot>
  <ContentWrapper className="content">
    <slot name="content">
      Content Slot
    </slot>
  </ContentWrapper>
</main>

<style>
    main {
        color: white;
        font-size: 20px;
        line-height: 1.6;
        flex: 1 1 auto;
        overflow: auto;
        width: 100%;
        scroll-behavior: smooth;

        display: flex;
        flex-direction: column;
    }
</style>
