<template>
  <div class="sister-panel">
    <div class="section-head">核心状态</div>
    <ProgressBar label="支配度" :value="sister.支配度" />
    <ProgressBar label="依赖度" :value="sister.依赖度" />
    <ProgressBar label="欲求值" :value="sister.欲求值" />

    <div class="status-line">{{ sister.状态描述 }}</div>

    <div class="section-head">关键道具状态</div>
    <ItemGrid :items="sister.关键道具状态" />

    <div class="section-head">心结列表</div>
    <KnotList :knots="sister.心结列表" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import ItemGrid from './ItemGrid.vue';
import KnotList from './KnotList.vue';
import ProgressBar from './ProgressBar.vue';
import { useDataStore } from '../store';

const props = defineProps<{
  name: '大姐' | '二姐' | '小妹';
}>();

const store = useDataStore();

const sister = computed(() => store.data[props.name]);
</script>

<style lang="scss" scoped>
.sister-panel {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.section-head {
  font-size: 0.85rem;
  font-weight: bold;
  border-bottom: 2px solid var(--c-primary);
  display: inline-block;
  margin: 8px 0 4px;
}

.status-line {
  font-size: 0.8rem;
  color: var(--c-text-muted);
  font-style: italic;
  padding: 2px 0;
}
</style>
