import { createStore } from 'vuex'
import { auth } from '@/models/auth.module'
import { user } from '@/models/user.module'
import { category } from '@/models/category.module'
export default createStore({
  modules: {
    auth,
    user,
    category,
  }
})
