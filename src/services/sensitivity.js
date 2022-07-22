import request from '@/utils/request'
// 获取敏感词列表
export const getSensitivityList = (params) => {
  return request('/get_info', params, 'get')
}