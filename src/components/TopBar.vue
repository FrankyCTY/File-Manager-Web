<script setup lang="ts">
import PlusIcon from '@/components/icons/Plus.vue'
</script>

<template>
  <div>
    <div class="top-bar">
      <h2 class="path">Home</h2>

      <button class="new-item-btn"><PlusIcon class="plus-icon" />New</button>
    </div>
  </div>
</template>

<style scoped>
.top-bar {
  display: flex;
  border-bottom: 1px solid var(--clr-gray-300);
  justify-content: space-between;
  padding-inline: 5%;
  padding-top: 2rem;
  padding-bottom: 0.6rem;
  width: 100%;
}

.path {
  color: var(--gray-900);
  font-size: large;
  font-weight: 500;
  align-self: flex-end;
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
  cursor: pointer;
}

.plus-icon {
  color: var(--clr-green-500);
  width: 1rem;
  height: 1rem;
  margin-right: 0.4rem;
}

@media (min-width: 60em) {
  .top-bar {
    padding-inline: 2rem;
  }
}
</style>
