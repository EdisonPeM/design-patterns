import { useState } from "preact/hooks";
import useInput from "../../../hooks/useInput";

import { Form, Select, Button } from "../../../components/Form";

import { FACTORY_TYPES, VEHICLE_TYPES } from "../../../models/AbstractFactory";
import { SearchVehicle } from "./controller";

// Options
const CATEGORY_OPTIONS = Object.values(FACTORY_TYPES).map((type) => ({
  label: type.toLowerCase(),
  value: type,
}));

const TYPE_OPTIONS = Object.values(VEHICLE_TYPES).map((type) => ({
  label: type.toLowerCase(),
  value: type,
}));

// Default Values
const defaultCategory = CATEGORY_OPTIONS[0].value;
const defaultType = TYPE_OPTIONS[0].value;

// Component
function AbstractFactory() {
  // Inputs
  const category = useInput(defaultCategory);
  const type = useInput(defaultType);

  // Output
  const [output, setOutput] = useState("");

  // Misc
  const resetInputs = () => {
    category.reset();
    type.reset();
  };

  const clearOutput = () => {
    setOutput("");
  };

  const resetAll = () => {
    clearOutput();
    resetInputs();
  };

  // Controller Call
  const search = () => {
    const result = SearchVehicle(category.value, type.value);
    setOutput(result);
  };

  // View
  return (
    <article>
      <h3>Abstract Factory</h3>
      <Form onSubmit={search}>
        <div style="margin-bottom: 1rem;">
          <Select
            autoFocus
            label="Vehicle Category"
            options={CATEGORY_OPTIONS}
            {...category}
          />
        </div>
        <div style="margin-bottom: 1rem;">
          <Select label="Vehicle Type" options={TYPE_OPTIONS} {...type} />
        </div>

        <Button type="submit">Search</Button>
        <Button type="button" onClick={clearOutput}>
          Clean Search
        </Button>
        <Button type="reset" onClick={resetAll}>
          Reset
        </Button>

        {output && <p>{output}</p>}
      </Form>
    </article>
  );
}

export default AbstractFactory;
