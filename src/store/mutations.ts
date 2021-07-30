import { MutationTree } from 'vuex'
import { State } from './state'
import { CHANGE_TITLE, CHANGE_SESSION, TOGGLE_SIDEBAR_COLLAPSE, INCREMENT, DECREMENT } from './mutation-types'

const mutations: MutationTree<State> = {
  /**
   * 改变页面标题
   */
  [CHANGE_TITLE]: (state, title) => {
    state.title = title
  },

  /**
   * 改变客户端会话信息
   */
  [CHANGE_SESSION]: (state, session) => {
    // TODO: new session mixin
    Object.assign(state.session, session)
  },

  /**
   * 切换边栏的展开收起
   */
  [TOGGLE_SIDEBAR_COLLAPSE]: state => {
    state.sidebarCollapsed = !state.sidebarCollapsed
  },

  // ==================== DEMO ====================

  /**
   * 增加计数器计数
   */
  [INCREMENT]: state => {
    state.count++
  },

  /**
   * 减少计数器计数
   */
  [DECREMENT]: state => {
    state.count--
  }
}

export default mutations
