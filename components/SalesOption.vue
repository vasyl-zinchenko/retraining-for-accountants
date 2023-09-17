<template>
  <div class="package">
    <section v-if="isLargeScreen" class="timer">
      <TheTimer />

      <p>(для діючих передплатників додаткова знижка 10%)</p>
    </section>

    <div
      v-for="option in options"
      :key="option.id"
      :class="['option', `option--${option.id}`]"
    >
      <div v-if="option.id === 1 && isLargeScreen" class="hit-sales">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
        >
          <path
            d="M1.58652 10.4346L4.89479 13.9128L8.20306 10.4346L9.52637 11.1302L4.89479 15.9998L0.263208 11.1302L1.58652 10.4346Z"
            fill="#232323"
          />
          <path
            d="M1.58652 5.21728L4.89479 8.69555L8.20306 5.21729L9.52637 5.91294L4.89479 10.7825L0.263208 5.91294L1.58652 5.21728Z"
            fill="#232323"
            fill-opacity="0.5"
          />
          <path
            opacity="0.1"
            d="M1.58652 -3.64895e-07L4.89479 3.47826L8.20306 -6.08158e-08L9.52637 0.695652L4.89479 5.56522L0.263208 0.695652L1.58652 -3.64895e-07Z"
            fill="#232323"
          />
        </svg>

        <p class="hit-sales__text">ХІТ ПРОДАЖУ</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
        >
          <path
            d="M1.58652 10.4346L4.89479 13.9128L8.20306 10.4346L9.52637 11.1302L4.89479 15.9998L0.263208 11.1302L1.58652 10.4346Z"
            fill="#232323"
          />
          <path
            d="M1.58652 5.21728L4.89479 8.69555L8.20306 5.21729L9.52637 5.91294L4.89479 10.7825L0.263208 5.91294L1.58652 5.21728Z"
            fill="#232323"
            fill-opacity="0.5"
          />
          <path
            opacity="0.1"
            d="M1.58652 -3.64895e-07L4.89479 3.47826L8.20306 -6.08158e-08L9.52637 0.695652L4.89479 5.56522L0.263208 0.695652L1.58652 -3.64895e-07Z"
            fill="#232323"
          />
        </svg>
      </div>

      <div class="title">
        {{ option.title }}
        <div class="discount">-75%</div>
      </div>

      <p :class="['description', `description--${option.id}`]">
        {{ option.description }}
      </p>

      <div class="price">
        <span class="price__old-price"> {{ option.oldPrice }} грн/міс </span>

        <span class="price__new-price"> {{ option.newPrice }} грн/міс </span>
      </div>

      <div class="button">
        <UiBaseButton>Оплатити карткою</UiBaseButton>
      </div>

      <p class="part-payment">Оплатити частинами</p>

      <div v-for="item in option.includes" :key="item.id" class="advantages">
        <div v-if="item.isIncluded" class="advantages__container">
          <div v-if="!isLargeScreen" style="display: flex">
            <div class="check">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M10.5 16.4L6.5 12.4L7.9 11L10.5 13.6L17.1 7L18.5 8.4L10.5 16.4Z"
                  fill="#232323"
                />
              </svg>
            </div>

            <p class="content">
              <span v-if="item.isNew" class="content__new">NEW</span>

              {{ item.title }}

              <span class="content__term">
                {{ item.term }}
              </span>

              <span class="content__important">
                {{ item.important }}
              </span>

              <span class="content__more content__term">
                <br />
                {{ item.more }}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div v-if="!isLargeScreen" class="bottom-discount">
        <div class="bottom-discount__price-wrapper">
          <div class="price">
            <span class="price__old-price">
              {{ option.oldPrice }} грн/міс
            </span>

            <span class="price__new-price">
              {{ option.newPrice }} грн/міс
            </span>
          </div>
          <div class="discount">-75%</div>
        </div>
        <UiBaseButton>Завантажити рахунок</UiBaseButton>
      </div>
    </div>
  </div>

  <div v-if="isLargeScreen" class="benefits">
    <div
      v-for="item in options[0].includes"
      :key="item.id"
      class="benefits__items"
    >
      <p class="content">
        <span v-if="item.isNew" class="content__new">NEW</span>

        {{ item.title }}

        <span class="content__term">
          {{ item.term }}
        </span>

        <span class="content__important">
          {{ item.important }}
        </span>
        <span class="content__more content__term"><br />{{ item.more }}</span>
      </p>

      <svg
        v-if="item.isIncluded"
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
      >
        <path
          d="M14.0648 21.8668L8.73145 16.5335L10.5981 14.6668L14.0648 18.1335L22.8648 9.3335L24.7314 11.2002L14.0648 21.8668Z"
          fill="#232323"
        />
      </svg>

      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
      >
        <path
          d="M24.3378 10.2736L22.4578 8.39355L16.7312 14.1202L11.0045 8.39355L9.12451 10.2736L14.8512 16.0002L9.12451 21.7269L11.0045 23.6069L16.7312 17.8802L22.4578 23.6069L24.3378 21.7269L18.6112 16.0002L24.3378 10.2736Z"
          fill="#232323"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
      >
        <path
          d="M14.0648 21.8668L8.73145 16.5335L10.5981 14.6668L14.0648 18.1335L22.8648 9.3335L24.7314 11.2002L14.0648 21.8668Z"
          fill="#232323"
        />
      </svg>
    </div>
  </div>

  <section v-if="isLargeScreen" class="load-account">
    <div v-for="option in options" :key="option.id" style="z-index: 1">
      <div v-if="isLargeScreen" class="bottom-discount">
        <div class="bottom-discount__price-wrapper">
          <div class="price">
            <span class="price__old-price">
              {{ option.oldPrice }} грн/міс
            </span>

            <span class="price__new-price">
              {{ option.newPrice }} грн/міс
            </span>
          </div>
          <div class="discount">-75%</div>
        </div>
        <UiBaseButton>Завантажити рахунок</UiBaseButton>
      </div>
    </div>
  </section>

  <p class="option-info">
    Оплачуйте пакети <span>частинами без комісії!</span><br />
    Натискайте на кнопку <span>Оплатити карткою</span> та оформлюйте
    розстрочку<br />
    через PrivatBank або Monobank
  </p>
