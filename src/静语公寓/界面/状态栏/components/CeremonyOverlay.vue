<template>
  <div v-if="visible" class="ceremony-overlay">
    <button class="ceremony-close" type="button" aria-label="关闭" @click="visible = false">×</button>
    <div class="ceremony-frame">
      <div class="ceremony-title">改姓入籍仪式</div>
      <div class="ceremony-name">九条家 新娘</div>
      <div class="ceremony-status">{{ store.data.User.改姓状态 }}</div>
      <div class="ceremony-note">三姐妹依次别上家纹胸针，户籍文件的配偶栏上，签着"九条"两个字。</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useDataStore } from '../store';

const store = useDataStore();
const visible = ref(true);

watch(
  () => store.data.User.改姓状态,
  newState => {
    if (newState === '已改姓九条') visible.value = true;
  },
);
</script>

<style lang="scss" scoped>
.ceremony-overlay {
  position: absolute;
  inset: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background: repeating-linear-gradient(
    90deg,
    var(--c-background) 0 18px,
    #e9dfc9 18px 20px
  );
  border: 3px solid var(--c-accent-gold);
}

.ceremony-close {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  border: 1.5px solid var(--c-border);
  background: var(--c-surface);
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
}

.ceremony-frame {
  border: 2px solid var(--c-accent-gold);
  background: var(--c-surface);
  padding: 20px 24px;
  text-align: center;
  max-width: 320px;
}

.ceremony-title {
  font-size: 0.85rem;
  color: var(--c-accent-gold);
  font-weight: bold;
  letter-spacing: 0.2em;
  margin-bottom: 10px;
}

.ceremony-name {
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--c-border);
  margin-bottom: 8px;
}

.ceremony-status {
  display: inline-block;
  border: 1.5px solid var(--c-accent-gold);
  color: var(--c-accent-gold);
  padding: 2px 10px;
  font-size: 0.78rem;
  margin-bottom: 10px;
}

.ceremony-note {
  font-size: 0.78rem;
  color: var(--c-text-muted);
  line-height: 1.5;
}
</style>
