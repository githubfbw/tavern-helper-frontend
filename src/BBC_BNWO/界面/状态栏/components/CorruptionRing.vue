<template>
  <div class="ring-wrap">
    <div class="petals">
      <span
        v-for="i in 5"
        :key="i"
        class="petal"
        :class="{ active: i <= stage_index }"
        :style="{ transform: `translate(-50%, -50%) rotate(${(i - 1) * 72}deg) translateY(-27px) rotate(${-(i - 1) * 72}deg)` }"
        >♠</span
      >
    </div>
    <div class="core" :class="{ deep: stage_index >= 5 }">
      <div class="value">{{ value.toFixed(1) }}</div>
      <div class="label">{{ stage_short }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ value: number; stage: string }>();

const STAGES = [
  '阶段一_初触微扰',
  '阶段二_可感知却可忽略',
  '阶段三_突破微调的渐进质变',
  '阶段四_从人类质变为色情适应体',
  '阶段五_彻底绽放与持续依赖',
];

const stage_index = computed(() => {
  const idx = STAGES.indexOf(props.stage);
  return idx === -1 ? 1 : idx + 1;
});

const stage_short = computed(() => props.stage.split('_')[0] ?? props.stage);
</script>

<style lang="scss" scoped>
.ring-wrap {
  position: relative;
  width: 76px;
  height: 76px;
  flex-shrink: 0;
}
.petals {
  position: absolute;
  inset: 0;
}
.petal {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 15px;
  line-height: 1;
  color: var(--c-track);
  transition: color 0.6s ease;
}
.petal.active {
  color: var(--c-accent);
}
.core {
  position: absolute;
  inset: 9px;
  border-radius: 50%;
  background: var(--c-surface);
  border: 2px solid var(--c-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: border-color 0.6s ease, background 0.6s ease;
}
.core.deep {
  border-color: var(--c-accent-deep);
  background: linear-gradient(180deg, var(--c-surface), #f1e4e6);
}
.value {
  font-weight: 700;
  font-size: 15px;
  color: var(--c-border);
}
.label {
  font-size: 9px;
  color: var(--c-text-muted);
  margin-top: 1px;
  text-align: center;
  padding: 0 4px;
}
</style>
