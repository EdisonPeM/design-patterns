function Form({ onSubmit, children, ...otherProps }) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} {...otherProps}>
      {children}
    </form>
  );
}

export default Form;
