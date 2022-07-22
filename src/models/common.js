import { routerRedux } from 'dva/router'
import api from '@/services'
export default {
  namespace: 'common',
  state: {
  },

  effects: {
    * login ({ payload }, { call, put, select }) {
      const data = yield call(api.login, payload)
      yield put({ type: 'save', payload: { userInfo: data.body || {} } })
      yield put(routerRedux.push('/sensitivity'))
    }
  },
  reducers: {
    save (state, { payload }) {
      return { ...state, data: payload }
    }
  }
}