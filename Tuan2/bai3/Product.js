const DomesticState = require('./state/DomesticState')

class Product {
  constructor(price) {
    this.price = price
    this.state = new DomesticState()
    this.taxStrategy = null
  }

  setState(state) {
    this.state = state
  }

  setTaxStrategy(strategy) {
    this.taxStrategy = strategy
  }

  calculateTax() {
    if (!this.taxStrategy) return 0
    return (
      this.taxStrategy.calculate(this.price) * this.state.getTaxMultiplier()
    )
  }
}

module.exports = Product
