import { Getters } from './types'

export default {
  minutes: (state) => Math.floor(state.time / 60),
  seconds: (state) => state.time % 60,
} as Getters
