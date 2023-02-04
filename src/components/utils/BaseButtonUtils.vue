
<template>
    <button 
        class="outline-none text-indigo-800 bg-indigo-200 hover:bg-indigo-300 dark:text-white  focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
        <slot name="icon" v-if="$slots.icon"/>
        <slot />
      </button>
</template>
