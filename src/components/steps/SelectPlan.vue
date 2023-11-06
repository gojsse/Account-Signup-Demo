<script setup>
import { inject } from 'vue'
import GroupRadio from '@/components/forms/GroupRadio.vue'
import FieldSwitch from '@/components/forms/FieldSwitch.vue'
import FormStep from '@/components/steps/FormStep.vue'
import LinkButton from '@/components/common/LinkButton.vue'
import { formData } from '@/data/formData'

const form = inject('form')
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
      :update="form.updateRadio"
    />
    <FieldSwitch
      :options="formData.billingCycles"
      :selected="form.formState.billingCycle"
      :update="form.updateSwitch"
    />
    <template #footer>
      <div class="flex justify-between items-center mt-auto">
        <LinkButton link="/form" type="link"> Go Back </LinkButton>
        <LinkButton link="/form/add-ons" type="primary"> Next Step </LinkButton>
      </div>
    </template>
  </FormStep>
</template>
