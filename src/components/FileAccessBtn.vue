<script setup lang="ts">
import FileIcon from '@/components/icons/File.vue'
</script>

<template>
  <div>
    <div class="wrapper flex flex-col w-full h-[230px]">
      <div class="w-full flex-1 overflow-hidden">
        <img
          alt="file preview image"
          src="https://images.unsplash.com/photo-1548722038-fbe52045aa57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80"
        />
      </div>

      <div class="bottom-box h-[80px] flex items-center">
        <FileIcon class="file-icon" />
        <span><slot></slot></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  border: 1px solid var(--clr-gray-300);
  border-radius: 6px;
  aspect-ratio: 1 / 1;
}

img {
  object-fit: contain;
}

.bottom-box {
  display: flex;
  align-items: center;
  padding-inline: 1.5rem;
  flex: 0 0 48px;
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
