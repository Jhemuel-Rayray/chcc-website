<template>
  <section class="contact-page">
    <!-- Hero / Header Section -->
    <div class="contact-hero">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you. Get in touch with Concepcion Holy Cross College.</p>
    </div>

    <!-- Contact Content -->
    <div class="contact-content">
      <!-- Contact Info -->
      <div class="contact-info">
        <div class="info-card">
          <i class="pi pi-map-marker info-icon"></i>
          <h3>Our Location</h3>
          <p>Brgy. San Nicolas, Concepcion, Tarlac, Philippines</p>
        </div>

        <div class="info-card">
          <i class="pi pi-envelope info-icon"></i>
          <h3>Email Us</h3>
          <p>info@chcc.edu.ph</p>
        </div>

        <div class="info-card">
          <i class="pi pi-phone info-icon"></i>
          <h3>Call Us</h3>
          <p>(045) 923-4567</p>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="contact-form">
        <h2>Send a Message</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input v-model="form.name" type="text" id="name" placeholder="Enter your name" required />
          </div>

          <div class="form-group">
            <label for="email">Email Address</label>
            <input v-model="form.email" type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea v-model="form.message" id="message" rows="5" placeholder="Write your message..." required></textarea>
          </div>

          <button type="submit" class="btn-submit">
            <i class="pi pi-send"></i>
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  alert(`Thank you, ${form.value.name}! Your message has been received.`)
  form.value = { name: '', email: '', message: '' }
}
</script>

<style scoped>
.contact-page {
  padding: 120px 2rem 80px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #1f2937;
}

/* Hero Section */
.contact-hero {
  text-align: center;
  margin-bottom: 3rem;
}

.contact-hero h1 {
  font-size: 2.5rem;
  color: #1e40af;
  font-weight: 800;
  margin-bottom: 0.75rem;
}

.contact-hero p {
  color: #6b7280;
  font-size: 1rem;
}

/* Contact Content Layout */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-card {
  background: #f8fafc;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.info-icon {
  font-size: 1.5rem;
  color: #1e40af;
  margin-bottom: 0.5rem;
}

.info-card h3 {
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
  font-weight: 600;
}

.info-card p {
  color: #6b7280;
  font-size: 0.95rem;
}

/* Form */
.contact-form {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.contact-form h2 {
  color: #1e40af;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.form-group label {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #374151;
}

.form-group input,
.form-group textarea {
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #1e40af;
  box-shadow: 0 0 0 2px rgba(30, 64, 175, 0.1);
}

/* Button */
.btn-submit {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

/* Responsive */
@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }

  .contact-page {
    padding: 100px 1.5rem 60px;
  }
}
</style>
