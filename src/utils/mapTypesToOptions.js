function mapTypesToOptions(types) {
  const options = Object.values(types).map((type) => ({
    value: type,
    label: type.toLowerCase(),
  }));

  const defaultValue = options[0]?.value || "";

  return [options, defaultValue];
}

export default mapTypesToOptions;
