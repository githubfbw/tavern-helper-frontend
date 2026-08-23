<template>
  <div class="title-bar" :class="{ glowing: is_transformed }">
    <div class="title-row">
      <span class="title-name">User</span>
      <ProgressBar label="雌堕值" :value="store.data.User.雌堕值" />
    </div>
    <div class="sisters-row">
      <div class="sister-chip">
        <span class="sister-icon">姐</span>
        <span class="sister-name">大姐</span>
        <span class="sister-value">{{ store.data.大姐.支配度 }}</span>
      </div>
      <div class="sister-chip">
        <span class="sister-icon">姐</span>
        <span class="sister-name">二姐</span>
        <span class="sister-value">{{ store.data.二姐.支配度 }}</span>
      </div>
      <div class="sister-chip">
        <span class="sister-icon">妹</span>
        <span class="sister-name">小妹</span>
        <span class="sister-value">{{ store.data.小妹.支配度 }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import ProgressBar from './ProgressBar.vue';
import { useDataStore } from '../store';

const store = useDataStore();

const is_transformed = computed(() => store.data.User.外表改造完成度 >= 70);
</script>

<style lang="scss" scoped>
.title-bar {
  padding: 10px;
  background: var(--c-surface);
  border-bottom: 3px solid var(--c-border);
  transition: box-shadow 0.4s ease;
}

.title-bar.glowing {
  box-shadow: inset 0 0 0 2px var(--c-accent-gold);
}

.title-row {
  margin-bottom: 6px;
}

.title-name {
  font-weight: bold;
  font-size: 0.85rem;
  margin-right: 8px;
}

.sisters-row {
  display: flex;
  gap: 8px;
}

.sister-chip {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 4px;
  border: 1.5px solid var(--c-border);
  padding: 3px 6px;
  background: var(--c-background);
}

.sister-icon {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--c-primary);
  color: var(--c-surface);
  font-size: 0.65rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.sister-name {
  font-size: 0.75rem;
  flex: 1;
}

.sister-value {
  font-size: 0.75rem;
  font-weight: bold;
}
</style>
