import { first_operand } from '@/store/binary/first_operand'
import { operation } from '@/store/binary/operation'
import { second_operand }from '@/store/binary/second_operand'
import { result } from '@/store/binary/result'

const binary = {
  modules: {
    first_operand,
    operation,
    second_operand,
    result
  },
  namespaced: true
};

export { binary };
