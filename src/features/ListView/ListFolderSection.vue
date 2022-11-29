<script setup lang="ts">
import FolderAccessBtn from '@/components/FolderAccessBtn.vue'
</script>

<template>
  <div>
    <div class="container">
      <FolderAccessBtn>Folder</FolderAccessBtn>
      <FolderAccessBtn>Folder</FolderAccessBtn>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  overflow-x: scroll;
  width: 100%;
  gap: 1rem;
  padding-bottom: 1rem;
  -ms-overflow-style: none;
  overflow-y: auto;
  scrollbar-width: none;
  margin-bottom: 1rem;
}

.container::-webkit-scrollbar {
  display: none;
}

@media (min-width: 50em) {
  .folder-list-container {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
    gap: 1rem;
    justify-content: center;
    margin-bottom: 2rem;
  }
}
</style>
