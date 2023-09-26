<style lang="scss" scoped>
.Inventary {
  width: 90vh;
  height: 80vh;
  margin-left: 2%;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 12px;
  border: 1px solid var(--Primary-Border, #4d4d4d);
  background: var(--Seondary-BG, #262626);

  .Inventary_row {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid var(--Primary-Border, #4d4d4d);

    .Inventary_block {
      border: #4d4d4d solid 1px;
      width: 20%;
      height: 98%;
      padding-top: 5%;
      padding-left: 5%;

      .Inventary_img {
        width: 44px;
        height: 44px;
      }

      .Inventary_count {
        display: flex;
        justify-content: flex-end;
        width: 100%;

        span {
          width: 12px;
          height: 18px;
          border-radius: 6px 0px 0px 0px;
          border: 1px solid var(--Primary-Border, #4d4d4d);
          background: var(--Seondary-BG, #262626);
          color: var(--Primary-White, #989898);
          text-align: center;
          font-family: Inter;
          font-size: 10px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }

}

@media screen and (min-width: 800px) {
  .Inventary {
    width: 80vh;
    height: 80vh;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 12px;
    border: 1px solid var(--Primary-Border, #4d4d4d);
    background: var(--Seondary-BG, #262626);

    .Inventary_row {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-start;
      border-bottom: 1px solid var(--Primary-Border, #4d4d4d);

      .Inventary_block {
        border: #4d4d4d solid 1px;
        width: 20%;
        height: 98%;
        padding-top: 5%;
        padding-left: 5%;

        .Inventary_item {
          height: 100%;
          width: 100%;
        }

        .Inventary_img {
          width: 54px;
          height: 54px;
        }

        .Inventary_count {
          display: flex;
          justify-content: flex-end;
          width: 100%;

          span {
            width: 16px;
            height: 16px;
            border-radius: 6px 0px 0px 0px;
            border: 1px solid var(--Primary-Border, #4d4d4d);
            background: var(--Seondary-BG, #262626);
            color: var(--Primary-White, #989898);
            text-align: center;
            font-family: Inter;
            font-size: 10px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="Inventary">
    <div class="Inventary_row" v-for="row in 5" :key="row">
      <div @drop="onDrop($event, row, column)" @dragenter.prevent @dragover.prevent class="Inventary_block"
        v-for="column in 5" :key="column">
        <div class="Inventary_item" @dragstart="startDrag($event, item)" draggable="true"
          v-for="item in getItems(row, column)" :key="item.id">
          <img @click="onModalWindow(item)" class="Inventary_img" :src="item.svg" />
          <div class="Inventary_count">
            <span>{{ item.count }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Inventary",
  setup() {
    const store = useStore();
    const items = ref(computed(() => store.state.listItems));

    const startDrag = (event, item) => {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("itemId", item.id);
    };
    const onDrop = (event, row, column) => {
      const itemId = event.dataTransfer.getData("itemId");
      const empty = items.value.find(
        (item) => item.column == column && item.row == row
      );
      const item = items.value.find((item) => item.id == itemId);
      if (empty != undefined) {
        return;
      } else {
        item.row = row;
        item.column = column;
        localStorage.setItem('listItems', JSON.stringify(items.value));
      }

    };
    const getItems = (row, column) => {
      return items.value.filter(
        (item) => item.row == row && item.column == column
      );
    };

    const onModalWindow = (item) => {
      store.dispatch("returnModalWindow", item);
    };

    return {
      getItems,
      startDrag,
      onDrop,
      onModalWindow,
    };
  },
});
</script>
