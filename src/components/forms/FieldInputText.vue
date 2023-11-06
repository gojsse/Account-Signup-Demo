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
    label="Name"
    type="name"
    name="name"
    placeholder="Your name"
    :value="props.value"
    :update="props.update"
    :error="error"
  />
</template>
