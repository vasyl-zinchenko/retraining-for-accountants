import { mergeProps, useSSRContext, defineComponent, ref, createElementBlock, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, createTextVNode, computed, watch, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { EffectCreative, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useMediaQuery } from "@vueuse/core";
import "./entry-styles-1.mjs-41936670.js";
import { useForm } from "vee-validate";
import * as yup from "yup";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "devalue";
import "klona";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "defu";
const BaseButton_vue_vue_type_style_index_0_scoped_7ae825ce_lang = "";
const _sfc_main$a = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "base-button" }, _attrs))} data-v-7ae825ce><span class="content" data-v-7ae825ce>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span></button>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/BaseButton.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const BaseButton = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-7ae825ce"]]);
const __nuxt_component_0$3 = /* @__PURE__ */ defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const slide1 = "" + __buildAssetsURL("slide1.bcc60e41.jpg");
const slide2 = "" + __buildAssetsURL("slide2.2cfc2796.jpg");
const slide3 = "" + __buildAssetsURL("slide3.dee5d846.jpg");
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "TheSlider",
  __ssrInlineRender: true,
  setup(__props) {
    const isLargeScreen = useMediaQuery("(min-width: 936px)");
    const slides = [
      {
        id: 1,
        url: slide1,
        alt: "slider1"
      },
      {
        id: 2,
        url: slide2,
        alt: "slider2"
      },
      {
        id: 3,
        url: slide3,
        alt: "slider3"
      }
    ];
    const swiperRef = ref(null);
    const onSwiper = (swiper) => {
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "carousel" }, _attrs))} data-v-3239eedd>`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules: ["SwiperEffectCreative" in _ctx ? _ctx.SwiperEffectCreative : unref(EffectCreative), "SwiperPagination" in _ctx ? _ctx.SwiperPagination : unref(Pagination), "SwiperNavigation" in _ctx ? _ctx.SwiperNavigation : unref(Navigation)],
        "slides-per-view": "auto",
        "centered-slides": true,
        "space-between": 26,
        "initial-slide": 1,
        "allow-touch-move": !unref(isLargeScreen),
        onSwiper
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(slides, (slide) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: slide.id,
                style: { "width": "fit-content" }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", slide.url)}${ssrRenderAttr("alt", slide.alt)} data-v-3239eedd${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: slide.url,
                        alt: slide.alt
                      }, null, 8, ["src", "alt"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(slides, (slide) => {
                return createVNode(unref(SwiperSlide), {
                  key: slide.id,
                  style: { "width": "fit-content" }
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: slide.url,
                      alt: slide.alt
                    }, null, 8, ["src", "alt"])
                  ]),
                  _: 2
                }, 1024);
              }), 64)),
              createVNode(_component_ClientOnly, null, {
                default: withCtx(() => [
                  !unref(isLargeScreen) ? (openBlock(), createBlock("section", {
                    key: 0,
                    class: "buttons"
                  }, [
                    (openBlock(), createBlock("svg", {
                      class: "buttons__item",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "45",
                      height: "44",
                      viewBox: "0 0 45 44",
                      onClick: goToPrev
                    }, [
                      createVNode("path", {
                        d: "M22.5356 37.021C30.7356 37.021 37.5356 30.221 37.5356 22.021C37.5356 13.821 30.7356 7.021 22.5356 7.021C14.3356 7.021 7.53564 13.821 7.53564 22.021C7.53564 30.221 14.3356 37.021 22.5356 37.021ZM22.5356 35.021C15.2356 35.021 9.43565 29.221 9.43565 22.021C9.43565 14.821 15.2356 8.92099 22.4356 8.92099C29.6356 8.92099 35.5356 14.721 35.5356 22.021C35.5356 29.221 29.7356 35.021 22.5356 35.021ZM25.3356 29.321C25.6356 29.021 25.6356 28.421 25.3356 28.121L18.9356 22.021L25.3356 15.921C25.7356 15.621 25.6356 15.021 25.3356 14.721C25.0356 14.421 24.4356 14.421 24.1356 14.721L17.6356 20.921C16.9356 21.521 16.9356 22.521 17.6356 23.121L24.1356 29.321C24.4356 29.621 25.0356 29.721 25.3356 29.321Z",
                        fill: "#86868B"
                      })
                    ])),
                    (openBlock(), createBlock("svg", {
                      class: "buttons__item",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "45",
                      height: "44",
                      viewBox: "0 0 45 44",
                      onClick: goToNextSlide
                    }, [
                      createVNode("path", {
                        d: "M22.5356 37.021C30.7356 37.021 37.5356 30.221 37.5356 22.021C37.5356 13.821 30.7356 7.021 22.5356 7.021C14.3356 7.021 7.53564 13.821 7.53564 22.021C7.53564 30.221 14.3356 37.021 22.5356 37.021ZM22.5356 35.021C15.2356 35.021 9.43565 29.221 9.43565 22.021C9.43565 14.821 15.2356 8.92099 22.4356 8.92099C29.6356 8.92099 35.5356 14.721 35.5356 22.021C35.5356 29.221 29.7356 35.021 22.5356 35.021ZM19.2356 29.321C19.5356 29.621 20.1356 29.621 20.5356 29.321L27.0356 23.121C27.7356 22.521 27.7356 21.521 27.0356 20.921L20.5356 14.721C20.1356 14.321 19.6356 14.321 19.3356 14.721C18.9356 15.021 18.9356 15.621 19.3356 15.921L25.7356 22.021L19.3356 28.121C18.8356 28.421 18.8356 29.021 19.2356 29.321Z",
                        fill: "#86868B"
                      })
                    ]))
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const TheSlider_vue_vue_type_style_index_0_scoped_3239eedd_lang = "";
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheSlider.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-3239eedd"]]);
const TheTraining_vue_vue_type_style_index_0_scoped_52f0f1e1_lang = "";
const _sfc_main$8 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_UiBaseButton = BaseButton;
  const _component_TheSlider = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "training" }, _attrs))} data-v-52f0f1e1><div class="container" data-v-52f0f1e1><p class="title" data-v-52f0f1e1>Вища Бухгалтерська Online-Академія</p><h1 data-v-52f0f1e1> Підвищення кваліфікації<br data-v-52f0f1e1> та профперепідготовка для бухгалтерів </h1>`);
  _push(ssrRenderComponent(_component_UiBaseButton, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Обрати навчання &gt;&gt;`);
      } else {
        return [
          createTextVNode("Обрати навчання >>")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_TheSlider, null, null, _parent));
  _push(`<div class="container" data-v-52f0f1e1><p class="offer" data-v-52f0f1e1> Разом дешевше! Купуйте передплату на Вищу Бухгалтерську Online-Академію <span data-v-52f0f1e1>8 професій за ціною 2</span></p></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheTraining.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-52f0f1e1"]]);
const TheScale_vue_vue_type_style_index_0_scoped_3f292000_lang = "";
const _sfc_main$7 = {
  __name: "TheScale",
  __ssrInlineRender: true,
  setup(__props) {
    const isLargeScreen = useMediaQuery("(min-width: 1024px)");
    const startDate = /* @__PURE__ */ new Date("2023-08-10");
    const endDate = /* @__PURE__ */ new Date("2023-10-03");
    const dateScaleLineHeight = ref("");
    const dateRange = computed(() => {
      const dates = [];
      let currentDate2 = new Date(startDate);
      while (currentDate2 <= endDate) {
        dates.push(new Date(currentDate2));
        const newDate = new Date(currentDate2);
        newDate.setDate(currentDate2.getDate() + 1);
        currentDate2 = newDate;
      }
      return dates;
    });
    const minDate = new Date(Math.min(...dateRange.value));
    const maxDate = new Date(Math.max(...dateRange.value));
    const formatDate = (date) => {
      const options = { month: "long", day: "numeric" };
      return date.toLocaleDateString(void 0, options);
    };
    const currentDate = computed(() => {
      const currentDate2 = /* @__PURE__ */ new Date();
      if (currentDate2 > maxDate) {
        return formatDate(maxDate);
      } else if (currentDate2 < minDate) {
        return formatDate(minDate);
      } else {
        return formatDate(currentDate2);
      }
    });
    computed(() => {
      return dateRange.value.findIndex(
        (el) => formatDate(el) === currentDate.value
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "learning container" }, _attrs))} data-v-3f292000><h2 data-v-3f292000>Навчання, яке працює! Відкрийте для себе найпопулярніші курси</h2><div class="date-scale" data-v-3f292000><div class="date-scale__line--black" style="${ssrRenderStyle(
        unref(isLargeScreen) ? { width: `${unref(dateScaleLineHeight)}%` } : { height: `${unref(dateScaleLineHeight)}%` }
      )}" data-v-3f292000></div><div class="wrapper" data-v-3f292000>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div><span class="text-item text-item--1" data-v-3f292000>Ціни раннього бронювання</span><span class="text-item text-item--2" data-v-3f292000>Подорожчання на 10%</span><span class="text-item text-item--3" data-v-3f292000>Подорожчання на 15%</span>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheScale.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-3f292000"]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "16",
    viewBox: "0 0 10 16",
    fill: "none"
  }, _attrs))}><path d="M1.32333 10.4346L4.6316 13.9128L7.93988 10.4346L9.26318 11.1302L4.6316 15.9998L2.47666e-05 11.1302L1.32333 10.4346Z" fill="white"></path><path d="M1.32333 5.21728L4.6316 8.69555L7.93988 5.21729L9.26318 5.91294L4.6316 10.7825L2.47666e-05 5.91294L1.32333 5.21728Z" fill="white" fill-opacity="0.5"></path><path d="M1.32333 -3.64895e-07L4.6316 3.47826L7.93988 -6.08158e-08L9.26318 0.695652L4.6316 5.56522L2.47666e-05 0.695652L1.32333 -3.64895e-07Z" fill="white" fill-opacity="0.1"></path></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HitSalesArrows.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2]]);
