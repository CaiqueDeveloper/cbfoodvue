<template>
  <button
    @click="toggleAccordion()"
    class="text-orange-800 dark:text-orange-500 bg-transparent border dark:border-orange-700 dark:hover:bg-orange-700 hover:bg-orange-200 w-full flex text-left rounded-md box-border p-3"
    :aria-expanded="isOpen"
    :aria-controls="`collapse${_uid}`"
    :class="{
      'bg-orange-200 dark:bg-orange-700': isOpen,
      'bg-transparent': !isOpen,
    }"
  >
    <span class="mr-3 text-xl">
      <slot name="icon"></slot>
    </span>
    <span class="w-full">
      <slot name="title" />
    </span>
    <span
      class="box-border mt-1 text-orange-500 dark:text-orange-600"
      :class="{
        'rotate-180': isOpen,
        'rotate-0': !isOpen,
      }"
    >
      <span class="float-right">
        <Icon icon="fa6-solid:angle-down" />
      </span>
    </span>
  </button>

  <div
    v-show="isOpen"
    :id="`collapse${_uid}`"
    class="p-3 mt-2 bg-orange-100 dark:bg-orange-700"
  >
    <slot name="content" />
  </div>
</template>

<script>
  import { Icon } from "@iconify/vue";
  export default {
    data() {
      return {
        isOpen: false,
      };
    },

    methods: {
      toggleAccordion() {
        this.isOpen = !this.isOpen;
      },
    },
    components: {
      Icon,
    },
  };
</script>
