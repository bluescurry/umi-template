import { request as cvResqust } from 'cving';

/** request 的 公共方法 */
export const request = cvResqust({
  env: REACT_APP_ENV,
});
