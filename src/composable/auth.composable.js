import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import ErrorServices from '@/services/error/error.service'

export default () => {

    const store = useStore()
    const router = useRouter()

    //define variables
    const showAlert = ref(false)
    const showLoading = ref(false)
    const title = ref('')
    const message = ref('')
    const colorName = ref('')

    const actionLogin = () => {

        const form = document.getElementById('form')
        const data = new FormData(form)
    
        showLoading.value = true
        store.dispatch('auth/login', data).then(() => {
    
            showAlert.value = true
            title.value = 'Sucesso!'
            message.value = 'Login efetuado com sucesso iremos lhe redirecionar, aguarde.'
            colorName.value = 'blue'
    
            setTimeout(()=>{
                router.push('/')
            },3000)
            
        }).catch((error) => {
    
            let { emailAndOrPasswordInvalid } = ErrorServices(error)
            const { title:titleError, message:messageError, colorName:colorNameError} = emailAndOrPasswordInvalid()[0]
            
            title.value = titleError
            message.value = messageError
            colorName.value = colorNameError
            if(messageError){
                showAlert.value = true
            }else{
                showAlert.value = false
            }
    
    
        }).finally(() => {
            showLoading.value = false
        })
    
    }
    const register = () =>{
        router.push('/requestFreeYourDemo')
    }

    return {
        actionLogin,
        showAlert,
        title,
        message,
        colorName,
        register
    }
}