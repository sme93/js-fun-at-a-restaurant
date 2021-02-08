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
  if (menuObject.type === "breakfast" && !restaurantObject.menus.breakfast.includes(menuObject)) {
    restaurantObject.menus.breakfast.push(menuObject)
  }

  if (menuObject.type === "lunch" && !restaurantObject.menus.lunch.includes(menuObject)) {
    restaurantObject.menus.lunch.push(menuObject)
  }

  if (menuObject.type === "dinner" && !restaurantObject.menus.dinner.includes(menuObject)) {
    restaurantObject.menus.dinner.push(menuObject)
  }
}

function removeMenuItem(restaurantObject, nameToRemove, menuType) {
  var isOnMenu = restaurantObject.menus[menuType].some(function(meal) {
      return meal.name === nameToRemove;
  })

  if (isOnMenu === true) {
    restaurantObject.menus[menuType] = [];
    return `No one is eating our ${nameToRemove} - it has been removed from the ${menuType} menu!`
  }

  if (isOnMenu === false) {
    return `Sorry, we don't sell ${nameToRemove}, try adding a new recipe!`
  }
}




  //console.log(menuType);
  //console.log(restaurantObject);
  //console.log(menuObject.type);
  //console.log(restaurantObject.menus.lunch);

  //search menuObject for menu type
  //match this to restaurantObject.menu
  //push menuObject into matching menu object array
  //




module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
