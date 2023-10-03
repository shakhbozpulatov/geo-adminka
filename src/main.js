import { createApp } from "vue";
import router from "./router/index";
import definePlugins from "./plugins";
import VueAxios from "vue-axios";
import axiosInstance from "./axios.js";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
app.use(VueAxios, axiosInstance);
app.use(router);
definePlugins(app);
app.mount("#app");
