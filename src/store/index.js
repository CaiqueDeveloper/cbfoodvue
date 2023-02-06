import { createStore } from 'vuex'
import { auth } from '@/models/auth.module'
import { user } from '@/models/user.module'
import { category } from '@/models/category.module'
import { additional } from '@/models/additional.module'
export default createStore({
  modules: {
    auth,
    user,
    category,
    additional,
  }
})
