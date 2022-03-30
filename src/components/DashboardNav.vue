<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/admin">後台首頁</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-link" to="/admin/products">
              產品列表
            </router-link>
            <router-link class="nav-link" to="/admin/orders">
              訂單管理
            </router-link>
          </div>
          <div class="navbar-nav ms-auto">
            <router-link class="nav-link" to="/user/products">
              前台商品
            </router-link>
            <router-link class="nav-link" to="/user/cart">
              <i class="bi bi-bag-fill h4"></i>
            </router-link>
            <button
              class="btn btn-danger nav-link"
              type="button"
              @click="logout"
            >
              登出
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      const url = `${process.env.VUE_APP_API}/logout`
      this.$http.post(url).then(res => {
        if (res.data.success) {
          document.cookie = 'myToken=;expires=;'
          alert('已成功登出')
          this.$router.replace('/')
        }
      })
    }
  }
}
</script>
