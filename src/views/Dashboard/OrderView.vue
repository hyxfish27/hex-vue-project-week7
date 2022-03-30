<template>
  <Loading :is-ready="isReady"></Loading>
  <div class="container">
    <h3 class="h3 text-center mt-4">訂單管理</h3>
    <table class="table align-middle">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td style="width: 200px">
            {{ order.create_at }}
          </td>
          <td>
            {{ order.user.email }}
          </td>
          <td>
            <div v-for="product in order.products" :key="order.id + product.id">
              {{ product.product.title }} 數量 {{ product.qty }}
              {{ product.product.unit }}
            </div>
          </td>
          <td>
            {{ parseInt(order.total) }}
          </td>
          <td>
            {{ order.is_paid }}
          </td>
          <td>
            <div class="btn-group btn-group-sm">
              <button
                type="button"
                class="btn btn-outline-secondary"
                @click="openModal(order)"
                :disabled="isLoading === order.id"
              >
                <!-- <i class="fas fa-spinner fa-pulse"></i> -->
                檢視
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                @click="openDelModal(order)"
                :disabled="isLoading === order.id"
              >
                <i
                  class="fas fa-spinner fa-pulse"
                  v-show="isLoading === order.id"
                ></i>
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Pagination -->
    <Pagination :pages="pagination" @emit-pages="getOrders"></Pagination>
    <!-- Order Modal -->
    <OrderModal
      :temp-order="tempOrder"
      @get-orders="getOrders"
      ref="adminOrder"
    ></OrderModal>
    <!-- Delete Order Modal -->
    <DelModal
      :del-item="tempOrder"
      @remove-item="removeOrder"
      ref="delModal"
    ></DelModal>
  </div>
</template>

<script>
import OrderModal from '@/components/OrderModal.vue'
import DelModal from '@/components/DelModal.vue'
import Pagination from '@/components/Pagination.vue'
import Loading from '@/components/Loading.vue'

export default {
  data () {
    return {
      orders: [],
      tempOrder: {},
      pagination: {},
      isReady: false,
      isLoading: '',
      OrderModal: ''
    }
  },
  inject: ['emitter'],
  components: {
    OrderModal,
    DelModal,
    Pagination,
    Loading
  },
  methods: {
    getOrders (page = 1) {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.$http
        .get(url)
        .then(res => {
          this.orders = res.data.orders
          this.pagination = res.data.pagination
          this.isReady = true
        })
        .catch(err => {
          this.$httpMessageState(err.response, '錯誤訊息')
          alert(err.data.message)
        })
    },
    removeOrder (id) {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${id}`
      this.$http
        .delete(url)
        .then(res => {
          alert(res.data.message)
          this.getOrders()
          this.isReady = true
        })
        .catch(err => {
          alert(err.data.message)
        })
      this.$refs.delModal.hideModal()
    },
    openModal (order) {
      this.tempOrder = { ...order }
      this.$refs.adminOrder.openModal()
    },
    openDelModal (order) {
      this.tempOrder = { ...order }
      // modalMixin 下的 openModal() 方法
      this.$refs.delModal.openModal()
    }
  },
  mounted () {
    this.getOrders()
  }
}
</script>
