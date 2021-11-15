import styles from "./styles.scss";

function Button({
  class: className,
  size = "sm",
  onClick,
  children,
  ...buttonProps
}) {
  return (
    <button
      class={`${styles["btn"]} ${styles["btn-primary"]} ${
        styles[`btn-${size}`]
      } ${className || ""}`}
      onClick={onClick}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

export default Button;
