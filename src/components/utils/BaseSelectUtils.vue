<script setup>

const props = defineProps({

    data: {
        type:Object,
        default: () =>{},
    },
    selected:{
        type: String,
        default: 0
    },
    labelSelect:{
        type:String,
        default: ''
    },
    name:{
        type:String,
        default: ''
    }
})
</script>
<template>
    <div>
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ labelSelect }}</label>
        <select id="countries" :name="props.name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
            <option v-for="value in data" :key="value.id" :value="value.id" :selected="(value.id === selected)">{{
                value.name
            }}</option>
        </select>
    </div>
</template>