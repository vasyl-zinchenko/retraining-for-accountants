<template>
  <div class="form">
    <div class="container">
      <section class="form__container">
        <form @submit.prevent="onSubmit">
          <h3>Залиште заявку, і ми підберемо для вас умови зі знижкою</h3>

          <div class="field">
            <span class="field__label">Ваше ім'я</span>

            <input v-bind="name" placeholder="Ваше ім'я" />

            <div class="error">{{ errors.name }}</div>
          </div>

          <div class="field">
            <span class="field__label">Номер телефону</span>

            <input
              v-bind="phone"
              type="tel"
              placeholder="Введіть Ваш номер телефону"
            />

            <div class="error">{{ errors.phone }}</div>
          </div>

          <div class="field">
            <span class="field__label">Ваш E-mail</span>

            <input
              v-bind="email"
              type="email"
              placeholder="Введіть Ваш e-mail"
            />

            <div class="error">{{ errors.email }}</div>
          </div>

          <div class="button-wrapper">
            <BaseButton>Зареєструватись</BaseButton>
          </div>

          <div v-if="isSend" class="message message__success">
            <p>Заявка успішно відправлена.</p>
            <div @click="isSend = false">✖</div>
          </div>

          <div v-if="isError" class="message message__error">
            <p>Щось пішло не так. Спробуйте пізніже.</p>
            <div @click="isError = false">✖</div>
          </div>
        </form>

        <AcademyBenefits />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";
import BaseButton from "./ui/BaseButton.vue";

const isError = ref(false);
const isSend = ref(false);

const { errors, handleSubmit, defineInputBinds } = useForm({
  validationSchema: yup.object({
    name: yup
      .string()
      .min(6, "Ім'я має бути не менше 6 символів")
      .required("Обов'язкове поле"),
    phone: yup
      .string()
      .matches(/^\d+$/, "Телефон має містити лише цифри")
      .length(10, "Телефон має складатися з 10 цифр")
      .required("Обов'язкове поле"),
    email: yup
      .string()
      .email("E-mail має бути валідним")
      .required("Обов'язкове поле"),
  }),
});

const name = defineInputBinds("name");
const phone = defineInputBinds("phone");
const email = defineInputBinds("email");

const onSubmit = handleSubmit(async () => {
  isError.value = false;
  isSend.value = false;
  const formData = {
    email: email.value.value,
    name: name.value.value,
    phone: phone.value.value,
  };
  try {
    await fetch(`https://7eminar.ua/api/clients/campaign/test`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(formData),
    });
    isSend.value = true;
  } catch (error) {
    isError.value = true;
  } finally {
    setTimeout(() => {
      isError.value = false;
      isSend.value = false;
    }, 10000);
  }
});
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
.form {
  background-color: $white-background-color;
  max-width: 488px;
  margin: auto;

  @media (min-width: 1024px) {
    max-width: 100%;
    padding-top: 32px;
  }

  &__container {
    @media (min-width: 1024px) {
      display: flex;
      justify-content: space-between;
      margin: auto;
    }
  }
}

.container {
  max-width: 1076px;
  margin: auto;
}

h3 {
  text-align: start;
  margin: 0;
  font-size: 23px;
  margin-bottom: 24px;
}

.field {
  display: flex;
  flex-direction: column;

  &__label {
    color: $black-content-color;
    font-family: Raleway;
    line-height: 30px;
    margin: 7px 0;
  }
}

input {
  display: flex;
  padding: 15px 24px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 32px;
  border: 1px solid $black-content-color;
  background: $background-color;
}

input::placeholder {
  opacity: 0.7;
  color: #858585;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
}

.error {
  color: #f44336;
  font-family: Raleway;
  font-size: 13px;
}

form {
  padding-top: 24px;

  @media (min-width: 1024px) {
    width: 440px;
    padding-top: 0;
  }
}

.button-wrapper {
  margin-top: 24px;
}

.message {
  display: flex;
  justify-content: center;
  position: relative;

  font-family: Raleway;
  line-height: 30px;
  margin-top: 15px;
  border-radius: 5px;
  padding: 10px;
  font-weight: 500;

  &__success {
    color: #468847;
    background: #dff0d8;
  }

  &__error {
    background: #f0d8d8;
    color: #884646;
  }

  & > div {
    position: absolute;
    right: 10px;
    top: 0px;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      color: rgb(55, 8, 8);
    }
  }
}
</style>
