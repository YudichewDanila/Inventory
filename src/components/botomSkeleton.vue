<style lang="scss" scoped>
.bottomSekeleton {
  display: flex;
  justify-content: space-between;
  width: 70%;
  height: 10%;
  border-radius: 12px;
  border: 1px solid var(--Primary-Border, #4d4d4d);
  background: var(--Seondary-BG, #ffffff);
  margin-top: 1%;
  padding: 18px;
  background: #262626;
  max-width: 80%;
  margin: 0 auto;

  .bottomSekeleton_skeleton {
    width: 90%;
    height: 36px;
    flex-shrink: 0;
    border-radius: 12px;
    background: linear-gradient(90deg, #3c3c3c 0%, #444 51.04%, #333 100%);
    animation: skeleton-loading 3s ease-in-out infinite;
  }
}
</style>
<template>
  <div @click="addLocal" class="bottomSekeleton">
    <div class="bottomSekeleton_skeleton"></div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 7.05L16.95 6L12 10.95L7.05 6L6 7.05L10.95 12L6 16.95L7.05 18L12 13.05L16.95 18L18 16.95L13.05 12L18 7.05Z"
        fill="white"
      />
    </svg>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "bottomSkeleton",
  setup() {
    const addLocal = () => {
      localStorage.setItem(
        "listItems",
        JSON.stringify([
          { id: 1, svg: "img/item1.svg", row: 1, column: 1, count: 4 },
          { id: 2, svg: "img/item2.svg", row: 1, column: 2, count: 2 },
          { id: 3, svg: "img/item3.svg", row: 1, column: 3, count: 5 },
        ])
      );
    };
    return{
        addLocal
    }
  },
});
</script>
