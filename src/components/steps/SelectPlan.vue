<script setup>
import { computed, inject, onMounted } from 'vue'
import router from '@/router'
import GroupRadio from '@/components/forms/GroupRadio.vue'
import FieldSwitch from '@/components/forms/FieldSwitch.vue'
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

const plans = computed(() => {
  return formData.plans.map((plan) => {
    const isYearly = form.formState.billingYearly
    return {
      ...plan,
      subLabel: isYearly
        ? `${plan.value * 12 - plan.value * FREE_MONTHS_IF_YEARLY}/yr`
        : `${plan.value}/mo`,
      discountNote: isYearly ? `2 months free` : null
    }
  })
})
</script>

<template>
  <FormStep
    :title="'Select your plan'"
    :help-text="'You have the option of monthly or yearly billing.'"
  >
    <GroupRadio
      class="mb-6"
      :stateProp="'plan'"
      :options="plans"
      :selected="form.formState.plan"
      :update="form.updateValue"
    />
    <FieldSwitch
      :options="formData.billingCycles"
      :selected="form.formState.billingYearly"
      :update="form.updateValue"
    />
    <template #footer>
      <div class="flex justify-between items-center">
        <LinkButton link="/form" type="link"> Go Back </LinkButton>
        <LinkButton link="/form/add-ons" type="primary"> Next Step </LinkButton>
      </div>
    </template>
  </FormStep>
</template>
