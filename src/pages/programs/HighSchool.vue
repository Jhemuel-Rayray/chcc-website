<template>
  <div class="highschool-page">
    <!-- Hero Section -->
    <section class="programs-hero">
      <div class="hero-background"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content container">
        <h1>High School Programs</h1>
        <p>
          Explore our Academic and Senior High School programs (STEM, ABM, HUMSS, Arts & Design) 
          designed to prepare students for higher education and career success.
        </p>
      </div>
    </section>

    <!-- Program Highlights -->
    <section class="program-highlights container">
      <div class="section-header">
        <h2>Program Highlights</h2>
        <p>Our High School programs focus on academic excellence, critical thinking, and holistic development.</p>
      </div>

      <div class="highlights-grid">
        <div class="highlight-card">
          <div class="highlight-icon">📚</div>
          <h3>Academic Excellence</h3>
          <p>Strong foundation in core subjects to prepare students for college and career paths.</p>
        </div>
        <div class="highlight-card">
          <div class="highlight-icon">🎭</div>
          <h3>Creative & Extracurricular</h3>
          <p>Clubs, arts, sports, and competitions to enhance talents and personal growth.</p>
        </div>
        <div class="highlight-card">
          <div class="highlight-icon">🌟</div>
          <h3>Guidance & Mentorship</h3>
          <p>Dedicated teachers and mentors to support every student’s academic and personal journey.</p>
        </div>
      </div>
    </section>

    <!-- Video Section -->
    <section class="program-videos container">
      <div class="section-header">
        <h2>See Our Programs in Action</h2>
        <p>Watch highlights of our High School classrooms and activities.</p>
      </div>

      <div class="videos-grid">
        <div class="video-card">
          <div class="video-wrapper">
            <video controls>
              <source src="../../assets/videos/Highschool.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p>High School Activities</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No JS logic required for now
</script>

<style scoped>
.highschool-page {
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
  background: linear-gradient(135deg, #1e3a8a, #3b82f6);
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
  box-shadow: 0 6px 10px rgba(0,0,0,0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease, background 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.highlight-card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 15px 25px rgba(0,0,0,0.2);
  background: #e0f2fe;
}

.highlight-card h3 {
  margin-top: 1rem;
  font-size: 1.4rem;
  color: #1e40af;
}

.highlight-card p {
  margin-top: 0.5rem;
  color: #374151;
}

.highlight-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  transition: transform 0.4s ease;
}

.highlight-card:hover .highlight-icon {
  transform: scale(1.2) rotate(10deg);
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

.video-wrapper {
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
}

.video-wrapper video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* maintain aspect ratio, cover container */
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
  .highlights-grid {
    grid-template-columns: 1fr;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-content p {
    font-size: 1rem;
  }
}
</style>
