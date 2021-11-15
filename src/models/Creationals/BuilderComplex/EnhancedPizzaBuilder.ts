import Ingredient from "./Ingredient";
import Pizza, { PizzaType } from "./Pizza";
import type PizzaBuilder from "./PizzaBuilder";

class EnhancedPizzaBuilder implements PizzaBuilder {
  private pizza?: Pizza;

  prepareOrder(pizzaType: PizzaType) {
    this.pizza = new Pizza(pizzaType);
    return this;
  }

  public addCheese(): PizzaBuilder {
    this.validatePizza();
    const cheese = new Ingredient("Enhanced cheese", 3);
    this.pizza!.addIngredient(cheese);
    return this;
  }

  public addTomato(): PizzaBuilder {
    this.validatePizza();
    const tomato = new Ingredient("Enhanced tomato", 3);
    this.pizza!.addIngredient(tomato);
    return this;
  }

  public addPinneaple(): PizzaBuilder {
    this.validatePizza();
    const pineapple = new Ingredient("Enhanced pineapple", 3);
    this.pizza!.addIngredient(pineapple);
    return this;
  }

  public addMushroom(): PizzaBuilder {
    this.validatePizza();
    const mushroom = new Ingredient("Enhanced mushroom", 3);
    this.pizza!.addIngredient(mushroom);
    return this;
  }

  public addChicken(): PizzaBuilder {
    this.validatePizza();
    const chicken = new Ingredient("Enhanced chicken", 3);
    this.pizza!.addIngredient(chicken);
    return this;
  }

  public addMeat(): PizzaBuilder {
    this.validatePizza();
    const meat = new Ingredient("Enhanced meat", 3);
    this.pizza!.addIngredient(meat);
    return this;
  }

  public build(): Pizza {
    this.validatePizza();
    return this.pizza!;
  }

  private validatePizza() {
    if (!this.pizza) {
      throw new Error("No Pizza is in order");
    }
  }
}

export default EnhancedPizzaBuilder;
