export default function decimals(number, separator) {
  if (!number) return false;
  number = number + '';
  // number = number.replace('.', ',');

  return number.toString().replace(/[A-Z]|[a-z]|\!|\?|\;|\:\/\\/g, '');

  // return number;
} // decimals
