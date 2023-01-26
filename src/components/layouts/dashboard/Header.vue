
<script setup>
import HeaderComposable from '@/composable/layout/header.composable.js'
import BaseDarModeButtonUtils from "@/components/utils/BaseDarModeButtonUtils.vue";
import { Icon } from "@iconify/vue";
import { defineProps } from 'vue';

const { sidebarToggle, menuToggle, menuToggleBlur, menu } = HeaderComposable();

let props = defineProps({
  user: Object,
  default: () => { }
})

</script>
<template>
  <!-- this header -->
  <header class="bg-white dark:bg-gray-800 p-2 border-b-2 dark:border-gray-700">

    <div class="wrap-header flex items-center justify-between flex-wrap">
      <div class="flex flex-no-shrink items-center">
        <button class="text-gray-500 lg:hidden ml-3 block" @click="sidebarToggle">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em"
            preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5" />
          </svg>
        </button>
        <h2 class="text-md text-indigo-800 ml-3 lg:block hidden px-5 p-2 rounded-md bg-indigo-200">
          Welcome back, {{ props.user.name }}
        </h2>
      </div>
      <div class="mr-5 flex">

        <BaseDarModeButtonUtils />

        <button class="mr-5 text-2xl text-gray-500">
          <Icon icon="clarity:notification-line" />
        </button>
        <button @click="menuToggle" @blur="menuToggleBlur">
          <div class="user-avatar flex hover:bg-gray-100 dark:hover:bg-gray-700 p-1 cursor-pointer rounded-md">
            <div v-if="props.user.image === []">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-person-circle rounded-full mr-4 w-10 h-10 p-1 ring-1 ring-gray-300 dark:ring-gray-500"
                viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
              </svg>
            </div>
            <div v-else>
              <img src="" class="rounded-full mr-4 w-10 h-10 p-1 ring-1 ring-gray-300 dark:ring-gray-500" alt="" />
            </div>
            <span class="text-md mt-4 text-gray-300">
              <Icon icon="bi:caret-down-fill" />
            </span>
          </div>
        </button>

        <transition name="fade">
          <div id="dropdownSmall" v-show="menu"
            class="block absolute right-10 mt-12 z-10 w-44 border dark:border-gray-700 bg-white dark:bg-gray-800 rounded divide-y dark:divide-gray-700 divide-gray-100 shadow">
            <div class="py-3 px-4 text-sm text-gray-900 dark:text-gray-200">
              <div>Logged As</div>
              <div class="font-medium truncate">{{ props.user.name }}</div>
            </div>
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSmallButton">

              <li>
                <a href="#" class="block py-2 px-4 hover:bg-primary hover:text-white">Github</a>
              </li>
            </ul>
            <div class="py-1">
              <a href="#"
                class="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white">Sign
                out</a>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>


