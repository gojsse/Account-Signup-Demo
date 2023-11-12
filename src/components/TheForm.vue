<script setup>
import { watch, provide, reactive } from 'vue'
import router from '@/router'
import NavigationMenu from '@/components/NavigationMenu.vue'
import { formData } from '@/data/formData'
import { validate } from '@/utils/formValidation'

const navigation = [
  { name: 'Your Info', path: '/form' },
  { name: 'Select Plan', path: '/form/plan' },
  { name: 'Add-ons', path: '/form/add-ons' },
  { name: 'Summary', path: '/form/summary' }
]

const formState = reactive({
  name: '',
  email: '',
  phone: '',
  plan: formData.plans[0],
  billingYearly: false,
  addOns: [],
  isBusy: false,
  canSubmitStep1: false,
  canSubmitStep2: false,
  canSubmitStep3: false,
  canSubmit: false,
  isSubmitted: false
})

const formErrors = reactive({
  name: '',
  email: '',
  phone: '',
  plan: '',
  billingYearly: '',
  addOns: ''
})

watch(formState, () => {
  const nameIsValid = validate.name(formState.name)
  formErrors.name = nameIsValid
  const emailIsValid = validate.email(formState.email)
  formErrors.email = emailIsValid
  const phoneIsValid = validate.phoneNumber(formState.phone)
  formErrors.phone = phoneIsValid

  formState.canSubmitStep1 =
    nameIsValid.length === 0 &&
    emailIsValid.length === 0 &&
    phoneIsValid.length === 0 &&
    formState.name.length > 0 &&
    formState.email.length > 0 &&
    formState.phone.length > 0

  formState.canSubmitStep2 = formState.canSubmitStep1
  formState.canSubmitStep3 = formState.canSubmitStep2
  formState.canSubmit = formState.canSubmitStep1

  // formErrors.plan = validate.radioGroup(formState.plan, formData.plans)
  // formErrors.billingYearly = validate.boolean(formState.billingYearly)
  // formErrors.addOns = validate.checkboxGroup(formState.addOns, formData.addOns)
})

const updateValue = (prop, value) => {
  formState[prop] = value
}

const validateField = (prop, value, isRequired) => {
  formErrors[prop] = validate.isRequired(value, isRequired)
}

const handleSubmit = (e) => {
  e.preventDefault()
}

const getFormValues = () => {
  return {
    name: formState.name,
    email: formState.email,
    phone: formState.phone,
    plan: formState.plan.id,
    billingYearly: formState.billingYearly,
    addOns: formState.addOns.map((addOn) => addOn)
  }
}

const sleep = (delay) => {
  return new Promise((resolve) => {
    return setTimeout(resolve, delay)
  })
}

const onSubmitForm = async (e) => {
  e.preventDefault()

  if (!formState.isSubmitted) {
    formState.isBusy = true

    // Do async API post stuff here
    await sleep(2500)
    formState.isSubmitted = true
    formState.isBusy = false
    router.push('/form/complete')
  }
}

provide('form', {
  formState,
  formErrors,
  updateValue,
  validateField,
  getFormValues,
  onSubmitForm
})
</script>

<template>
  <div class="flex p-4 pb-20 md:pb-4 bg-white rounded-xl shadow-xl flex-col md:flex-row">
    <NavigationMenu :navigation="navigation" />
    <div class="flex flex-1 flex-col px-8">
      <form
        :class="[formState.isBusy ? 'opacity-40' : '', 'flex flex-1 flex-col']"
        @submit.prevent="handleSubmit"
      >
        <router-view></router-view>
      </form>
    </div>
  </div>
</template>
