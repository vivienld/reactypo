export default function maxLength(data, maxLenght) {
  if (!data) return;
  return data.toString().substring(0, maxLenght);
};
