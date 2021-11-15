import { useState } from "preact/hooks";
import useInput from "../../../hooks/useInput";

import { Form, Select, Button } from "../../../components/Form";

import {
  VehicleFactory,
  VehicleFactoryProvider,
} from "../../../models/Creationals/AbstractFactory";
import mapTypesToOptions from "../../../utils/mapTypesToOptions";

import { SearchVehicle } from "./controller";

// Options & default Values
const [CATEGORY_OPTIONS, defaultCategory] = mapTypesToOptions(
  VehicleFactoryProvider.FACTORY_TYPES
);

const [TYPE_OPTIONS, defaultType] = mapTypesToOptions(
  VehicleFactory.VEHICLE_TYPES
);

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
      <h2 class="text-center text-2xl font-bold">Abstract Factory</h2>
      <br />
      <Form onSubmit={search}>
        <div class="mb-4">
          <Select
            autoFocus
            label="Vehicle Category"
            options={CATEGORY_OPTIONS}
            {...category}
          />
        </div>
        <div class="mb-4">
          <Select label="Vehicle Type" options={TYPE_OPTIONS} {...type} />
        </div>
        <div class="mb-4">
          <Button variant="success" class="mr-4 mb-2" type="submit">
            Search
          </Button>
          <Button class="mr-4 mb-2" type="button" onClick={clearOutput}>
            Clean Search
          </Button>
          <Button variant="secondary" type="reset" onClick={resetAll}>
            Reset
          </Button>
        </div>

        {output && <p>{output}</p>}
      </Form>
    </article>
  );
}

export default AbstractFactory;
