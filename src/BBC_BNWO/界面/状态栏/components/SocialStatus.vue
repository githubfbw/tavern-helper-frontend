<template>
  <div class="social-status">
    <div class="row">
      <i class="fa-solid fa-mask icon" :class="{ warn: disguise < 30 }"></i>
      <span class="label">伪装完整度</span>
      <div class="bar">
        <div class="fill" :class="{ warn: disguise < 30 }" :style="{ width: disguise + '%' }"></div>
      </div>
      <span class="num">{{ disguise }}</span>
    </div>
    <div class="row">
      <i class="fa-solid fa-building-columns icon"></i>
      <span class="label">组织认可度</span>
      <div class="bar">
        <div class="fill accent" :style="{ width: approval + '%' }"></div>
      </div>
      <span class="num">{{ approval }}</span>
    </div>
    <div class="row">
      <i class="fa-solid fa-link icon"></i>
      <span class="label">连锁堕</span>
      <span class="tag" :class="chain_class">{{ chain }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ disguise: number; approval: number; chain: string }>();

const chain_class = computed(() => {
  if (props.chain === '已牵连他人') return 'tag-deep';
  if (props.chain === '已被观察') return 'tag-mid';
  return 'tag-idle';
});
</script>

<style lang="scss" scoped>
.social-status {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
}
.icon {
  width: 14px;
  color: var(--c-primary-deep);
  flex-shrink: 0;
}
.icon.warn {
  color: var(--c-danger-start);
}
.label {
  color: var(--c-text-muted);
  flex-shrink: 0;
  width: 68px;
}
.bar {
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background: var(--c-track);
  overflow: hidden;
}
.fill {
  height: 100%;
  background: var(--c-primary);
  transition: width 0.5s ease, background 0.5s ease;
}
.fill.accent {
  background: var(--c-accent);
}
.fill.warn {
  background: linear-gradient(90deg, var(--c-danger-start), var(--c-danger-end));
}
.num {
  width: 24px;
  text-align: right;
  color: var(--c-border);
  font-weight: 600;
  flex-shrink: 0;
}
.tag {
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 10px;
}
.tag-idle {
  background: var(--c-track);
  color: var(--c-text-muted);
}
.tag-mid {
  background: #ecd9c4;
  color: var(--c-primary-deep);
}
.tag-deep {
  background: var(--c-accent);
  color: #fff;
}
</style>
