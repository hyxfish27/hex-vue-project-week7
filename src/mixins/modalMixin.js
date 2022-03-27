import Modal from 'bootstrap/js/dist/modal'

// 將通用的 modal 方法寫在這裡
export default {
  methods: {
    openModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },
  mounted () {
    // 呼叫的時候就建立 modal
    // 將元件中的 ref="modal" 進行 Modal 的初始化，
    // 並 assign 到 data 中的 modal
    this.modal = new Modal(this.$refs.modal)
  }
}
