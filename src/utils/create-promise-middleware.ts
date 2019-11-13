const PREFIX = '@@promiseAction';

export function createPromiseAction<T = any>(type:string) {
  return (payload:T) => ({ type: `${PREFIX}/${type}`, payload });
}

function isPromiseAction(type:string) {
  return type.indexOf(PREFIX) === 0;
}

export function promiseMiddleware() {
  return (next:any) => (action:any) => {
    const { type } = action;
    if (isPromiseAction(type)) {
      return new Promise((resolve, reject) => {
        next({
          resolve,
          reject,
          ...action,
          type: type.replace(`${PREFIX}/`, ''),
        });
      });
    } else {
      return next(action);
    }
  };
}