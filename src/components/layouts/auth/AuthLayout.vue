
<script setup>
import BaseDarModeButtonUtils from "@/components/utils/BaseDarModeButtonUtils.vue";
</script>
<template>
    <section class="w-screen h-screen bg-slate-100 flex justify-center items-center  dark:bg-gray-800 dark:border-gray-700">
        <div class="w-full mx-auto flex px-2 z-10">
            
            <div class="content-form-are w-full flex justify-center">
                
                <div
                    class="col-span-full md:w-96 p-6 bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    
                    <div class="header-login mb-4 relative">
                        <BaseDarModeButtonUtils class="absolute right-0"/>
                        <img src="@/assets/images/icon-page.svg" alt="Logo da Empresa Cbfood" class="mb-3 w-20">
                    </div>
                    <slot></slot>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section::before {
    content: '';
    background-image: url('@/assets/images/undraw_online_groceries_a02y.svg');
    background-size: cover;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    /* border-top-left-radius: 100%;
    border-bottom-left-radius: 10%; */
   
}

section::after {
    content: '';
    background-image: url('@/assets/images/undraw_appreciation_yy29.svg');
    background-size: cover;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    /* border-top-left-radius: 100%;
    border-bottom-left-radius: 10%; */
    
}
</style>