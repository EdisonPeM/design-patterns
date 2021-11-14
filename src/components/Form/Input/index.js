function Input({ type = "text", label, value, onChange, ...otherProps }) {
  return (
    <label>
      <span>{label}</span>
      <br />
      <input type={type} value={value} onChange={onChange} {...otherProps} />
    </label>
  );
}

export default Input;
