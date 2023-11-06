<script setup>
const props = defineProps({
  link: String,
  type: String
  //   set a default type
})

const types = {
  link: 'rounded-md px-3 py-2 text-sm font-semibold text-gray-400 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600',
  primary:
    'rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
}
</script>

<template>
  <router-link :to="props.link" :class="types[props.type]">
    <slot></slot>
  </router-link>
</template>
