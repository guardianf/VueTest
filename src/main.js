import Vue from 'vue';
import {
  Container,
  Card,
  Main,
  Header,
  Aside,
  Footer,
  Checkbox,
  Button,
  Form,
  FormItem,
  Icon,
  Row,
  Col,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Message,
  Submenu,
  Table,
  TableColumn,
  Menu,
  MenuItem,
  MenuItemGroup,
} from 'element-ui';
import * as charts from 'echarts';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/styles/main.sass';

require('../mock');

Vue.config.productionTip = false;

// Vue.use(ElementUI);
Vue.component(Container.name, Container);
Vue.component(Main.name, Main);
Vue.component(Header.name, Header);
Vue.component(Aside.name, Aside);
Vue.component(Footer.name, Footer);
Vue.component(Card.name, Card);
Vue.component(Checkbox.name, Checkbox);
Vue.component(Button.name, Button);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Icon.name, Icon);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Dropdown.name, Dropdown);
Vue.component(DropdownMenu.name, DropdownMenu);
Vue.component(DropdownItem.name, DropdownItem);
Vue.component(Submenu.name, Submenu);
Vue.component(Menu.name, Menu);
Vue.component(MenuItem.name, MenuItem);
Vue.component(MenuItemGroup.name, MenuItemGroup);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.prototype.$message = Message;
Vue.prototype.$axios = axios;
Vue.prototype.$charts = charts;

router.beforeEach((to, from, next) => {
  if (to.meta.needAutho) {
    axios.get('autho').then((res) => {
      const auth = res.data.ret;
      if (auth) {
        next();
      } else {
        Message({
          message: '你没有权限',
          type: 'error',
        });
      }
    });
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
