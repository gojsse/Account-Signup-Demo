<script setup>
import { computed } from 'vue'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import MyIcon from '@/components/images/MyIcon.vue'

const props = defineProps({
  options: Object,
  selected: Object,
  update: Function
})

const selectedRadioOption = computed({
  get() {
    return props.selected
  },
  set(value) {
    props.update('plan', value)
  }
})
</script>

<template>
  <RadioGroup v-model="selectedRadioOption" by="id">
    <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
      <RadioGroupOption
        v-for="option in props.options"
        as="template"
        v-slot="{ active, checked }"
        class="uk-position-z-index"
        :key="option.id"
        :value="option"
      >
        <div
          :class="[
            active || checked ? 'border-blue-600 bg-gray-50' : 'border-gray-300 bg-white',
            'relative flex flex-col cursor-pointer rounded-lg border p-4 shadow-sm focus:outline-none'
          ]"
        >
          <div :class="['mb-8']">
            <MyIcon
              :name="option.iconName"
              :class="[option.iconColor, 'h-10 w-10']"
              aria-hidden="true"
            />
          </div>
          <div class="flex flex-col">
            <RadioGroupLabel as="span" class="block text-sm font-bold text-gray-900">
              {{ option.label }}
            </RadioGroupLabel>
            <div>${{ option.value }}/mo</div>
          </div>
          <span
            :class="[
              active ? 'border' : 'border-2',
              checked ? 'border-blue-600' : 'border-transparent',
              'pointer-events-none absolute -inset-px rounded-lg'
            ]"
            aria-hidden="true"
          />
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>
