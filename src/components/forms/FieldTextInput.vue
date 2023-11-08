<script setup>
import { ExclamationCircleIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
  label: String,
  type: String,
  name: String,
  placeholder: String,
  value: String,
  update: Function,
  blur: Function,
  error: { type: String, default: '' },
  required: { type: Boolean, default: false }
})

const handleInput = (propKey, e) => {
  props.update(propKey, e.target.value.trim())
}

const handleBlur = (propKey, e) => {
  props.blur ? props.blur(propKey, e.target.value.trim(), props.required) : null
}
</script>

<template>
  <div class="mb-4">
    <label for="props.name" class="block text-sm leading-6 text-gray-900">
      {{ props.label }}
    </label>
    <div class="relative rounded-md">
      <input
        :class="[
          props.error.length > 0
            ? 'text-red-900 focus:ring-red-500 ring-red-300 placeholder:text-red-300'
            : '',
          'block w-full rounded-md border-0 py-2 px-3.5 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset font-medium placeholder:font-normal sm:text-sm sm:leading-6'
        ]"
        @input="(e) => handleInput(props.name, e)"
        @blur="(e) => handleBlur(props.name, e)"
        :value="props.value"
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
