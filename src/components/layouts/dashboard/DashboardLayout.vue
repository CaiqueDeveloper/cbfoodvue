<script setup>

import Sidebar from '@/components/layouts/dashboard/Sidebar.vue'
import Header from '@/components/layouts/dashboard/Header.vue'
import Footer from '@/components/layouts/dashboard/Footer.vue';
import BasePreLoadingUtils from '@/components/utils/BasePreLoadingUtils.vue';
import {useStore} from 'vuex';
import {computed,ref} from 'vue'


const store = useStore();
store.dispatch('user/fetchGetUser')

let user = computed(() => store.getters['user/getUser'])
let showPreLoading = computed(() => store.getters['user/getShowLoading'])

</script>
<template>
    <!-- App -->
    <BasePreLoadingUtils :show="showPreLoading"/>
    
    <div class="flex bg-packed font-lexend dark:bg-gray-900">
        <div id="sidebar-scroll"
            class="flex-sidebar lg:flex-auto w-sidebar lg:block hidden bg-white dark:bg-gray-800 border-r-2 dark:border-gray-700 h-screen lg:z-0 z-40 overflow-auto lg:relative fixed">
            <Sidebar />
        </div>
        <div class="flex-auto w-full overflow-auto h-screen" id="body-scroll">
            <Header :user="user"/>
            <div class="p-6">
                <slot></slot>
            </div>
            <Footer />
        </div>
    </div>
    <!-- end app -->
</template>