'use strict';

export const foo = 'bar';

export const r2gSmokeTest = () => {
  // r2g command line app uses this exported function
  return true;
};


export type EVCb<T> = (err: any, val?: T) => void;
