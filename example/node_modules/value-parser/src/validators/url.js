export default function url(value) {
  if (!value) return false;
  if (typeof value !== 'string') return false;
  return (/^(ftp|http|https):\/\/[^ "]+$/.test(value));
}
