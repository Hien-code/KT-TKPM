const NewOrderState = require('./state/NewOrderState')

class Order {
  constructor(baseCost) {
    this.baseCost = baseCost
    this.state = new NewOrderState()
    this.shippingStrategy = null
  }

  setState(StateClass) {
    this.state = new StateClass()
  }

  nextState() {
    this.state.handle(this)
  }

  setShippingStrategy(strategy) {
    this.shippingStrategy = strategy
  }

  getCost() {
    return this.baseCost + (this.shippingStrategy?.calculateFee() || 0)
  }
}

module.exports = Order
