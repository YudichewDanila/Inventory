<script setup>
import SideBur from "./components/SideBur.vue";
import Inventary from "./components/Inventary.vue";
import ModalWindow from "./components/modalWindow.vue";
import bottomSkeleton from "./components/botomSkeleton.vue"
</script>

<template>
  <main class="main">
    <div class="main_centerBlock">
      <SideBur />
      <Inventary />
      <ModalWindow />
    </div>
    <bottomSkeleton />
  </main>
  
</template>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100vh;
  background: #1d1d1d;

  .main_centerBlock {
    display: flex;
    max-width: 70%;
    margin: 2% auto;
  }
}
</style>
