import styles from "./styles.scss";

function Button({
  class: className,
  size = "sm",
  variant = "primary",
  dynamic = true,
  onClick,
  children,
  ...buttonProps
}) {
  return (
    <button
      class={`${styles["btn"]} ${styles[`btn-${variant}`]} ${
        styles[`btn-${size}`]
      } ${className || ""} ${dynamic ? "w-full md:w-auto" : ""}`}
      onClick={onClick}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

export default Button;
