<script setup>
import { ref } from 'vue'
import FieldTextInput from './FieldTextInput.vue'

const props = defineProps({
  value: String,
  update: Function
})

const error = ref('')
</script>

<template>
  <FieldTextInput
    label="Email Address"
    type="email"
    name="email"
    placeholder="Enter email"
    :value="props.value"
    :update="props.update"
    :error="error"
  />
</template>
