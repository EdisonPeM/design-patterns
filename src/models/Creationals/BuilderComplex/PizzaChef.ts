import { ClassicPizzaBuilder } from ".";
import Pizza, { PizzaType } from "./Pizza";
import type PizzaBuilder from "./PizzaBuilder";

/* Director of the Builder */
class PizzaChef {
  private builder: PizzaBuilder;
  constructor() {
    this.builder = new ClassicPizzaBuilder();
  }

  public setBuilder(builder: PizzaBuilder) {
    this.builder = builder;
  }

  public cookHawaiianPizza(): Pizza {
    return this.builder
      .prepareOrder(PizzaType.HAWAIIAN)
      .addCheese()
      .addTomato()
      .addPinneaple()
      .build();
  }

  public cookMeatPizza(): Pizza {
    return this.builder
      .prepareOrder(PizzaType.MEAT)
      .addCheese()
      .addMeat()
      .build();
  }

  public cookChickenPizza(): Pizza {
    return this.builder
      .prepareOrder(PizzaType.CHICKEN)
      .addCheese()
      .addChicken()
      .addMushroom()
      .build();
  }

  public cookCustomPizza(ingredients: Record<string, boolean>): Pizza {
    const order = this.builder.prepareOrder(PizzaType.CUSTOM);

    const { cheese, tomato, pineapple, meat, chicken, mushroom } = ingredients;
    if (cheese) order.addCheese();
    if (tomato) order.addTomato();
    if (pineapple) order.addPinneaple();
    if (meat) order.addMeat();
    if (chicken) order.addCheese();
    if (mushroom) order.addMushroom();

    return order.build();
  }
}

export default PizzaChef;
