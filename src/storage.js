import { createStore } from 'vuex'
import { connection } from '@/store/connection'
import { binary } from '@/store/binary'
import { simple } from '@/store/simple'
import { time } from '@/store/time'

export default createStore({
  modules: {
    connection,
    simple,
    binary,
    time
  },
});
