import { useRef } from "preact/hooks";

function usePersistentValue(initialValue = null){
  return useRef(initialValue).current;
}

export default usePersistentValue;