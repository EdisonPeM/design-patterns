import Pizza, { PizzaType } from "./Pizza";

interface PizzaBuilder {
  prepareOrder(pizzaType: PizzaType): PizzaBuilder;
  addCheese(): PizzaBuilder;
  addTomato(): PizzaBuilder;
  addPinneaple(): PizzaBuilder;
  addMushroom(): PizzaBuilder;
  addChicken(): PizzaBuilder;
  addMeat(): PizzaBuilder;
  build(): Pizza;
}

export default PizzaBuilder;
