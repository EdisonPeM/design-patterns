import { useEffect, useState } from "preact/hooks";
import useInput from "../../../hooks/useInput";
import { Button, Form, Input, Select } from "../../../components/Form";

import mapTypesToOptions from "../../../utils/mapTypesToOptions";
import { BUILDER_TYPES, cookCustomPizza, cookPizza } from "./controller";
import { PizzaType } from "../../../models/Creationals/BuilderComplex";

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
    const pizza = cookPizza(builder.value, pizzaType.value, ingredients);
    setOutput(JSON.stringify(pizza, null, 2));
  };

  // View
  return (
    <article>
      <h2 class="text-center text-2xl font-bold">Builder</h2>
      <br />
      <Form onSubmit={createPizza}>
        <div class="mb-4">
          <Select
            label="Select Pizza Type"
            options={PIZZA_OPTIONS}
            {...pizzaType}
          />
        </div>
        <div class="mb-4">
          <Select
            label="Select Recibe type"
            options={BUILDER_OPTIONS}
            {...builder}
          />
        </div>

        {isCustom && (
          <div class="flex flex-wrap justify-center">
            <div class="p-4">
              <Input label="Tomato" type="checkbox" {...getHanlder("tomato")} />
            </div>
            <div class="p-4">
              <Input label="Cheese" type="checkbox" {...getHanlder("cheese")} />
            </div>
            <div class="p-4">
              <Input
                label="Pineapple"
                type="checkbox"
                {...getHanlder("pineapple")}
              />
            </div>
            <div class="p-4">
              <Input label="Meat" type="checkbox" {...getHanlder("meat")} />
            </div>
            <div class="p-4">
              <Input
                label="Chicken"
                type="checkbox"
                {...getHanlder("chicken")}
              />
            </div>
            <div class="p-4">
              <Input
                label="Mushroom"
                type="checkbox"
                {...getHanlder("mushroom")}
              />
            </div>
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
