import chalk from 'chalk';
import { getShellQuery } from './utils';

interface ProxyMap {
  [propName: string]: string;
}

/** 代理映射关系 */
const proxyMap: ProxyMap = {
  mock: 'http://xxxx',
  xiaoming: 'http://xxxx',
};

/**
 * 切环境改这里
 * eg: npm run start proxy=rdname
 */
const proxyTarget: string = getShellQuery('proxy') ?? proxyMap[0];
console.log(chalk.bold.blue('连接代理服务端： ') + chalk.bold.green(proxyTarget));

/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 */
export default {
  dev: {
    // 这里维护接口代码配置
    '/api': {
      target: proxyMap[proxyTarget],
      changeOrigin: true,
    },
  },
  pre: {},
  mock: {},
};
