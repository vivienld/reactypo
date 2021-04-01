export default function minLenght(data, minLenght) {
  if (!minLenght) return false;
  if (data === null) return false;
  data = data.toString();
  if (data.length < minLenght) return false;
  return true;
} // minLenght
