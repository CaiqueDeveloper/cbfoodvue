import UserService from "@/services/user/user.service"
export const user = {
    namespaced: true,

    state: () => ({
        users: [],
        user: [],
        ShowLoading:false
    }),
    mutations: {
        setUser(state, user) {
            state.user = user[0]
    
        },
        setShowLoading(state) {
            state.ShowLoading = true;
        }
    },
    actions: {
        fetchGetUser({ commit }, id) {
           
              
            return UserService.getUser(id).then(
                user =>{
                commit('setUser', user.data)
                commit('setShowLoading', true)
    
                return Promise.resolve(user.data)
            })
        }
    },
    getters: {
        getUser(state){
            return state.user
        },
        getShowLoading(state){
            return state.ShowLoading
        }
    }
}
