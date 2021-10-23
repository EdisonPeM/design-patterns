function Select({
  label = "",
  options = [],
  value = "",
  onChange = () => {},
  ...otherProps
}) {
  return (
    <label>
      <span>{label}</span>
      <br />
      <select value={value} onChange={onChange} {...otherProps}>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label || value}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Select;
