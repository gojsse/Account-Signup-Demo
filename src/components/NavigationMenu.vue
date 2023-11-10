<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import NavBg from '@/components/images/NavBg.vue'

const router = useRouter()
const currentRoutePath = computed(() => router.currentRoute.value.path)

const props = defineProps({
  navigation: Object
})
</script>

<template>
  <div class="bg-blue-600 xl:flex basis-50 xl:flex-col rounded-lg overflow-hidden">
    <nav class="p-10 flex flex-col flex-none">
      <ul role="list" class="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" class="-mx-2 space-y-1">
            <li v-for="(item, index) in props.navigation" :key="item.name">
              <div
                class="text-blue-200 group flex items-center gap-x-4 rounded-md pb-5 text-sm font-semibold"
              >
                <div
                  :class="[
                    currentRoutePath === item.path
                      ? 'bg-blue-200 text-blue-600'
                      : 'bg-blue-600 text-white',
                    'w-9 h-9 min-w-max whitespace-nowrap rounded-full text-xs font-bold ring-1 ring-inset ring-white flex justify-center items-center'
                  ]"
                  aria-hidden="true"
                >
                  {{ index + 1 }}
                </div>
                <div>
                  STEP {{ index + 1 }}
                  <div class="text-white font-bold">{{ item.name.toUpperCase() }}</div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <NavBg />
  </div>
</template>
