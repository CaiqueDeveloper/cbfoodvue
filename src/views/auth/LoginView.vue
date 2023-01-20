<script setup>
import BaseInputUtils from '@/utils/BaseInputUtils.vue';
import BaseAlertUtils from '@/utils/BaseAlertUtils.vue';
import BaseLoadingUtils from '@/utils/BaseLoadingUtils.vue';
import BaseAuthUtils from '@/utils/BaseAuthUtils.vue';
import AuthComposable from '@/composable/auth.composable'

const {actionLogin,showAlert,title,message,colorName} = AuthComposable();

</script>

<template>
    <BaseAuthUtils>
       <template v-slot:content>
            <div class="content-login">
                <BaseLoadingUtils v-if="showLoading" />
                <BaseAlertUtils v-show="showAlert" :colorName="colorName">
                    <template v-slot:typeAlert>
                        {{ title }}
                    </template>
                    <template v-slot:messageAlert>
                       {{message}}
                    </template>
                </BaseAlertUtils>
                <form @submit.prevent="actionLogin" id="form">
                    <BaseInputUtils label="E-mail" name="email" type="email" />
                    <BaseInputUtils label="Senha" name="password" type="password" />
                    <button type="submit"
                        class=" w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">Entrar</button>
                </form>
            </div>
       </template>
    </BaseAuthUtils>
</template>