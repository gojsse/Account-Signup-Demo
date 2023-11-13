<script setup>
import { computed, inject, onMounted } from 'vue'
import router from '@/router'
import GroupCheckbox from '@/components/forms/GroupCheckbox.vue'
import FormStep from '@/components/steps/FormStep.vue'
import LinkButton from '@/components/common/LinkButton.vue'
import { formData } from '@/data/formData.js'
import { FREE_MONTHS_IF_YEARLY } from '@/data/consts.js'

const form = inject('form')

onMounted(() => {
  if (!form.formState.canSubmit) {
    router.push('/form')
  }
})

const addOns = computed(() => {
  return formData.addOns.map((addOn) => {
    const isYearly = form.formState.billingYearly
    return {
      ...addOn,
      valueLabel: isYearly
        ? `${addOn.value * 12 - addOn.value * FREE_MONTHS_IF_YEARLY}/yr`
        : `${addOn.value}/mo`
    }
  })
})
</script>

<template>
  <FormStep :title="'Pick Add-ons'" :help-text="'Add-ons help enhance your gaming experience.'">
    <GroupCheckbox
      class="mb-6"
      :stateProp="'addOns'"
      :options="addOns"
      :selected="form.formState.addOns"
      :update="form.updateValue"
    />
    <template #footer>
      <div class="flex justify-between items-center">
        <LinkButton link="/form/plan" type="link"> Go Back </LinkButton>
        <LinkButton link="/form/summary" type="primary"> Next Step </LinkButton>
      </div>
    </template>
  </FormStep>
</template>
