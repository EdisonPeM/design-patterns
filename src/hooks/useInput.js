import { useState } from "preact/hooks";

function useInput(initialValue = "", type = "text") {
  const [value, setValue] = useState(initialValue);

  const onChange = ({ target }) => {
    setValue(target.value);
  };

  const reset = () => setValue(initialValue);

  return {
    value,
    onChange,
    reset,
  };
}

export default useInput;
