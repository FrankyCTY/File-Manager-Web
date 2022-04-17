<script setup lang="ts">
import FileAccessBtn from '@/components/FileAccessBtn.vue'
import PlusIcon from '@/components/icons/Plus.vue'
</script>

<template>
  <div class="a625c8b3db294c8e295832e06-container">
    <button class="create-file-btn">
      <PlusIcon class="plus-icon" />
    </button>
    <FileAccessBtn>File</FileAccessBtn>
    <FileAccessBtn>File</FileAccessBtn>
  </div>
</template>

<style scoped>
.a625c8b3db294c8e295832e06-container {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
  gap: 1rem;
  justify-content: center;
}

.create-file-btn {
  background-color: white;
  border: 1px solid var(--clr-gray-300);
  border-radius: 6px;
  border-style: dashed;
  aspect-ratio: 1 / 1;
}

.plus-icon {
  color: var(--clr-green-500);
  width: 3rem;
  height: 3rem;
}
</style>
