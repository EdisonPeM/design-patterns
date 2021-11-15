import { useEffect } from "preact/hooks";

function useRemoveFocus({ ref, remove }) {
  useEffect(() => {
    const focuseables = Array.from(
      ref.current.querySelectorAll("a,button,input,select,textarea")
    );
    focuseables.forEach((focuseable) => {
      if (remove) {
        focuseable.setAttribute("tabindex", -1);
      } else {
        focuseable.removeAttribute("tabindex");
      }
    });
  }, [remove]);
}

export default useRemoveFocus;
