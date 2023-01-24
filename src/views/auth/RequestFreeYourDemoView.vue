<script setup>
import BaseInputUtils from '@/components/utils/BaseInputUtils.vue';
import BaseAlertUtils from '@/components/utils/BaseAlertUtils.vue';
import BaseLoadingUtils from '@/components/utils/BaseLoadingUtils.vue';
// import BaseAuthUtils from '@/components/utils/BaseAuthUtils.vue';
import AuthComposable from '@/composable/auth/auth-requestFreeYourDemo.composable.js'


const {showAlert, title, message, colorName, login,showLoading,showFormRegisterUser, actionRegisterUser,actionRegisterCompany} = AuthComposable();

</script>

<template>
    <div class="content-form-register-company" v-if="showFormRegisterUser == false">
        <div class="header-login">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Cadastro de Empresa.
            </h5>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Já tem um conta? <a href="#"  @click.prevent="login" class="text-orange-700">Faça seu login.</a>
            </p>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400"> </p>
        </div>
        <BaseLoadingUtils v-if="showLoading" />
        <BaseAlertUtils v-show="showAlert" :colorName="colorName">
            <template v-slot:typeAlert>
                {{ title }}
            </template>
            <template v-slot:messageAlert>
                {{ message }}
            </template>
        </BaseAlertUtils>
        <form @submit.prevent="actionRegisterCompany" id="form_register_company">
            <div class="grid md:grid-cols-2 md:gap-6">
                <BaseInputUtils label="Razão social" name="social_reason" type="text" />
                <BaseInputUtils label="CNPJ" name="cnpj" type="text" v-mask="['###.###.###-##', '##.###.###/####-##']" />
            </div>
    
            <div class="grid md:grid-cols-2 md:gap-6">
                <BaseInputUtils label="E-mail" name="email" type="text" />
                <BaseInputUtils label="Nª Telefone" name="number_phone" type="text"
                    v-mask="['(##) ####-####', '(##) #####-####']" />
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
                <BaseInputUtils label="Estado" name="state_registration" type="text" />
                <BaseInputUtils label="Data de Abertura" name="foundation_date" type="date" />
            </div>
            <button type="submit"
                class=" w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">Cadastrar</button>
        </form>
    </div>
    <div class="content-form-register-user-company" v-if="showFormRegisterUser">
        <div class="header-login">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Cadastro de Usuário.
            </h5>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Já tem um conta? <a href="#"  @click.prevent="login" class="text-orange-700">Faça seu login.</a>
            </p>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400"> </p>
        </div>
        <BaseLoadingUtils v-if="showLoading" />
        <BaseAlertUtils v-show="showAlert" :colorName="colorName">
            <template v-slot:typeAlert>
                {{ title }}
            </template>
            <template v-slot:messageAlert>
                {{ message }}
            </template>
        </BaseAlertUtils>
        <form @submit.prevent="actionRegisterUser" id="form_register_user">
            <div class="grid md:grid-cols-2 md:gap-6">
                <BaseInputUtils label="Nome" name="name" type="text" />
                <BaseInputUtils label="E-mail" name="email" type="text" />
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
                <BaseInputUtils label="Nª Telefone" name="number_phone" type="text"
                    v-mask="['(##) ####-####', '(##) #####-####']" />
                <BaseInputUtils label="Telefone alternativo" name="number_phone_alternative" type="text"
                    v-mask="['(##) ####-####', '(##) #####-####']" />
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
                <BaseInputUtils label="Senha" name="password" type="password" />
                <BaseInputUtils label="Confirmação da senha" name="password_confirmed" type="password" />
            </div>
            <button type="submit"
                class=" w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">Cadastrar</button>
        </form>
    </div>
</template>