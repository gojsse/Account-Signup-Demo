<script setup>
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  name: String,
  class: String
})

const Icon = defineAsyncComponent(() => import(`../images/${props.name}.vue`))
</script>

<template>
  <div>
    <Icon :class="props.class" />
  </div>
</template>
