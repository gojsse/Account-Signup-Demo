<script setup>
import { provide, reactive } from 'vue'
import NavigationMenu from '@/components/NavigationMenu.vue'
import { formData } from '@/data/formData'

const navigation = [
  { name: 'Your Info', path: '/form' },
  { name: 'Select Plan', path: '/form/plan' },
  { name: 'Add-ons', path: '/form/add-ons' },
  { name: 'Summary', path: '/form/summary' }
]

// possibly use joi: https://joi.dev/api/?v=17.9.1
const formState = reactive({
  isDirty: false,
  user: {
    name: '',
    email: '',
    phone: ''
  },
  plan: formData.plans[0],
  billingCycle: false,
  addOns: []
})

const updateUserInput = (prop, value) => {
  console.log('updateUserInput', prop, value)
  formState.user[prop] = value
}

const updateCheckboxGroup = (prop, values) => {
  formState[prop] = values
}

const updateRadio = (prop, value) => {
  formState[prop] = value
}

const updateSwitch = (prop, value) => {
  formState[prop] = value
}

provide('form', {
  formState,
  updateUserInput,
  updateCheckboxGroup,
  updateRadio,
  updateSwitch
})
</script>

<template>
  <div>
    <div class="flex p-4 bg-white rounded-xl">
      <NavigationMenu :navigation="navigation" />
      <div class="flex flex-1 flex-col px-8">
        <router-view></router-view>
      </div>
    </div>
    {{ formState }}
  </div>
</template>
