import { useState } from "preact/hooks";
import useInput from "../../../hooks/useInput";
import { Button, Form, Select } from "../../../components/Form";
import mapTypesToOptions from "../../../utils/mapTypesToOptions";
import { build, BUILDER_TYPES } from "./controller";

const [BUILDER_OPTIONS, defaultBuilder] = mapTypesToOptions(BUILDER_TYPES);

// Component
function Builder() {
  // Input
  const builder = useInput(defaultBuilder);

  // Output
  const [output, setOutput] = useState("");

  // Controller Call
  const generateReport = () => {
    const report = build(builder.value);
    setOutput(JSON.stringify(report, null, 2));
  };

  // View
  return (
    <article>
      <h2 class="text-center text-2xl font-bold">Builder - Constructor</h2>
      <br />
      <Form onSubmit={generateReport}>
        <div class="mb-4">
          <Select
            label="Select report type"
            options={BUILDER_OPTIONS}
            {...builder}
          />
        </div>
        <div class="mb-4">
          <Button type="submit">Generate a Report</Button>
        </div>
      </Form>

      {output && (
        <p class="overflow-x-auto">
          <pre>{output}</pre>
        </p>
      )}
    </article>
  );
}

export default Builder;
