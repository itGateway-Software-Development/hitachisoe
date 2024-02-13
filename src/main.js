import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/style.css";
import "@/assets/css/panel.css";
import AOS from "aos";
import "aos/dist/aos.css";
import VueImageZoomer from "vue-image-zoomer";
import "vue-image-zoomer/dist/style.css";

AOS.init({
  delay: 50,
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  mirror: true,
});

createApp(App).use(store).use(VueImageZoomer).use(router).mount("#app");
