<script setup>
import BaseInputUtils from '@/utils/BaseInputUtils.vue';
import BaseAlertUtils from '@/utils/BaseAlertUtils.vue';
import BaseLoadingUtils from '@/utils/BaseLoadingUtils.vue';
import BaseAuthUtils from '@/utils/BaseAuthUtils.vue';
import AuthComposable from '@/composable/auth/auth-requestFreeYourDemo.composable.js'

const { actionLogin, showAlert, title, message, colorName, login,showLoading,showFormRegisterUser, actionRegisterUser} = AuthComposable();

</script>

<template>
    <BaseAuthUtils @eventRegisterOrLogin="login" v-if="showFormRegisterUser == false">
        <template v-slot:title>Cadastro de Empresa.</template>
        <template v-slot:description>Já tem um conta?</template>
        <template v-slot:name_link> Faça seu login.</template>
        <template v-slot:content>
            <div class="content-login">
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
                        <BaseInputUtils label="CNPJ" name="cnpj" type="text" />
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <BaseInputUtils label="E-mail" name="email" type="text" />
                        <BaseInputUtils label="Nª Telefone" name="number_phone" type="text" />
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <BaseInputUtils label="Estado" name="state_registration" type="text" />
                        <BaseInputUtils label="Data de Abertura" name="foundation_date" type="date" />
                    </div>
                    <button type="submit"
                        class=" w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">Cadastrar</button>
                </form>
            </div>
        </template>
    </BaseAuthUtils>
    
    <!-- cadastro de usuário -->
    <BaseAuthUtils @eventRegisterOrLogin="login" v-if="showFormRegisterUser">
        <template v-slot:title>Cadastro de Usuário.</template>
        <template v-slot:description>Já tem um conta?</template>
        <template v-slot:name_link> Faça seu login.</template>
        <template v-slot:content>
            <div class="content-login">
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
                        <BaseInputUtils label="Nª Telefone" name="number_phone" type="text" />
                        <BaseInputUtils label="Telefone alternativo" name="number_phone_alternative" type="text" />
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
    </BaseAuthUtils>
</template>