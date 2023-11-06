<script setup>
const props = defineProps({
  title: String,
  helpText: String
})
</script>

<template>
  <div class="transition flex flex-col flex-1">
    <h2 class="font-bold text-3xl pt-7 pb-2">{{ props.title }}</h2>
    <p class="text-gray-500 pb-5">{{ props.helpText }}</p>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>
