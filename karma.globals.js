// let the tests fail if a warning or error is logged
console.warn = (message) => {
  throw new Error(message);
};
console.error = (message) => {
  throw new Error(message);
};
