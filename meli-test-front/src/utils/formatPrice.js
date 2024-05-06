export default (num) => {
  num = num.toString();
  let [integer, decimal] = num.split(".");
  integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  decimal = decimal ? decimal.padEnd(2, "0") : null;
  return `${integer}${decimal ? `,${decimal}` : ""}`;
};
