import request from '@/utils/request'
// 获取关键词列表
export const getKeywordList = (params) => {
  return request('/keyword', params, 'get')
}
// 添加关键词
export const addKeyword = (params) => {
  return request('/keyword', params, 'put')
}
// 编辑关键词
export const editKeyword = (params) => {
  return request('/keyword', params, 'put')
}
// 删除关键词
export const deleteKeyword = (params) => {
  return request('/keyword', params, 'delete')
}