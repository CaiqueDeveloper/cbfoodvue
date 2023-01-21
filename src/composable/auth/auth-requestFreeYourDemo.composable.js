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
    const showFormRegisterUser = ref(false)

    const actionRegisterCompany = () => {

        const form = document.getElementById('form_register_company')
        const data = new FormData(form)
    
        showLoading.value = true
        store.dispatch('auth/registerCompany', data).then(() => {
    
            showAlert.value = true
            
            title.value = 'Sucesso!'
            message.value = 'Empresa cadastrada com sucesso iremos lhe redirecionar, aguarde iremos lhe redirecionar para o cadastro de usuário'
            colorName.value = 'green'

            setTimeout(()=>{
                showFormRegisterUser.value = true
                showAlert.value = false
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
    const actionRegisterUser = ()=>{
        
        showLoading.value = true
        const form = document.getElementById('form_register_user')
        const data = new FormData(form)

        store.dispatch('auth/registerUser', data).then((data) => {

            showAlert.value = true
            
            title.value = 'Sucesso!'
            message.value = 'Usuário cadastradado com sucesso iremos lhe redirecionar, aguarde iremos lhe redirecionar para tela de login'
            colorName.value = 'green'
            
            setTimeout(()=>{
                router.push('/')
            },3000)

        }).catch((error) => {

            let { emailAndOrPasswordInvalid } = ErrorServices(error)
            const { title:titleError, message:messageError, colorName:colorNameError} = emailAndOrPasswordInvalid()[0]
            title.value = titleError
            message.value = messageError
            colorName.value = colorNameError

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
        colorName,
        login,
        showLoading,
        showFormRegisterUser,
        actionRegisterUser
    }
}