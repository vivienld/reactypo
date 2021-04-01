export default function cep(value) {
  return /^[0-9]{2}[0-9]{3}-[0-9]{3}$/.test(value);
}
