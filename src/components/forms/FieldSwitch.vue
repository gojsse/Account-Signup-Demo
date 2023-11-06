<script setup>
import { computed } from 'vue'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'

const props = defineProps({
  options: Array,
  selected: Boolean,
  update: Function
})

const enabled = computed({
  get() {
    return props.selected
  },
  set(value) {
    props.update('billingCycle', value)
  }
})
</script>

<template>
  <SwitchGroup as="div" class="flex justify-center items-center bg-gray-100 rounded-lg p-2">
    <SwitchLabel as="span" class="mr-3 text-sm">
      <span class="font-medium text-gray-900">{{ props.options[0].label }}</span>
    </SwitchLabel>
    <Switch
      v-model="enabled"
      :class="[
        'bg-blue-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2'
      ]"
    >
      <span
        aria-hidden="true"
        :class="[
          enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
        ]"
      />
    </Switch>
    <SwitchLabel as="span" class="ml-3 text-sm">
      <span class="font-medium text-gray-900">{{ props.options[1].label }}</span>
    </SwitchLabel>
  </SwitchGroup>
</template>
