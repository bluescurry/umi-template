import { request } from '@/utils/request';

export async function getConstant() {
  return request<API.ConstantData>(
    'http://yapi.sftcwl.com/mock/813/market/datareport/analysis/suglist',
    {
      method: 'POST',
    },
  );
}