</template>

<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";
import type { Option } from "@/types/main";
const isLargeScreen = useMediaQuery("(min-width: 1024px)");

const options = ref<Option[]>([
  {
    id: 1,
    title: "суперпрофесіонал",
    description: "8 професійних курсів за ціною 2",
    oldPrice: 1079,
    newPrice: 679,
    includes: [
      {
        id: 1,
        title: "Поглиблені професійні курси підвищення кваліфікації",
        term: "(8 курсів/рік)",
        isNew: false,
        isIncluded: true,
      },
      {
        id: 2,
        title: "Практичні курси автоматизації (робота в BAS, Medoc, Excel, ЕК",
        term: "",
        isNew: true,
        isIncluded: true,
      },
      {
        id: 3,
        title: "Закриті клубні лекції з експертами",
        term: "(1 р./ міс.)",
        isNew: true,
        isIncluded: true,
      },
      {
        id: 4,
        title: "Майстер-класи зі змін у законодавстві",
        term: "(4+ р./міс.)",
        isNew: false,
        isIncluded: true,
      },
      {
        id: 5,
        title: "Безлімітні відповіді на запитання під час онлайн-навчання",
        term: "",
        isNew: false,
        isIncluded: true,
      },
      {
        id: 6,
        title: "Тестові та практичні завдання зі зворотним зв'язком ",
        term: "",
        isNew: false,
        isIncluded: true,
      },
      {
        id: 7,
        title: "Роздатковий матеріал (корисні файли, брошури, презентації)",
        term: "",
        isNew: false,
        isIncluded: true,
      },
      {
        id: 8,
        title: "Клуб однодумців у Viber та підтримка куратора",
        term: "",
        isNew: false,
        isIncluded: true,
      },
      {
        id: 9,
        title: "Сертифікати після проходження курсів",
        term: "",
        isNew: false,
        isIncluded: true,
      },
      {
        id: 10,
        title: "Доступ до",
        term: "",
        isNew: false,
        important: "Бухгалтерської Відеоплатформи №1",
        isIncluded: false,
      },
      {
        id: 11,
        title: "Відеокурси і вебінари",
        more: "(1100+ вже та 20+ щомісяця)",
        isNew: false,
        isIncluded: false,
      },
      {
        id: 12,
        title: "Безлімітні швидкі консультації від експертів (сервіс ОК)",
        term: "",
        isNew: false,
        isIncluded: false,
      },
      {
        id: 13,
        title: "Бланки та зразки документів",
        more: "(2000+ вже та 30+ щомісяця)",
        isNew: false,
        isIncluded: false,
      },
      {
        id: 14,
        title: "Консультант з пошуку та підготовки документів",
        term: "(безлімітно, щодня)",
        isNew: false,
        isIncluded: false,
      },
      {
        id: 15,
        title: "Калькулятори",
        term: "",
        isNew: false,
        isIncluded: false,
      },
      {
        id: 16,
        title: "Довідники",
        term: "",
        isNew: false,
        isIncluded: false,
      },
    ],
  },
  {
    id: 2,
    title: "преміум",
    description:
      "8 професійних курсів за ціною 2 +  Бухгалтерська Відеоплатформа №1",
    oldPrice: 1079,
    newPrice: 679,
    includes: [
      {
        id: 1,
        title: "Поглиблені професійні курси підвищення кваліфікації",
        term: "(8 курсів/рік)",
        isNew: false,
        isIncluded: true,
      },
      {
        id: 2,
        title: "Практичні курси автоматизації (робота в BAS, Medoc, Excel, ЕК",
        term: "",
        isNew: true,
        isIncluded: true,
      },
      {
        id: 3,
        title: "Закриті клубні лекції з експертами",
        term: "(1 р./ міс.)",
        isNew: true,
        isIncluded: true,
      },
      {
        id: 4,
        title: "Майстер-класи зі змін у законодавстві",
        term: "(4+ р./міс.)",
        isNew: false,
        isIncluded: true,
      },
      {
        id: 5,
        title: "Безлімітні відповіді на запитання під час онлайн-навчання",
        term: "",
        isNew: false,
        isIncluded: true,
      },
      {
        id: 6,
        title: "Тестові та практичні завдання зі зворотним зв'язком ",
        term: "",
        isNew: false,
        isIncluded: true,
      },
      {
        id: 7,
        title: "Роздатковий матеріал (корисні файли, брошури, презентації)",
        term: "",
        isNew: false,
        isIncluded: true,
      },
      {
        id: 8,
        title: "Клуб однодумців у Viber та підтримка куратора",
        term: "",
        isNew: false,
        isIncluded: true,
      },
      {
        id: 9,
        title: "Сертифікати після проходження курсів",
        term: "",
        isNew: false,
        isIncluded: true,
      },
      {
        id: 10,
        title: "Доступ до",
        term: "",
        isNew: false,
        important: "Бухгалтерської Відеоплатформи №1",
        isIncluded: true,
      },
      {
        id: 11,
        title: "Відеокурси і вебінари",
        more: "(1100+ вже та 20+ щомісяця)",
        isNew: false,
        isIncluded: true,
      },
      {
        id: 12,
        title: "Безлімітні швидкі консультації від експертів (сервіс ОК)",
        term: "",
        isNew: false,
        isIncluded: true,
      },
      {
        id: 13,
        title: "Бланки та зразки документів",
        more: "(2000+ вже та 30+ щомісяця)",
        isNew: false,
        isIncluded: true,
      },
      {
        id: 14,
        title: "Консультант з пошуку та підготовки документів",
        term: "(безлімітно, щодня)",
        isNew: false,
        isIncluded: true,
      },
      {
        id: 15,
        title: "Калькулятори",
        term: "",
        isNew: false,
        isIncluded: true,
      },
      {
        id: 16,
        title: "Довідники",
        term: "",
        isNew: false,
        isIncluded: true,
      },
    ],
  },
]);
</script>

