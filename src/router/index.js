import { createWebHistory, createRouter } from 'vue-router'

import SignUp from '../pages/SignUp.vue'
import SelectPersonalInfo from '../components/steps/SelectPersonalInfo.vue'
import SelectPlan from '../components/steps/SelectPlan.vue'
import SelectAddOns from '../components/steps/SelectAddOns.vue'
import FormSummary from '../components/steps/FormSummary.vue'
import FormComplete from '../components/steps/FormComplete.vue'

const routes = [
  { path: '/', redirect: '/form' },
  {
    path: '/form',
    component: SignUp,
    children: [
      { path: '', component: SelectPersonalInfo },
      { path: 'plan', component: SelectPlan },
      { path: 'add-ons', component: SelectAddOns },
      { path: 'summary', component: FormSummary },
      { path: 'complete', component: FormComplete }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
