function makeArray(firstArray, secondArray, maxLength) {
  const combined = firstArray.concat(secondArray);

  return combined.slice(0, maxLength);
}