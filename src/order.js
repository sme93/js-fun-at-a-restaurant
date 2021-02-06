function takeOrder(newOrder, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    return deliveryOrders.push(newOrder);
  }
}

function refundOrder(orderNumber, deliveryOrders) {
  var locationOfOrder = deliveryOrders.findIndex(function(order) {
    if (orderNumber === order.orderNumber) {
      return order;
    }
  })

  deliveryOrders.splice(locationOfOrder, 1);
}

function listItems(deliveryOrders) {
  var itemNames = deliveryOrders.map(function(order) {
    return order.item;
  })

  var itemString = itemNames.join(", ");
  return itemString;
}

function searchOrder(deliveryOrders, searchItem) {
  var itemNames = deliveryOrders.map(function(order) {
    return order.item;
  })

  var itemExists = itemNames.includes(searchItem);

  return itemExists;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
