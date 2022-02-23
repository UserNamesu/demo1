import { extend } from 'umi-request';


/** 异常处理程序 */
const errorHandler = (error: { response: Response }): Response => {
  const { response } = error;
  return response;
};

//  配置request请求时的默认参数 
const request = extend({
  errorHandler, // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
});

export default request;
