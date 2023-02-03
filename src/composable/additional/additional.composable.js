import { ref, computed, onMounted } from "vue"
import { useStore } from "vuex"
import ErrorService from "@/services/error/error.service"
import additionalService from "@/services/additional/additional.service"

export default () => {

    const store = useStore()
    const showModal = ref(false)
    const showLoading = ref(false)
    const showAlert = ref(false)
    const title = ref('')
    const message = ref('')
    const classError = ref('')
    const additional = ref({})

    
    return{

        closedModal,
        showModal,
        showAlert,
        showLoading,
        title,
        message,
        classError,
        additional,
    }
}