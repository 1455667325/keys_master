import request from '@/utils/request'
// 获取敏感词列表
export const getFullSearchList = (params) => {
  return request('/full_search', params, 'post')
}
