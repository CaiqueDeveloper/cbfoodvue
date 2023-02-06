import { ref, computed, onMounted } from "vue"
import { useStore } from "vuex"
import ErrorService from "@/services/error/error.service"
import AdditionalService from "@/services/additional/additional.service"
import AdditionalItemService from "@/services/additional/additionalItem/additionalItem.service"
import ApplyDataTableService from "@/services/utils/apply-dataTable.service"
export default () => {

    const store = useStore()
    const showModalGroupAdditional = ref(false)
    const showModalAdditionalItem = ref(false)
    const showLoading = ref(false)
    const showAlert = ref(false)
    const isUpdateGroupAdditional = ref(false)
    const isUpdateGroupAdditionalItem = ref(false)
    const title = ref('')
    const message = ref('')
    const classError = ref('')
    const additional = ref({})
    const item = ref({})

    store.dispatch('additional/fetchAll')
    const additionals = computed(() => store.getters['additional/getAll']) 

    const actionShowModalGroupAdditional = () =>{
        showModalGroupAdditional.value = true
        showAlert.value = false
        isUpdateGroupAdditional.value = false
    }
    const closedModalGroupAdditional = () =>{
        showModalGroupAdditional.value = false
    }

    const actionShowModalItemAdditional = ()=>{
        showModalAdditionalItem.value = true
        isUpdateGroupAdditionalItem.value = false
    }
    
    const closedModalAdditionalItem = ()=>{
        showModalAdditionalItem.value = false
    }

    const actionCreateNewGroupAdditional = ()=>{
        showLoading.value = true
        const form = document.getElementById('form')
        const data = new FormData(form)
        
        AdditionalService.create(data).then((response) =>{
           
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
    const actionUpdateGroupAdditional = ()=>{
        showLoading.value = true
        const form = document.getElementById('form')
        const data = new FormData(form)
        
        AdditionalService.update(data).then((response) =>{
           
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
    
    
    const columns = [
        {
            className: 'dt-control',
            width: 50,
            orderable: false,
            data: null,
            defaultContent: `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
            fill="currentColor" class="bi bi-plus-circle-fill cursor-pointer text-indigo-800  hover:text-indigo-300  focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium  text-sm   dark:text-orange-600 dark:focus:ring-orange-700" 
            viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
            </svg>
            `,
        },
        { data: 'name', title: 'Name' },
        {
          data: null,
          title: 'ACTIONS',
          className: 'text-center',
          render: function (row) {
            return `
            <button data-id="${row.id}" class="btn-update-additional text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button>
            <button data-id="${row.id}"  class="btn-delete-additional text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
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

                $('.btn-update-additional').on('click',  function (e){
                    e.preventDefault()
                    e.stopImmediatePropagation()
                    
                    const id = $(this).attr('data-id')
                    updateGroupAdditional(id)
                    
                })
                $('.btn-delete-additional').on('click',  function (e){
                    e.preventDefault()
                    e.stopImmediatePropagation()
                    
                    const id = $(this).attr('data-id')
                    deleteAdditional(id)
                    
                })
            }
        },
    }
    const deleteAdditional =(id) =>{
        
        additionals.value = additionals.value.splice(id-id, 1);
        AdditionalService.delete(id).then((response) =>{
            
            store.dispatch('additional/fetchAll')

        }).catch((error) =>{

           ErrorService(error)
            
        }).finally(() => showLoading.value = false)
    }
    const updateGroupAdditional = (id)=>{

        isUpdateGroupAdditional.value = true
        showModalGroupAdditional.value = true
        showAlert.value = false
        additional.value = additionals.value.filter(addt => addt.id == id)
    }
    var  actions_subTable = ()=>{
        if (document.readyState != "loading"){
    
            $('.btn-update-additional-item').on('click',  function (e){
                e.preventDefault()
                e.stopImmediatePropagation()
                
                const id = $(this).attr('data-id')
                const groupId = $(this).attr('data-group-id')
                updateGroupAdditionalItem(id,groupId)
                
            })
            $('.btn-delete-additional-item').on('click',  function (e){
                e.preventDefault()
                e.stopImmediatePropagation()
                
                const id = $(this).attr('data-id')
                const groupId = $(this).attr('data-group-id')
                deleteAdditionalItem(id,groupId)
                
            })
        }
    }

    const deleteAdditionalItem = (id,groupId) =>{
        const group = additionals.value.filter(gp => gp.id == groupId)
        item.value= group[0].items.filter(it => it.id == id)
        AdditionalItemService.delete(id).then((response) =>{
            
            store.dispatch('additional/fetchAll')

        }).catch((error) =>{

           ErrorService(error)
            
        }).finally(() => showLoading.value = false)
    }
    const updateGroupAdditionalItem = (id,groupId) =>{

        isUpdateGroupAdditionalItem.value = true
        showModalAdditionalItem.value = true
        showAlert.value = false
        const group = additionals.value.filter(gp => gp.id == groupId)
        item.value= group[0].items.filter(it => it.id == id)
        
    }
    // mounted subtable
    $(document).ready(function () {
        function format(d) {
            let row = ''
            for(let i in d.items){
                row += `
                    <tr>
                        <td>${d.items[i].name}</td>
                        <td class="text-center">${d.items[i].description}</td>
                        <td class="text-center">${d.items[i].price}</td>
                        <td class="text-center">${d.items[i].code}</td>
                        <td class="text-center">
                        <button data-id="${d.items[i].id}" data-group-id="${d.id}" class="btn-update-additional-item text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                        </button>
                        <button data-id="${d.items[i].id}" data-group-id="${d.id}" class="btn-delete-additional-item text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </button>
                        </td>
                    </tr>
                `
            }
            let table = `
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th>NAME</th>
                        <th class="text-center">DESCRIPTION</th>
                        <th class="text-center">PRICE</th>
                        <th class="text-center">CODE</th>
                        <th class="text-center">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                ${row}
                </tbody>    
            </table>
            `
           
                
          return table;
        }
        
        var table = $('table').DataTable();
        
        $('table tbody').on('click', 'td.dt-control', function () {
            setTimeout(()=>{
                ApplyDataTableService(actions_subTable)
            },10)
            
            var tr = $(this).closest('tr');
            var row = table.row(tr);

            if (row.child.isShown()) {
                row.child.hide();
                tr.addClass('shown');
               
            } else {
                row.child(format(row.data())).show();
                tr.addClass('shown');
            }
        });
    })
    return{

        showModalGroupAdditional,
        showModalAdditionalItem,
        closedModalGroupAdditional,
        closedModalAdditionalItem,
        showAlert,
        showLoading,
        title,
        message,
        classError,
        additional,
        additionals,
        actionShowModalGroupAdditional,
        actionShowModalItemAdditional,
        actionCreateNewGroupAdditional,
        columns,
        options,
        isUpdateGroupAdditional,
        actionUpdateGroupAdditional,
        isUpdateGroupAdditionalItem,
        item,
    }
}