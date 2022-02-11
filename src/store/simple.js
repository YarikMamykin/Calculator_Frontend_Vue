import { output } from '@/store/simple/output'
import { results } from '@/store/simple/results'
import { inputHandler } from '@/store/simple/inputHandler'

const simple = {
  modules: {
    output,
    results,
    inputHandler
  },
  namespaced: true
};

export { simple };
