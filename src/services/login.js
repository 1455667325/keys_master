import request from '@/utils/request'
// 获取敏感词列表
export const login = (params) => {
  return request('/login', params, 'get')
}