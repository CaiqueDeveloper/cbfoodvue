<script setup>
import { defineProps} from 'vue';

let props = defineProps({
  label:{
    type: String,
    default: ''
  },
  type:{
    type: String,
    default: ''
  },
  value:{
    type: String,
    default: ''
  },
  name:{
    type: String,
    default: ''
  }
})


</script>
<template>
    <div class="mb-6">
        <label for="props.label" 
             class="block mb-2 text-sm font-medium text-gray-700 dark:text-white">
        {{props.label}}
        </label>
        <input 
        class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 outline-none"
            :placeholder="props.label"
            :type="props.type"
            :name="props.name"
            :value="props.value"
        >
    </div>
</template>

sty