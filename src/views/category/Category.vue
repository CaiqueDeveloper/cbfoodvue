<script setup>
import CategoryComposable from '@/composable/category/category.composable'
import Modal from '@/components/utils/BaseModalUtils.vue';
import BaseAlertUtils from '@/components/utils/BaseAlertUtils.vue';
import BaseLoadingUtils from '@/components/utils/BaseLoadingUtils.vue';
import BaseInputUtils from '@/components/utils/BaseInputUtils.vue';
import DataTable from 'datatables.net-vue3'
import DataTablesLib from 'datatables.net';
DataTable.use(DataTablesLib);

const { showModal, showAlert, showLoading, actionShowModalCreateNewCategory, closedModal, actionCreate, title, message, classError, columns, categories, options} = CategoryComposable()


</script>
<template>
  <div class="ml-5 mt-5 w-full">
    <h1 class="text-2xl text-gray-900 dark:text-gray-200 font-medium">
      Category
    </h1>
  </div>
  <button @click="actionShowModalCreateNewCategory" class="mb-4">Show Modal</button>

  <!-- Table -->
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <DataTable :data="categories" :columns="columns"
      class="display w-full text-sm text-left text-gray-500 dark:text-gray-400 "
      :options="options" ref="table" />
  </div>

  <!-- Modal -->
  <Modal v-if="showModal" @closedModal="closedModal">
    <template v-slot:modalTitle>
      Create new category
    </template>
    <template v-slot:modalBody>
      <div>
        <BaseLoadingUtils v-if="showLoading" />
        <BaseAlertUtils v-show="showAlert" :class="classError" :type="title" :message="message" />
        <form @submit.prevent="actionCreate" id="form">
          <BaseInputUtils label="Category" name="name" type="text" />
          <button type="submit"
            class=" w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">Create</button>
        </form>
      </div>
    </template>
  </Modal>
</template>

<style>
table thead,
table tbody,
table thead tr,
table tbody tr {
  @apply text-xs border-b dark:border-b-gray-800 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400;
}

table thead tr th,
table tbody tr td {
  @apply px-6 py-3 
}
</style>