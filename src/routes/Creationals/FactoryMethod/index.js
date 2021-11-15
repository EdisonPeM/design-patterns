import { useState } from "preact/hooks";
import useInput from "../../../hooks/useInput";
import useForceUpdate from "../../../hooks/useForceUpdate";

import { Form, Input, Button, Select } from "../../../components/Form";

import { LoggerFactory } from "../../../models/Creationals/FactoryMethod";
import mapTypesToOptions from "../../../utils/mapTypesToOptions";

import { changeLogger, logValue, clearLogs } from "./controller";

// Options
const [LOGGER_OPTIONS, defaultLogger] = mapTypesToOptions(
  LoggerFactory.LOGGER_TYPES
);

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
      <h2 class="text-center text-2xl font-bold">Factory Method</h2>
      {/* <p></p> // TODO: Add factory method description */}
      <br />
      <Form onSubmit={log}>
        <div class="mb-4">
          <Select
            label="Change the logger"
            options={LOGGER_OPTIONS}
            value={logger}
            onChange={changeLoggerType}
          />
        </div>
        <div class="mb-4">
          <Input autoFocus label="A message to Log" {...message} />
        </div>
        <div>
          <Button class="mr-4 mb-2" type="submit">
            Log
          </Button>
          <Button variant="secondary" type="button" onClick={clear}>
            Clear
          </Button>
        </div>
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
