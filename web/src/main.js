import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/reset.scss";
import "./assets/iconfont/iconfont.css";
import http from "./request/http";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import card from "components/common/card/Card";
import cardList from "components/common/card/CardList";
Vue.component("m-card", card);
Vue.component("m-card-list", cardList);
import VueLazyload from "vue-lazyload"; //引入这个懒加载插件

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: "http://img.soogif.com/3KuNGUpjLJ991JL9wpJegJ4te8YcMK3I.gif",
  attempt: 1,
});
Vue.config.productionTip = false;
Vue.prototype.$http = http;
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
