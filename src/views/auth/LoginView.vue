<script setup>

import BaseInputUtils from '@/components/utils/BaseInputUtils.vue';
import BaseAlertUtils from '@/components/utils/BaseAlertUtils.vue';
import BaseLoadingUtils from '@/components/utils/BaseLoadingUtils.vue';
import AuthComposable from '@/composable/auth/auth-login.composable'

const { actionLogin, showAlert, title, message, classError, register, showLoading } = AuthComposable();

</script>
<template>
    <div class="header-login">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Bem vindo de volta
        </h5>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Não tem uma conta? <a href="#" @click.prevent="register" class="text-orange-700">Inscreva-se.</a>
        </p>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400"> </p>
    </div>
    <div class="content-login">
        <BaseLoadingUtils v-if="showLoading" />
        <BaseAlertUtils v-show="showAlert" :class="classError" :type="title" :message="message" />
        <form @submit.prevent="actionLogin" id="form">
            <BaseInputUtils label="E-mail" name="email" type="email" />
            <BaseInputUtils label="Senha" name="password" type="password" />
            <button type="submit"
                class=" w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">Entrar</button>
        </form>
    </div>
</template>