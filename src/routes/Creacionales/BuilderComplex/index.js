import { useEffect, useState } from "preact/hooks";
import useInput from "../../../hooks/useInput";
import { Button, Form, Input, Select } from "../../../components/Form";

import mapTypesToOptions from "../../../utils/mapTypesToOptions";
import { BUILDER_TYPES, cookCustomPizza, cookPizza } from "./controller";
import { PizzaType } from "../../../models/Creacionales/BuilderComplex";

const [BUILDER_OPTIONS, defaultBuilder] = mapTypesToOptions(BUILDER_TYPES);
const [PIZZA_OPTIONS, defaultPizza] = mapTypesToOptions(PizzaType);

const initialIngredients = {
  cheese: false,
  tomato: false,
  pineapple: false,
  meat: false,
  chicken: false,
  mushroom: false,
};

// Component
function Builder() {
  // Input
  const builder = useInput(defaultBuilder);
  const pizzaType = useInput(defaultPizza);

  const [isCustom, setIsCustom] = useState(false);
  const [ingredients, setIngredients] = useState(initialIngredients);

  useEffect(() => {
    const isNextCustom = pizzaType.value === PizzaType.CUSTOM;
    setIsCustom(isNextCustom);
    if (isNextCustom) setIngredients(initialIngredients);
  }, [pizzaType.value]);

  const getHanlder = (name) => ({
    value: ingredients[name],
    onChange: ({ target: { checked } }) => {
      setIngredients((prev) => ({ ...prev, [name]: checked }));
    },
  });

  // Output
  const [output, setOutput] = useState("");

  // Controller Call
  const createPizza = () => {
    let pizza;
    if (isCustom) {
      pizza = cookCustomPizza(builder.value, ingredients);
    } else {
      pizza = cookPizza(builder.value, pizzaType.value);
    }

    setOutput(JSON.stringify(pizza, null, 2));
  };

  // View
  return (
    <article>
      <h3>Builder</h3>
      <br />
      <Form onSubmit={createPizza}>
        <div style="display: flex; justify-content: space-around">
          <div style="margin-bottom: 1rem;">
            <Select
              label="Select Pizza Type"
              options={PIZZA_OPTIONS}
              {...pizzaType}
            />
          </div>
          <div style="margin-bottom: 1rem;">
            <Select
              label="Select Recibe type"
              options={BUILDER_OPTIONS}
              {...builder}
            />
          </div>
        </div>
        {isCustom && (
          <div style="padding: 1rem; display: flex; justify-content: space-around; text-align: center">
            <Input label="Cheese" type="checkbox" {...getHanlder("cheese")} />
            <Input label="Tomato" type="checkbox" {...getHanlder("tomato")} />
            <Input
              label="Pineapple"
              type="checkbox"
              {...getHanlder("pineapple")}
            />
            <Input label="Meat" type="checkbox" {...getHanlder("meat")} />
            <Input label="Chicken" type="checkbox" {...getHanlder("chicken")} />
            <Input
              label="Mushroom"
              type="checkbox"
              {...getHanlder("mushroom")}
            />
          </div>
        )}
        <div style="text-align: center">
          <Button type="submit">Orepare Order</Button>
        </div>
      </Form>

      {output && (
        <p style={{ overflow: "auto" }}>
          <pre>{output}</pre>
        </p>
      )}
    </article>
  );
}

export default Builder;
