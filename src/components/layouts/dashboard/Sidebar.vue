<script setup>
import { Icon } from "@iconify/vue";
import MenuAccordion from "./MenuAccordion.vue";




let props = defineProps({
  menu:{
    type:Object,
    default: ()=>{}
  },
  company:{
    type:Object,
    default: ()=>{}
  },
  companies:{
    type:Object,
    default: ()=>{}
  }
})

const sidebarToggle = () => {
  document.querySelector(".flex-sidebar").classList.add("hidden");
}
</script>

<template>
  <!-- sidebar -->
  <nav class="sidebar bg-white dark:bg-gray-800">
    <!-- sidebar head -->
    <div class="sidebar-head p-4 mt-4">
      <button class="lg:hidden block float-right -mt-7" @click="sidebarToggle">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="25px" height="25px"
          preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
          <path fill="currentColor"
            d="M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781l1.44 1.439L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z" />
        </svg>
      </button>
    </div>
   
    <div class="sidebar-list p-4 mt-4">
      
      <img class="rounded-full w-36 h-36 mx-auto mb-4" src="@/assets/logo.png" alt="image description">

      <select id="companies"
        class="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
        <option v-for="c in companies" :key="c.id" :value="c.id" >{{c.social_reason}}</option>
      </select>
       <!-- sidebar list -->
      <div class="wrap-item mt-4 dark:text-gray-500">
        <div class="item mt-3">
          <menu-accordion v-for="menu in props.menu" :key="menu.id">
            <template v-slot:icon>
              <Icon icon="bi:layout-wtf" />
            </template>
            <template v-slot:title> {{ menu.menu }} </template>
            <template v-slot:content>
              <div v-for="(subMenu) in menu.subMenu" :key="subMenu.name">
                <router-link :to="{'path': subMenu.url}">
                  <button class="w-full text-left rounded-md p-3 hover:bg-indigo-300  hover:text-indigo-800 dark:hover:bg-orange-600 dark:hover:text-white">
                    {{subMenu.name}}
                  </button>
                </router-link>
              </div>
      
            </template>
          </menu-accordion>
        </div>
      </div>

    </div>
  </nav>
</template>
