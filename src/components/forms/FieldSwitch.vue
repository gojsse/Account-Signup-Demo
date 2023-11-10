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
    props.update('billingYearly', value)
  }
})
</script>

<template>
  <SwitchGroup as="div" class="flex justify-center items-center bg-gray-100 rounded-lg p-2">
    <SwitchLabel as="span" class="mr-6 text-sm">
      <span :class="[enabled ? 'text-gray-400' : 'text-gray-900', 'font-bold']">
        {{ props.options[0].label }}
      </span>
    </SwitchLabel>
    <Switch
      v-model="enabled"
      :class="[
        'bg-blue-950 relative inline-flex items-center h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-950 focus:ring-offset-2'
      ]"
    >
      <span
        aria-hidden="true"
        :class="[
          enabled ? 'translate-x-5' : 'translate-x-1',
          'pointer-events-none inline-block h-3 w-3 rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
        ]"
      />
    </Switch>
    <SwitchLabel as="span" class="ml-6 text-sm">
      <span :class="[enabled ? 'text-gray-900' : 'text-gray-400', 'font-bold']">{{
        props.options[1].label
      }}</span>
    </SwitchLabel>
  </SwitchGroup>
</template>
