import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button,Input,Table,message,Popconfirm} from "ant-design-vue";

require('./mock/mock.js')

Vue.component("Button", Button);
Vue.component("Search", Input);
Vue.component("a-table", Table);

Vue.component("a-popconfirm", Popconfirm);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
