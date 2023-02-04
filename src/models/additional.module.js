import AdditionalService from "@/services/additional/additional.service"
export const additional = {
    namespaced:true,
    
    state: () =>({
        additionals: [],
        ShowLoading:false
    }),
    mutations:{
        setAdditional(state, data){
            state.additionals = data
        },
        setShowLoading(state, data){
            state.ShowLoading = data
        }
    },
    actions:{

        fetchAll({ commit }) {
            return AdditionalService.getAll().then(
                response => {
                    if(Array.isArray(response.data.data) && response.data.data.length === 0){
                        commit('setAdditional', response.data.data)
                    }else{
                        commit('setAdditional', response.data)
                    }
                    commit('setShowLoading', true)

                    return Promise.resolve(response.data)
                }
            )
        },
        create(data){

            return AdditionalService.create(data).then((response) =>{
                return Promise.resolve(response.data)
            })
        }
    },
    getters:{
        getAll(state){

            return state.additionals
        },
        getShowLoading(state){
           return state.ShowLoading
        }
    },
}