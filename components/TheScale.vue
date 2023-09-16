<template>
  <div class="learning container">
    <h2>Навчання, яке працює! Відкрийте для себе найпопулярніші курси</h2>

    <div class="date-scale">
      <div
        class="date-scale__line--black"
        :style="
          isLargeScreen
            ? { width: `${dateScaleLineHeight}%` }
            : { height: `${dateScaleLineHeight}%` }
        "
      ></div>

      <div class="wrapper">
        <div v-for="date in dateRange" :key="date" class="date-scale-item">
          <span class="visible-data">
            {{ visibleData(date) }}
          </span>

          <div v-if="visibleData(date)" class="date-line"></div>

          <img
            v-if="currentDate === formatDate(date) && !isLargeScreen"
            class="mark"
            :src="mark"
          />
        </div>
      </div>

      <span class="text-item text-item--1">Ціни раннього бронювання</span>

      <span class="text-item text-item--2">Подорожчання на 10%</span>

      <span class="text-item text-item--3">Подорожчання на 15%</span>

      <span v-if="!isLargeScreen" class="text-item text-item--4">
        Можливо квитки вже закінчаться
      </span>

      <span v-else class="text-item text-item--4">
        Квитки <br />вже закінчаться
      </span>
    </div>
  </div>
</template>

<script setup>
import { useMediaQuery } from "@vueuse/core";

import mark from "../public/assets/mark.svg";
const isLargeScreen = useMediaQuery("(min-width: 1024px)");
const startDate = new Date("2023-08-10");
const endDate = new Date("2023-10-03");

const dateScaleLineHeight = ref("");

const markedDatesList = [
  { title: "August 21", uaTitle: "21 серпня" },
  { title: "September 1", uaTitle: "1 вересня" },
  { title: "September 15", uaTitle: "15 вересня" },
  { title: "October 3", uaTitle: "3 жовтня" },
];

const dateRange = computed(() => {
  const dates = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 1);
    currentDate = newDate;
  }

  return dates;
});

const minDate = new Date(Math.min(...dateRange.value));
const maxDate = new Date(Math.max(...dateRange.value));

const formatDate = (date) => {
  const options = { month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
};
const currentDate = computed(() => {
  const currentDate = new Date();
  if (currentDate > maxDate) {
    return formatDate(maxDate);
  } else if (currentDate < minDate) {
    return formatDate(minDate);
  } else {
    return formatDate(currentDate);
  }
});

const currentDateIndex = computed(() => {
  return dateRange.value.findIndex(
    (el) => formatDate(el) === currentDate.value
  );
});

onMounted(() => {
  const currentIndex =
    currentDateIndex.value === 0 ? 0 : currentDateIndex.value + 1;

  dateScaleLineHeight.value = (100 * currentIndex) / dateRange.value.length;
});

const visibleData = (date) => {
  const matchingDate = markedDatesList.find(
    (el) => el.title === formatDate(date)
  );
  return matchingDate ? matchingDate.uaTitle : "";
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
.learning {
  padding-top: 24px;
  background-color: $white-background-color;
  padding-bottom: 24px;
  margin-bottom: 72px;

  @media (min-width: 768px) {
    margin-bottom: 104px;
  }

  @media (min-width: 1024px) {
    padding-top: 58px;
    padding-bottom: 130px;
  }
}

h2 {
  padding-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 42px;
  }

  @media (min-width: 1024px) {
    padding-bottom: 128px;
    max-width: 1087px;
    margin: auto;
  }
}
.date-scale {
  position: relative;
  height: 678px;
  display: flex;
  z-index: 1;
  justify-content: center;
  margin-bottom: 34px;

  @media (min-width: 1024px) {
    max-width: 1088px;
    height: 10px;
    margin: auto;
    justify-content: start;
  }

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    margin: auto;
    width: 6px;
    z-index: -1;
    flex-shrink: 0;
    background: #f6f6f6;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05) inset;

    @media (min-width: 1024px) {
      width: 100%;
      height: 6px;
      margin: 0;
    }
  }
}
.date-scale__line--black {
  position: absolute;
  margin: auto;
  width: 6px;
  flex-shrink: 0;
  background: $black-content-color;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05) inset;

  @media (min-width: 1024px) {
    height: 6px;
    margin: 0;
  }

  &::after {
    @media (min-width: 1024px) {
      content: url("../public/assets/mark.svg");
      width: 21px;
      height: 21px;
      z-index: 1;
      border-radius: 50%;
      position: absolute;
      right: -5px;
      top: -14.5px;
    }
  }
}

.date-scale-item {
  display: flex;
  align-items: center;
  gap: 14px;
  justify-content: end;
  transform: translateX(-56.5px);
  min-width: 130px;

  @media (min-width: 1024px) {
    min-width: auto;
    flex-direction: column-reverse;
    gap: 30px;
    transform: translate(19.5px, 23.5px);
  }

  &:last-child {
    transform: translate(-56.5px, 9.5px);

    @media (min-width: 1024px) {
      transform: translate(-0.5px, 24.5px);
      align-items: flex-end;
    }
  }
}

.date-line {
  background-color: $black-content-color;
  height: 3px;
  width: 17px;
  display: flex;
  z-index: 1;

  @media (min-width: 1024px) {
    width: 3px;
    height: 17px;
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
  align-items: center;

  @media (min-width: 1024px) {
    width: 100%;
    flex-direction: row;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;

    background-color: $black-content-color;
    height: 3px;
    width: 17px;
    display: flex;

    @media (min-width: 1024px) {
      width: 3px;
      height: 17px;
    }
  }
}

.mark {
  display: flex;
  border-radius: 50%;
  position: absolute;
  z-index: 5;
  transform: translate(9px, -1px);

  @media (min-width: 1024px) {
    // transform: translate(0, -45px);
    top: 0;
  }
}

.visible-data {
  color: $black-content-color;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Raleway;
  font-weight: 700;
  line-height: 130%;

  @media (min-width: 1024px) {
    font-size: 18px;
  }
}

.text-item {
  color: $black-content-color;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Raleway;
  line-height: 130%;
  position: absolute;
  transform: translateX(85px);
  max-width: 130px;

  @media (min-width: 1024px) {
    font-size: 18px;
    max-width: 140px;
  }

  &--1 {
    top: -2px;

    @media (min-width: 1024px) {
      top: -72px;
      left: -87px;
    }
  }

  &--2 {
    top: 180px;

    @media (min-width: 1024px) {
      top: -72px;
      left: 170px;
      text-align: center;
    }
  }

  &--3 {
    top: 350px;

    @media (min-width: 1024px) {
      top: -73px;
      right: 500px;
      text-align: center;
    }
  }

  &--4 {
    bottom: -10px;

    @media (min-width: 1024px) {
      bottom: 38px;
      right: 85px;
      text-align: end;
    }
  }
}
</style>
