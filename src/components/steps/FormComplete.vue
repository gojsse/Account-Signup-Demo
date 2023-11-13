<script setup>
import { inject, onMounted } from 'vue'
import router from '@/router'
import CircleCheck from '@/components/svg/CircleCheck.vue'

const form = inject('form')

onMounted(() => {
  if (!form.formState.isSubmitted) {
    router.push('/form')
  }
})
</script>

<template>
  <div class="flex flex-col justify-center items-center h-full py-12">
    <CircleCheck />
    <h2 class="font-bold text-2xl md:text-3xl pt-7 pb-2">Thank You!</h2>
    <p class="text-center text-gray-500">
      Thanks for confirming your subscription! We hope you have fun using our platform. If you ever
      need support, please feel free to email us at support@loremgaming.com.
    </p>
  </div>
</template>
