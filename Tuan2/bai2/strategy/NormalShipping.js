const ShippingStrategy = require('./ShippingStrategy')

class NormalShipping extends ShippingStrategy {
  calculateFee() {
    return 20000
  }
}

module.exports = NormalShipping
