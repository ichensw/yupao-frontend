import {createApp} from 'vue'
import App from './App.vue'
// 2. 引入组件样式
import 'vant/lib/index.css';

import * as VueRouter from 'vue-router'
import routes from "./config/router";


const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})


const app = createApp(App)
app.use(router)

app.mount('#app')
