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
    const classError = ref('')
    const showFormRegisterUser = ref(false)

    const actionRegisterCompany = () => {

        const form = document.getElementById('form_register_company')
        const data = new FormData(form)
    
        showLoading.value = true
        store.dispatch('auth/registerCompany', data).then(() => {
    
            showAlert.value = true
            
            title.value = 'Sucesso!'
            message.value = 'Empresa cadastrada com sucesso iremos lhe redirecionar, aguarde iremos lhe redirecionar para o cadastro de usuário'
            classError.value = 'success'

            setTimeout(()=>{
                showFormRegisterUser.value = true
                showAlert.value = false
            },3000)
            
        }).catch((error) => {
            
            let { emailAndOrPasswordInvalid } = ErrorServices(error)
            const { title:titleError, message:messageError, classError:colorNameError} = emailAndOrPasswordInvalid()[0]
            
            title.value = titleError
            message.value = messageError
            classError.value = 'error'
            if(messageError){
                showAlert.value = true
            }else{
                showAlert.value = false
            }
    
    
        }).finally(() => {
            showLoading.value = false
        })
    
    }
    const actionRegisterUser = ()=>{
        
        showLoading.value = true
        const form = document.getElementById('form_register_user')
        const data = new FormData(form)

        store.dispatch('auth/registerUser', data).then((data) => {

            showAlert.value = true
            
            title.value = 'Sucesso!'
            message.value = 'Usuário cadastradado com sucesso iremos lhe redirecionar, aguarde iremos lhe redirecionar para tela de login'
            classError.value = 'success'
            
            setTimeout(()=>{
                router.push('/dashboard')
            },3000)

        }).catch((error) => {

            let { emailAndOrPasswordInvalid } = ErrorServices(error)
            const { title:titleError, message:messageError, colorName:colorNameError} = emailAndOrPasswordInvalid()[0]
            title.value = titleError
            message.value = messageError
            classError.value = 'error'

        }).finally(() => {
            showLoading.value = false
        })
    }
    const login = () =>{
        router.push('/login')
    }

    return {
        actionRegisterCompany,
        showAlert,
        title,
        message,
        classError,
        login,
        showLoading,
        showFormRegisterUser,
        actionRegisterUser
    }
}