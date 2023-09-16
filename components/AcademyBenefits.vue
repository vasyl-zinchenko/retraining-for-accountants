<template>
  <div class="benefits">
    <h3>З передплатою Академії ви отримаєте:</h3>

    <section class="benefits__items">
      <div>
        <div class="benefits__item-title">8+</div>
        <p class="benefits__item-content">професійних курсів</p>
      </div>

      <div>
        <div class="benefits__item-title">12</div>
        <p class="benefits__item-content">закритих клубних лекцій</p>
      </div>

      <div>
        <div class="benefits__item-title">48</div>
        <p class="benefits__item-content">нових вебінарів та тренінгів</p>
      </div>

      <div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="58"
            viewBox="0 0 58 58"
            fill="none"
          >
            <path
              d="M13.619 38.6663C7.0312 38.6663 4.83203 33.833 4.83203 28.9997C4.83203 24.1663 7.0312 19.333 13.619 19.333C22.4084 19.333 35.5889 38.6663 44.3784 38.6663C50.9662 38.6663 53.1654 33.833 53.1654 28.9997C53.1654 24.1663 50.9662 19.333 44.3784 19.333C35.5889 19.333 22.4084 38.6663 13.619 38.6663V38.6663Z"
              stroke="#0066CC"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <p class="benefits__item-content">
          Безлімітні відповіді на запитання протягом навчання
        </p>
      </div>
    </section>

    <p class="test-task-text">Тестові та практичні</p>

    <p class="test-task-desc">завдання зі зворотним зв'язком</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "@/styles/main.scss";
.benefits {
  padding-top: 64px;
  background-color: $white-background-color;
  padding-bottom: 32px;
  max-width: 488px;
  margin: auto;

  @media (min-width: 1024px) {
    padding-top: 0;
    margin: 0;
  }

  &__items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0 50px;
  }

  &__item-title {
    color: $blue-primary-color;
    font-family: e-Ukraine Head;
    font-size: 43px;
    line-height: 150%;

    @media (min-width: 1024px) {
      font-size: 63px;
    }
  }

  &__item-content {
    color: $black-content-color;
    font-family: Raleway;
    line-height: 150%;
    margin: 0;

    @media (min-width: 1024px) {
      font-size: 17px;
    }
  }
}
h3 {
  text-align: start;
  margin: 0;
  font-size: 23px;
  margin-bottom: 24px;
}

.test-task-text,
.test-task-desc {
  font-family: Raleway;
  line-height: 150%;
  font-style: normal;
}

.test-task-text {
  color: $blue-primary-color;
  margin-top: 16px;
  font-size: 24px;
  font-weight: 700;

  @media (min-width: 1024px) {
    font-size: 39px;
  }
}

.test-task-desc {
  color: $black-content-color;
  font-size: 16px;
  font-weight: 400;

  @media (min-width: 1024px) {
    font-size: 17px;
  }
}

svg {
  @media (min-width: 1024px) {
    width: 88px;
    height: 88px;
  }
}
</style>
