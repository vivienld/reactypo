import Format from '../../../Format';
export default function minValue(value, min) {
  value = Format().number(value);
  if (!value && value != 0) return false;
  if ((value * 1) < (min * 1)) return false;
  return true;
} // minValue
