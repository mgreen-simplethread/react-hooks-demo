export function filter(obj, cb) {
  const output = {};
  Object.keys(obj)
    .filter((key) => cb(key, obj[key]))
    .forEach((key) => {
      output[key] = obj[key];
    });
  return output;
}

export function pluck(obj, keys) {
  const output = {};
  for (const [key, val] of Object.entries(obj)) {
    if (keys.includes(key)) output[key] = val;
  }
  return output;
}
