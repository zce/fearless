import { Module } from 'vuex'
import { State } from '../state'

interface UserState {
  count: number
}

const mod: Module<UserState, State> = {
  namespaced: true,
  state: {
    count: 0
  },
  getters: {},
  mutations: {},
  actions: {}
}

export default mod
