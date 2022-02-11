import { createStore } from 'vuex'
import { connection } from '@/store/connection'
import { binary } from '@/store/binary'
import { simple } from '@/store/simple'

export default createStore({
  modules: {
    connection,
    simple,
    binary
  },
});
