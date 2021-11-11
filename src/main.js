import { createApp } from "vue";
import App from "./App.vue";

// Vue-Router
import router from "./router";

// base.css
import "assets/css/base.css";

createApp(App).use(router).mount("#app");
