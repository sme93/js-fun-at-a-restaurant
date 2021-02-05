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
  if (ingredientsArray.includes(ingredientName)) {
    return ingredientsArray;
  }

  return ingredientsArray.push(ingredientName);
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  // decreasePrice,
  // createRecipe
}
