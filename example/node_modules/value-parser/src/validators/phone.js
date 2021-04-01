export default function phone(phone) {
  const regex = /^(\([0-9]{2}\)\s*|[0-9]{4,5}\-)[0-9]{4,5}-[0-9]{4}$/;
  return regex.test(phone);
} // phone
