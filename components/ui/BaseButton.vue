<template>
  <button class="base-button">
    <span class="content">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "@/styles/main.scss";
.base-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 18px 32px;
  border: none;
  border-radius: 980px;
  background: $blue-primary-color;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background: $button-hover-blue-color;
  }
}
.content {
  color: #fff;
  text-align: center;
  font-family: Raleway;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 117.648% */
  letter-spacing: -0.374px;
}
</style>
