<template>
  <TopNavbar></TopNavbar>
  <!-- <h3 class="h3 text-center mt-4">後台首頁</h3> -->
  <!-- 有權限才能顯示後台頁面 -->
  <router-view v-if="adminStatus"></router-view>
</template>

<script>
import TopNavbar from '@/components/TopNavbar.vue'

export default {
  components: {
    TopNavbar
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
