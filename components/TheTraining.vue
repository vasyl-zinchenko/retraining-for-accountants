<template>
  <div class="training">
    <div class="container">
      <p class="title">Вища Бухгалтерська Online-Академія</p>
      <h1>
        Підвищення кваліфікації<br />
        та профперепідготовка для бухгалтерів
      </h1>
      <UiBaseButton>Обрати навчання >></UiBaseButton>
    </div>
    <TheSlider />
    <div class="container">
      <p class="offer">
        Разом дешевше! Купуйте передплату на Вищу Бухгалтерську Online-Академію
        <span>8 професій за ціною 2</span>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/main.scss";
.title {
  color: $black-content-color;
  text-align: center;
  font-family: Raleway;
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
}

h1 {
  padding: 21px 0;
  font-size: 24px;
  color: $black-content-color;
  text-align: center;
  font-family: e-Ukraine Head;
  font-size: 24px;
  font-weight: 700;
  line-height: 150%;

  @media (min-width: 768px) {
    font-size: 42px;
  }
}
.training {
  background-color: $white-background-color;
  padding-bottom: 24px;
  margin-bottom: 72px;

  @media (min-width: 768px) {
    margin-bottom: 104px;
  }
}

.offer {
  color: $black-content-color;
  text-align: center;
  font-family: e-Ukraine Head;
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  max-width: 889px;
  margin: auto;

  @media (min-width: 768px) {
    font-size: 23px;
  }

  & > span {
    color: $blue-primary-color;
    text-decoration: none;
  }
}

button {
  margin: auto;
}
</style>
