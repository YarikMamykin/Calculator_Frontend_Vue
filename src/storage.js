import { createStore } from 'vuex'
import { output } from '@/store/output'
import { results } from '@/store/results'
import { connection } from '@/store/connection'
import { inputHandler } from '@/store/inputHandler'

export default createStore({
  modules: {
    output,
    results,
    connection,
    inputHandler
  },
});
