import { Tooltip } from 'antd'
import CryptoJS from 'crypto-js'
/**
 * 扁平化树形数据
 * @param  treeList Array
 * @return list Array
 */
 export const getFlatList = (treeList) => {
  const list = []
  treeList && flatTreeList(treeList, data => {
    list.push(data)
  })
  return list
}

/**
 * 将树形数据递归扁平化为一维数组
 * @param  treeList Array 树形数据
 * @param  handler Fucntion 回调函数
 */
 const flatTreeList = (treeList, handler) => {
  treeList && treeList.forEach(item => {
    const { children, childrenNode } = item
    handler(item)
    children ? flatTreeList(children, handler) : (childrenNode && flatTreeList(childrenNode, handler))
  })
}

/**
 * 获取页面路由的数据
 */
 export const getLinkSaveUrl = () => {
  const links = sessionStorage.getItem('links')
  const active = sessionStorage.getItem('active')
  return { active, links: JSON.parse(links) || [] }
}

// 解析URL中的参数
export const analysisUrl = (url) => {
  if (!url || !url.includes('?')) return {}
  let init = {}
  let Arr = url.split('?')[1].split('&')
  for (let i of Arr) {
    const arr = i.split('=')
    const key = arr[0]
    let value = arr[1]
    if (arr.length >= 3) {
      value = arr.splice(1, arr.length).fill('=', arr.length).join('')
    }
    // 属于这些参数就进行解码
    const decodeURIID = []
    if (decodeURIID.includes(key)) {
      init[key] = value ? decodeURIComponent(value) : ''
    } else {
      init[key] = value
    }
  }
  return init
}

/**  气泡
 * @param text 要显示的内容，不能翻译接口数据，不然会出现用户输入和展现的不一致
 */
 export const TooltipFn = text => {
  return (
    <Tooltip getPopupContainer={triggerNode => triggerNode.parentNode} placement="topLeft" title={text || ''}>
      {(text || text === 0) ? text : '--'}
    </Tooltip>
  )
}

/**
 * 查找节点下所有子节点升级
 * @param data {Object} 设备类型树
 * @param arr {Array}
 * @returns stringIdArr {Array} 子节点ID的集合
 */
 export const subNodeQuery = data => arr => {
  if (data && arr) {
    return [...arr.map(item => findSubNodeStringIds(data, item))].flat(Infinity)
    // return flattenDeep([...arr.map(item=>findSubNodeStringIds(data, item))])
  }
  return void (0)
}
/**
 * 查找节点下所有子节点
 * @param data {Object} 设备类型树
 * @param stringId {String}
 * @returns stringIdArr {Array} 子节点ID的集合
 */
export const findSubNodeStringIds = (data, stringId) => {
  let stringIdArr = []
  let findNodeData = findNodeByStringID(data, stringId)
  if (findNodeData) {
    foreachNode(findNodeData, (nodeData) => {
      stringIdArr.push(nodeData.stringId)
    })
  }
  return stringIdArr
}

/**
 * 查找节点树
 * @param data {Object} 设备类型树
 * @param stringId {String} 节点ID
 * @returns rootNode {Object} 节点树
 */
 export function findNodeByStringID (data, stringId) {
  //此处 findNodeList 充当队列的作用
  let findNodeList = []
  findNodeList.push(data)
  while (findNodeList.length > 0) {
    let rootNode = findNodeList[0]
    if (rootNode.stringId === stringId) {
      return rootNode
    }
    //清除队列中的第一个元素
    findNodeList.shift()
    let childrenNode = rootNode.childrenNode
    if (childrenNode) {
      childrenNode.forEach(item => {
        findNodeList.push(item)
      })
    }
  }
}

/* 判断内容是否为空
 * @param s 要判断的内容
 * @return Boolean
 */
export const isEmpty = (s) => {
  return s === null || typeof s === 'undefined' || (typeof s === 'string' && s.replace(/\s*/g, '') === '')
}

/**
   * 生成验证规则
   * @param max 最多字符数
   * @param rules {Array} 验证规则
   * @returns {*[]}
   */
 export const generateRules = (max = 30, rules = []) => {
  return [
    { max, message: `最多输入${max}个字符！` },
    { whitespace: true, message: '不能为空字符！' },
    ...rules
  ]
}

/**
* 加密
* @method encrypt
* @param  String word 待加密数据
*/
export const encrypt = (word) => {
  const key = CryptoJS.enc.Utf8.parse('abcdefgabcdefg12')
  const srcs = CryptoJS.enc.Utf8.parse(word)
  const encrypted = CryptoJS.AES.encrypt(srcs, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 })
  return encrypted.toString()
}

export function clearCookie() {
   var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
   if (keys) {
      for (var i = keys.length; i--;) {
            // 获取不到django设置的cookie
            document.cookie = keys[i] + '=0;path=/;expires=' + new Date(0).toUTCString();//清除当前域名下的,例如：m.kevis.com
            // document.cookie = keys[i] + '=0;path=/;domain=' + document.domain + ';expires=' + new Date(0).toUTCString();//清除当前域名下的，例如 .m.kevis.com
            // document.cookie = keys[i] + '=0;path=/;domain=kevis.com;expires=' + new Date(0).toUTCString();//清除一级域名下的或指定的，例如 .kevis.com
      }
  }
}
