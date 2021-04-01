export default function onlyNumbers(string) {
  if (!string) return false;
  return string.toString().replace(/\D/g, '');
} // onlyNumbers
