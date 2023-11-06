<script setup>
import { computed } from 'vue'

const props = defineProps({
  options: Object,
  selected: Array,
  update: Function
})

const selectedOptions = computed({
  get() {
    return props.selected
  },
  set(value) {
    props.update('addOns', value)
  }
})
</script>

<template>
  <fieldset>
    <legend class="sr-only">Add-on options</legend>
    <div class="space-y-5">
      <div
        v-for="option in props.options"
        :key="option.id"
        :value="option"
        class="relative flex items-center gap-3 justify-start"
      >
        <div class="flex h-6 items-center">
          <input
            :id="option.id"
            :name="option.id"
            :aria-describedby="`${option.id}-description`"
            v-model="selectedOptions"
            :value="option.id"
            type="checkbox"
            class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
          />
        </div>
        <div class="ml-3 text-sm leading-6">
          <label :for="option.id" class="font-medium text-gray-900">{{ option.label }}</label>
          <div id="`${option.id}-description`" class="text-gray-500">
            {{ option.description }}
          </div>
        </div>
        <div class="ml-auto">
          <span class="text-gray-900 font-medium">+${{ option.value }}/mo</span>
        </div>
      </div>
    </div>
  </fieldset>
</template>
