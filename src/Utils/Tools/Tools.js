export function toArray(obj) {
  let length = 0;
  for (let key in obj) {
    if (+key + 1 > length) length = +key + 1;
  }

  return Array.from(Object.assign({}, obj, { length }));
}

export default function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}