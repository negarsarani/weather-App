function ConvertCelsius(item) {
  const celsius = `${item}` - 273.15;
  return Math.floor(celsius);
}
export default ConvertCelsius;
