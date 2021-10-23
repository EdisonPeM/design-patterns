import { useEffect, useState } from "preact/hooks";
import { Form, Input, Button, Select } from "../../../components/Form";
import useForceUpdate from "../../../hooks/useForceUpdate";

import useInput from "../../../hooks/useInput";
import { LOGGER_TYPES } from "../../../models/FactoryMethod";

import { changeLogger, logValue, clearLogs } from "./controller";

// Options
const LOGGER_OPTIONS = Object.values(LOGGER_TYPES).map((type) => ({
  value: type,
  label: type.toLocaleLowerCase(),
}));

// Default Value
const defaultLogger = LOGGER_OPTIONS[0].value;

// Component
function FactoryMethod() {
  // Config
  const [logger, setLogger] = useState(() => {
    changeLogger(defaultLogger);
    return defaultLogger;
  });

  // Input
  const message = useInput("");

  // output
  const [output, setOutput] = useState("");

  // misc
  const foceUpdate = useForceUpdate();

  // Controller Calls
  const changeLoggerType = ({ target: { value } }) => {
    const acceptChange = confirm(
      "Al cambiar el logger se eliminará el historial anterior," +
        "está de acuerdo?"
    );

    if (!acceptChange) return foceUpdate();
    setLogger(value);
    changeLogger(value);
    clear();
  };

  const log = () => {
    logValue(message.value, setOutput);
    message.reset();
  };

  const clear = () => {
    clearLogs();
    setOutput("");
    message.reset();
  };

  return (
    <article>
      <h3>Factory Method</h3>
      <Form onSubmit={log}>
        <div style="margin-bottom: 1rem;">
          <Select
            label="Change the logger"
            options={LOGGER_OPTIONS}
            value={logger}
            onChange={changeLoggerType}
          />
        </div>
        <div style="margin-bottom: 1rem;">
          <Input autoFocus label="A message to Log" {...message} />
        </div>
        <Button type="submit">Log</Button>
        <Button type="button" onClick={clear}>
          Clear
        </Button>
      </Form>

      {output && (
        <p>
          <pre>{output}</pre>
        </p>
      )}
    </article>
  );
}

export default FactoryMethod;
