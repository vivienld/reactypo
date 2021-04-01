export function checkLength(data, lenght, type) {
  if (typeof data !== type) return false;
  data = data.replace(/[^\d]+/g, '');
  if (data == '') return false;
  if (data.length != lenght) return false;
  return true;
} // checkLength
