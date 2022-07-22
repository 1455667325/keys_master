import request from '@/utils/request'
// 获取敏感词列表
export const getCrawlerList = (params) => {
  return request('/get_spider_status', params, 'get')
}