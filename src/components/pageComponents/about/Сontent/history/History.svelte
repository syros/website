<script lang="ts">
  import history from './history.json';
  import { ScrollableTimeline } from '@components/organisms';
</script>

<div class="block-container">
  <h2 class="block-title dark">история развития</h2>
  <ScrollableTimeline items={history} />
</div>
