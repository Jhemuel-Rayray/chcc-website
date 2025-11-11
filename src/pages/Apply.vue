<template>
  <div class="apply-page">
    <div class="page-container">
      <h1 class="page-title">Apply Now</h1>
      <p class="page-subtitle">
        Start your application for Concepcion Holy Cross College.
      </p>

      <!-- Multi-step form -->
      <form class="apply-form" @submit.prevent="submitApplication">
        <!-- Step 1: Personal Info -->
        <div v-if="step === 1" class="form-step">
          <div class="input-group">
            <label>Full Name</label>
            <input type="text" v-model="fullName" placeholder="Enter your full name" required />
          </div>
          <div class="input-group">
            <label>Email Address</label>
            <input type="email" v-model="email" placeholder="Enter your email" required />
          </div>
          <div class="input-group">
            <label>Phone Number</label>
            <input type="tel" v-model="phone" placeholder="Enter your phone number" required />
          </div>
        </div>

        <!-- Step 2: Education Level -->
        <div v-if="step === 2" class="form-step">
          <div class="input-group">
            <label>Select Education Level</label>
            <select v-model="educationLevel" required>
              <option disabled value="">-- Select --</option>
              <option>Basic Education</option>
              <option>High School</option>
              <option>Undergraduate</option>
            </select>
          </div>
        </div>

        <!-- Step 3: Course Selection -->
        <div v-if="step === 3" class="form-step">
          <div class="input-group">
            <label>Select Course / Grade</label>
            <select v-model="course" required>
              <option disabled value="">-- Select --</option>

              <!-- Basic Education -->
              <template v-if="educationLevel === 'Basic Education'">
                <option>Kindergarten</option>
                <option v-for="i in 6" :key="'G'+i">Grade {{ i }}</option>
              </template>

              <!-- High School -->
              <template v-else-if="educationLevel === 'High School'">
                <option v-for="i in 4" :key="'HS'+i">Grade {{ i + 6 }}</option>
                <option v-for="track in highSchoolTracks" 
                        :key="track" 
                        @mouseover="hoverTrack = track"
                        @mouseleave="hoverTrack = ''">
                  {{ track }}
                </option>
              </template>

              <!-- Undergraduate -->
              <template v-else-if="educationLevel === 'Undergraduate'">
                <option>Bachelor of Science in Computer Science</option>
                <option>Bachelor of Science in Information Technology</option>
                <option>Bachelor of Science in Business Administration</option>
                <option>Bachelor of Science in Education</option>
              </template>
            </select>

            <!-- Recommended Track Tooltip -->
            <div v-if="hoverTrack" class="recommendation">
              Recommended Track: <strong>{{ recommendedTrack(hoverTrack) }}</strong>
            </div>
            <div v-else-if="educationLevel === 'High School' && course.includes('Grade 11') || course.includes('Grade 12')" class="recommendation">
              Recommended Track: <strong>{{ recommendedTrack(course) }}</strong>
            </div>
          </div>
        </div>

        <!-- Step 4: Additional Notes -->
        <div v-if="step === 4" class="form-step">
          <div class="input-group">
            <label>Additional Notes</label>
            <textarea v-model="notes" placeholder="Any additional notes (optional)"></textarea>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="form-buttons">
          <button type="button" class="btn-secondary" @click="prevStep" :disabled="step === 1">
            Previous
          </button>
          <button type="button" class="btn-primary" v-if="step < 4" @click="nextStep">
            Next
          </button>
          <button type="submit" class="btn-primary" v-else>
            Submit Application
          </button>
        </div>
      </form>

      <!-- Go to Student Portal -->
      <div class="hero-buttons">
        <router-link to="/student-portal" class="btn-primary">
          <i class="pi pi-plus"></i>
          <span>Go to Student Portal</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const step = ref(1)
const fullName = ref('')
const email = ref('')
const phone = ref('')
const educationLevel = ref('')
const course = ref('')
const notes = ref('')
const hoverTrack = ref('')

const highSchoolTracks = [
  'Grade 11 - STEM',
  'Grade 11 - ABM',
  'Grade 11 - HUMSS',
  'Grade 12 - STEM',
  'Grade 12 - ABM',
  'Grade 12 - HUMSS'
]

const nextStep = () => { if (step.value < 4) step.value++ }
const prevStep = () => { if (step.value > 1) step.value-- }

const recommendedTrack = (selectedCourse) => {
  if (selectedCourse.includes('STEM')) return 'Science, Technology, Engineering & Math'
  if (selectedCourse.includes('ABM')) return 'Accounting, Business, Management'
  if (selectedCourse.includes('HUMSS')) return 'Humanities & Social Sciences'
  return 'No specific recommendation'
}

const submitApplication = () => {
  const applicationData = {
    fullName: fullName.value,
    email: email.value,
    phone: phone.value,
    educationLevel: educationLevel.value,
    course: course.value,
    notes: notes.value
  }
  console.log('Application submitted:', applicationData)
  alert('Application submitted successfully!')

  fullName.value = ''
  email.value = ''
  phone.value = ''
  educationLevel.value = ''
  course.value = ''
  notes.value = ''
  step.value = 1
}
</script>

<style scoped>
.apply-page {
  padding: 2rem 1rem;
  background: #f9fafb; /* Simple light background */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.page-container {
  max-width: 600px;
  width: 100%;
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.page-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2563eb; /* Primary color */
  margin-bottom: 0.5rem;
  text-align: center;
}

.page-subtitle {
  font-size: 1rem;
  color: #374151;
  margin-bottom: 2rem;
  text-align: center;
}

.apply-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-group label {
  font-weight: 600;
  color: #1e40af;
}

.input-group input,
.input-group select,
.input-group textarea {
  padding: 0.75rem 1rem;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
  font-size: 1rem;
  outline: none;
  transition: all 0.2s;
}

.input-group input:focus,
.input-group select:focus,
.input-group textarea:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37,99,235,0.2);
}

.input-group textarea {
  min-height: 100px;
  resize: vertical;
}

.recommendation {
  font-size: 0.9rem;
  color: #2563eb;
  margin-top: 0.25rem;
  font-weight: 600;
  background: #e0e7ff;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
}

.form-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
}

.btn-primary {
  background: linear-gradient(135deg,#2563eb,#3b82f6);
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary:hover {
  transform: translateY(-2px) scale(1.02);
}

.btn-secondary {
  background: #e5e7eb;
  color: #374151;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-secondary:hover {
  background: #d1d5db;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.hero-buttons .btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

@media (max-width: 640px) {
  .page-container { padding: 1.5rem 1rem; }
  .page-title { font-size: 1.75rem; }
  .page-subtitle { font-size: 0.95rem; }
  .input-group input,
  .input-group select,
  .input-group textarea { padding: 0.65rem 0.9rem; font-size: 0.95rem; }
  .form-buttons { flex-direction: column; gap: 0.75rem; align-items: stretch; }
  .btn-primary, .btn-secondary { width: 100%; text-align: center; }
}
</style>
