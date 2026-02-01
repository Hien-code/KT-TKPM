const ProductState = require('./ProductState')

class DomesticState extends ProductState {
  getTaxMultiplier() {
    return 1 // thuế bình thường
  }
}

module.exports = DomesticState
