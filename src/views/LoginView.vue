<template>
  <div
    class="container vh-100
  d-flex flex-column justify-content-center"
  >
    <h3 class="h3 text-center mb-4">請先登入</h3>
    <div class="row justify-content-center">
      <div class="col-6">
        <form id="form" class="form-signin">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="username"
              v-model="user.username"
              placeholder="name@example.com"
              required
              autofocus
            />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="user.password"
              placeholder="Password"
              required
            />
            <label for="password">Password</label>
          </div>
          <button
            class="btn btn-lg btn-primary w-100 mt-3"
            @click="signIn"
            type="button"
          >
            登入
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      const url = `${process.env.VUE_APP_API}/admin/signin`
      this.$http
        .post(url, this.user)
        .then(res => {
          const { token, expired } = res.data
          document.cookie = `myToken = ${token}; expires = ${new Date(expired)}`
          this.$router.push('/admin/products')
        })
        .catch(err => {
          console.dir(err.response.data.message)
          //   alert(err.response.data.message)
        })
    }
  }
}
</script>
