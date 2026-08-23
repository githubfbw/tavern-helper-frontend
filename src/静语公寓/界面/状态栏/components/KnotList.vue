<template>
  <div class="knot-list">
    <div v-for="(knot, name) in knots" :key="name" class="knot-item" :class="stateClass(knot.状态)">
      <div class="knot-head">
        <span class="knot-name">{{ name }}</span>
        <span class="knot-state">{{ knot.状态 }}</span>
      </div>
      <div class="knot-effect">{{ knot.当前影响 }}</div>
    </div>
    <div v-if="_.isEmpty(knots)" class="knot-empty">暂无心结记录</div>
  </div>
</template>

<script setup lang="ts">
import _ from 'lodash';

defineProps<{
  knots: Record<string, { 状态: string; 当前影响: string }>;
}>();

function stateClass(state: string) {
  if (state === '彻底扭曲加深') return 'state-danger';
  if (state === '已解开') return 'state-resolved';
  if (state === '已动摇') return 'state-shaken';
  return 'state-resist';
}
</script>

<style lang="scss" scoped>
.knot-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.knot-item {
  border: 1.5px solid var(--c-border);
  background: var(--c-surface);
  padding: 6px 8px;
  border-left-width: 4px;
}

.knot-item.state-resist {
  border-left-color: var(--c-text-muted);
}

.knot-item.state-shaken {
  border-left-color: var(--c-primary);
}

.knot-item.state-resolved {
  border-left-color: #6c8a5a;
}

.knot-item.state-danger {
  border-left-color: var(--c-danger);
}

.knot-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 2px;
}

.knot-name {
  font-weight: bold;
  font-size: 0.82rem;
}

.knot-state {
  font-size: 0.72rem;
  color: var(--c-text-muted);
}

.knot-item.state-danger .knot-state {
  color: var(--c-danger);
  font-weight: bold;
}

.knot-effect {
  font-size: 0.78rem;
  color: var(--c-text-muted);
}

.knot-empty {
  text-align: center;
  color: var(--c-text-muted);
  padding: 10px;
  font-size: 0.82rem;
  font-style: italic;
}
</style>
