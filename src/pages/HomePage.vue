<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background">
        <div class="hero-overlay"></div>
        <div class="hero-particles"></div>
        <div class="hero-gradient"></div>
      </div>
      
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-badge">
            <i class="pi pi-star"></i>
            <span>Excellence Since 1990</span>
          </div>
          
          <h1 class="hero-title">
            Welcome to 
            <span class="highlight">CHCC</span>
          </h1>
          
          <p class="hero-subtitle">
            Shaping minds, building futures. Discover our innovative programs, 
            comprehensive admissions process, and vibrant campus life at 
            Concepcion Holy Cross College.
          </p>
          
          <!-- HomePage.vue -->
        <div class="hero-buttons">
          <router-link to="/apply" class="btn-primary">
          <i class="pi pi-plus"></i>
              <span>Apply Now</span>
            </router-link>
            <router-link to="/about" class="btn-secondary">
              <i class="pi pi-info-circle"></i>
              <span>Learn More</span>
            </router-link>
          </div>
          
          <div class="hero-stats">
            <div class="stat">
              <div class="stat-number">5000+</div>
              <div class="stat-label">Students</div>
            </div>
            <div class="stat">
              <div class="stat-number">50+</div>
              <div class="stat-label">Faculty</div>
            </div>
            <div class="stat">
              <div class="stat-number">20+</div>
              <div class="stat-label">Programs</div>
            </div>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="hero-image-container">
            <div class="image-backdrop"></div>
            <img src="../assets/img/images/banner.jpg" alt="CHCC Campus" class="hero-image" />
            <div class="floating-elements">
              <div class="floating-card">
                <i class="pi pi-graduation-cap"></i>
                <span>Quality Education</span>
              </div>
              <div class="floating-card">
                <i class="pi pi-users"></i>
                <span>Expert Faculty</span>
              </div>
              <div class="floating-card">
                <i class="pi pi-trophy"></i>
                <span>Excellence Awards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modern Features Highlight -->
    <section class="features-modern">
      <div class="container">
        <div class="features-grid">
          <!-- Text Content -->
          <div class="features-text">
            <div class="section-badge">
              <i class="pi pi-star"></i>
              <span>Why Choose CHCC</span>
            </div>
            <h2>Excellence in Every Aspect</h2>
            <p>
              We provide a holistic educational experience that combines academic rigor 
              with character formation, preparing students for successful careers and meaningful lives.
            </p>
            
            <div class="features-list-modern">
              <div class="feature-item-modern" v-for="(feature, index) in features" :key="index">
                <div class="feature-icon">
                  <i :class="feature.icon"></i>
                </div>
                <div class="feature-details">
                  <h4>{{ feature.title }}</h4>
                  <p>{{ feature.description }}</p>
                </div>
              </div>
            </div>

            <router-link to="/about" class="btn-outline-modern">
              Learn More About Us
              <i class="pi pi-arrow-right"></i>
            </router-link>
          </div>

          <!-- Visual Content -->
          <div class="features-visual-modern">
            <div class="visual-card large">
              <img src="../assets/img/images/campus-1.jpg" alt="Campus View" />
            </div>
            <div class="visual-card small top">
              <img src="../assets/img/images/students-1.jpg" alt="Students" />
            </div>
            <div class="visual-card small bottom">
              <img src="../assets/img/images/facilities-1.jpg" alt="Facilities" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- News Preview Section -->
    <section class="news-preview">
      <div class="container">
        <h2>Latest News & Updates</h2>
        <!-- Show only first 3 news items dynamically -->
        <NewsUpdates :news="featuredNews" :preview="true" />
        <router-link to="/news" class="btn-outline-modern mt-4">
          View All News
          <i class="pi pi-arrow-right"></i>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NewsUpdates from './NewsUpdates.vue'

// Featured news (dynamically fetched from localStorage or API)
const featuredNews = ref([])

// Features data
const features = [
  {
    title: "Accredited Programs",
    description: "All programs are fully accredited and meet industry standards",
    icon: "pi pi-check"
  },
  {
    title: "Expert Faculty",
    description: "Learn from experienced professors and industry professionals",
    icon: "pi pi-user"
  },
  {
    title: "Modern Facilities",
    description: "State-of-the-art classrooms, labs, and learning spaces",
    icon: "pi pi-cog"
  }
]

// Load news for homepage (max 3 items)
const loadFeaturedNews = () => {
  const newsFromStorage = JSON.parse(localStorage.getItem('newsList') || '[]')
  featuredNews.value = newsFromStorage.slice(0, 3)
}

onMounted(() => {
  loadFeaturedNews()
  // Add any homepage-specific initialization (animations, etc.)
})
</script>





