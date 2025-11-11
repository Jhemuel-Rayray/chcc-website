<template>
  <div class="basic-education-page">
    <!-- Hero Section -->
    <section class="programs-hero">
      <div class="hero-background"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content container">
        <h1>Basic Education</h1>
        <p>
          Discover our Kindergarten and Elementary programs designed for holistic learning and development.
        </p>
      </div>
    </section>

    <!-- Program Highlights -->
    <section class="program-highlights container">
      <div class="section-header">
        <h2>Program Highlights</h2>
        <p>Our Basic Education programs focus on academic excellence, creativity, and social development.</p>
      </div>

      <div class="highlights-grid">
        <div class="highlight-card">
          <div class="highlight-icon">🎓</div>
          <h3>Holistic Learning</h3>
          <p>Engaging curriculum for Kindergarten to Grade 6 to develop critical thinking, creativity, and social skills.</p>
        </div>
        <div class="highlight-card">
          <div class="highlight-icon">🎨</div>
          <h3>Creative Activities</h3>
          <p>Music, arts, sports, and extracurricular programs to nurture talents and interests of every child.</p>
        </div>
        <div class="highlight-card">
          <div class="highlight-icon">🤝</div>
          <h3>Supportive Environment</h3>
          <p>Friendly teachers and mentors who guide and encourage every student to reach their potential.</p>
        </div>
      </div>
    </section>

    <!-- Video Section -->
    <section class="program-videos container">
      <div class="section-header">
        <h2>See Our Programs in Action</h2>
        <p>Check out videos of our classrooms and activities.</p>
      </div>

      <div class="videos-grid">
        <div class="video-card">
          <video controls>
            <source src="../../assets/videos/Preschool.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>Pre-School Programs</p>
        </div>
        <div class="video-card">
          <video controls>
            <source src="../../assets/videos/Elementary.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>Elementary Programs</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No JS logic required for now
</script>

<style scoped>
.basic-education-page {
  font-family: 'Poppins', sans-serif;
  color: #1f2937;
}

/* Hero */
.programs-hero {
  position: relative;
  min-height: 350px;
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
  background: url('../../assets/img/images/banner.jpg') center/cover no-repeat;
  opacity: 0.4;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-content h1 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

/* Highlights */
.program-highlights {
  padding: 4rem 1rem;
  background: #f8fafc;
}

.section-header h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.section-header p {
  text-align: center;
  color: #6b7280;
  margin-bottom: 2rem;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.highlight-card {
  background: #fff;
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.highlight-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.15);
}

/* Videos */
.program-videos {
  padding: 4rem 1rem;
}

.videos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.video-card video {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.video-card p {
  margin-top: 0.5rem;
  text-align: center;
  font-weight: 500;
  color: #1f2937;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-content p {
    font-size: 1rem;
  }
}
</style>