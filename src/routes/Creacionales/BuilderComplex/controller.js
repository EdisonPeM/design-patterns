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
export function cookPizza(recibeType, pizzaType, ingredients) {
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

    case PizzaType.CUSTOM: {
      return Chef.cookCustomPizza(ingredients);
    }

    default: {
      throw new Error("No Pizza Type is supported");
    }
  }
}
