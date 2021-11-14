function Button({ onClick, children, ...buttonProps }) {
  return (
    <button style="cursor: pointer" onClick={onClick} {...buttonProps}>
      {children}
    </button>
  );
}

export default Button;
