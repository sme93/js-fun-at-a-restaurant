function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(name, price, type) {
  return {
    name:name,
    price:price,
    type:type,
  }
}

function addIngredients(ingredientName, ingredientsArray) {
  if (ingredientsArray.indexOf(ingredientName) === -1)
  return ingredientsArray.push(ingredientName);
}

function formatPrice(initialPrice) {
  
}



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  // decreasePrice,
  // createRecipe
}
