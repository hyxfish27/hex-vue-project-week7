<template>
  <Loading :is-ready="isReady"></Loading>
  <div class="container">
    <h3 class="h3 text-center mt-4">產品列表</h3>
    <!-- Add Product Button -->
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="openModal('new')">
        建立新的產品
      </button>
    </div>
    <!-- Product list -->
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">
            分類
          </th>
          <th>產品名稱</th>
          <th width="120">
            原價
          </th>
          <th width="120">
            售價
          </th>
          <th width="100">
            是否啟用
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.category }}</td>
          <td>{{ product.title }}</td>
          <td class="text-end">{{ product.origin_price }}</td>
          <td class="text-end">{{ product.price }}</td>
          <!-- @click="product.is_enabled = !product.is_enabled" -->
          <td>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                :id="`enableSwitch${product.id}`"
                v-model="product.is_enabled"
                :true-value="1"
                :false-value="0"
                @change="updateEnableStatus(product)"
              />
              <label
                class="form-check-label"
                :for="`enableSwitch${product.id}}`"
              >
                <span class="text-primary" v-if="product.is_enabled">上架</span>
                <span class="text-light" v-else>下架</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal('edit', product)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openDelModal(product)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Pagination -->
    <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
    <!-- Admin Product Modal -->
    <!-- ref 用來抓取要執行的 modal 元件 -->
    <AdminProduct
      :temp-product="tempProduct"
      :is-new="isNew"
      @add-product="addProduct"
      @update-product="updateProduct"
      ref="adminProductModal"
    ></AdminProduct>
    <!-- Delete Product Modal -->
    <DelModal
      :del-item="tempProduct"
      @remove-item="removeProduct"
      @get-items="getProducts"
      ref="delModal"
    ></DelModal>
  </div>
</template>

<script>
import AdminProduct from '@/components/AdminProduct.vue'
import DelModal from '@/components/DelModal.vue'
import Pagination from '@/components/Pagination.vue'
import Loading from '@/components/Loading.vue'

export default {
  data () {
    return {
      products: [],
      productId: '',
      tempProduct: {
        imagesUrl: []
      },
      isNew: false,
      isReady: false,
      pagination: {},
      productModal: '',
      delModal: ''
    }
  },
  inject: ['emitter'],
  components: {
    AdminProduct,
    DelModal,
    Pagination,
    Loading
  },
  methods: {
    // Products Execution Start
    getProducts (page = 1) {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      this.$http
        .get(url)
        .then(res => {
          this.products = res.data.products
          this.pagination = res.data.pagination
          this.isReady = true
        })
        .catch(err => {
          this.$httpMessageState(err.response, '錯誤訊息')
          // this.isReady = true
        })
    },
    addProduct () {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`
      this.$http
        .post(url, { data: this.tempProduct })
        .then(res => {
          this.getProducts()
          this.emitter.emit('push-message', {
            style: 'success',
            title: '新增產品成功',
            content: res.data.message
          })
          this.isReady = true
        })
        .catch(err => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '新增產品失敗',
            content: err.data.message
          })
        })
      this.$refs.adminProductModal.hideModal()
    },
    updateProduct () {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$http
        .put(url, { data: this.tempProduct })
        .then(res => {
          this.emitter.emit('push-message', {
            style: 'success',
            title: '編輯產品成功',
            content: res.data.message
          })
          this.getProducts()
          this.isReady = true
        })
        .catch(err => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '編輯產品失敗',
            content: err.data.message
          })
        })
      this.$refs.adminProductModal.hideModal()
    },
    removeProduct (id) {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${id}`
      this.$http
        .delete(url)
        .then(res => {
          this.$httpMessageState(res.data.message, '錯誤訊息')
          this.getProducts()
          this.isReady = true
        })
        .catch(err => {
          this.$httpMessageState(err.response, '錯誤訊息')
        })
      this.$refs.delModal.hideModal()
    },
    updateEnableStatus (product) {
      this.isReady = false
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${product.id}`
      this.$http
        .put(url, { data: product })
        .then(res => {
          this.emitter.emit('push-message', {
            style: 'success',
            title: '已啟用產品',
            content: res.data.message
          })
          // this.getProducts()
          this.isReady = true
        })
        .catch(err => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '啟用產品失敗',
            content: err.data.message
          })
        })
    },
    // Products Execution End

    // Modal Execution Start
    openModal (modal, product = '') {
      if (modal === 'new') {
        this.tempProduct = {
          imagesUrl: []
        }
        this.isNew = true
      } else if (modal === 'edit') {
        this.tempProduct = { ...product }
        this.isNew = false
      }
      // modalMixin 下的 openModal() 方法
      this.$refs.adminProductModal.openModal()
    },
    openDelModal (product) {
      this.tempProduct = { ...product }
      // modalMixin 下的 openModal() 方法
      this.$refs.delModal.openModal()
    }
    // Modal Execution End
  },
  mounted () {
    this.getProducts()
  }
}
</script>
