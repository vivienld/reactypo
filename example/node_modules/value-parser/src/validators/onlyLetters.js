export default function onlyLetters(data) {

  if (!data) return false;
  if (typeof data !== 'string') return false;
  return (/^[a-zA-Z]+$/.test(data));

} // onlyLetters
