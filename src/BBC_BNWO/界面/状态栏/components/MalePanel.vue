<template>
  <div class="male-panel">
    <div class="tags">
      <span class="tag">{{ potential }}</span>
      <span class="tag">{{ routing }}</span>
    </div>

    <div class="path-label">
      <i class="fa-solid fa-route"></i>
      最终路径：<b>{{ path }}</b>
    </div>

    <div class="lock-row">
      <i class="fa-solid fa-lock"></i>
      <span>贞操锁状态：{{ lock }}</span>
    </div>

    <div v-if="path === '普通男性' && collar_stage !== '未适用'" class="mini-timeline">
      <div class="mt-title">绿帽奴进度</div>
      <div class="mt-nodes">
        <div v-for="(node, i) in COLLAR_NODES" :key="node" class="mt-node" :class="{ passed: i <= collar_idx }">
          {{ node.replace(/^阶段[一二三四]_/, '') }}
        </div>
      </div>
    </div>

    <div v-if="cocoon !== '未开始'" class="mini-timeline">
      <div class="mt-title">作茧仪式进度</div>
      <div class="mt-nodes">
        <div v-for="(node, i) in COCOON_NODES" :key="node" class="mt-node" :class="{ passed: i <= cocoon_idx }">
          {{ node.replace(/^阶段[一二三四]_/, '') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  potential: string;
  routing: string;
  path: string;
  lock: string;
  collar_stage: string;
  cocoon: string;
}>();

const COLLAR_NODES = ['未适用', '阶段一_隐奸期', '阶段二_双线撞破', '阶段三_终极包裹', '阶段四_彻底绿帽'];
const collar_idx = computed(() => {
  const i = COLLAR_NODES.indexOf(props.collar_stage);
  return i === -1 ? 0 : i;
});

const COCOON_NODES = ['未开始', '阶段一_破茧初痛', '阶段二_茧中失语', '阶段三_蝶梦破碎', '阶段四_鎏色定形', '已完成'];
const cocoon_idx = computed(() => {
  const i = COCOON_NODES.indexOf(props.cocoon);
  return i === -1 ? 0 : i;
});
</script>

<style lang="scss" scoped>
.male-panel {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.tag {
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 10px;
  background: var(--c-track);
  color: var(--c-primary-deep);
}
.path-label,
.lock-row {
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--c-border);
}
.path-label i,
.lock-row i {
  color: var(--c-primary-deep);
  width: 12px;
}
.mini-timeline {
  border-top: 1px dashed var(--c-track);
  padding-top: 8px;
}
.mt-title {
  font-size: 10px;
  color: var(--c-text-muted);
  margin-bottom: 4px;
}
.mt-nodes {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.mt-node {
  font-size: 9px;
  padding: 2px 6px;
  border-radius: 8px;
  background: var(--c-track);
  color: var(--c-text-muted);
}
.mt-node.passed {
  background: var(--c-accent);
  color: #fff;
}
</style>
