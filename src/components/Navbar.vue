<template>
  <nav class="navbar">
    <!-- Logo Section -->
    <div class="navbar-brand">
      <div class="logo-container">
        <img src="../assets/img/logos/mainlogo.png" alt="CHCC Logo" class="logo-img" />
      </div>
      <div class="brand-text-container">
        <span class="brand-text">Concepcion Holy Cross College</span>
        <span class="brand-subtitle">Excellence in Education</span>
      </div>
    </div>

    <!-- Desktop Navigation -->
    <div class="navbar-nav">
      <router-link 
        v-for="item in items" 
        :key="item.label"
        :to="item.to" 
        class="nav-link"
      >
        <span>{{ item.label }}</span>
      </router-link>
    </div>

    <!-- Action Buttons -->
    <div class="navbar-actions">
      <router-link to="/student-portal" class="btn-portal">
        <i class="pi pi-user"></i>
        <span>Login</span>
      </router-link>
      <router-link to="/apply" class="btn-apply">
        <i class="pi pi-plus"></i>
        <span>Apply Now</span>
      </router-link>
    </div>

    <!-- Mobile Menu Button -->
    <button class="mobile-toggle" @click="toggleMobile" :class="{ active: mobileOpen }">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Mobile Menu Overlay -->
    <div class="mobile-overlay" :class="{ active: mobileOpen }" @click="mobileOpen = false"></div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ active: mobileOpen }">
      <div class="mobile-header">
        <div class="mobile-brand">
          <img src="../assets/img/logos/mainlogo.png" alt="CHCC Logo" class="mobile-logo" />
          <span>CHCC</span>
        </div>
        <button class="mobile-close" @click="mobileOpen = false">
          <i class="pi pi-times"></i>
        </button>
      </div>
      
      <div class="mobile-nav">
        <router-link 
          v-for="item in items" 
          :key="item.label"
          :to="item.to" 
          class="mobile-link"
          @click="mobileOpen = false"
        >
          {{ item.label }}
        </router-link>
      </div>
      
      <div class="mobile-actions">
        <router-link to="/student-portal" class="btn-portal mobile-btn">
          <i class="pi pi-user"></i>
          Student Portal
        </router-link>
        <router-link to="/apply" class="btn-apply mobile-btn">
          <i class="pi pi-plus"></i>
          Apply Now
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mobileOpen = ref(false)

// Updated navbar items with correct News & Updates link
const items = ref([
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Admission', to: '/admission' }, 
  { label: 'Programs', to: '/programs' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'News and Updates', to: '/news' } // <-- fixed
])

const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value
}

