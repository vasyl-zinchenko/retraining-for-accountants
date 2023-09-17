<template>
  <div class="timer">
    <div class="timer__hours">
      <span>
        {{ !isTimerStopped ? (hours > 9 ? hours : `0${hours}`) : "00" }} :
      </span>
    </div>

    <div class="timer__minutes">
      <span>
        {{ !isTimerStopped ? (minutes > 9 ? minutes : `0${minutes}`) : "00" }}
        :
      </span>
    </div>

    <div class="timer__seconds">
      <span v-if="!isTimerStopped">
        {{ !isTimerStopped ? (seconds > 9 ? seconds : `0${seconds}`) : "00" }}
      </span>

      <span v-else> 00 </span>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

const endDate = new Date("2023-10-03 17:00:00").getTime();

const currentTime = ref(new Date().getTime());
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const isTimerStopped = ref(false);

onMounted(() => {
  const timerInterval = setInterval(() => {
    currentTime.value = new Date().getTime();
    if (currentTime.value >= endDate) {
      isTimerStopped.value = true;
      clearInterval(timerInterval);
    }
  }, 1000);
});

function getTimeLeft() {
  const timeDifference = endDate - currentTime.value;
  hours.value = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutes.value = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((timeDifference % (1000 * 60)) / 1000);
}

watch(currentTime, () => {
  getTimeLeft();
});
</script>

<style scoped lang="scss">
@import "@/styles/main.scss";
.subscription {
  display: flex;
  flex-direction: column;
  align-items: center;
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
}

.timer {
  display: flex;
  gap: 6px;
  margin-top: 16px;
  color: $blue-primary-color;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Raleway;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;

  &__hours,
  &__minutes,
  &__seconds {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 42px;

    &::after {
      font-size: 16px;
    }
  }

  &__hours,
  &__minutes {
    opacity: 0.4;
  }

  &__hours::after {
    content: "год";
  }
  &__minutes::after {
    content: "хв";
  }
  &__seconds::after {
    content: "сек";
  }
}
</style>
