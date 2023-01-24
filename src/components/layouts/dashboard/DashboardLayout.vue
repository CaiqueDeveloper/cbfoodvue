<script setup>

import Sidebar from '@/components/layouts/dashboard/Sidebar.vue'
import Header from '@/components/layouts/dashboard/Header.vue'
import Footer from '@/components/layouts/dashboard/Footer.vue';

setTimeout(() => {
    var alert_dis = document.querySelectorAll(".alert-dismiss");
    alert_dis.forEach((x) =>
        x.addEventListener("click", function () {
            x.parentElement.classList.add("hidden");
        })
    );
}, 100);
</script>
<template>
    <!-- App -->
    <div class="flex bg-packed font-lexend dark:bg-gray-900">
        <div id="sidebar-scroll"
            class="flex-sidebar lg:flex-auto w-sidebar lg:block hidden bg-white dark:bg-gray-800 border-r-2 dark:border-gray-700 h-screen lg:z-0 z-40 overflow-auto lg:relative fixed">
            <Sidebar />
        </div>
        <div class="flex-auto w-full overflow-auto h-screen" id="body-scroll">
            <Header />
            <div class="p-6">
                <slot></slot>
            </div>
            <Footer />
        </div>
    </div>
    <!-- end app -->
</template>