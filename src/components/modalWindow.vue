<style lang="scss" scoped>
@media screen and (min-width: 800px) {
  .modalWindow {
    position: absolute;
    width: 300px;
    max-height: 80vh;
    border-left: 1px solid var(--Primary-Border, #4d4d4d);
    background: rgba(38, 38, 38, 0.752);
    backdrop-filter: blur(8px);
    border-radius: 15px;
    margin-top: -100vh;
    margin-left: 70%;
    overflow-y: scroll;
    z-index: 1000;

    .modalWindow_cloaseWindow {
      margin-left: 90%;
      background: #26262600;
      border: none;
    }
    .modalWindow_Img {
      padding-left: 20%;
      padding-right: 10%;
      padding-top: 8%;
      padding-bottom: 8%;
      img {
        width: 80%;
        max-height: 100%;
      }
    }
    .modalWindow_Sceletons {
      border-bottom: solid 2px gray;
      border-top: solid 2px gray;
      max-width: 90%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 5%;
      margin: 0 auto;
      .modalWindow_SceletonItem {
        background-color: #f2f2f2;
        margin-top: 2%;
        margin-bottom: 2%;
        border-radius: 15px;
        animation: skeleton-loading 3s ease-in-out infinite;
      }
      @keyframes skeleton-loading {
        0% {
          background: linear-gradient(
            90deg,
            rgb(98, 98, 98) 0%,
            rgba(51, 51, 51, 1) 50%,
            rgb(98, 98, 98) 97%
          );
          background-position: -200px 100;
        }
        30% {
          background: linear-gradient(
            90deg,
            rgba(51, 51, 51, 1) 0%,
            rgb(98, 98, 98) 50%,
            rgba(51, 51, 51, 1) 97%
          );
          background-position: 200px 0;
        }
        100% {
          background: linear-gradient(
            90deg,
            rgb(98, 98, 98) 0%,
            rgba(51, 51, 51, 1) 50%,
            rgb(98, 98, 98) 97%
          );
          background-position: -200px 0;
        }
      }
      .item1 {
        width: 100%;
        height: 50px;
      }
      .item2 {
        width: 80%;
        height: 20px;
      }
      .item3 {
        width: 100%;
        height: 20px;
      }
      .item4 {
        width: 90%;
        height: 20px;
      }
      .item5 {
        width: 80%;
        height: 20px;
      }
      .item6 {
        width: 70%;
        height: 20px;
      }
      .item7 {
        width: 40%;
        height: 20px;
        margin-top: 4%;
      }
    }
    .modalWindow_content {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 5%;
      margin-bottom: 5%;
      .modalWindow_deletBtn {
        width: 80%;
        height: 40px;
        border-radius: 8px;
        background: #fa7272;
        color: #fff;
        text-align: center;
        font-family: SF Pro Display;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border: none;
      }

      .content_ConfirmBlock {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
        .content_CountInput {
          width: 100%;
          height: 40px;
          border-radius: 4px;
          border: 1px solid #4d4d4d;
          background: #262626;
          color: #fff;
          text-align: center;
          font-family: Inter;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="number"] {
          -moz-appearance: textfield;
        }
        .content_CountInput :active,
        :hover,
        :focus {
          outline: 0;
          outline-offset: 0;
        }
        .content_Buttons {
          display: flex;
          gap: 10px;
          margin-top: 20px;

          button {
            font-family: SF Pro Display;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            border: none;
            gap: 12px;
            border-radius: 8px;
            justify-content: center;
            align-items: center;
            padding: 8px 28px;
          }
          .content_CancleButton {
            display: flex;
            width: 88px;
            background: #fff;
            border: none;
          }
          .content_ConfirmButton {
            display: flex;
            width: 112px;
            background: #fa7272;
            color: #fff;
          }
        }
      }
    }
  }
}

.modalWindow::-webkit-scrollbar {
  width: 0;
}
.modalWindow {
  -ms-overflow-style: none;
}
.modalWindow {
  overflow: -moz-scrollbars-none;
}
.modalWindow-enter-active {
  transition: all .3s ease;
}
.modalWindow-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.modalWindow-enter, .modalWindow-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
</style>
<template>
  <Teleport to="body">
    <transition name="modalWindow">
      <div class="modalWindow" v-show="showWindow">
      <button @click="cloaseWindow" class="modalWindow_cloaseWindow">
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
      </button>

      <div class="modalWindow_Img">
        <img :src="showWindowData.svg" />
      </div>

      <div class="modalWindow_Sceletons">
        <div class="modalWindow_SceletonItem item1"></div>
        <div class="modalWindow_SceletonItem item2"></div>
        <div class="modalWindow_SceletonItem item3"></div>
        <div class="modalWindow_SceletonItem item4"></div>
        <div class="modalWindow_SceletonItem item5"></div>
        <div class="modalWindow_SceletonItem item6"></div>
        <div class="modalWindow_SceletonItem item7"></div>
      </div>
      <div class="modalWindow_content">
        <button
          v-if="!conformBlock"
          @click="conformBlock = true"
          class="modalWindow_deletBtn"
        >
          Удалить предмет
        </button>

        <div v-if="conformBlock" class="content_ConfirmBlock">
          <input
            type="number"
            class="content_CountInput"
            v-model="CountInput"
            placeholder="Введите количество"
            @input="limitInput(showWindowData.count)"
          />
          <div class="content_Buttons">
            <button class="content_CancleButton" @click="conformBlock = false">
              Отмена
            </button>
            <button
              @click="deleteItem(showWindowData.id)"
              class="content_ConfirmButton"
            >
              Подтвердить
            </button>
          </div>
        </div>
      </div>
    </div>
</transition>
   
  </Teleport>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "modalWindow",
  setup() {
    const store = useStore();
    const showWindow = ref(computed(() => store.state.modalWindow));
    const showWindowData = ref(computed(() => store.state.modalWindowData));
    const conformBlock = ref(false);
    const CountInput = ref("");
    const cloaseWindow = () => {
      store.dispatch("cloaseModalWindow");
    };
    const limitInput = (count) => {
      if (CountInput.value > count) {
        CountInput.value = count;
      } else if (CountInput.value <= 0) {
        CountInput.value = 1;
      }
    };
    const deleteItem = (id) => {
      if (String(CountInput.value).length != 0) {
        store.dispatch("deleteItem", { id, CountInput: CountInput.value });
      } else {
        CountInput.value = 1;
      }
    };
    return {
      limitInput,
      showWindow,
      showWindowData,
      conformBlock,
      cloaseWindow,
      CountInput,
      deleteItem,
    };
  },
});
</script>
