import CategoryService from "@/services/category/category.service"
export const category = {
    namespaced:true,
    
    state: () =>({
        categories: [],
        ShowLoading:false
    }),
    mutations:{
        setCategories(state, data){
            state.categories = data
        },
        setShowLoading(state, data){
            state.ShowLoading = data
        }
    },
    actions:{

        fetchAll({ commit }) {
            return CategoryService.getAll().then(
                response => {
                    commit('setCategories', response.data)
                    commit('setShowLoading', true)

                    return Promise.resolve(response.data)
                }
            )
        },
        create(data){

            return CategoryService.create(data).then((response) =>{
                return Promise.resolve(response.data)
            })
        }
    },
    getters:{
        getAll(state){

            return state.categories
        },
        getShowLoading(state){
           return state.ShowLoading
        }
    },
}