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
  primary: 'bg-blue-950 hover:bg-blue-900 focus-visible:outline-blue-950',
  submit: 'bg-blue-700 hover:bg-blue-800 focus-visible:outline-blue-700'
}
</script>

<template>
  <button
    :class="[
      'rounded-md px-6 py-3 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition ease-in-out duration-300',
      types[props.type],
      props.disabled ? 'opacity-80' : ''
    ]"
    :disabled="props.disabled === true"
  >
    <slot></slot>
  </button>
</template>
