import { first_operand } from '@/store/time/first_operand'
import { operation } from '@/store/time/operation'
import { second_operand }from '@/store/time/second_operand'
import { result } from '@/store/time/result'

const time = {
  modules: {
    first_operand,
    operation,
    second_operand,
    result
  },
  namespaced: true
};

export { time };
