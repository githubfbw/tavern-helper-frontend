<template>
  <div class="user-panel">
    <div class="rename-badge" :class="{ renamed: store.data.User.改姓状态 === '已改姓九条' }">
      {{ store.data.User.改姓状态 }}
    </div>

    <div class="section-head">核心状态</div>
    <ProgressBar label="内耗焦虑值" :value="store.data.User.内耗焦虑值" />
    <ProgressBar label="外表改造" :value="store.data.User.外表改造完成度" />

    <div class="section-head">身体改造进度</div>
    <div class="body-card">
      <div class="body-row"><span class="body-label">体型</span>{{ store.data.User.身体改造进度.体型 }}</div>
      <div class="body-row"><span class="body-label">胸部</span>{{ store.data.User.身体改造进度.胸部 }}</div>
      <div class="body-row"><span class="body-label">后庭</span>{{ store.data.User.身体改造进度.后庭 }}</div>
      <div class="body-row"><span class="body-label">声音</span>{{ store.data.User.身体改造进度.声音 }}</div>
    </div>

    <div class="section-head">关键道具状态</div>
    <ItemGrid :items="store.data.User.关键道具状态" />

    <div class="section-head">心结列表</div>
    <KnotList :knots="store.data.User.心结列表" />
  </div>
</template>

<script setup lang="ts">
import ItemGrid from './ItemGrid.vue';
import KnotList from './KnotList.vue';
import ProgressBar from './ProgressBar.vue';
import { useDataStore } from '../store';

const store = useDataStore();
</script>

<style lang="scss" scoped>
.user-panel {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.rename-badge {
  align-self: flex-start;
  border: 1.5px solid var(--c-border);
  padding: 2px 8px;
  font-size: 0.72rem;
  color: var(--c-text-muted);
  margin-bottom: 4px;
}

.rename-badge.renamed {
  border-color: var(--c-accent-gold);
  color: var(--c-accent-gold);
  font-weight: bold;
}

.section-head {
  font-size: 0.85rem;
  font-weight: bold;
  border-bottom: 2px solid var(--c-primary);
  display: inline-block;
  margin: 8px 0 4px;
}

.body-card {
  border: 1.5px solid var(--c-border);
  background: var(--c-surface);
  padding: 6px 8px;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.body-row {
  font-size: 0.8rem;
}

.body-label {
  display: inline-block;
  min-width: 3.2em;
  color: var(--c-text-muted);
  margin-right: 4px;
}
</style>
