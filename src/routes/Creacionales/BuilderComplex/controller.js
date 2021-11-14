import {
  PizzaChef,
  ClassicPizzaBuilder,
  EnhancedPizzaBuilder,
  PizzaType,
} from "../../../models/Creacionales/BuilderComplex";

export const BUILDER_TYPES = {
  BUILDER_CLASIC: "Classic",
  BUILDER_ENHANCED: "Enhanced",
};

// Factory Method
function getBuilder(type) {
  switch (type) {
    case BUILDER_TYPES.BUILDER_CLASIC: {
      return new ClassicPizzaBuilder();
    }

    case BUILDER_TYPES.BUILDER_ENHANCED:
    default: {
      return new EnhancedPizzaBuilder();
    }
  }
}

const Chef = new PizzaChef();
export function cookPizza(recibeType, pizzaType) {
  Chef.setBuilder(getBuilder(recibeType));

  switch (pizzaType) {
    case PizzaType.HAWAIIAN: {
      return Chef.cookHawaiianPizza();
    }

    case PizzaType.MEAT: {
      return Chef.cookMeatPizza();
    }

    case PizzaType.CHICKEN: {
      return Chef.cookChickenPizza();
    }

    default: {
      throw new Error("No Pizza Type is supported");
    }
  }
}

export function cookCustomPizza(recibeType, ingredients) {
  const builder = getBuilder(recibeType);
  const order = builder.prepareOrder(PizzaType.CUSTOM);

  const { cheese, tomato, pineapple, meat, chicken, mushroom } = ingredients;
  if (cheese) order.addCheese();
  if (tomato) order.addTomato();
  if (pineapple) order.addPinneaple();
  if (meat) order.addMeat();
  if (chicken) order.addCheese();
  if (mushroom) order.addMushroom();

  return order.build();
}
