function takeOrder(newOrder, deliveryOrders) {
  if (deliveryOrders.length < 3) {
  return deliveryOrders.push(newOrder);
  }
}

function refundOrder(num1, deliveryOrders) {
  return deliveryOrders.splice(num1);
}












module.exports = {
   takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}
