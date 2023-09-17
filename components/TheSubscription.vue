<template>
  <ClientOnly>
    <div class="subscription container">
      <h2>
        ПЕРЕДПЛАТА НА <br />
        Вищу Бухгалтерську Онлайн-Академію
      </h2>
      <p class="text">Оберіть свій тарифний пакет:</p>

      <TheTimer v-if="!isLargeScreen" />
      <div v-if="!isLargeScreen" class="hit-sales">
        <HitSalesArrows />
        <p class="hit-sales__text">ХІТ ПРОДАЖУ</p>
        <HitSalesArrows />
      </div>
      <SalesOption />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";
const isLargeScreen = useMediaQuery("(min-width: 1024px)");
</script>

<style scoped lang="scss">
@import "@/styles/main.scss";
.subscription {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  max-width: 1076px;
}

h2 {
  color: $black-content-color;
  text-align: center;
  font-family: e-Ukraine Head;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;

  @media (min-width: 768px) {
    font-size: 42px;
  }
}

.text {
  color: $black-content-color;
  text-align: center;
  font-family: Raleway;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  margin-top: 16px;

  @media (min-width: 768px) {
    font-size: 21px;
  }
}

.hit-sales {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 74px;
  margin-top: 24px;
  gap: 38px;
  border-radius: 15px 15px 0px 0px;
  background: #ffe601;

  @media (min-width: 768px) {
    font-size: 21px;
  }

  &__text {
    color: $black-content-color;
    text-align: center;
    font-family: Raleway;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 110%; /* 15.4px */
    margin: 0;
  }
}
</style>
