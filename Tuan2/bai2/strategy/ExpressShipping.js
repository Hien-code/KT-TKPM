const ShippingStrategy = require('./ShippingStrategy')

class ExpressShipping extends ShippingStrategy {
  calculateFee() {
    return 50000
  }
}

module.exports = ExpressShipping
