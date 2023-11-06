<script setup>
import { computed, inject } from 'vue'
import FormStep from './FormStep.vue'
import LinkButton from '@/components/common/LinkButton.vue'
import { formData } from '@/data/formData'

const form = inject('form')

const billingCycle = computed(() => (!form.formState.billingCycle ? 'monthly' : 'yearly'))
const plan = computed(() => form.formState.plan)
const totalPerMonth = computed(() => {
  const addOns = form.formState.addOns.reduce((acc, addOn) => {
    return acc + parseInt(formData.addOns.find((item) => item.id === addOn).value)
  }, 0)
  return parseInt(plan.value.value) + addOns
})

const getLabel = (id, propName) => formData[propName].find((item) => item.id === id).label
const getValue = (id, propName) => formData[propName].find((item) => item.id === id).value
</script>

<template>
  <FormStep
    :title="'Finishing Up'"
    :help-text="'Double-check everything looks OK before confirming'"
  >
    <div class="flex flex-col bg-gray-100 rounded-lg p-5">
      <ul>
        <li class="flex flex-col border-b border-gray-300 pb-5">
          <div class="flex justify-between items-center">
            <div class="flex flex-col font-bold">
              {{ plan.label }} ({{ billingCycle }})
              <router-link to="/form/plan" class="text-sm text-blue-500 hover:text-blue-600">
                Change
              </router-link>
            </div>
            <div class="font-bold">${{ plan.value }}/mo</div>
          </div>
        </li>
        <li
          v-for="addOn in form.formState.addOns"
          :key="addOn"
          class="flex justify-between items-center text-sm py-2"
        >
          <div class="text-gray-400">
            {{ getLabel(addOn, 'addOns') }}
          </div>
          <div class="text-gray-500 font-bold">+${{ getValue(addOn, 'addOns') }}/mo</div>
        </li>
      </ul>
    </div>
    <div class="flex justify-between items-center p-5">
      <div class="text-sm text-gray-400">Total (per month)</div>
      <div class="text-indigo-600 text-lg font-bold">+${{ totalPerMonth }}/mo</div>
    </div>
    <template #footer>
      <div class="flex justify-between items-center mt-auto">
        <LinkButton link="/form/add-ons" type="link"> Go Back </LinkButton>
        <LinkButton link="/form/summary" type="primary"> Confirm </LinkButton>
      </div>
    </template>
  </FormStep>
</template>
