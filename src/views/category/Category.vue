<script setup>
import CategoryComposable from '@/composable/category/category.composable'
import Modal from '@/components/utils/BaseModalUtils.vue';
import BaseAlertUtils from '@/components/utils/BaseAlertUtils.vue';
import BaseLoadingUtils from '@/components/utils/BaseLoadingUtils.vue';
import BaseInputUtils from '@/components/utils/BaseInputUtils.vue';
import BaseDataTableUtils from '@/components/utils/BaseDataTableUtils.vue';

const { showModal, showAlert, showLoading, actionShowModalCreateNewCategory, closedModal, actionCreate, title, message, classError, columns, categories, options, category, isUpdate,actionUpdate} = CategoryComposable()


</script>
<template>
  <div class="ml-5 mt-5 w-full">
    <h1 class="text-2xl text-gray-900 dark:text-gray-200 font-medium">
      Category
    </h1>
  </div>
  
  <section class="w-full flex justify-between my-6">
    <button type="button" @click="actionShowModalCreateNewCategory"
      class="outline-none text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill mr-2"
        viewBox="0 0 16 16">
        <path
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
      </svg>
      Create new category
    </button>
    <div class="relative w-96">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="voice-search" @keyup.prevent="searchInTable" class="input-search outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Search Mockups, Logos, Design Templates..." required>
    </div>
  </section>
  <!-- Table -->
  <BaseDataTableUtils :data="categories" :columns="columns" :options="options"/>
  <!-- Modal -->
  <Modal v-if="showModal" @closedModal="closedModal">
    <template v-slot:modalTitle>
      <p v-if="!isUpdate">Create new Category</p>
      <p v-else>Update Category</p>
    </template>
    <template v-slot:modalBody>
      <div v-if="!isUpdate">
        <BaseLoadingUtils v-if="showLoading" />
        <BaseAlertUtils v-show="showAlert" :class="classError" :type="title" :message="message" />
        <form @submit.prevent="actionCreate" id="form">
          <BaseInputUtils label="Category" name="name" type="text" />
          <button type="submit"
            class=" w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">Create</button>
        </form>
      </div>
      <div v-else>
        <BaseLoadingUtils v-if="showLoading" />
        <BaseAlertUtils v-show="showAlert" :class="classError" :type="title" :message="message" />
        <form @submit.prevent="actionUpdate" id="form-update">
          <BaseInputUtils label="Category" name="name" type="text" :value="category[0].name"/>
          <BaseInputUtils label="" name="id" type="hidden" :value="category[0].id"/>
          <button type="submit"
            class=" w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">Create</button>
        </form>
      </div>
    </template>
  </Modal>
</template>