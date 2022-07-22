import request from '@/utils/request'
// 获取用户列表
export const getUserList = (params) => {
  return request('/user', params, 'get')
}
// 添加用户
export const addUser = (params) => {
  return request('/user', params, 'post')
}
// 编辑用户
export const editUser = (params) => {
  return request('/user', params, 'put')
}
// 删除用户
export const deleteUser = (params) => {
  return request('/user', params, 'delete')
}