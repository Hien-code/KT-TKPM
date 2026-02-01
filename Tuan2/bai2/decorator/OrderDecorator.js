class OrderDecorator {
  constructor(order) {
    this.order = order
  }

  getCost() {
    return this.order.getCost()
  }
}

module.exports = OrderDecorator
