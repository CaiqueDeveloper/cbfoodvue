<script setup>
import { defineProps } from 'vue';

let props = defineProps({
    show:{
        type:Boolean,
        default: false
    }
})

</script>
<template>
    
    <div class="bg-slate-100 fixed top-0 lef-0 w-screen h-screen z-[100] flex flex-col items-center justify-center" v-if="!props.show">

        <img src="@/assets/images/icon-page.svg" alt="Logo da Empresa Cbfood" class="mb-4 w-20 animate-bounce">
        
    </div>
</template>