// Close mobile menu on escape key
const handleKeydown = (e) => {
  if (e.key === 'Escape' && mobileOpen.value) {
    mobileOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>


<style>
/* Global reset and variables */
:root {
  --primary-color: #1e40af;
  --primary-light: #3b82f6;
  --primary-dark: #1e3a8a;
  --accent-color: #f59e0b;
  --accent-hover: #d97706;
  --text-dark: #1f2937;
  --text-light: #6b7280;
  --border-color: #e5e7eb;
  --bg-light: #f8fafc;
  --white: #ffffff;
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --navbar-height: 80px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: var(--white);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: var(--navbar-height);
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.navbar:hover {
  box-shadow: var(--shadow-lg);
}

/* Style router-link buttons like regular buttons */
.navbar-actions .btn-portal,
.navbar-actions .btn-apply {
  text-decoration: none; /* Remove underline */
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  color: inherit; /* Inherit color from CSS */
}

/* Portal button */
.btn-portal {
  background: var(--white);
  color: var(--text-dark);
  border: 2px solid var(--border-color);
}

.btn-portal:hover {
  background: var(--bg-light);
  border-color: var(--primary-color);
  color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

/* Apply button */
.btn-apply {
  background: linear-gradient(135deg, var(--accent-color), var(--accent-hover));
  color: var(--white);
  box-shadow: var(--shadow);
}

.btn-apply:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-apply::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn-apply:hover::before {
  left: 100%;
}

/* Brand */
.navbar-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
}

.logo-container {
  position: relative;
}

.logo-img {
  height: 48px;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  transition: var(--transition);
}

.logo-img:hover {
  transform: scale(1.05);
}

.brand-text-container {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.brand-text {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--primary-color);
  line-height: 1.2;
  letter-spacing: -0.025em;
}

.brand-subtitle {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-light);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Navigation */
.navbar-nav {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-link {
  position: relative;
  padding: 0.75rem 1.25rem;
  color: var(--text-dark);
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.875rem;
  transition: var(--transition);
  overflow: hidden;
}

.nav-link span {
  position: relative;
  z-index: 1;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  border-radius: 8px;
  opacity: 0;
  transform: scale(0.8);
  transition: var(--transition);
}

.nav-link:hover::before {
  opacity: 0.1;
  transform: scale(1);
}

.nav-link:hover {
  color: var(--primary-color);
  transform: translateY(-1px);
}

.nav-link.router-link-active {
  color: var(--white);
}

.nav-link.router-link-active::before {
  opacity: 1;
  transform: scale(1);
}

/* Actions */
.navbar-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

.btn-portal,
.btn-apply {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.btn-portal {
  background: var(--white);
  color: var(--text-dark);
  border: 2px solid var(--border-color);
}

.btn-portal:hover {
  background: var(--bg-light);
  border-color: var(--primary-color);
  color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.btn-apply {
  background: linear-gradient(135deg, var(--accent-color), var(--accent-hover));
  color: var(--white);
  box-shadow: var(--shadow);
}

.btn-apply:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-apply::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn-apply:hover::before {
  left: 100%;
}

/* Mobile Toggle */
.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.mobile-toggle span {
  display: block;
  height: 3px;
  width: 100%;
  background: var(--text-dark);
  border-radius: 1px;
  transition: var(--transition);
}

.mobile-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Menu */
.mobile-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 999;
  backdrop-filter: blur(4px);
}

.mobile-overlay.active {
  opacity: 1;
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 280px;
  max-width: 80vw;
  height: 100vh;
  background: var(--white);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}

.mobile-menu.active {
  right: 0;
}

.mobile-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.25rem;
  border-bottom: 1px solid var(--border-color);
  background: var(--bg-light);
  min-height: var(--navbar-height);
}

.mobile-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.mobile-logo {
  height: 32px;
  width: auto;
}

.mobile-brand span {
  font-weight: 700;
  color: var(--primary-color);
  font-size: 1.125rem;
}

.mobile-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-light);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}

.mobile-close:hover {
  background: var(--border-color);
  color: var(--text-dark);
}

.mobile-nav {
  flex: 1;
  padding: 1.5rem 0;
  overflow-y: auto;
}

.mobile-link {
  display: block;
  padding: 1rem 1.25rem;
  color: var(--text-dark);
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: var(--transition);
  border-left: 4px solid transparent;
  position: relative;
}

.mobile-link::before {
  content: '';
  position: absolute;
  right: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--text-lighter);
  opacity: 0;
  transition: var(--transition);
}

.mobile-link:hover {
  background: var(--bg-light);
  color: var(--primary-color);
  border-left-color: var(--primary-color);
  padding-left: 1.5rem;
}

.mobile-link:hover::before {
  opacity: 1;
}

.mobile-link.router-link-active {
  background: var(--bg-light);
  color: var(--primary-color);
  border-left-color: var(--primary-color);
  font-weight: 600;
  padding-left: 1.5rem;
}

.mobile-link.router-link-active::before {
  opacity: 1;
  background: var(--primary-color);
}

.mobile-actions {
  padding: 1.5rem 1.25rem;
  border-top: 1px solid var(--border-color);
  background: var(--bg-light);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.mobile-btn {
  width: 100%;
  justify-content: center;
  padding: 0.875rem 1rem;
  font-size: 0.9rem;
  border-radius: 8px;
}

/* Responsive */
@media (max-width: 1200px) {
  .navbar {
    padding: 0 1.5rem;
  }
  
  .brand-text {
    font-size: 1rem;
  }
  
  .brand-subtitle {
    display: none;
  }
}

@media (max-width: 1024px) {
  .navbar-nav {
    gap: 0.125rem;
  }
  
  .nav-link {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
  
  .btn-portal,
  .btn-apply {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
}

@media (max-width: 768px) {
  :root {
    --navbar-height: 64px;
  }
  
  .navbar {
    padding: 0 1rem;
    height: var(--navbar-height);
  }
  
  .brand-text-container {
    display: none;
  }
  
  .navbar-nav,
  .navbar-actions {
    display: none;
  }
  
  .mobile-toggle {
    display: flex;
  }
  
  .mobile-overlay.active {
    display: block;
  }
  
  /* Ensure proper mobile menu display */
  .mobile-menu {
    display: flex;
  }
}

/* Additional mobile improvements */
@media (max-width: 480px) {
  .navbar {
    padding: 0 0.75rem;
  }
  
  .brand-text {
    font-size: 1rem;
  }
  
  .mobile-menu {
    width: 100%;
    max-width: 100vw;
  }
  
  .mobile-header {
    padding: 1rem;
  }
  
  .mobile-actions {
    padding: 1rem;
  }
}

/* Body padding */
body {
  padding-top: var(--navbar-height);
  margin: 0;
  background: var(--white);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Focus styles for accessibility */
.nav-link:focus,
.btn-portal:focus,
.btn-apply:focus,
.mobile-toggle:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}
</style>