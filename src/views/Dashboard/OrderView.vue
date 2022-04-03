<template>
  <Loading :is-ready="isReady"></Loading>
  <div class="container">
    <h3 class="h3 text-center my-4">訂單管理</h3>
    <table class="table align-middle bg-white rounded-3">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td style="width: 200px">
            {{ $filters.timeConvert(order.create_at) }}
          </td>
          <td>
            {{ order.user.email }}
          </td>
          <td>
            <tr v-for="product in order.products" :key="order.id + product.id">
              {{
                product.product.title
              }}
              {{
                product.qty
              }}
              /
              {{
                product.product.unit
              }}
            </tr>
          </td>
          <td>
            {{ $filters.currency(order.total) }}
          </td>
          <td>
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :id="`enableSwitch${order.id}`"
                    v-model="order.is_paid"
                    :true-value="true"
                    :false-value="false"
                    @change="updateEnableStatus(order)"
                  />
                  <label
                    class="form-check-label"
                    :for="`enableSwitch${order.id}}`"
                  >
                  </label>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <span class="text-primary" v-if="order.is_paid">已付款</span>
                <span class="text-light" v-else>未付款</span>
              </div>
            </div>
          </td>
          <td>
            <div class="btn-group btn-group-sm">
              <button
                type="button"
                class="btn btn-outline-primary"
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
      @enable-status="updateEnableStatus"
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
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data.message,
            emoji: `${process.env.VUE_APP_MESSAGE_FAIL}`
          })
        })
    },
    removeOrder (id) {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${id}`
      this.$http
        .delete(url)
        .then(res => {
          this.emitter.emit('push-message', {
            style: 'success',
            title: res.data.message,
            emoji: `${process.env.VUE_APP_MESSAGE_SUCCESS}`
          })
          this.getOrders()
          this.isReady = true
        })
        .catch(err => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data.message,
            emoji: `${process.env.VUE_APP_MESSAGE_FAIL}`
          })
          this.isReady = true
        })
      this.$refs.delModal.hideModal()
    },
    updateEnableStatus (order) {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${order.id}`
      const paid = {
        is_paid: order.is_paid
      }
      this.$http
        .put(url, { data: paid })
        .then(res => {
          this.emitter.emit('push-message', {
            style: 'success',
            title: res.data.message,
            emoji: `${process.env.VUE_APP_MESSAGE_SUCCESS}`
          })
          this.getOrders(this.pagination.current_page)
          this.isReady = true
        })
        .catch(err => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data.message,
            emoji: `${process.env.VUE_APP_MESSAGE_FAIL}`
          })
          this.isReady = true
        })
      this.$refs.adminOrder.hideModal()
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