<style scoped lang="scss">
@import "@/styles/main.scss";
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&display=swap");

.package {
  @media (min-width: 1024px) {
    display: flex;
    width: 100%;
    margin-top: 65px;
  }
}

.option {
  position: relative;
  padding: 24px 15.5px;
  margin: auto;
  background-color: $white-background-color;
  width: 312px;
  margin-bottom: 24px;
  border-radius: 0px 0px 15px 15px;

  @media (min-width: 1024px) {
    margin: 0;
    padding: 10px 15.5px;
    width: 255px;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &--1 {
    margin-left: auto;
    margin-right: 15px;
  }

  &--2 {
    margin-left: 0;
    position: relative;
    z-index: 1;

    &::after {
      @media (min-width: 1024px) {
        content: "";
        position: absolute;
        z-index: -1;
        right: 0;
        bottom: 100px;
        border-radius: 18px;
        border: 2px solid $blue-primary-color;
        width: 283px;
        height: 1385px;
        top: 0;
      }
    }
  }
}
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #232323;
  gap: 20px;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Raleway;
  font-size: 13px;
  font-weight: 800;
  line-height: 150%;
  text-transform: uppercase;
}

.check {
  margin-right: 7px;
}
.description {
  color: #232323;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Raleway;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 12px;
  text-transform: lowercase;

  &--1 {
    @media (min-width: 1024px) {
      width: 140px;
    }
  }
}

