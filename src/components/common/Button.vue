<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'primary'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const types = {
  primary:
    'rounded-md bg-blue-800 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
}
</script>

<template>
  <button
    :class="[types[props.type], props.disabled ? 'opacity-50' : '']"
    :disabled="props.disabled === true"
  >
    <slot></slot>
  </button>
</template>
