<script setup>
import BaseAlertUtils from '@/components/utils/BaseAlertUtils.vue';
import BaseInputUtils from '@/components/utils/BaseInputUtils.vue';
import BaseLoadingUtils from '@/components/utils/BaseLoadingUtils.vue';
import BaseButtonUtilsVue from '@/components/utils/BaseButtonUtils.vue';
import BaseSelectUtils from "@/components/utils/BaseSelectUtils.vue"
import Modal from '@/components/utils/BaseModalUtils.vue';
import BaseDataTableUtils from '@/components/utils/BaseDataTableUtils.vue';
import AdditionalComposable from '@/composable/additional/additional.composable';

import { VMoney } from 'v-money';
const {
    actionShowModalGroupAdditional,
    showModalGroupAdditional,
    closedModalGroupAdditional,
    closedModalAdditionalItem,
    actionCreateNewGroupAdditional,
    isUpdateGroupAdditional,
    actionUpdateGroupAdditional,
    showAlert,
    showLoading,
    title,
    message,
    classError,
    additional,
    additionals,
    columns,
    options,
    isUpdateGroupAdditionalItem, 
    item,
    showModalAdditionalItem,
    actionShowModalItemAdditional,
    actionUpdateItemAdditional,
    actionCreateNewItemAdditional,
  } = AdditionalComposable()
  const settingFormatCurrency =  {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        suffix: "",
        precision: 2,
        masked: false /* doesn't work with directive */,
    }
  const vMoney3 = {
    created() {
      money: VMoney
    },
  }
</script>

<template>
  
  <div class="ml-5 mt-5 w-full">
    <h1 class="text-2xl text-gray-900 dark:text-gray-200 font-medium">
      Additional
    </h1>
  </div>
  <section class="w-full flex justify-between my-6">
    <div class="content-button">
      <BaseButtonUtilsVue @click.prevent="actionShowModalGroupAdditional">
        <template v-slot:icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill mr-2"
            viewBox="0 0 16 16">
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>
        </template>
        Create new group additional
      </BaseButtonUtilsVue>
      <BaseButtonUtilsVue @click.prevent="actionShowModalItemAdditional">
        <template v-slot:icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill mr-2"
            viewBox="0 0 16 16">
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>
        </template>
        Create new item additional
      </BaseButtonUtilsVue> 
    </div>
    <div class="relative w-96">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"></path>
        </svg>
      </div>
      <input type="text" id="voice-search"
        class="input-search outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
        placeholder="Search Mockups, Logos, Design Templates..." required>
    </div>
  </section>

  <!-- Table -->
  <BaseDataTableUtils :data="additionals" :columns="columns" :options="options"/>

  <!-- Modal Create Group Additional -->
  <Modal v-if="showModalGroupAdditional" @closedModal="closedModalGroupAdditional">
    <template v-slot:modalTitle>
      <p v-if="!isUpdateGroupAdditional">Create new group additional</p>
      <p v-else>Update group additional</p>
    </template>
    <template v-slot:modalBody>
      <div v-if="!isUpdateGroupAdditional">
        <BaseLoadingUtils v-if="showLoading" />
        <BaseAlertUtils v-show="showAlert" :class="classError" :type="title" :message="message" />
        <form @submit.prevent="actionCreateNewGroupAdditional" id="form">
          <BaseInputUtils label="Group name" name="name" type="text" />
          <BaseButtonUtilsVue type="submit" class="w-full justify-center">Create group additional</BaseButtonUtilsVue> 
        </form>
      </div>
      <div v-else>
        <BaseLoadingUtils v-if="showLoading" />
        <BaseAlertUtils v-show="showAlert" :class="classError" :type="title" :message="message" />
        <form @submit.prevent="actionUpdateGroupAdditional" id="form">
          <BaseInputUtils label="Group name" name="name" type="text" :value="additional[0].name"  />
          <BaseInputUtils label="" name="id" type="hidden" :value="additional[0].id" />
          <BaseButtonUtilsVue type="submit" class="w-full justify-center">Update group additional</BaseButtonUtilsVue> 
        </form>
      </div>
    </template>
  </Modal>

  <!-- Modal Create Itens Additional -->
  <Modal v-if="showModalAdditionalItem" @closedModal="closedModalAdditionalItem">
    <template v-slot:modalTitle>
      <p v-if="!isUpdateGroupAdditionalItem">Create new additional item</p>
      <p v-else>Update additional item</p>
    </template>
    <template v-slot:modalBody>
      <BaseLoadingUtils v-if="showLoading" />
        <BaseAlertUtils v-show="showAlert" :class="classError" :type="title" :message="message" />
      <div v-if="!isUpdateGroupAdditionalItem">
        

        <form @submit.prevent="actionCreateNewItemAdditional" id="form">
          <div class="grid md:grid-cols-2 md:gap-6">
            <BaseInputUtils label="Name" name="name" type="text" />
            <BaseInputUtils label="Description" name="description" type="text"  />
          </div>
      
          <div class="grid md:grid-cols-2 md:gap-6">
            <BaseInputUtils label="Price" name="price" type="text"  v-money="settingFormatCurrency"/>
            <BaseInputUtils label="Code" name="code" type="text" />
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <BaseSelectUtils 
              :name="'additional_id'" 
              :labelSelect="'Select an group additional'" 
              :data="additionals" 
            />
            <BaseSelectUtils 
              :name="'status'" 
              :labelSelect="'Status'" 
              :data="[{'id':0,'name': 'Disable'}, {'id':1, 'name':'Enable'}]" 
            />
          </div>
          <BaseButtonUtilsVue type="submit" class="w-full justify-center mt-6">Create item additional</BaseButtonUtilsVue> 
        </form>
      </div>
      <div v-else>
        <form @submit.prevent="actionUpdateItemAdditional" id="form">
          <div class="grid md:grid-cols-2 md:gap-6">
            <BaseInputUtils label="Name" name="name" type="text" :value="item[0].name"/>
            <BaseInputUtils label="Description" name="description" type="text"  :value="item[0].description"/>
          </div>
      
          <div class="grid md:grid-cols-2 md:gap-6">
            <BaseInputUtils label="Price" name="price" type="text" :value="item[0].price" v-money="settingFormatCurrency" />
            <BaseInputUtils label="Code" name="code" type="text" :value="item[0].code" />
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <BaseSelectUtils 
              :name="'additional_id'" 
              :labelSelect="'Select an group additional'" 
              :data="additionals" 
              :selected="item[0].additional_id"
            />
            <BaseSelectUtils 
              :name="'status'" 
              :labelSelect="'Status'" 
              :data="[{'id':0,'name': 'Disable'}, {'id':1, 'name':'Enable'}]" 
              :selected="item[0].status"
            />
            
          </div>
          <BaseInputUtils label="" name="id" type="hidden" :value="item[0].id" />
          <BaseButtonUtilsVue type="submit" class="w-full justify-center mt-6">Update item additional</BaseButtonUtilsVue> 
        </form>
      </div>
    </template>
  </Modal>
</template>

