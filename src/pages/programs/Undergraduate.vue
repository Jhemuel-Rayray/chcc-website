<template>
  <div class="undergraduate-page">
    <!-- Hero Section -->
    <section class="programs-hero">
      <div class="hero-background"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content container">
        <h1>Undergraduate Programs</h1>
        <p>
          Explore our degree programs designed to develop professional skills, leadership, and innovation
          in our students.
        </p>
      </div>
    </section>

    <!-- Program Highlights -->
    <section class="program-highlights container">
      <div class="section-header">
        <h2>Why Choose Our Undergraduate Programs</h2>
        <p>Our programs aim to prepare students for professional careers and higher education success.</p>
      </div>

      <div class="highlights-grid">
        <div class="highlight-card">
          <div class="highlight-icon">🎓</div>
          <h3>Quality Education</h3>
          <p>Experienced faculty providing comprehensive guidance and mentorship to every student.</p>
        </div>
        <div class="highlight-card">
          <div class="highlight-icon">💼</div>
          <h3>Career Ready</h3>
          <p>Programs designed to equip students with skills required in the modern workplace.</p>
        </div>
        <div class="highlight-card">
          <div class="highlight-icon">🌐</div>
          <h3>Global Perspective</h3>
          <p>Students develop critical thinking and global awareness through innovative curriculum.</p>
        </div>
      </div>
    </section>

    <!-- Programs Gallery -->
    <section class="program-gallery container">
      <div class="section-header">
        <h2>Our Programs in Action</h2>
        <p>Check out highlights of our undergraduate classrooms and activities.</p>
      </div>

      <div class="gallery-grid">
        <div class="gallery-card">
          <img src="../../assets/logo/nursing.jpg" alt="Nursing Program" />
          <p>BS Nursing</p>
        </div>
        <div class="gallery-card">
          <img src="../../assets/logo/educ.jpg" alt="Education Program" />
          <p>BS Education</p>
        </div>
        <div class="gallery-card">
          <img src="../../assets/logo/bsba.jpg" alt="Business Administration" />
          <p>BS Business Administration</p>
        </div>
        <div class="gallery-card">
          <img src="../../assets/logo/comsci.jpg" alt="Computer Science" />
          <p>BS Computer Science</p>
        </div>
        <div class="gallery-card">
          <img src="../../assets/logo/hm.jpg" alt="Hospitality and Management" />
          <p>BS Hospitality and Management</p>
        </div>
        <div class="gallery-card">
          <img src="../../assets/logo/crim.jpg" alt="Criminal Justice Education" />
          <p>BS Criminal Justice Education</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No JS logic required for now
</script>

<style scoped>
.undergraduate-page {
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
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease, background 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.highlight-card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
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

/* Gallery */
.program-gallery {
  padding: 4rem 1rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.gallery-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.gallery-card img {
  width: 100%;
  height: 160px; /* Smaller height */
  object-fit: contain; /* Keep full image visible */
  background-color: #f1f5f9; /* Soft background to make edges look clean */
  display: block;
  padding: 0.5rem;
  transition: transform 0.3s ease;
}

.gallery-card p {
  padding: 0.8rem;
  font-weight: 500;
  color: #1f2937;
}

.gallery-card:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.15);
}

.gallery-card:hover img {
  transform: scale(1.05);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-content p {
    font-size: 1rem;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .gallery-card img {
    height: 140px;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