<style scoped>/* ===========================
   GLOBAL STYLES
=========================== */
.home {
  overflow-x: hidden;
  font-family: 'Poppins', sans-serif;
  color: #111827;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* ===========================
   HERO SECTION
=========================== */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.hero-background, .hero-overlay, .hero-particles, .hero-gradient {
  position: absolute;
  inset: 0;
}
.hero-overlay {
  background: rgba(30,64,175,0.8);
}
.hero-particles {
  background-image: radial-gradient(circle at 25% 25%, rgba(255,255,255,0.08) 2px, transparent 2px);
  background-size: 50px 50px;
  animation: float 25s linear infinite;
}
.hero-gradient {
  background: radial-gradient(ellipse at center, transparent 0%, rgba(30,64,175,0.8) 100%);
}
@keyframes float {
  0% { transform: translate(0,0); }
  100% { transform: translate(-50px,-50px); }
}
.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
.hero-content {
  color: #fff;
  z-index: 2;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255,255,255,0.15);
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 2rem;
  border: 1px solid rgba(255,255,255,0.2);
}
.hero-title {
  font-size: clamp(2rem,6vw,4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}
.hero-title .highlight {
  background: linear-gradient(135deg,#6366f1,#fbbf24);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero-subtitle {
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  opacity: 0.9;
  max-width: 500px;
}
.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}
.btn-primary, .btn-secondary, .btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s;
  border: 2px solid transparent;
}
.btn-primary {
  background: linear-gradient(135deg,#6366f1,#2575fc);
  color: #fff;
  padding: 0.75rem 1.5rem;
  box-shadow: 0 10px 15px rgba(0,0,0,0.15);
}
.btn-primary:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 10px 15px rgba(0,0,0,0.15);
}
.btn-secondary {
  background: rgba(255,255,255,0.15);
  color: #fff;
  backdrop-filter: blur(10px);
  border-color: rgba(255,255,255,0.3);
  padding: 0.75rem 1.5rem;
}
.btn-secondary:hover {
  background: rgba(255,255,255,0.25);
  transform: translateY(-3px) scale(1.02);
}
.hero-stats {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.stat {
  text-align: center;
}
.stat-number {
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 0.25rem;
}
.stat-label {
  font-size: 0.875rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}


/* HERO VISUAL */
.hero-visual { position: relative; }
.hero-image-container { position: relative; }
.image-backdrop {
  position: absolute;
  inset: -2rem;
  background: rgba(255,255,255,0.1);
  border-radius: 2rem;
  backdrop-filter: blur(20px);
  transform: rotate(-3deg);
}
.hero-image {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 2rem;
  box-shadow: 0 10px 15px rgba(0,0,0,0.15);
  position: relative;
  z-index: 2;
}
.floating-elements {
  position: absolute;
  inset: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.floating-card {
  position: relative;
  background: #fff;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 15px rgba(0,0,0,0.15);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #111827;
  font-weight: 600;
}
.floating-card i { color: #6366f1; font-size: 1.25rem; }

/* ===========================
   FEATURES MODERN
=========================== */
.features-modern {
  padding: 80px 0;
  background: #f9fafb;
}
.features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
.features-text h2 {
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem 0;
}
.features-list-modern {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
}
.feature-item-modern {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: rgba(255,255,255,0.8);
  padding: 1rem 1.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}
.feature-item-modern:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}
.feature-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg,#6366f1,#8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.25rem;
  flex-shrink: 0;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
.feature-details h4 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}
.feature-details p {
  font-size: 0.95rem;
  color: #6b7280;
}

/* BUTTONS */
.btn-outline-modern {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid #6366f1;
  color: #6366f1;
  border-radius: 12px;
  font-weight: 600;
  margin-top: 2rem;
  transition: 0.3s;
}
.btn-outline-modern:hover {
  background: #6366f1;
  color: #fff;
  transform: translateY(-2px);
}

/* VISUAL CARDS */
.features-visual-modern {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.visual-card {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}
.visual-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.visual-card.large { height: 400px; }
.visual-card.small { height: 180px; }
.visual-card.small.top { margin-bottom: 1rem; }
.visual-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
}

/* ===========================
   RESPONSIVE
=========================== */
@media (max-width: 1024px) {
  .hero-container { grid-template-columns: 1fr; gap: 2rem; text-align: center; }
  .features-grid { grid-template-columns: 1fr; gap: 3rem; }
  .features-visual-modern { flex-direction: row; justify-content: space-between; }
  .visual-card.small { width: 45%; height: 200px; }
}
@media (max-width: 768px) {
  .hero-buttons { flex-direction: column; align-items: center; }
  .hero-stats { justify-content: center; }
  .features-visual-modern { flex-direction: column; }
  .visual-card.small { width: 100%; height: 200px; }
}
@media (max-width: 480px) {
  .hero-title { font-size: 2rem; }
  .features-text h2 { font-size: 2rem; }
}
</style>
