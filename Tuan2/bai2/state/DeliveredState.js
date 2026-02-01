const OrderState = require('./OrderState')

class DeliveredState extends OrderState {
  handle() {
    console.log('Đơn hàng đã giao thành công')
  }
}

module.exports = DeliveredState
