<template>
  <div class="carousel">
    <Swiper
      :modules="[SwiperEffectCreative, SwiperPagination, SwiperNavigation]"
      :slides-per-view="'auto'"
      :centered-slides="true"
      :space-between="26"
      :initial-slide="1"
      :allow-touch-move="!isLargeScreen"
      @swiper="onSwiper"
    >
      <SwiperSlide
        v-for="slide in slides"
        :key="slide.id"
        style="width: fit-content"
      >
        <img :src="slide.url" :alt="slide.alt" />
      </SwiperSlide>
      <ClientOnly>
        <section v-if="!isLargeScreen" class="buttons">
          <svg
            class="buttons__item"
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="44"
            viewBox="0 0 45 44"
            @click="goToPrev"
          >
            <path
              d="M22.5356 37.021C30.7356 37.021 37.5356 30.221 37.5356 22.021C37.5356 13.821 30.7356 7.021 22.5356 7.021C14.3356 7.021 7.53564 13.821 7.53564 22.021C7.53564 30.221 14.3356 37.021 22.5356 37.021ZM22.5356 35.021C15.2356 35.021 9.43565 29.221 9.43565 22.021C9.43565 14.821 15.2356 8.92099 22.4356 8.92099C29.6356 8.92099 35.5356 14.721 35.5356 22.021C35.5356 29.221 29.7356 35.021 22.5356 35.021ZM25.3356 29.321C25.6356 29.021 25.6356 28.421 25.3356 28.121L18.9356 22.021L25.3356 15.921C25.7356 15.621 25.6356 15.021 25.3356 14.721C25.0356 14.421 24.4356 14.421 24.1356 14.721L17.6356 20.921C16.9356 21.521 16.9356 22.521 17.6356 23.121L24.1356 29.321C24.4356 29.621 25.0356 29.721 25.3356 29.321Z"
              fill="#86868B"
            />
          </svg>
          <svg
            class="buttons__item"
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="44"
            viewBox="0 0 45 44"
            @click="goToNextSlide"
          >
            <path
              d="M22.5356 37.021C30.7356 37.021 37.5356 30.221 37.5356 22.021C37.5356 13.821 30.7356 7.021 22.5356 7.021C14.3356 7.021 7.53564 13.821 7.53564 22.021C7.53564 30.221 14.3356 37.021 22.5356 37.021ZM22.5356 35.021C15.2356 35.021 9.43565 29.221 9.43565 22.021C9.43565 14.821 15.2356 8.92099 22.4356 8.92099C29.6356 8.92099 35.5356 14.721 35.5356 22.021C35.5356 29.221 29.7356 35.021 22.5356 35.021ZM19.2356 29.321C19.5356 29.621 20.1356 29.621 20.5356 29.321L27.0356 23.121C27.7356 22.521 27.7356 21.521 27.0356 20.921L20.5356 14.721C20.1356 14.321 19.6356 14.321 19.3356 14.721C18.9356 15.021 18.9356 15.621 19.3356 15.921L25.7356 22.021L19.3356 28.121C18.8356 28.421 18.8356 29.021 19.2356 29.321Z"
              fill="#86868B"
            />
          </svg>
        </section>
      </ClientOnly>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { useMediaQuery } from "@vueuse/core";
import slide1 from "../public/assets/slide1.jpg";
import slide2 from "../public/assets/slide2.jpg";
import slide3 from "../public/assets/slide3.jpg";
import "swiper/css";
import "swiper/css/navigation";
import { Slide } from "~/types/main";

const isLargeScreen = useMediaQuery("(min-width: 936px)");

const slides = reactive<Slide[]>([
  {
    id: 1,
    url: slide1,
    alt: "slider1",
  },
  {
    id: 2,
    url: slide2,
    alt: "slider2",
  },
  {
    id: 3,
    url: slide3,
    alt: "slider3",
  },
]);

const swiperRef = ref<any>(null);

const onSwiper = (swiper: any) => {
  swiperRef.value = swiper;
};

const goToNextSlide = () => {
  if (swiperRef.value) {
    swiperRef.value.slideNext();
  }
};

const goToPrev = () => {
  if (swiperRef.value) {
    swiperRef.value.slidePrev();
  }
};
</script>

<style lang="scss" scoped>
.carousel {
  margin-top: 24px;
  margin-bottom: 29px;
}

.swiper-slide:nth-child(odd) {
  margin-top: 47px;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 6px;
}

svg path,
svg {
  transition: 0.2s;
  cursor: pointer;
}

svg:hover path,
svg:hover {
  fill: #232323;
}
</style>
