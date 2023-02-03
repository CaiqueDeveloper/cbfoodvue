<script setup>
import '@/assets/dependencies/css/datatable/datatable.css'
import DataTable from 'datatables.net-vue3'
import DataTablesLib from 'datatables.net';
DataTable.use(DataTablesLib);

const props = defineProps({
    data:{
        type:Object,
        default: ()=>{}
    },
    columns:{
        type:Object,
        default: ()=>{}
    },
    options:{
        type:Object,
        default: ()=>{}
    },
})
</script>
<template>
    <div class="relative bg-white dark:bg-gray-700 dark:text-gray-400 shadow-md sm:rounded-lg">
        <DataTable :data="data" :columns="columns" class="display w-full text-sm text-left text-gray-500 dark:text-gray-400 " :options="options" ref="table" />
    </div>
</template>