<script setup>
import { inject } from 'vue'
import FieldTextInput from '@/components/forms/FieldTextInput.vue'
import FormStep from '@/components/steps/FormStep.vue'
import LinkButton from '@/components/common/LinkButton.vue'

const form = inject('form')
</script>

<template>
  <FormStep
    :title="'Personal Info'"
    :help-text="'Please provide your name, email address and phone number'"
  >
    <FieldTextInput
      label="Name"
      type="name"
      name="name"
      placeholder="e.g. Stephen King"
      :required="true"
      :value="form.formState.name"
      :update="form.updateValue"
      :blur="form.validateField"
      :error="form.formErrors.name"
    />
    <FieldTextInput
      label="Email Address"
      type="email"
      name="email"
      placeholder="e.g. stephenking@lorem.com"
      :required="true"
      :value="form.formState.email"
      :update="form.updateValue"
      :blur="form.validateField"
      :error="form.formErrors.email"
    />
    <FieldTextInput
      label="Phone Number"
      type="phone"
      name="phone"
      placeholder="e.g. 234 567 8901"
      :required="true"
      :value="form.formState.phone"
      :update="form.updateValue"
      :blur="form.validateField"
      :error="form.formErrors.phone"
    />
    <template #footer>
      <div class="flex justify-end items-center">
        <LinkButton link="/form/plan" type="primary" :disabled="!form.formState.canSubmitStep1">
          Next Step
        </LinkButton>
      </div>
    </template>
  </FormStep>
</template>
