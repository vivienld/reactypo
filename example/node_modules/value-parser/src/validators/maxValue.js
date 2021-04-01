export default function maxValue(value, max) {
  value = value * 1;
  if (!value && value != 0) return false;
  if ((value * 1) > (max * 1)) return false;
  return true;
};
