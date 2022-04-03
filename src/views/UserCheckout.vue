<template>
  <Loading :is-ready="isReady"></Loading>
  <div class="my-5 row justify-content-center">
    <form class="col-md-6" @submit.prevent="payOrder">
      <table class="table align-middle">
        <thead>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
        </thead>
        <tbody>
          <tr v-for="order in order.products" :key="order.id">
            <td>{{ order.product.title }}</td>
            <td>{{ order.qty }}/{{ order.product.unit }}</td>
            <td class="text-end">{{ $filters.currency(order.final_total) }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" class="text-end">總計</td>
            <td class="text-end">{{ $filters.currency(order.total) }}</td>
          </tr>
        </tfoot>
      </table>

      <table class="table">
        <tbody>
          <tr>
            <th width="100">Email</th>
            <td>{{ order.user.email }}</td>
          </tr>
          <tr>
            <th>姓名</th>
            <td>{{ order.user.name }}</td>
          </tr>
          <tr>
            <th>收件人電話</th>
            <td>{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th>收件人地址</th>
            <td>{{ order.user.address }}</td>
          </tr>
          <tr>
            <th>付款狀態</th>
            <td>
              <span v-if="!order.is_paid">尚未付款</span>
              <span v-else class="text-success">付款完成</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-end" v-if="order.is_paid === false">
        <button class="btn btn-danger">確認付款去</button>
      </div>
    </form>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue'

export default {
  data () {
    return {
      order: {
        user: {}
      },
      orderId: '',
      isReady: false
    }
  },
  components: {
    Loading
  },
  methods: {
    getOrder () {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.$http
        .get(url)
        .then(res => {
          this.order = res.data.order
          this.isReady = true
        })
        .catch(err => {
          this.isReady = true
          this.$httpMessageState(err.res, '錯誤訊息')
        })
    },
    payOrder () {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.$http
        .post(url)
        .then(() => {
          this.isReady = true
          this.getOrder()
        })
        .catch(err => {
          this.isReady = true
          this.$httpMessageState(err.response, '錯誤訊息')
        })
    }
  },
  mounted () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>
