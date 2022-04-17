<script setup lang="ts">
import FolderIcon from '@/components/icons/Folder.vue';
</script>

<template>
  <div class="container">
    <FolderIcon class="folder-icon" />
    <span><slot></slot></span>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 0.8rem;
  padding-inline: 1.5rem;
  border: 1px solid var(--clr-gray-300);
  min-width: 13rem;
}

.folder-icon {
  display: grid;
  place-items: center;
  margin-right: 0.6rem;
  width: 1.5rem;
  height: 1.5rem;
  color: var(--clr-gray-600);
}

span {
  font-weight: 500;
}
</style>
