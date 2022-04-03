// 用來載入需要用在整個專案的套件
// 1. bootstrap 2. axios 3. VueAxios
import { createApp } from 'vue'
import 'bootstrap'
import {
  Form, Field, ErrorMessage, defineRule, configure
} from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import $httpMessageState from '@/methods/pushMessageState'
import { timeConvert, currency } from './methods/filters'

import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// 設定預設語系
setLocale('zh_TW')

const app = createApp(App)

app.config.globalProperties.$httpMessageState = $httpMessageState
app.config.globalProperties.$filters = {
  timeConvert,
  currency
}

app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
