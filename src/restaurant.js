function createRestaurant(nameString) {
  return {
    name: nameString,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  };
}

function addMenuItem(restaurantObject, menuObject) {
  restaurantObject.menus.lunch.push(menuObject);
  //console.log(restaurantObject);
  //console.log(menuObject);
  //console.log(restaurantObject.menus.lunch);
}




module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}
