import {ref} from 'vue'

export default () =>{
    
    const menu = ref(false)
    const menuToggle = ()=>{
      menu.value = !menu.value
    }
    const menuToggleBlur = ()=>{
      menu.value = false
    }
    const sidebarToggle = ()=>{
      document.querySelector(".flex-sidebar").classList.remove("hidden");
    }

    return{
        sidebarToggle,
        menuToggle,
        menuToggleBlur,
        menu
    }
}