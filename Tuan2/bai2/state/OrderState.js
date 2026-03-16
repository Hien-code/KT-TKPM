class OrderState {
  handle(order) {
    throw new Error('handle() must be implemented')
  }
}

module.exports = OrderState
