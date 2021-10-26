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
      <h3>Builder</h3>
      <Form onSubmit={generateReport}>
        <div style="margin-bottom: 1rem;">
          <Select
            label="Select report type"
            options={BUILDER_OPTIONS}
            {...builder}
          />
        </div>
        <Button type="submit">Generate a Report</Button>
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
