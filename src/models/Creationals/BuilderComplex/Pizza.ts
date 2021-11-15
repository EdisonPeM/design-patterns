import Ingredient from "./Ingredient";

export enum PizzaType {
  HAWAIIAN = "Hawaiian",
  MEAT = "Meat",
  CHICKEN = "Chicken",
  CUSTOM = "Custom",
}

class Pizza {
  private ingredients: Array<Ingredient> = [];
  constructor(private type: PizzaType) {}

  getType() {
    return this.type;
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}

export default Pizza;