.discount {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border-radius: 17px;
  background: $blue-primary-color;

  color: $white-background-color;
  font-family: Inter;
  font-size: 10px;
  font-weight: 700;
}

.price {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  &__old-price {
    color: #979797;
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: Raleway;
    font-size: 13px;
    text-decoration: line-through;
  }
  &__new-price {
    color: 232323;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: Raleway;
    font-size: 17px;
    font-weight: 700;
  }
}

.button {
  display: flex;
  justify-content: center;
  margin: 12px 0;
}

.part-payment {
  color: #979797;
  text-align: center;
  font-family: Raleway;
  font-size: 13px;
  text-decoration-line: underline;
  margin: 0;
  cursor: pointer;
  margin-bottom: 24px;
}

.advantages {
  display: flex;

  @media (min-width: 1024px) {
    display: none;
  }

  &__container {
    margin-bottom: 8px;
  }
}

.content {
  color: #232323;
  font-family: Raleway;
  font-weight: 500;
  line-height: 140%;
  margin-top: 0;

  &__new {
    display: inline-flex;
    padding: 3px 5px;
    align-items: flex-start;
    gap: 8px;
    border-radius: 3px;
    background: var(--blue-Primary-Color, $blue-primary-color);

    color: $background-color;
    font-variant-numeric: lining-nums proportional-nums;
    font-weight: 600;
    line-height: 0.8;
  }

  &__term {
    color: $blue-primary-color;
    font-variant-numeric: lining-nums proportional-nums;
  }

  &__important {
    color: $blue-primary-color;
    font-weight: 700;
  }
}

.bottom-discount {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;

  &__price-wrapper {
    display: flex;
    justify-content: center;
    gap: 26px;
    margin-bottom: 12px;
  }
}

.option-info {
  color: #232323;
  text-align: center;
  font-family: Raleway;
  font-weight: 500;
  line-height: 150%;
  margin: 24px 0 72px 0;

  @media (min-width: 768px) {
    font-size: 17px;
  }

  @media (min-width: 1024px) {
    margin: 24px 0 104px 0;
  }

  & > span {
    font-weight: 700;
  }
}

.timer {
  display: flex;
  max-width: 225px;
  flex-wrap: wrap;
  justify-content: center;
  height: fit-content;
  padding: 24px 15.5px;

  & > p {
    color: #515154;
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: Raleway;
    font-size: 15px;
    line-height: 150%;
    letter-spacing: -0.12px;
    margin-top: 14px;
  }
}
.benefits {
  width: 100%;
  padding: 0 32px;

  &__items {
    display: grid;
    grid-template-columns: 1fr 286px 286px;
    border-bottom: 1px solid rgba(35, 35, 35, 0.1);
    padding: 8px 0;

    & > p {
      width: 320px;
    }
  }

  & svg {
    display: flex;
    margin: auto;
  }
}

.load-account {
  display: flex;
  width: 100%;
  justify-content: end;
  gap: 30px;

  & > div {
    padding: 24px 15.5px;
  }
}

.hit-sales {
  top: -25px;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  padding: 5px 59px;
  gap: 13px;
  border-radius: 15px 15px 0px 0px;
  background: $yellow-secondary-color;

  &__text {
    color: #232323;
    text-align: center;
    font-family: Raleway;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
    margin: 0;
  }
}
</style>
