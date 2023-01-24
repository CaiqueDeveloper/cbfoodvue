<script setup>

import { useRouter } from 'vue-router';
import { computed } from '@vue/reactivity';
const  {currentRoute} = useRouter();

const DefaultLayout = 'dashboard';
const layout = computed(
  () => `${currentRoute.value.meta.layout || DefaultLayout}-layout`
)

</script>
<template>
      <component :is="layout">
        <RouterView />
      </component>
</template>
