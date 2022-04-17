<script setup lang="ts">
import FolderAccessBtn from '@/components/FolderAccessBtn.vue';
import FileAccessBtn from '@/components/FileAccessBtn.vue';
import PlusIcon from '@/components/icons/Plus.vue';
</script>

<template>
  <div class="page-container">
    <div class="top-bar">
      <h2 class="page-title">Home</h2>

      <button class="new-item-btn"><PlusIcon class="plus-icon" />New</button>
    </div>

    <div class="content-container">
      <h3 class="subtitle">Folders</h3>

      <div class="folder-list-container">
        <FolderAccessBtn>Folder</FolderAccessBtn>
        <FolderAccessBtn>Folder</FolderAccessBtn>
      </div>

      <h3 class="subtitle">Files</h3>

      <div class="file-list-container">
        <button class="create-file-btn">
          <PlusIcon class="plus-icon" />
        </button>
        <FileAccessBtn>File</FileAccessBtn>
        <FileAccessBtn>File</FileAccessBtn>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  height: 100vh;
}

.content-container {
  padding-inline: 5%;
  padding-block: 2rem;
}

.top-bar {
  display: flex;
  border-bottom: 1px solid var(--clr-gray-300);
  justify-content: space-between;
  padding-inline: 5%;
  padding-bottom: 0.6rem;
}

.page-title {
  color: var(--gray-900);
  font-size: large;
  font-weight: 500;
  align-self: flex-end;
}

.subtitle {
  color: var(--clr-subtitle);
  font-weight: 500;
  font-size: medium;
  margin-bottom: 0.8rem;
}

.new-item-btn {
  display: flex;
  align-items: center;
  background-color: white;
  border: none;
  border-radius: 18px;
  box-shadow: 0px 0.5px 4px rgba(0, 0, 0, 0.25);
  padding-inline: 1rem;
  padding-block: 0.6rem;
}

.plus-icon {
  color: var(--clr-green-500);
  width: 1rem;
  height: 1rem;
}

.new-item-btn > .plus-icon {
  color: var(--clr-green-500);
  margin-right: 0.4rem;
}

.folder-list-container {
  display: flex;
  overflow-x: scroll;
  width: 100%;
  gap: 1rem;
  padding-bottom: 1rem;
  -ms-overflow-style: none;
  overflow-y: scroll;
  scrollbar-width: none;

  margin-bottom: 1rem;
}

.folder-list-container::-webkit-scrollbar {
  display: none;
}

.create-file-btn {
  background-color: white;
  border: 1px solid var(--clr-gray-300);
  border-radius: 6px;
  border-style: dashed;
  aspect-ratio: 1 / 1;
}

.create-file-btn > .plus-icon {
  width: 3rem;
  height: 3rem;
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

@media (min-width: 60em) {
  .top-bar,
  .content-container {
    padding-inline: 2rem;
  }
}

.file-list-container {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
  gap: 1rem;
  justify-content: center;
}
</style>