const TheTimer_vue_vue_type_style_index_0_scoped_6e9c0f48_lang = "";
const _sfc_main$5 = {
  __name: "TheTimer",
  __ssrInlineRender: true,
  setup(__props) {
    const endDate = (/* @__PURE__ */ new Date("2023-10-03 17:00:00")).getTime();
    const currentTime = ref((/* @__PURE__ */ new Date()).getTime());
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);
    ref(false);
    function getTimeLeft() {
      const timeDifference = endDate - currentTime.value;
      hours.value = Math.floor(
        timeDifference % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)
      );
      minutes.value = Math.floor(timeDifference % (1e3 * 60 * 60) / (1e3 * 60));
      seconds.value = Math.floor(timeDifference % (1e3 * 60) / 1e3);
    }
    watch(currentTime, () => {
      getTimeLeft();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$3;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheTimer.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const TheTimer = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-6e9c0f48"]]);
const SalesOption_vue_vue_type_style_index_0_scoped_d60e7f2f_lang = "";
const _sfc_main$4 = {
  __name: "SalesOption",
  __ssrInlineRender: true,
  setup(__props) {
    const isLargeScreen = useMediaQuery("(min-width: 1024px)");
    const options = ref([
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
            isIncluded: true
          },
          {
            id: 2,
            title: "Практичні курси автоматизації (робота в BAS, Medoc, Excel, ЕК",
            term: "",
            isNew: true,
            isIncluded: true
          },
          {
            id: 3,
            title: "Закриті клубні лекції з експертами",
            term: "(1 р./ міс.)",
            isNew: true,
            isIncluded: true
          },
          {
            id: 4,
            title: "Майстер-класи зі змін у законодавстві",
            term: "(4+ р./міс.)",
            isNew: false,
            isIncluded: true
          },
          {
            id: 5,
            title: "Безлімітні відповіді на запитання під час онлайн-навчання",
            term: "",
            isNew: false,
            isIncluded: true
          },
          {
            id: 6,
            title: "Тестові та практичні завдання зі зворотним зв'язком ",
            term: "",
            isNew: false,
            isIncluded: true
          },
          {
            id: 7,
            title: "Роздатковий матеріал (корисні файли, брошури, презентації)",
            term: "",
            isNew: false,
            isIncluded: true
          },
          {
            id: 8,
            title: "Клуб однодумців у Viber та підтримка куратора",
            term: "",
            isNew: false,
            isIncluded: true
          },
          {
            id: 9,
            title: "Сертифікати після проходження курсів",
            term: "",
            isNew: false,
            isIncluded: true
          },
          {
            id: 10,
            title: "Доступ до",
            term: "",
            isNew: false,
            important: "Бухгалтерської Відеоплатформи №1",
            isIncluded: false
          },
          {
            id: 11,
            title: "Відеокурси і вебінари",
            more: "(1100+ вже та 20+ щомісяця)",
            isNew: false,
            isIncluded: false
          },
          {
            id: 12,
            title: "Безлімітні швидкі консультації від експертів (сервіс ОК)",
            term: "",
            isNew: false,
            isIncluded: false
          },
          {
            id: 13,
            title: "Бланки та зразки документів",
            more: "(2000+ вже та 30+ щомісяця)",
            isNew: false,
            isIncluded: false
          },
          {
            id: 14,
            title: "Консультант з пошуку та підготовки документів",
            term: "(безлімітно, щодня)",
            isNew: false,
            isIncluded: false
          },
          {
            id: 15,
            title: "Калькулятори",
            term: "",
            isNew: false,
            isIncluded: false
          },
          {
            id: 16,
            title: "Довідники",
            term: "",
            isNew: false,
            isIncluded: false
          }
        ]
      },
      {
        id: 2,
        title: "преміум",
        description: "8 професійних курсів за ціною 2 +  Бухгалтерська Відеоплатформа №1",
        oldPrice: 1079,
        newPrice: 679,
        includes: [
          {
            id: 1,
            title: "Поглиблені професійні курси підвищення кваліфікації",
            term: "(8 курсів/рік)",
            isNew: false,
            isIncluded: true
          },
          {
            id: 2,
            title: "Практичні курси автоматизації (робота в BAS, Medoc, Excel, ЕК",
            term: "",
            isNew: true,
            isIncluded: true
          },
          {
            id: 3,
            title: "Закриті клубні лекції з експертами",
            term: "(1 р./ міс.)",
            isNew: true,
            isIncluded: true
          },
          {
            id: 4,
            title: "Майстер-класи зі змін у законодавстві",
            term: "(4+ р./міс.)",
            isNew: false,
            isIncluded: true
          },
          {
            id: 5,
            title: "Безлімітні відповіді на запитання під час онлайн-навчання",
            term: "",
            isNew: false,
            isIncluded: true
          },
          {
            id: 6,
            title: "Тестові та практичні завдання зі зворотним зв'язком ",
            term: "",
            isNew: false,
            isIncluded: true
          },
          {
            id: 7,
            title: "Роздатковий матеріал (корисні файли, брошури, презентації)",
            term: "",
            isNew: false,
            isIncluded: true
          },
          {
            id: 8,
            title: "Клуб однодумців у Viber та підтримка куратора",
            term: "",
            isNew: false,
            isIncluded: true
          },
          {
            id: 9,
            title: "Сертифікати після проходження курсів",
            term: "",
            isNew: false,
            isIncluded: true
          },
          {
            id: 10,
            title: "Доступ до",
            term: "",
            isNew: false,
            important: "Бухгалтерської Відеоплатформи №1",
            isIncluded: true
          },
          {
            id: 11,
            title: "Відеокурси і вебінари",
            more: "(1100+ вже та 20+ щомісяця)",
            isNew: false,
            isIncluded: true
          },
          {
            id: 12,
            title: "Безлімітні швидкі консультації від експертів (сервіс ОК)",
            term: "",
            isNew: false,
            isIncluded: true
          },
          {
            id: 13,
            title: "Бланки та зразки документів",
            more: "(2000+ вже та 30+ щомісяця)",
            isNew: false,
            isIncluded: true
          },
          {
            id: 14,
            title: "Консультант з пошуку та підготовки документів",
            term: "(безлімітно, щодня)",
            isNew: false,
            isIncluded: true
          },
          {
            id: 15,
            title: "Калькулятори",
            term: "",
            isNew: false,
            isIncluded: true
          },
          {
            id: 16,
            title: "Довідники",
            term: "",
            isNew: false,
            isIncluded: true
          }
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheTimer = TheTimer;
      const _component_BaseButton = resolveComponent("BaseButton");
      const _component_UiBaseButton = BaseButton;
      _push(`<!--[--><div class="package" data-v-d60e7f2f>`);
      if (unref(isLargeScreen)) {
        _push(`<section class="timer" data-v-d60e7f2f>`);
        _push(ssrRenderComponent(_component_TheTimer, null, null, _parent));
        _push(`<p data-v-d60e7f2f>(для діючих передплатників додаткова знижка 10%)</p></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(options), (option) => {
        _push(`<div class="${ssrRenderClass(["option", `option--${option.id}`])}" data-v-d60e7f2f>`);
        if (option.id === 1 && unref(isLargeScreen)) {
          _push(`<div class="hit-sales" data-v-d60e7f2f><svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none" data-v-d60e7f2f><path d="M1.58652 10.4346L4.89479 13.9128L8.20306 10.4346L9.52637 11.1302L4.89479 15.9998L0.263208 11.1302L1.58652 10.4346Z" fill="#232323" data-v-d60e7f2f></path><path d="M1.58652 5.21728L4.89479 8.69555L8.20306 5.21729L9.52637 5.91294L4.89479 10.7825L0.263208 5.91294L1.58652 5.21728Z" fill="#232323" fill-opacity="0.5" data-v-d60e7f2f></path><path opacity="0.1" d="M1.58652 -3.64895e-07L4.89479 3.47826L8.20306 -6.08158e-08L9.52637 0.695652L4.89479 5.56522L0.263208 0.695652L1.58652 -3.64895e-07Z" fill="#232323" data-v-d60e7f2f></path></svg><p class="hit-sales__text" data-v-d60e7f2f>ХІТ ПРОДАЖУ</p><svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none" data-v-d60e7f2f><path d="M1.58652 10.4346L4.89479 13.9128L8.20306 10.4346L9.52637 11.1302L4.89479 15.9998L0.263208 11.1302L1.58652 10.4346Z" fill="#232323" data-v-d60e7f2f></path><path d="M1.58652 5.21728L4.89479 8.69555L8.20306 5.21729L9.52637 5.91294L4.89479 10.7825L0.263208 5.91294L1.58652 5.21728Z" fill="#232323" fill-opacity="0.5" data-v-d60e7f2f></path><path opacity="0.1" d="M1.58652 -3.64895e-07L4.89479 3.47826L8.20306 -6.08158e-08L9.52637 0.695652L4.89479 5.56522L0.263208 0.695652L1.58652 -3.64895e-07Z" fill="#232323" data-v-d60e7f2f></path></svg></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="title" data-v-d60e7f2f>${ssrInterpolate(option.title)} <div class="discount" data-v-d60e7f2f>-75%</div></div><p class="${ssrRenderClass(["description", `description--${option.id}`])}" data-v-d60e7f2f>${ssrInterpolate(option.description)}</p><div class="price" data-v-d60e7f2f><span class="price__old-price" data-v-d60e7f2f>${ssrInterpolate(option.oldPrice)} грн/міс </span><span class="price__new-price" data-v-d60e7f2f>${ssrInterpolate(option.newPrice)} грн/міс </span></div><div class="button" data-v-d60e7f2f>`);
        _push(ssrRenderComponent(_component_BaseButton, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Оплатити карткою`);
            } else {
              return [
                createTextVNode("Оплатити карткою")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><p class="part-payment" data-v-d60e7f2f>Оплатити частинами</p><!--[-->`);
        ssrRenderList(option.includes, (item) => {
          _push(`<div class="advantages" data-v-d60e7f2f>`);
          if (item.isIncluded) {
            _push(`<div class="advantages__container" data-v-d60e7f2f>`);
            if (!unref(isLargeScreen)) {
              _push(`<div style="${ssrRenderStyle({ "display": "flex" })}" data-v-d60e7f2f><div class="check" data-v-d60e7f2f><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" data-v-d60e7f2f><path d="M10.5 16.4L6.5 12.4L7.9 11L10.5 13.6L17.1 7L18.5 8.4L10.5 16.4Z" fill="#232323" data-v-d60e7f2f></path></svg></div><p class="content" data-v-d60e7f2f>`);
              if (item.isNew) {
                _push(`<span class="content__new" data-v-d60e7f2f>NEW</span>`);
              } else {
                _push(`<!---->`);
              }
              _push(` ${ssrInterpolate(item.title)} <span class="content__term" data-v-d60e7f2f>${ssrInterpolate(item.term)}</span><span class="content__important" data-v-d60e7f2f>${ssrInterpolate(item.important)}</span><span class="content__more content__term" data-v-d60e7f2f><br data-v-d60e7f2f> ${ssrInterpolate(item.more)}</span></p></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]-->`);
        if (!unref(isLargeScreen)) {
          _push(`<div class="bottom-discount" data-v-d60e7f2f><div class="bottom-discount__price-wrapper" data-v-d60e7f2f><div class="price" data-v-d60e7f2f><span class="price__old-price" data-v-d60e7f2f>${ssrInterpolate(option.oldPrice)} грн/міс </span><span class="price__new-price" data-v-d60e7f2f>${ssrInterpolate(option.newPrice)} грн/міс </span></div><div class="discount" data-v-d60e7f2f>-75%</div></div>`);
          _push(ssrRenderComponent(_component_UiBaseButton, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Завантажити рахунок`);
              } else {
                return [
                  createTextVNode("Завантажити рахунок")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      if (unref(isLargeScreen)) {
        _push(`<div class="benefits" data-v-d60e7f2f><!--[-->`);
        ssrRenderList(unref(options)[0].includes, (item) => {
          _push(`<div class="benefits__items" data-v-d60e7f2f><p class="content" data-v-d60e7f2f>`);
          if (item.isNew) {
            _push(`<span class="content__new" data-v-d60e7f2f>NEW</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(` ${ssrInterpolate(item.title)} <span class="content__term" data-v-d60e7f2f>${ssrInterpolate(item.term)}</span><span class="content__important" data-v-d60e7f2f>${ssrInterpolate(item.important)}</span><span class="content__more content__term" data-v-d60e7f2f><br data-v-d60e7f2f>${ssrInterpolate(item.more)}</span></p>`);
          if (item.isIncluded) {
            _push(`<svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none" data-v-d60e7f2f><path d="M14.0648 21.8668L8.73145 16.5335L10.5981 14.6668L14.0648 18.1335L22.8648 9.3335L24.7314 11.2002L14.0648 21.8668Z" fill="#232323" data-v-d60e7f2f></path></svg>`);
          } else {
            _push(`<svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none" data-v-d60e7f2f><path d="M24.3378 10.2736L22.4578 8.39355L16.7312 14.1202L11.0045 8.39355L9.12451 10.2736L14.8512 16.0002L9.12451 21.7269L11.0045 23.6069L16.7312 17.8802L22.4578 23.6069L24.3378 21.7269L18.6112 16.0002L24.3378 10.2736Z" fill="#232323" data-v-d60e7f2f></path></svg>`);
          }
          _push(`<svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none" data-v-d60e7f2f><path d="M14.0648 21.8668L8.73145 16.5335L10.5981 14.6668L14.0648 18.1335L22.8648 9.3335L24.7314 11.2002L14.0648 21.8668Z" fill="#232323" data-v-d60e7f2f></path></svg></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isLargeScreen)) {
        _push(`<section class="load-account" data-v-d60e7f2f><!--[-->`);
        ssrRenderList(unref(options), (option) => {
          _push(`<div style="${ssrRenderStyle({ "z-index": "1" })}" data-v-d60e7f2f>`);
          if (unref(isLargeScreen)) {
            _push(`<div class="bottom-discount" data-v-d60e7f2f><div class="bottom-discount__price-wrapper" data-v-d60e7f2f><div class="price" data-v-d60e7f2f><span class="price__old-price" data-v-d60e7f2f>${ssrInterpolate(option.oldPrice)} грн/міс </span><span class="price__new-price" data-v-d60e7f2f>${ssrInterpolate(option.newPrice)} грн/міс </span></div><div class="discount" data-v-d60e7f2f>-75%</div></div>`);
            _push(ssrRenderComponent(_component_UiBaseButton, null, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`Завантажити рахунок`);
                } else {
                  return [
                    createTextVNode("Завантажити рахунок")
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="option-info" data-v-d60e7f2f> Оплачуйте пакети <span data-v-d60e7f2f>частинами без комісії!</span><br data-v-d60e7f2f> Натискайте на кнопку <span data-v-d60e7f2f>Оплатити карткою</span> та оформлюйте розстрочку<br data-v-d60e7f2f> через PrivatBank або Monobank </p><!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SalesOption.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-d60e7f2f"]]);
const TheSubscription_vue_vue_type_style_index_0_scoped_345162bc_lang = "";
const _sfc_main$3 = {
  __name: "TheSubscription",
  __ssrInlineRender: true,
  setup(__props) {
    const isLargeScreen = useMediaQuery("(min-width: 1024px)");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HitSalesArrows = __nuxt_component_0$1;
      const _component_SalesOption = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "subscription container" }, _attrs))} data-v-345162bc><h2 data-v-345162bc> ПЕРЕДПЛАТА НА <br data-v-345162bc> Вищу Бухгалтерську Онлайн-Академію </h2><p class="text" data-v-345162bc>Оберіть свій тарифний пакет:</p>`);
      if (!unref(isLargeScreen)) {
        _push(ssrRenderComponent(TheTimer, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!unref(isLargeScreen)) {
        _push(`<div class="hit-sales" data-v-345162bc>`);
        _push(ssrRenderComponent(_component_HitSalesArrows, null, null, _parent));
        _push(`<p class="hit-sales__text" data-v-345162bc>ХІТ ПРОДАЖУ</p>`);
        _push(ssrRenderComponent(_component_HitSalesArrows, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_SalesOption, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheSubscription.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-345162bc"]]);
const AcademyBenefits_vue_vue_type_style_index_0_scoped_b6e61c00_lang = "";
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "benefits" }, _attrs))} data-v-b6e61c00><h3 data-v-b6e61c00>З передплатою Академії ви отримаєте:</h3><section class="benefits__items" data-v-b6e61c00><div data-v-b6e61c00><div class="benefits__item-title" data-v-b6e61c00>8+</div><p class="benefits__item-content" data-v-b6e61c00>професійних курсів</p></div><div data-v-b6e61c00><div class="benefits__item-title" data-v-b6e61c00>12</div><p class="benefits__item-content" data-v-b6e61c00>закритих клубних лекцій</p></div><div data-v-b6e61c00><div class="benefits__item-title" data-v-b6e61c00>48</div><p class="benefits__item-content" data-v-b6e61c00>нових вебінарів та тренінгів</p></div><div data-v-b6e61c00><div data-v-b6e61c00><svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none" data-v-b6e61c00><path d="M13.619 38.6663C7.0312 38.6663 4.83203 33.833 4.83203 28.9997C4.83203 24.1663 7.0312 19.333 13.619 19.333C22.4084 19.333 35.5889 38.6663 44.3784 38.6663C50.9662 38.6663 53.1654 33.833 53.1654 28.9997C53.1654 24.1663 50.9662 19.333 44.3784 19.333C35.5889 19.333 22.4084 38.6663 13.619 38.6663V38.6663Z" stroke="#0066CC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-v-b6e61c00></path></svg></div><p class="benefits__item-content" data-v-b6e61c00> Безлімітні відповіді на запитання протягом навчання </p></div></section><p class="test-task-text" data-v-b6e61c00>Тестові та практичні</p><p class="test-task-desc" data-v-b6e61c00>завдання зі зворотним зв&#39;язком</p></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AcademyBenefits.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-b6e61c00"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TheForm",
  __ssrInlineRender: true,
  setup(__props) {
    const isError = ref(false);
    const isSend = ref(false);
    const { errors, handleSubmit, defineInputBinds } = useForm({
      validationSchema: yup.object({
        name: yup.string().min(6, "Ім'я має бути не менше 6 символів").required("Обов'язкове поле"),
        phone: yup.string().matches(/^\d+$/, "Телефон має містити лише цифри").length(10, "Телефон має складатися з 10 цифр").required("Обов'язкове поле"),
        email: yup.string().email("E-mail має бути валідним").required("Обов'язкове поле")
      })
    });
    const name = defineInputBinds("name");
    const phone = defineInputBinds("phone");
    const email = defineInputBinds("email");
    handleSubmit(async () => {
      isError.value = false;
      isSend.value = false;
      const formData = {
        email: email.value.value,
        name: name.value.value,
        phone: phone.value.value
      };
      try {
        await fetch(`https://7eminar.ua/api/clients/campaign/test`, {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify(formData)
        });
        isSend.value = true;
      } catch (error) {
        isError.value = true;
      } finally {
        setTimeout(() => {
          isError.value = false;
          isSend.value = false;
        }, 1e4);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AcademyBenefits = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form" }, _attrs))} data-v-73ed4680><div class="container" data-v-73ed4680><section class="form__container" data-v-73ed4680><form data-v-73ed4680><h3 data-v-73ed4680>Залиште заявку, і ми підберемо для вас умови зі знижкою</h3><div class="field" data-v-73ed4680><span class="field__label" data-v-73ed4680>Ваше ім&#39;я</span><input${ssrRenderAttrs(mergeProps(unref(name), { placeholder: "Ваше ім'я" }))} data-v-73ed4680><div class="error" data-v-73ed4680>${ssrInterpolate(unref(errors).name)}</div></div><div class="field" data-v-73ed4680><span class="field__label" data-v-73ed4680>Номер телефону</span><input${ssrRenderAttrs(mergeProps(unref(phone), {
        type: "tel",
        placeholder: "Введіть Ваш номер телефону"
      }))} data-v-73ed4680><div class="error" data-v-73ed4680>${ssrInterpolate(unref(errors).phone)}</div></div><div class="field" data-v-73ed4680><span class="field__label" data-v-73ed4680>Ваш E-mail</span><input${ssrRenderAttrs(mergeProps(unref(email), {
        type: "email",
        placeholder: "Введіть Ваш e-mail"
      }))} data-v-73ed4680><div class="error" data-v-73ed4680>${ssrInterpolate(unref(errors).email)}</div></div><div class="button-wrapper" data-v-73ed4680>`);
      _push(ssrRenderComponent(BaseButton, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Зареєструватись`);
          } else {
            return [
              createTextVNode("Зареєструватись")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(isSend)) {
        _push(`<div class="message message__success" data-v-73ed4680><p data-v-73ed4680>Заявка успішно відправлена.</p><div data-v-73ed4680>✖</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isError)) {
        _push(`<div class="message message__error" data-v-73ed4680><p data-v-73ed4680>Щось пішло не так. Спробуйте пізніже.</p><div data-v-73ed4680>✖</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form>`);
      _push(ssrRenderComponent(_component_AcademyBenefits, null, null, _parent));
      _push(`</section></div></div>`);
    };
  }
});
const TheForm_vue_vue_type_style_index_0_scoped_73ed4680_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-73ed4680"]]);
const index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheTraining = __nuxt_component_0$2;
  const _component_TheScale = __nuxt_component_1$1;
  const _component_TheSubscription = __nuxt_component_2;
  const _component_TheForm = __nuxt_component_3;
  _push(`<main${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_TheTraining, null, null, _parent));
  _push(ssrRenderComponent(_component_TheScale, null, null, _parent));
  _push(ssrRenderComponent(_component_TheSubscription, null, null, _parent));
  _push(ssrRenderComponent(_component_TheForm, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-a77bb365.js.map
