<script setup lang="ts">
import FileAccessBtn from '@/components/FileAccessBtn.vue'
import PlusIcon from '@/components/icons/Plus.vue'
</script>

<template>
  <div>
    <div class="wrapper">
      <button
        class="create-file-btn h-[230px] flex w-full items-center justify-center"
      >
        <PlusIcon class="plus-icon" />
      </button>
      <FileAccessBtn>File</FileAccessBtn>
      <FileAccessBtn>File</FileAccessBtn>
      <FileAccessBtn>File</FileAccessBtn>
      <FileAccessBtn>File</FileAccessBtn>
      <FileAccessBtn>File</FileAccessBtn>
      <FileAccessBtn>File</FileAccessBtn>
      <FileAccessBtn>File</FileAccessBtn>
      <FileAccessBtn>File</FileAccessBtn>
      <FileAccessBtn>File</FileAccessBtn>
      <FileAccessBtn>File</FileAccessBtn>
      <FileAccessBtn>File</FileAccessBtn>
      <FileAccessBtn>File</FileAccessBtn>
      <FileAccessBtn>File</FileAccessBtn>
      <FileAccessBtn>File</FileAccessBtn>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  width: 100%;
  gap: 2.5rem;
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
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
