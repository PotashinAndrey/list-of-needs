export default function toArray(obj) {
  let length = 0;
  for (let key in obj) {
    if (+key + 1 > length) length = +key + 1;
  }

  return Array.from(Object.assign({}, obj, { length }));
}