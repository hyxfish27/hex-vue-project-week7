<template>
  <Loading :is-ready="isReady"></Loading>
  <div class="container">
    <UserProduct
      :id="productId"
      ref="userProductModal"
      @add-to-cart="addToCart"
    ></UserProduct>
    <h3 class="h3 text-center mt-4">產品列表</h3>
    <table class="table align-middle">
      <thead>
        <tr>
          <th>圖片</th>
          <th>商品名稱</th>
          <th>價格</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td style="width: 200px">
            <div
              :style="{ backgroundImage: `url(${product.imageUrl})` }"
              style="
                  height: 100px;
                  background-size: cover;
                  background-position: center"
            ></div>
          </td>
          <td>
            {{ product.title }}
          </td>
          <td>
            <div class="h5" v-if="product.price === product.origin_price">
              {{ product.price }} 元
            </div>
            <div v-else>
              <del class="h6">原價 {{ product.origin_price }} 元</del>
              <div class="h5">現在只要 {{ product.price }} 元</div>
            </div>
          </td>
          <td>
            <div class="btn-group btn-group-sm">
              <button
                type="button"
                class="btn btn-outline-secondary"
                @click="openProductModal(product.id)"
                :disabled="isLoading === product.id"
              >
                <!-- <i class="fas fa-spinner fa-pulse"></i> -->
                查看更多
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                @click="addToCart(product.id)"
                :disabled="isLoading === product.id"
              >
                <i
                  class="fas fa-spinner fa-pulse"
                  v-show="isLoading === product.id"
                ></i>
                加到購物車
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Pagination -->
    <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
  </div>
</template>

<script>
import UserProduct from '@/components/UserProduct.vue'
import Pagination from '@/components/Pagination.vue'
import Loading from '@/components/Loading.vue'

export default {
  data () {
    return {
      products: [],
      pagination: {},
      productId: '',
      isLoading: '',
      isReady: false
    }
  },
  components: {
    UserProduct,
    Pagination,
    Loading
  },
  inject: ['emitter'],
  methods: {
    getProducts (page = 1) {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`
      this.$http
        .get(url)
        .then(res => {
          this.products = res.data.products
          this.pagination = res.data.pagination
          this.isReady = true
        })
        .catch(err => {
          this.$httpMessageState(err.response, '錯誤訊息')
        })
    },
    addToCart (id, qty = 1) {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = id
      const cart = {
        product_id: id,
        qty
      }
      this.$http
        .post(url, { data: cart })
        .then(res => {
          this.$httpMessageState(res, '加入購物車')
          // alert(res.data.message)
          this.isLoading = ''
          this.isReady = true
        })
        .catch(err => {
          this.$httpMessageState(err.response, '加入購物車')
          this.isReady = true
          // alert(err.data.message)
        })
    },
    openProductModal (id) {
      // 外層資料 -> 內層
      this.productId = id
      // 調用 ProductModal 元件底下的 openModal() 方法
      this.$refs.userProductModal.openModal()
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
