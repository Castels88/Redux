export const middleWare = (store) => (next) => (action) => {
  console.log("received action ", action);

  const result = next(action);

  return result;
};
