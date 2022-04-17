<script setup lang="ts">
import FileIcon from '@/components/icons/File.vue';
</script>

<template>
  <div class="a625bc01dca23aa6f90d85a44-container">
    <img
      alt="file preview image"
      src="https://images.unsplash.com/photo-1548722038-fbe52045aa57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80"
    />

    <div class="bottom-box">
      <FileIcon class="file-icon" />
      <span><slot></slot></span>
    </div>
  </div>
</template>

<style scoped>
.a625bc01dca23aa6f90d85a44-container {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--clr-gray-300);
  border-radius: 6px;
  aspect-ratio: 1 / 1;
}

img {
  height: 80%;
  object-fit: contain;
}

.bottom-box {
  display: flex;
  align-items: center;
  padding: 0.8rem;
  padding-inline: 1.5rem;
}

.file-icon {
  display: grid;
  place-items: center;
  margin-right: 0.6rem;
  width: 1.5rem;
  height: 1.5rem;
  color: var(--clr-green-500);
}

span {
  font-weight: 500;
}
</style>
