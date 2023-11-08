<script setup>
import router from '@/router'
import { inject, onMounted } from 'vue'
import GroupCheckbox from '../forms/GroupCheckbox.vue'
import FormStep from './FormStep.vue'
import LinkButton from '@/components/common/LinkButton.vue'
import { formData } from '@/data/formData'

const form = inject('form')

onMounted(() => {
  if (!form.formState.canSubmit) {
    router.push('/form')
  }
})
</script>

<template>
  <FormStep :title="'Pick Add-ons'" :help-text="'Add-ons help enhance your gaming experience.'">
    <GroupCheckbox
      class="mb-6"
      :options="formData.addOns"
      :selected="form.formState.addOns"
      :update="form.updateValue"
    />
    <template #footer>
      <div class="flex justify-between items-center mt-auto">
        <LinkButton link="/form/plan" type="link"> Go Back </LinkButton>
        <LinkButton link="/form/summary" type="primary"> Next Step </LinkButton>
      </div>
    </template>
  </FormStep>
</template>
