<template>
  <div class="card">
    <TitleBar />
    <TabNav v-model="active_tab" :tabs="tabs" />

    <div v-if="active_tab" class="content-area">
      <WorldStrip />
      <div v-if="active_tab === 'User'" class="tab-pane">
        <UserPanel />
      </div>
      <div v-else class="tab-pane">
        <SisterPanel :name="active_tab as '大姐' | '二姐' | '小妹'" />
      </div>
    </div>

    <CeremonyOverlay v-if="show_ceremony" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import CeremonyOverlay from './components/CeremonyOverlay.vue';
import SisterPanel from './components/SisterPanel.vue';
import TabNav from './components/TabNav.vue';
import TitleBar from './components/TitleBar.vue';
import UserPanel from './components/UserPanel.vue';
import WorldStrip from './components/WorldStrip.vue';
import { useDataStore } from './store';

const store = useDataStore();

const tabs = [
  { id: 'User', label: 'User' },
  { id: '大姐', label: '大姐' },
  { id: '二姐', label: '二姐' },
  { id: '小妹', label: '小妹' },
];

const active_tab = useLocalStorage<string | null>('jingyu_status_bar:active_tab', null);

const show_ceremony = computed(
  () =>
    store.data.User.雌堕值 >= 90 &&
    store.data.大姐.支配度 >= 70 &&
    store.data.二姐.支配度 >= 70 &&
    store.data.小妹.支配度 >= 70,
);
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  max-width: 720px;
  background-color: var(--c-background);
  border: 3px solid var(--c-border);
  box-shadow: 5px 5px 0px rgba(74, 59, 50, 0.16);
  display: flex;
  flex-direction: column;
  font-family: var(--font-body);
  color: var(--c-border);
  font-size: 13px;
  line-height: 1.35;
  margin: 0 auto;
  position: relative;
}

.content-area {
  padding: 0 0 12px;
  min-height: 0;
}

.tab-pane {
  padding: 10px 12px 0;
  animation: fadeEffect 0.3s ease;
}

@keyframes fadeEffect {
  from {
    opacity: 0;
    transform: translateY(5px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
