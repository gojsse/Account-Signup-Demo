<script setup>
import { computed, inject, onMounted } from 'vue'
import router from '@/router'
import FormStep from '@/components/steps/FormStep.vue'
import Button from '@/components/common/Button.vue'
import LinkButton from '@/components/common/LinkButton.vue'
import { formData } from '@/data/formData.js'
import { FREE_MONTHS_IF_YEARLY } from '@/data/consts'

const form = inject('form')

onMounted(() => {
  if (!form.formState.canSubmit) {
    router.push('/form')
  }
})

const getYearlyValue = (value) => value * 12 - value * FREE_MONTHS_IF_YEARLY

const selectedPlan = computed(() => {
  return formData.plans
    .map((plan) => {
      const isYearly = form.formState.billingYearly
      const valuePlanLabel = isYearly ? 'Yearly' : 'Monthly'
      const billingRate = isYearly ? getYearlyValue(plan.value) : plan.value
      const billingRateLabel = '+$' + (isYearly ? `${billingRate}/yr` : `${plan.value}/mo`)
      return {
        ...plan,
        valuePlanLabel: `${plan.label} (${valuePlanLabel})`,
        billingRate,
        billingRateLabel
      }
    })
    .find((plan) => plan.id === form.formState.plan.id)
})

const selectedAddOns = computed(() =>
  formData.addOns
    .filter((addOn) => form.formState.addOns.some((item) => item === addOn.id))
    .map((addOn) => {
      const isYearly = form.formState.billingYearly
      const billingRate = isYearly ? getYearlyValue(addOn.value) : addOn.value
      const billingRateLabel = '+$' + (isYearly ? `${billingRate}/yr` : `${addOn.value}/mo`)
      return {
        ...addOn,
        billingRate,
        billingRateLabel
      }
    })
)

const billing = computed(() => {
  const isYearly = form.formState.billingYearly
  const planTotal = selectedPlan.value.billingRate
  const addOnsTotal = selectedAddOns.value.reduce((acc, addOn) => {
    return addOn.billingRate + acc
  }, 0)
  const total = planTotal + addOnsTotal

  return {
    typeLabel: isYearly ? 'per year' : 'per month',
    total,
    totalLabel: isYearly ? `$${total}/yr` : `$${total}/mo`
  }
})
</script>

<template>
  <FormStep
    :title="'Finishing Up'"
    :help-text="'Double-check everything looks OK before confirming'"
  >
    <div class="flex flex-col bg-gray-100 rounded-lg p-5">
      <ul>
        <li
          :class="[
            'flex flex-col',
            selectedAddOns.length > 0 ? 'pb-5 mb-3 border-b border-gray-300' : ''
          ]"
        >
          <div class="flex justify-between items-center">
            <div class="flex flex-col font-bold">
              {{ selectedPlan.valuePlanLabel }}
              <router-link to="/form/plan" class="text-sm text-blue-500 hover:text-blue-600">
                Change
              </router-link>
            </div>
            <div class="font-bold">{{ selectedPlan.billingRateLabel }}</div>
          </div>
        </li>
        <template v-for="addOn in selectedAddOns" :key="addOn">
          <li class="flex justify-between items-center text-sm py-2">
            <div class="text-gray-400">
              {{ addOn.label }}
            </div>
            <div class="text-gray-500 font-bold">{{ addOn.billingRateLabel }}</div>
          </li>
        </template>
      </ul>
    </div>
    <div class="flex justify-between items-center p-5">
      <div class="text-sm text-gray-400">Total ({{ billing.typeLabel }})</div>
      <div class="text-indigo-600 text-lg font-bold">{{ billing.totalLabel }}</div>
    </div>
    <template #footer>
      <div class="flex justify-between items-center">
        <LinkButton link="/form/add-ons" type="link"> Go Back </LinkButton>
        <Button @click="form.onSubmitForm" type="submit" :disabled="form.formState.isBusy">
          Confirm
        </Button>
      </div>
    </template>
  </FormStep>
</template>
