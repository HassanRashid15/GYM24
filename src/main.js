import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

// Add the specific icons you need
library.add(faBars, faTimes);

// Create the app instance
const app = createApp(App);

// Register the component globally
app.component("font-awesome-icon", FontAwesomeIcon);

// Use router and mount
app.use(router).mount("#app");
