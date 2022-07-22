import Axios from 'axios'
import qs from 'qs'
import { message } from 'antd'
import { LOGINOUT_CODES, BASE_URL } from '@/assets/js/enume'
  // Axios.defaults.withCredentials=true
const instance = new Axios.create({
	    withCredentials: true,
	  })
// axios.defaults.withCredentials=true
function checkStatus (res) {
  const loginoutCodes = Object.keys(LOGINOUT_CODES).map(key => LOGINOUT_CODES[key])
  if (res.status >= 200 && res.status < 300) {
    if (res.data.code === 200) {
      return res
    }
    else if (loginoutCodes.indexOf(res.data.code) !== -1) {
      sessionStorage.clear()
      window.location.href = '/#/login'  //登录有了开
    }
  }

  res.response = res
  throw res
}

function catchCB (err) {
  let msg = '异常错误'
  if (err.data) {
    msg = `${err.data.code} ${err.data.msg}`
  }
  return msg
}

function errPrompt (msg) {
  message.destroy()
  message.error(msg)
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} method    The type we want to request
 * @param  {string} url       The URL we want to request
 * @param  {object} data      The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
const fetch = (url, data = {}, method) => {
  // url = `http://192.168.142.128:9889/school${url}`
  url = `http://localhost:9889/school${url}`
  // url = `http://192.168.31.21:9889/school${url}`
  const headers = {}
  // console.log(headers)
  // 当请求为非上传类型时，设置Content-Type
  if (!(data instanceof FormData)) {
    headers['Content-Type'] = 'application/json; charset=UTF-8'
  }

  // 处理参数
  if (method === 'post' || method === 'put') {
    const result = new FormData()
    Object.keys(data).forEach(item => {
      result.append(item, data[item] ? data[item] : '')
    })
    if (method === 'put') {
      url = data ? `${url}?${qs.stringify(data)}` : url
    }
    // 发起请求
    return new Promise((resolve, reject) => {
      instance({
        method,
        url,
        data: result,
        headers,
        // withCredentials: true
      })
        .then(checkStatus)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          const msg = catchCB(err)
          errPrompt(msg)
          reject(err)
        })
    })
  } else {
    // get请求设置参数
    url = data ? `${url}?${qs.stringify(data)}` : url
    // 发起请求

    return new Promise((resolve, reject) => {
      let params ={
        method,
        url,
        // headers,
        // withCredentials: true
      }
      // if(url.indexOf("login")<0){
      //   params.withCredentials = true;
      // }
      instance(params)
        .then(checkStatus)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          const msg = catchCB(err)
          errPrompt(msg)
          reject(err)
        })

    })
  }
}

export default fetch
