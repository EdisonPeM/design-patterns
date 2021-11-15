function Input({
  type = "text",
  inline = false,
  label,
  value,
  onChange,
  ...otherProps
}) {
  const isInline = type === "checkbox" || type === "radio" || inline;
  return (
    <label>
      <span class={isInline ? "mr-2" : "block mb-2"}>{label}</span>
      <input
        class="w-full md:w-1/2 lg:w-auto leading-5 py-1 px-4 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        type={type}
        value={value}
        onChange={onChange}
        {...otherProps}
      />
    </label>
  );
}

export default Input;
