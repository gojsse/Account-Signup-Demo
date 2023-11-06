<script setup>
import { ExclamationCircleIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
  label: String,
  type: String,
  name: String,
  value: String,
  placeholder: String,
  error: String,
  update: Function
})

const handleInput = (prop, e) => {
  props.update(prop, e.target.value)
}
</script>

<template>
  <div>
    <label for="props.name" class="block text-sm font-medium leading-6 text-gray-900">
      {{ props.label }}
    </label>
    <div class="relative my-2 rounded-md shadow-sm">
      <input
        :value="props.value"
        @input="(e) => handleInput(props.name, e)"
        :class="[
          props.error.length > 0
            ? 'text-red-900 focus:ring-red-500 ring-red-300 placeholder:text-red-300'
            : '',
          'block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
        ]"
        :type="props.type"
        :name="props.name"
        :id="props.name"
        :placeholder="props.placeholder"
        aria-invalid="true"
        :aria-describedby="`${props.name}-error`"
      />
      <div
        v-if="props.error.length > 0"
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
      >
        <ExclamationCircleIcon class="h-5 w-5 text-red-500" aria-hidden="true" />
      </div>
    </div>
    <p v-if="props.error.length > 0" class="mt-2 text-sm text-red-600" :id="`${props.name}-error`">
      {{ props.error }}
    </p>
  </div>
</template>
