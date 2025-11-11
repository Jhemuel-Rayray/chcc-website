<template>
  <div class="programs-page">
    <!-- Hero Section -->
    <section class="programs-hero">
      <div class="hero-background"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content container">
        <h1>Our Programs</h1>
        <p>
          Discover the wide range of programs offered at Concepcion Holy Cross College. 
          Find the one that suits your educational goals.
        </p>
      </div>
    </section>

    <!-- Programs List -->
    <section class="programs-list container">
      <div class="section-header">
        <h2>Available Programs</h2>
        <p>Choose from our diverse academic offerings.</p>
      </div>

      <div class="programs-grid">
        <router-link
          to="/programs/basic-education"
          class="program-card basic-edu"
        >
          <i class="pi pi-book"></i>
          <h3>Basic Education</h3>
          <p>Kindergarten, Elementary programs focused on holistic development.</p>
        </router-link>

        <router-link
          to="/programs/high-school"
          class="program-card high-school"
        >
          <i class="pi pi-users"></i>
          <h3>High School</h3>
          <p>Academic tracks (STEM, ABM, HUMSS, Arts & Design) preparing students for higher education or careers.</p>
        </router-link>

        <router-link
          to="/programs/undergraduate"
          class="program-card undergraduate"
        >
          <i class="pi pi-graduation-cap"></i>
          <h3>Undergraduate Programs</h3>
          <p>Degree programs in Nursing, Education, Business Administration, Computer Science, and more.</p>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
// No JS needed, router-link handles navigation
</script>

<style scoped>
.programs-page {
  font-family: 'Poppins', sans-serif;
  color: #1f2937;
}

/* Hero Section */
.programs-hero {
  position: relative;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  overflow: hidden;
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
}

/* Programs List */
.programs-list {
  padding: 4rem 1rem;
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

/* Clickable Program Card */
.program-card {
  position: relative;
  display: block;
  color: #fff;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  overflow: hidden;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.program-card i {
  font-size: 2rem;
}

/* Individual card gradients */
.basic-edu { background: linear-gradient(135deg, #f97316, #facc15); }
.high-school { background: linear-gradient(135deg, #3b82f6, #9333ea); }
.undergraduate { background: linear-gradient(135deg, #10b981, #06b6d4); }

/* Hover effect */
.program-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 12px 25px rgba(0,0,0,0.2);
  opacity: 0.95;
}

/* Arrow icon for hover */
.program-card::after {
  content: '→';
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;
  font-size: 1.5rem;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.program-card:hover::after {
  transform: translateX(0);
  opacity: 1;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-content h1 { font-size: 2rem; }
  .hero-content p { font-size: 1rem; }

  .program-card { padding: 1.5rem; min-height: 180px; }
  .program-card i { font-size: 1.75rem; }
  .program-card::after { font-size: 1.25rem; right: 1rem; bottom: 1rem; }
}
</style>
