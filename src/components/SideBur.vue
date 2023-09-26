<style lang="scss">
 .SideBur {
  display: none;
 }
@media screen and (min-width: 825px) {
  .SideBur {
    display: flex;
    max-width: 30%;
    height: 100%;
    padding: 18px 14px 24px 14px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border-radius: 12px;
    border: 1px solid #4d4d4d;
    background: var(--Seondary-BG, #262626);
    .SideBur_Img {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .SideBur_Sceletons {
      width: 90%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      height: 50%;
      gap: 5%;
      .SideBur_SceletonItem {
        background-color: #f2f2f2;
        margin-top: 5%;
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
  }
}
</style>

<template>
  <div class="SideBur">
    <div class="SideBur_Img">
      <img src="/img/Blur.png" />
    </div>
    <div class="SideBur_Sceletons">
      <div class="SideBur_SceletonItem item1"></div>
      <div class="SideBur_SceletonItem item2"></div>
      <div class="SideBur_SceletonItem item3"></div>
      <div class="SideBur_SceletonItem item4"></div>
      <div class="SideBur_SceletonItem item5"></div>
      <div class="SideBur_SceletonItem item6"></div>
      <div class="SideBur_SceletonItem item7"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "SideBur",
});
</script>