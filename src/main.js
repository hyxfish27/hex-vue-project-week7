// 用來載入需要用在整個專案的套件
// 1. bootstrap 2. axios 3. VueAxios
import { createApp } from 'vue'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
