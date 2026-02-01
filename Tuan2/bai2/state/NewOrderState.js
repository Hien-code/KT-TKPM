const OrderState = require('./OrderState')

class NewOrderState extends OrderState {
  handle(order) {
    console.log('Đơn hàng mới tạo → Đang xử lý')
    order.setState(require('./ProcessingState'))
  }
}

module.exports = NewOrderState
