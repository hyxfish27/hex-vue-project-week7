<template>
  <div
    id="productModal"
    ref="modal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>{{ isNew ? '新增產品' : '編輯產品' }}</span>
          </h5>
          <button
            type="button"
            class="btn-close bg-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-2">
                <div class="mb-3">
                  <label for="imageUrl" class="form-label">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                    v-model="tempProduct.imageUrl"
                  />
                  <img class="img-fluid" :src="tempProduct.imageUrl" alt="" />
                </div>
              </div>
              <!-- Array exist -->
              <div v-if="Array.isArray(tempProduct.imagesUrl)">
                <div
                  class="mb-1"
                  v-for="(image, key) in tempProduct.imagesUrl"
                  :key="key"
                >
                  <div class="form-group">
                    <label for="imageUrl" class="form-label">圖片網址</label>
                    <input
                      v-model="tempProduct.imagesUrl[key]"
                      type="text"
                      class="form-control"
                      placeholder="請輸入圖片連結"
                    />
                  </div>
                  <img class="img-fluid" :src="image" />
                </div>
                <div
                  v-if="
                    !tempProduct.imagesUrl.length ||
                      tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]
                  "
                >
                  <button
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="tempProduct.imagesUrl.push('')"
                  >
                    新增圖片
                  </button>
                </div>
                <div v-else>
                  <button
                    class="btn btn-outline-danger btn-sm d-block w-100"
                    @click="tempProduct.imagesUrl.pop()"
                  >
                    刪除圖片
                  </button>
                </div>
              </div>
              <div v-else>
                <!-- Array is not exist -->
                <button
                  class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="initialImgArray"
                >
                  新增圖片
                </button>
              </div>
            </div>

            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model="tempProduct.title"
                />
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                    v-model="tempProduct.category"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input
                    id="unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                    v-model="tempProduct.unit"
                  />
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    id="origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                    v-model="tempProduct.origin_price"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input
                    id="price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                    v-model="tempProduct.price"
                  />
                </div>
              </div>
              <hr />

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品描述"
                  v-model="tempProduct.description"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入說明內容"
                  v-model="tempProduct.content"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    v-model="tempProduct.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled"
                    >是否啟用</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal footer -->
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="
              isNew
                ? $emit('add-product', tempProduct)
                : $emit('update-product', tempProduct)
            "
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 在 modal 元件呼叫 mixin 方法
import modalMixin from '@/mixins/modalMixin'

export default {
  data () {
    return {
    }
  },
  props: ['temp-product', 'is-new'],
  mixins: [modalMixin],
  methods: {
    // addProduct () {
    //   const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`
    //   this.$http
    //     .post(url, { data: this.tempProduct })
    //     .then(res => {
    //       // 發送 get-product 到外層呼叫 getProducts 方法
    //       this.$emit('get-products')
    //       // this.emitter.emit('push-message', {
    //       //   style: 'success',
    //       //   title: '新增產品成功',
    //       //   content: res.data.message
    //       // })
    //       // alert(res.data.message)
    //     })
    //     .catch(err => {
    //       alert(err.data.message)
    //     })
    //   this.hideProductModal()
    // },
    // updateProduct () {
    //   const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
    //   this.$http
    //     .put(url, { data: this.tempProduct })
    //     .then(res => {
    //       // this.emitter.emit('push-message', {
    //       //   style: 'success',
    //       //   title: '編輯產品成功',
    //       //   content: res.data.message
    //       // })
    //       this.$emit('get-products')
    //       // alert(res.data.message)
    //     })
    //     .catch(err => {
    //       // this.emitter.emit('push-message', {
    //       //   style: 'success',
    //       //   title: '編輯產品成功',
    //       //   content: err.data.message
    //       // })
    //       alert(err.data.message)
    //     })
    //   this.hideProductModal()
    // }
    // // createModal () {
    //   // 將元件中的 ref="modal" 進行 Modal 的初始化，
    //   // 並 assign 到 data 中的 productModal
    //   // this.productModal = new Modal(this.$refs.modal)
    // },
    // openProductModal () {
    //   this.productModal.show()
    // },
    // hideProductModal () {
    //   this.productModal.hide()
    // },
    // initial imagesUrl Array
    // initialImgArray () {
    //   // console.log(Array.isArray(this.tempProduct.imagesUrl))
    //   // false則進行初始化
    //   this.tempProduct.imagesUrl = []
    //   this.tempProduct.imagesUrl.push('')
    // }
  },
  mounted () {
    // this.createModal()
  }
}
</script>
