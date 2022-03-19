<template>
  <div
    id="delProductModal"
    ref="modal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ tempProduct.title }}</strong>
          商品(刪除後將無法恢復)。
        </div>
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
            class="btn btn-danger"
            @click="removeProduct(tempProduct.id)"
          >
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 需要匯入 Modal 元件
import Modal from 'bootstrap/js/dist/modal'

export default {
  data () {
    return {
      delProductModal: ''
    }
  },
  props: ['temp-product'],
  methods: {
    removeProduct (id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$http
        .delete(url)
        .then(res => {
          alert(res.data.message)
          this.$emit('get-products')
        })
        .catch(err => {
          alert(err.data.message)
        })
      this.closeDelProductModal()
    },
    openDelProductModal () {
      this.delProductModal.show()
    },
    closeDelProductModal () {
      this.delProductModal.hide()
    },
    createModal () {
      this.delProductModal = new Modal(this.$refs.modal)
    }
  },
  mounted () {
    this.createModal()
  }
}
</script>
