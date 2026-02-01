const OrderState = require('./OrderState')

class CancelledState extends OrderState {
  handle() {
    console.log('Đơn hàng đã bị hủy')
  }
}

module.exports = CancelledState
