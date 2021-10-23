function Input({ label, value, onChange, ...otherProps }) {
  return (
    <label>
      <span>{label}</span>
      <br />
      <input value={value} onChange={onChange} {...otherProps} />
    </label>
  );
}

export default Input;
