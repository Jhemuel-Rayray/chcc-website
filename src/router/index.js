import { createRouter, createWebHistory } from 'vue-router'

// Pages
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import AdmissionPage from '@/pages/AdmissionPage.vue'
import ProgramsPage from '@/pages/ProgramsPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

// Program subpages
import BasicEducation from '@/pages/programs/BasicEducation.vue'
import HighSchool from '@/pages/programs/HighSchool.vue'
import Undergraduate from '@/pages/programs/Undergraduate.vue'

// Additional pages
import StudentPortal from '@/pages/StudentPortal.vue'
import Apply from '@/pages/Apply.vue'
import NewsUpdates from '@/pages/NewsUpdates.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/admission', name: 'Admission', component: AdmissionPage },
  { path: '/programs', name: 'Programs', component: ProgramsPage },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/student-portal', name: 'StudentPortal', component: StudentPortal },
  { path: '/apply', name: 'Apply', component: Apply },
  { path: '/news', name: 'NewsUpdates', component: NewsUpdates },

  // Program subpages
  { path: '/programs/basic-education', name: 'BasicEducation', component: BasicEducation },
  { path: '/programs/high-school', name: 'HighSchool', component: HighSchool },
  { path: '/programs/undergraduate', name: 'Undergraduate', component: Undergraduate },

  // Catch-all 404
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
