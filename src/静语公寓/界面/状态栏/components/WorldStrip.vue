<template>
  <div class="world-strip">
    <span>{{ store.data.世界状态.当前日期 }}</span>
    <span>{{ store.data.世界状态.当前时间 }}</span>
    <span>{{ store.data.世界状态.当前地点 }}</span>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();
</script>

<style lang="scss" scoped>
.world-strip {
  display: flex;
  justify-content: space-between;
  padding: 6px 10px;
  background: var(--c-background);
  font-size: 0.72rem;
  color: var(--c-text-muted);
  border-bottom: 1.5px dashed var(--c-border);
  flex-wrap: wrap;
  gap: 6px;
}
</style>
