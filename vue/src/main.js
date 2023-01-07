import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import "./assets/tailwind.css";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia).use(router).mount("#app");
