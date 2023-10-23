function map (fn, array) {
  const newArray = [];

  for (const item of array) {
    newArray.push(fn(item));
  }

  return newArray;
}
