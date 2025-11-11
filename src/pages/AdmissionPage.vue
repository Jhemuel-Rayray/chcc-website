<template>
  <div class="admission-page">
    <!-- Hero Section -->
    <section class="admission-hero">
      <div class="hero-background"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content container">
        <h1 class="animate-fade-down">Admission</h1>
        <p class="animate-fade-up">
          Welcome to Concepcion Holy Cross College! Explore our admission process and join our
          community of learners committed to excellence in education.
        </p>
        <router-link to="/apply" class="btn-apply-now animate-fade-up delay-1">
          Apply Now
        </router-link>
      </div>
    </section>

    <!-- Admission Steps -->
    <section class="admission-steps container">
      <div class="section-header">
        <h2>Admission Process</h2>
        <p>Follow these simple steps to become part of CHCC.</p>
      </div>

      <div class="steps-grid">
        <div class="step-card animate-fade-up delay-1">
          <div class="step-number">1</div>
          <h3>Inquiry</h3>
          <p>Contact our admission office or visit our website to learn more about our programs.</p>
        </div>
        <div class="step-card animate-fade-up delay-2">
          <div class="step-number">2</div>
          <h3>Application</h3>
          <p>Fill out the online application form and submit the required documents.</p>
        </div>
        <div class="step-card animate-fade-up delay-3">
          <div class="step-number">3</div>
          <h3>Assessment</h3>
          <p>Attend any required entrance exams or interviews as part of the admission process.</p>
        </div>
        <div class="step-card animate-fade-up delay-4">
          <div class="step-number">4</div>
          <h3>Enrollment</h3>
          <p>Receive your acceptance letter and complete enrollment to secure your spot.</p>
        </div>
      </div>
    </section>

    <!-- Contact Admission Office -->
    <section class="admission-contact container">
      <div class="section-header">
        <h2>Contact Admission Office</h2>
        <p>For questions, reach out to our friendly staff.</p>
      </div>
      <div class="contact-card animate-fade-up">
        <p><strong>Email:</strong> admissions@chcc.edu.ph</p>
        <p><strong>Phone:</strong> +63 912 345 6789</p>
        <p><strong>Office Hours:</strong> Mon-Fri, 8:00 AM - 5:00 PM</p>
      </div>
    </section>

    <!-- Sticky Apply Button -->
    <router-link v-show="showSticky" to="/apply" class="btn-apply-sticky">
      Apply Now
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showSticky = ref(false)

// Show sticky button after scrolling down 300px
const handleScroll = () => {
  showSticky.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.admission-page {
  font-family: 'Poppins', sans-serif;
  color: #1f2937;
}

/* Hero Section */
.admission-hero {
  position: relative;
  min-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  color: #fff;
}

.hero-background {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1e40af, #3b82f6);
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: url('../assets/img/images/banner.jpg') center/cover no-repeat;
  opacity: 0.5;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.btn-apply-now {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #f59e0b;
  color: #fff;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-apply-now:hover {
  background: #d97706;
  transform: scale(1.05);
}

/* Admission Steps */
.admission-steps {
  padding: 5rem 1rem;
  background: #f8fafc;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  margin-top: 2rem;
}

.step-card {
  background: #fff;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
}

.step-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
}

.step-number {
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  background: #3b82f6;
  color: #fff;
  font-weight: 700;
  font-size: 1.25rem;
  margin: 0 auto 1rem;
}

/* Contact Section */
.admission-contact {
  padding: 4rem 1rem;
}

.contact-card {
  background: #fff;
  padding: 2rem;
  border-radius: 20px;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Sticky Apply Button */
.btn-apply-sticky {
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 0.75rem 1.5rem;
  background: #f59e0b;
  color: #fff;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  z-index: 1000;
}

.btn-apply-sticky:hover {
  background: #d97706;
  transform: scale(1.05);
}

/* Animations */
.animate-fade-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp 0.8s forwards;
}

.animate-fade-down {
  opacity: 0;
  transform: translateY(-30px);
  animation: fadeDown 0.8s forwards;
}

.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }
.delay-3 { animation-delay: 0.6s; }
.delay-4 { animation-delay: 0.8s; }

@keyframes fadeUp {
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeDown {
  to { opacity: 1; transform: translateY(0); }
}

/* Responsive */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-content p {
    font-size: 1rem;
  }

  .steps-grid {
    gap: 1.5rem;
  }

  .btn-apply-sticky {
    bottom: 20px;
    right: 20px;
    padding: 0.6rem 1.2rem;
  }
}
</style>
