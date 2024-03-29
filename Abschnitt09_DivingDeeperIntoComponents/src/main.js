import { createApp } from "vue";

import App from "./App.vue";
// import TheHeader from "./components/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
import BaseBadge from "./components/UI/BaseBadge.vue";
import BaseCard from "./components/UI/BaseCard.vue";

const app = createApp(App);
// bad way to register components globally cause its use a lot of memory
// app.component("the-header", TheHeader);
// app.component("user-info", UserInfo);
// app.component("badge-list", BadgeList);
app.component("base-badge", BaseBadge);
app.component("base-card", BaseCard);

app.mount("#app");
