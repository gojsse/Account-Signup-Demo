<script setup>
import { computed } from 'vue'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import MyIcon from '@/components/svg/MyIcon.vue'

const props = defineProps({
  stateProp: {
    type: String,
    required: true
  },
  options: Object,
  selected: Object,
  update: Function
})

const selectedRadioOption = computed({
  get() {
    return props.selected
  },
  set(value) {
    props.update(props.stateProp, value)
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
        :key="option.id"
        :value="option"
      >
        <div
          :class="[
            active || checked ? 'ring-blue-600 bg-gray-50' : 'ring-gray-300 bg-white',
            'relative flex md:flex-col gap-4 md:gap-0 items-center md:items-start cursor-pointer rounded-lg border-0 ring-1 ring-inset ring-gray-300 focus:ring-inset p-4 shadow-sm'
          ]"
        >
          <div :class="['md:mb-8']">
            <MyIcon
              :name="option.iconName"
              :class="[option.iconColor, 'h-10 w-10']"
              aria-hidden="true"
            />
          </div>
          <div class="flex flex-col">
            <RadioGroupLabel as="span" class="block md:text-sm font-bold text-gray-900">
              {{ option.label }}
            </RadioGroupLabel>
            <div class="text-gray-400">${{ option.subLabel }}</div>
            <div v-if="option.discountNote" class="text-blue-950 text-sm">
              ${{ option.discountNote }}
            </div>
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
