export default function range(data, start, end) {
  let startLength = start || 0;
  let endLength = end || 1000000;
  if (!data) return false;
  if ((data.length - 1) < endLength && (data.length + 1) > startLength) return true;
  return false;
} // range
