<script setup>
import { inject, onMounted } from 'vue'
import router from '@/router'
import GroupRadio from '@/components/forms/GroupRadio.vue'
import FieldSwitch from '@/components/forms/FieldSwitch.vue'
import FormStep from '@/components/steps/FormStep.vue'
import LinkButton from '@/components/common/LinkButton.vue'
import { formData } from '@/data/formData.js'

const form = inject('form')

onMounted(() => {
  if (!form.formState.canSubmit) {
    router.push('/form')
  }
})
</script>

<template>
  <FormStep
    :title="'Select your plan'"
    :help-text="'You have the option of monthly or yearly billing.'"
  >
    <GroupRadio
      class="mb-6"
      :options="formData.plans"
      :selected="form.formState.plan"
      :update="form.updateValue"
    />
    <FieldSwitch
      :options="formData.billingCycles"
      :selected="form.formState.billingYearly"
      :update="form.updateValue"
    />
    <template #footer>
      <div class="flex justify-between items-center mt-auto">
        <LinkButton link="/form" type="link"> Go Back </LinkButton>
        <LinkButton link="/form/add-ons" type="primary"> Next Step </LinkButton>
      </div>
    </template>
  </FormStep>
</template>
