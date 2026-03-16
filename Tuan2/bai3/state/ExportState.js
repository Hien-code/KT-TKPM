const ProductState = require('./ProductState')

class ExportState extends ProductState {
  getTaxMultiplier() {
    return 0.5 // ưu đãi thuế xuất khẩu
  }
}

module.exports = ExportState
