<template>
  <div class="female-panel">
    <div class="timeline">
      <div v-for="(node, i) in NODES" :key="node" class="node" :class="{ passed: i <= idx, current: i === idx }">
        <span class="dot"></span>
        <span class="node-label">{{ node }}</span>
      </div>
    </div>
    <div class="details">
      <div class="detail-row"><span class="k">婚恋状态</span><span class="v">{{ marriage }}</span></div>
      <div class="detail-row"><span class="k">妊娠状态</span><span class="v">{{ pregnancy }}</span></div>
      <div class="detail-row"><span class="k">黑桃纹身进度</span><span class="v">{{ tattoo }}</span></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  stage: string;
  marriage: string;
  pregnancy: string;
  tattoo: string;
}>();

const NODES = ['未适用', '圣母婊初期', '圣母婊进阶', '媚黑婊潜伏隐奸期', '媚黑婊觉醒期', '黑桃皇后候补', '黑桃皇后'];

const idx = computed(() => {
  const i = NODES.indexOf(props.stage);
  return i === -1 ? 0 : i;
});
</script>

<style lang="scss" scoped>
.female-panel {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.timeline {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 0;
  position: relative;
}
.node {
  display: flex;
  align-items: center;
  font-size: 9px;
  color: var(--c-text-muted);
}
.node:not(:last-child)::after {
  content: '';
  width: 10px;
  height: 1px;
  background: var(--c-track);
  margin: 0 2px;
}
.node.passed:not(:last-child)::after {
  background: var(--c-primary);
}
.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--c-track);
  margin-right: 3px;
  flex-shrink: 0;
}
.node.passed .dot {
  background: var(--c-primary);
}
.node.current .dot {
  background: var(--c-accent);
  box-shadow: 0 0 0 3px rgba(107, 21, 48, 0.18);
}
.node.current .node-label {
  color: var(--c-accent);
  font-weight: 700;
}
.node-label {
  white-space: nowrap;
}
.details {
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-top: 1px dashed var(--c-track);
  padding-top: 8px;
}
.detail-row {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
}
.k {
  color: var(--c-text-muted);
}
.v {
  color: var(--c-border);
  font-weight: 600;
}
</style>
