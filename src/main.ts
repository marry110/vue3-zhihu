import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button, Swipe, SwipeItem, NavBar, Icon, ShareSheet } from 'vant'
import 'vant/lib/index.css'
import './api/mock'
const app = createApp(App)
app.use(Button)
app.use(Swipe)
app.use(SwipeItem)
app.use(NavBar)
app.use(Icon)
app.use(ShareSheet)
app.use(store).use(router).mount('#app')
