export default function onlyNumbers(data) {
  if (!data) return false;
  if (typeof data !== 'string') return false;
  return (/^[\d]+$/.test(data));
};
