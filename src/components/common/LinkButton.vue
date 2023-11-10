<script setup>
const props = defineProps({
  link: String,
  type: {
    type: String,
    default: 'text'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const types = {
  link: 'text-gray-400 hover:text-gray-700 focus-visible:outline-blue-600',
  primary: 'shadow-sm text-white bg-blue-950 focus-visible:outline-blue-600'
}
</script>

<template>
  <component
    :to="props.link"
    :class="[
      'rounded-md px-6 py-3 text-sm font-semibold focus-visible:outline focus-visible:outline-2',
      types[props.type],
      props.disabled ? 'opacity-50' : ''
    ]"
    :is="props.disabled ? 'span' : 'router-link'"
  >
    <slot></slot>
  </component>
</template>
