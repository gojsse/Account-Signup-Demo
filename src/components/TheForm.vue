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

const onSubmitForm = (e) => {
  e.preventDefault()

  if (!formState.isSubmitted) {
    formState.isSubmitted = true
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
  <div>
    <div class="flex p-4 bg-white rounded-xl shadow-xl">
      <NavigationMenu :navigation="navigation" />
      <div class="flex flex-1 flex-col px-8">
        <form class="flex flex-1 flex-col" @submit.prevent="handleSubmit">
          <router-view></router-view>
        </form>
      </div>
    </div>
    <br />
  </div>
</template>
