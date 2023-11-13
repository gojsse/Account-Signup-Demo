<script setup>
const props = defineProps({
  title: String,
  helpText: String
})
</script>

<template>
  <div class="flex flex-col flex-1">
    <h2 class="font-bold text-2xl md:text-3xl pt-7 pb-2">{{ props.title }}</h2>
    <p class="text-gray-500 pb-5">{{ props.helpText }}</p>
    <slot></slot>
    <div
      class="bg-white fixed md:relative bottom-0 left-0 p-4 md:p-0 mt-auto z-10 w-full shadow-xl md:shadow-none"
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>
