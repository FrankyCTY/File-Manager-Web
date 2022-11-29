<script setup lang="ts">
import ListFolderSection from './ListFolderSection.vue'
import ListFileSection from './ListFilesSection.vue'
import TopBar from '@/components/TopBar.vue'
</script>

<template>
  <div>
    <div class="h-screen flex flex-col">
      <TopBar />

      <div class="content-container overflow-auto flex-1">
        <h3 class="subtitle">Folders</h3>

        <ListFolderSection />

        <h3 class="subtitle">Files</h3>

        <ListFileSection />
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-container {
  padding-inline: 5%;
  padding-block: 2rem;
}

.subtitle {
  color: var(--clr-subtitle);
  font-weight: 500;
  font-size: medium;
  margin-bottom: 0.8rem;
}

@media (min-width: 60em) {
  .content-container {
    padding-inline: 2rem;
  }
}
</style>
