<template>
  <ClientOnly>
    <main>
      <TheTraining />
      <TheScale />
      <TheSubscription />
      <TheForm />
    </main>
  </ClientOnly>
</template>

<script setup lang="ts">
import TheSubscription from "~/components/subscription/TheSubscription.vue";
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
