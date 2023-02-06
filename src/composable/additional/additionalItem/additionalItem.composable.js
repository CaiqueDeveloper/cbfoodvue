import AdditionalItemService from "@/services/additional/additionalItem/additionalItem.service"
import { ref, computed, onMounted } from "vue"
import { useStore } from "vuex"
import ErrorService from "@/services/error/error.service"
export default () =>{

    const showLoading = ref(false)
    const showAlert = ref(false)
    const title = ref('')
    const message = ref('')
    const classError = ref('')
    const showModalAdditionalItem = ref(false)
    const additionals = computed(() => store.getters['additional/getAll']) 
    const actionShowModalItemAdditional = ()=>{
        showModalAdditionalItem.value = true
        
    }
    const closedModalAdditionalItem = ()=>{
        showModalAdditionalItem.value = false
    }
    const actionCreateNewItemAdditional = ()=>{
        
        showLoading.value = true
        const form = document.getElementById('form')
        const data = new FormData(form)
        
        AdditionalItemService.create(data).then((response) =>{
           
            showAlert.value = true
            title.value = ''
            message.value = response.data.message
            classError.value = 'success'
            store.dispatch('additional/fetchAll')
        }).catch((error) =>{

           ErrorService(error)
            
        }).finally(() => showLoading.value = false)
    }
    const actionUpdateItemAdditional = ()=>{
        showLoading.value = true
        const form = document.getElementById('form')
        const data = new FormData(form)
        
        AdditionalItemService.update(data).then((response) =>{
           
            showAlert.value = true
            title.value = ''
            message.value = response.data.message
            classError.value = 'success'
            additionals.value.splice(0,{'id': response.data.data.id, 'name':response.data.data.name})

            store.dispatch('additional/fetchAll')

        }).catch((error) =>{

           ErrorService(error)
            
        }).finally(() => showLoading.value = false)
    }
    return {
        showLoading,
        title,
        message,
        classError,
        showAlert,
        showModalAdditionalItem,
        actionShowModalItemAdditional,
        closedModalAdditionalItem,
        actionCreateNewItemAdditional,
        actionUpdateItemAdditional
    }
}