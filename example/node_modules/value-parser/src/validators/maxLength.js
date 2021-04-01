export default function maxLenght(data, maxLenght) {
  if (!data || !maxLenght) return false;
  data = data.toString();
  if (data.length > maxLenght) return false;
  return true;
} // maxLenght
