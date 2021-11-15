import { useState } from "preact/hooks";

function useForceUpdate() {
  const [_, setState] = useState({});
  const foceUpdate = () => setState({});
  return foceUpdate;
}

export default useForceUpdate;
