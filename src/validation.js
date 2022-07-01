const isLengthLessThen = (arr, length) => {
  return !arr.find(value => value.length >= length);
};

export { isLengthLessThen };
