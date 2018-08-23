// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Error from '../../../app/middleware/error';
import Log from '../../../app/middleware/log';

declare module 'egg' {
  interface IMiddleware {
    error: typeof Error;
    log: typeof Log;
  }
}
