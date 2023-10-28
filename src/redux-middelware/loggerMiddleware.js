export const loggerMiddleware = (store) => (next) => (action) => {
  console.log(action);
  return next(action);
};
