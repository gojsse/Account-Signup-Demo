<script setup>
import { inject } from 'vue'
import FieldInputEmail from '../forms/FieldInputEmail.vue'
import FieldInputPhone from '../forms/FieldInputPhone.vue'
import FieldInputText from '../forms/FieldInputText.vue'
import FormStep from './FormStep.vue'
import LinkButton from '@/components/common/LinkButton.vue'

const form = inject('form')
</script>

<template>
  <FormStep
    :title="'Personal Info'"
    :help-text="'Please provide your name, email address and phone number'"
  >
    <FieldInputText :value="form.formState.user.name" :update="form.updateUserInput" />
    <FieldInputEmail :value="form.formState.user.email" :update="form.updateUserInput" />
    <FieldInputPhone :value="form.formState.user.phone" :update="form.updateUserInput" />
    <template #footer>
      <div class="flex justify-end items-center mt-auto">
        <LinkButton link="/form/plan" type="primary"> Next Step </LinkButton>
      </div>
    </template>
  </FormStep>
</template>
