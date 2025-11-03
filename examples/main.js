import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
// Note: For old versions of element-plus, the css path is different.
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App);

app.use(ElementPlus);
app.mount('#app');