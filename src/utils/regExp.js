// 邮箱
export const emailPattern = /^\w+@[a-zA-Z0-9]+(?:\.[a-z]{2,4}){1,3}$/
// 电话
export const newPhonePattern = /^1[0-9]{10}$/
// 密码正则验证 必须包含数字、字母、特殊字符，8-16位
export const pwdPattern = /^(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$*%^&\(\)\[\]\{\}\-+=\.]).{8,32}$/