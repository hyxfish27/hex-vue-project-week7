<template>
  <DashboardNav></DashboardNav>

  <div class="container-fluid mt-3 position-relative">
    <ToastMessage></ToastMessage>
    <router-view v-if="adminStatus" />
  </div>
  <!-- 有權限才能顯示後台頁面 -->
</template>

<script>
import DashboardNav from '@/components/DashboardNav.vue'
import emitter from '@/methods/eventBus'
import ToastMessage from '@/components/ToastMessage.vue'

export default {
  data () {
    return {
      adminStatus: false
    }
  },
  components: {
    DashboardNav,
    ToastMessage
  },
  provide () {
    return {
      emitter
    }
  },
  methods: {
    checkAdmin () {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      // token 存在，存取登入權限
      if (token) {
        this.$http.defaults.headers.common.Authorization = `${token}`
        const url = `${process.env.VUE_APP_API}/api/user/check`
        this.$http
          .post(url)
          .then(() => {
            this.adminStatus = true
          })
          .catch(err => {
            alert(err.data.message)
            this.$router.replace('/login')
          })
      } else {
        alert('請重新登入 > <')
        this.$router.push('/login')
      }
    }
    // 登出寫在 Navbar
  },
  mounted () {
    this.checkAdmin()
  }
}
</script>
