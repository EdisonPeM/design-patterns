function Button({ onClick, children, ...buttonProps }) {
  return (
    <button onClick={onClick} {...buttonProps}>
      {children}
    </button>
  );
}

export default Button;
