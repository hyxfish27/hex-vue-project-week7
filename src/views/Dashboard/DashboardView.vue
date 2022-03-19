<template>
  <DashboardNav></DashboardNav>
  <!-- <h3 class="h3 text-center mt-4">後台首頁</h3> -->
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-secondary">Secondary</button>
  <button type="button" class="btn btn-success">Success</button>
  <button type="button" class="btn btn-danger">Danger</button>
  <button type="button" class="btn btn-warning">Warning</button>
  <button type="button" class="btn btn-info">Info</button>
  <button type="button" class="btn btn-light">Light</button>
  <button type="button" class="btn btn-dark">Dark</button>

  <button type="button" class="btn btn-link">Link</button>
  <!-- 有權限才能顯示後台頁面 -->
  <router-view v-if="adminStatus"></router-view>
</template>

<script>
import DashboardNav from '@/components/DashboardNav.vue'

export default {
  components: {
    DashboardNav
  },
  data () {
    return {
      adminStatus: false
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
