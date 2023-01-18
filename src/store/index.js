import { createStore } from 'vuex'
import { auth } from '@/models/auth.module'
export default createStore({
  modules: {
    auth
  }
})
