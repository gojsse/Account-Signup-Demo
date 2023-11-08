<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

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
              <router-link
                :to="item.path"
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
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <svg
      width="274px"
      height="226px"
      viewBox="0 0 274 226"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g id="Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group-2" transform="translate(-0.000470, 0.487700)">
          <path
            d="M35.8779746,8.66009032 C56.8465426,25.980271 63.7624719,24.7990987 94.6412962,78.6914644 C125.52012,132.58383 118.795996,129.305249 136.50047,146.192149 C146.437801,155.670585 179.338142,182.110402 235.201492,225.511602 L0.000470230991,225.512 L0.000607688802,5.91366834 C11.1534945,-2.79965657 23.1126168,-1.88418257 35.8779746,8.66009032 Z"
            id="Combined-Shape"
            fill="#635AFF"
          ></path>
          <path
            d="M274.00107,65.5650856 L273.99535,225.511695 L95.4613497,225.51229 C96.5381527,209.114622 113.682987,192.073631 146.895853,174.389316 C165.506957,168.235936 183.433431,153.443598 200.675275,130.0123 C226.538041,94.8653543 232.706955,78.6765052 259.895691,67.5123004 C265.647376,65.1505509 270.349169,64.5014794 274.00107,65.5650856 Z"
            id="Combined-Shape"
            fill="#F9818D"
          ></path>
          <path
            d="M174.727353,113.2499 C175.7007,112.270634 177.283605,112.265836 178.262871,113.239183 C179.199559,114.17021 179.244675,115.658943 178.394999,116.643647 L178.273588,116.774701 L166.068509,129.053998 C165.095163,130.033263 163.512258,130.038061 162.532992,129.064715 C161.596303,128.133687 161.551187,126.644954 162.400863,125.660251 L162.522275,125.529197 L174.727353,113.2499 Z"
            id="Line"
            fill="#FFFFFF"
            fill-rule="nonzero"
          ></path>
          <path
            d="M186.311706,144.804281 C186.978876,143.59546 188.499668,143.156365 189.708489,143.823536 C190.866943,144.462908 191.318478,145.886248 190.766893,147.067676 L190.689235,147.22032 L181.501735,163.866804 C180.834564,165.075625 179.313772,165.51472 178.104951,164.847549 C176.946497,164.208177 176.494963,162.784837 177.046547,161.603409 L177.124206,161.450766 L186.311706,144.804281 Z"
            id="Line"
            fill="#FFFFFF"
            fill-rule="nonzero"
          ></path>
          <path
            d="M194.424438,119.633427 C195.300403,118.645053 196.784123,118.514918 197.815783,119.306921 L197.953562,119.420643 L210.713328,130.729236 C211.746628,131.645019 211.841895,133.225062 210.926112,134.258361 C210.050147,135.246735 208.566426,135.376871 207.534767,134.584868 L207.396987,134.471146 L194.637222,123.162552 C193.603922,122.24677 193.508655,120.666727 194.424438,119.633427 Z"
            id="Line"
            fill="#FFFFFF"
            fill-rule="nonzero"
          ></path>
          <path
            d="M9.50047023,67.5123004 C44.0182671,67.5123004 72.0004702,95.4945035 72.0004702,130.0123 C72.0004702,164.530097 44.0182671,192.5123 9.50047023,192.5123 C6.27034212,192.5123 3.09744595,192.267261 -0.000643566412,191.794758 L-0.000643566412,68.2298427 C3.09744595,67.7573394 6.27034212,67.5123004 9.50047023,67.5123004 Z"
            id="Combined-Shape"
            fill="#F14747"
          ></path>
        </g>
      </g>
    </svg>
  </div>
</template>
