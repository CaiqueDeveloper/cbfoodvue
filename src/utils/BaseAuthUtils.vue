<script setup>
import { defineEmits } from 'vue';
const emit = defineEmits(['eventRegisterOrLogin'])

const eventRegisterOrLogin = ()=>{
    emit('eventRegisterOrLogin')
}
</script>
<template>
    <section class="w-screen h-screen bg-slate-100 flex justify-center items-center">
        <div class="w-full mx-auto flex px-2 z-10">
            
            <div class="content-form-are w-full flex justify-center">
                <div class="col-span-full md:w-96 p-6 bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    <div class="header-login mb-4">
                        <img src="../assets/images/icon-page.svg" alt="Logo da Empresa Cbfood" class="mb-3 w-20">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><slot name="title">Bem vindo de volta</slot></h5>
                        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400"><slot name="description">Não tem uma conta? </slot>
                            <a href="#" @click.prevent="eventRegisterOrLogin" class="text-orange-700"><slot name="name_link">Inscreva-se .</slot></a> 
                        </p>
                        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400"><slot name="info_type_register"></slot></p>
                    </div>
                    <slot name="content"></slot>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section::before{
    content: '';
    background-image: url('../assets/images/undraw_online_groceries_a02y.svg');
    background-size: cover;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    /* border-top-left-radius: 100%;
    border-bottom-left-radius: 10%; */
    @apply  sm:w-96 w-56 sm:h-96 h-56 fixed top-2 left-0
}
section::after{
    content: '';
    background-image: url('../assets/images/undraw_appreciation_yy29.svg');
    background-size: cover;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    /* border-top-left-radius: 100%;
    border-bottom-left-radius: 10%; */
    @apply  sm:w-96 w-56 sm:h-96 h-56 fixed -bottom-10 right-0
}
</style>