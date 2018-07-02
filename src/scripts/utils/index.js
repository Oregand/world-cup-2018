/**
 * Compose
 * @param {fns<any>}
 * @return {fns<any>}
 */
const compose = (...fns) =>
  fns.reverse().reduce((prevFn, nextFn) =>
    value => nextFn(prevFn(value)),
    value => value
  );