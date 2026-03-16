class ShippingStrategy {
  calculateFee() {
    throw new Error('calculateFee() must be implemented')
  }
}

module.exports = ShippingStrategy
