function Select({
  label = "",
  inline = false,
  options = [],
  value = "",
  onChange = () => {},
  ...otherProps
}) {
  return (
    <label>
      <span class={inline ? "mr-2" : "block mb-2"}>{label}</span>
      <select
        class="w-full md:w-1/2 lg:w-auto py-1 px-3 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        value={value}
        onChange={onChange}
        {...otherProps}
      >
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
