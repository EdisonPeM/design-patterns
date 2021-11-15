import Ingredient from "./Ingredient";
import Pizza, { PizzaType } from "./Pizza";
import type PizzaBuilder from "./PizzaBuilder";

class ClassicPizzaBuilder implements PizzaBuilder {
  private pizza?: Pizza;

  prepareOrder(pizzaType: PizzaType) {
    this.pizza = new Pizza(pizzaType);
    return this;
  }

  public addCheese(): PizzaBuilder {
    this.validatePizza();
    const cheese = new Ingredient("cheese", 1);
    this.pizza!.addIngredient(cheese);
    return this;
  }

  public addTomato(): PizzaBuilder {
    this.validatePizza();
    const tomato = new Ingredient("tomato", 1);
    this.pizza!.addIngredient(tomato);
    return this;
  }

  public addPinneaple(): PizzaBuilder {
    this.validatePizza();
    const pineapple = new Ingredient("pineapple", 1);
    this.pizza!.addIngredient(pineapple);
    return this;
  }

  public addMushroom(): PizzaBuilder {
    this.validatePizza();
    const mushroom = new Ingredient("mushroom", 1);
    this.pizza!.addIngredient(mushroom);
    return this;
  }

  public addChicken(): PizzaBuilder {
    this.validatePizza();
    const chicken = new Ingredient("chicken", 1);
    this.pizza!.addIngredient(chicken);
    return this;
  }

  public addMeat(): PizzaBuilder {
    this.validatePizza();
    const meat = new Ingredient("meat", 1);
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

export default ClassicPizzaBuilder;
