import { ref, computed, onMounted } from "vue"
import { useStore } from "vuex"
import ErrorService from "@/services/error/error.service"
import CategoryService from "@/services/category/category.service"

export default () => {
    const store = useStore()
    const showModal = ref(false)
    const showLoading = ref(false)
    const showAlert = ref(false)
    const title = ref('')
    const message = ref('')
    const classError = ref('')
    const category = ref({})
    const isUpdate = ref(false)

    store.dispatch('category/fetchAll')
    const categories = computed(() => store.getters['category/getAll']) 
    
    const actionShowModalCreateNewCategory = ()=> {
        showModal.value = true
        showAlert.value = false
    }
    const closedModal = ()=> {
        showModal.value = false
        isUpdate.value = false
    }
    const actionCreate = () =>{

        showLoading.value = true
        const form = document.getElementById('form')
        const data = new FormData(form)
        
        CategoryService.create(data).then((response) =>{
           
            showAlert.value = true
            title.value = ''
            message.value = response.data.message
            classError.value = 'success'
            categories.value.splice(0,{'id': response.data.data.id, 'name':response.data.data.name})

            store.dispatch('category/fetchAll')

        }).catch((error) =>{

           ErrorService(error)
            
        }).finally(() => showLoading.value = false)

    }
    const actionUpdate = () =>{

        showLoading.value = true
        const form = document.getElementById('form-update')
        const data = new FormData(form)
        
        CategoryService.update(data).then((response) =>{
           
            showAlert.value = true
            title.value = ''
            message.value = response.data.message
            classError.value = 'success'
            categories.value.splice(0,{'id': response.data.data.id, 'name':response.data.data.name})

            store.dispatch('category/fetchAll')

        }).catch((error) =>{

           ErrorService(error)
            
        }).finally(() => showLoading.value = false)

    }
    const updateCategory = (id) =>{
        isUpdate.value = true
        showModal.value = true
        showAlert.value = false
        category.value = categories.value.filter(cat => cat.id == id)
        
    }
    const deleteCategory =(id) =>{
        
        categories.value = categories.value.splice(id-id, 1);
        CategoryService.delete(id).then((response) =>{
            
            store.dispatch('category/fetchAll')

        }).catch((error) =>{

           ErrorService(error)
            
        }).finally(() => showLoading.value = false)
    }
    const columns = [
        { data: 'name', title: 'Name' },
        {
          data: null,
          title: 'ACTIONS',
          className: 'text-center',
          render: function (row) {
            return `
            <button data-id="${row.id}" class="btn-update-category text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button>
            <button data-id="${row.id}"  class="btn-delete-category text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </button>
            `
          }
        },
    ]
    const options = {
        scrollX: false,
        paging: true,
        info: false,
        searching: false,
        destroy: true,
        "displayLength": 10,
        drawCallback: function () {
            if (document.readyState != "loading"){

                $('.btn-update-category').on('click',  function (e){
                    e.preventDefault()
                    e.stopImmediatePropagation()
                    
                    const id = $(this).attr('data-id')
                    updateCategory(id)
                    
                })
                $('.btn-delete-category').on('click',  function (e){
                    e.preventDefault()
                    e.stopImmediatePropagation()
                    
                    const id = $(this).attr('data-id')
                    deleteCategory(id)
                    
                })
            }
        },
    }
    
    
    
    //console.log(table)
    return{

        actionShowModalCreateNewCategory,
        closedModal,
        showModal,
        showAlert,
        showLoading,
        actionCreate,
        title,
        message,
        classError,
        columns, 
        categories,
        options,
        category,
        isUpdate,
        actionUpdate
    }
}