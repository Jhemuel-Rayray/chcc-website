<template>
  <div class="about-page">
    <!-- Hero / Banner -->
    <section class="about-hero">
      <div class="hero-background">
        <div class="hero-overlay"></div>
        <div class="hero-pattern"></div>
      </div>
      <div class="hero-content">
        <div class="hero-badge">
          <span>Est. 1990</span>
        </div>
        <h1>About CHCC</h1>
        <p>Discover our legacy of excellence in education, service, and community. Learn about our mission, values, and commitment to shaping future leaders through faith-inspired learning.</p>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">30+</span>
            <span class="stat-label">Years of Excellence</span>
          </div>
          <div class="stat">
            <span class="stat-number">5000+</span>
            <span class="stat-label">Alumni</span>
          </div>
          <div class="stat">
            <span class="stat-number">50+</span>
            <span class="stat-label">Faculty Members</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission, Vision, Values -->
    <section class="mission-vision-values">
      <div class="container">
        <div class="section-header">
          <h2>Our Foundation</h2>
          <p>The principles that guide everything we do</p>
        </div>
        
        <div class="mvv-grid">
          <div class="mvv-item mission">
            <div class="mvv-icon">
              <i class="pi pi-compass"></i>
            </div>
            <h3>Our Mission</h3>
            <p>To become a God-centered learning institution focused on holistic education that forms and educates individuals to become conscientious, compassionate, competent, and committed persons towards the development of a just and humane society.</p>
          </div>
          
          <div class="mvv-item vision">
            <div class="mvv-icon">
              <i class="pi pi-eye"></i>
            </div>
            <h3>Our Vision</h3>
            <p>Concepcion Holy Cross College is an institution for academic and values formation offering relevant, learner-centered, and values-oriented programs that produce competent persons of character in the service of God and society.</p>
          </div>
          

          <div class="mvv-item vision">
            <div class="mvv-icon">
              <i class="pi pi-eye"></i>
            </div>
            <h3>Our Goals</h3>
            <p>The Concepcion Holy Cross College, Inc. is committed to achieve the following goals and objectives in pursuit of its mission:
              <br> • To develop a Christ-centered community <br> • To produce intellectually-competent and wholly-developed graduates <br>• To emphasize self-realization without compromising human dignity and moral values</p>
          </div>

        </div>
      </div>
    </section>

    

    <!-- Why Choose Us -->
    <section class="why-us">
      <div class="container">
        <div class="section-header">
          <h2>Why Choose CHCC?</h2>
          <p>Discover what makes us different and why students thrive here</p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card" v-for="(feature, index) in features" :key="index">
            <div class="feature-icon">
              <i :class="feature.icon"></i>
            </div>
            <div class="feature-content">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.text }}</p>
              <div class="feature-highlight">{{ feature.highlight }}</div>
            </div>
            <div class="feature-arrow">
              <i class="pi pi-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="leadership-section">
    <div class="section-header">
      <h2>Leadership Team</h2>
      <p>Meet the team driving CHCC forward</p>
    </div>

    <div class="team-grid">
      <div v-for="member in leadership" :key="member.name" class="team-card">
        <img :src="member.image" :alt="member.name" />
        <h3>{{ member.name }}</h3>
        <p>{{ member.position }}</p>
      </div>
    </div>
  </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const historyEvents = ref([
  { 
    year: '1990', 
    title: 'Foundation', 
    description: 'Concepcion Holy Cross College was established with a vision to provide quality Christian education to the community.',
    category: 'Establishment'
  },
  { 
    year: '1995', 
    title: 'First Programs', 
    description: 'Launched initial academic programs in Education, Business Administration, and Liberal Arts.',
    category: 'Academic Growth'
  },
  { 
    year: '2000', 
    title: 'First Graduation', 
    description: 'Celebrated our inaugural graduation ceremony with 120 proud graduates who continue to serve their communities.',
    category: 'Milestone'
  },
  { 
    year: '2005', 
    title: 'Accreditation', 
    description: 'Received full accreditation from CHED, validating our commitment to educational excellence.',
    category: 'Recognition'
  },
  { 
    year: '2010', 
    title: 'Campus Expansion', 
    description: 'Opened new state-of-the-art facilities including modern library, computer labs, and sports complex.',
    category: 'Infrastructure'
  },
  { 
    year: '2015', 
    title: 'Digital Integration', 
    description: 'Implemented comprehensive digital learning platforms and smart classroom technologies.',
    category: 'Innovation'
  },
  { 
    year: '2020', 
    title: 'Pandemic Resilience', 
    description: 'Successfully transitioned to hybrid learning model, ensuring continuity of education during challenging times.',
    category: 'Adaptation'
  },
  { 
    year: '2024', 
    title: 'Future Vision', 
    description: 'Launched strategic plan for sustainable growth and enhanced community partnerships.',
    category: 'Future'
  }
])



const features = ref([
  { 
    icon: 'pi pi-graduation-cap', 
    title: 'Academic Excellence', 
    text: 'Comprehensive curriculum designed to meet industry standards and prepare students for successful careers.',
    highlight: '95% Graduate Employment Rate'
  },
  { 
    icon: 'pi pi-users', 
    title: 'Expert Faculty', 
    text: 'Dedicated professors with advanced degrees and extensive industry experience committed to student success.',
    highlight: '15:1 Student-Faculty Ratio'
  },
  { 
    icon: 'pi pi-globe', 
    title: 'Global Perspective', 
    text: 'International partnerships and exchange programs that broaden horizons and create global opportunities.',
    highlight: '10+ Partner Universities'
  },
  { 
    icon: 'pi pi-home', 
    title: 'Campus Life', 
    text: 'Vibrant campus community with modern facilities, student organizations, and enriching extracurricular activities.',
    highlight: '50+ Student Organizations'
  },
  { 
    icon: 'pi pi-lightbulb', 
    title: 'Innovation Hub', 
    text: 'State-of-the-art laboratories, research facilities, and technology centers fostering creativity and innovation.',
    highlight: 'Latest Technology Integration'
  },
  { 
    icon: 'pi pi-heart', 
    title: 'Faith & Service', 
    text: 'Strong emphasis on Christian values, community service, and developing compassionate leaders.',
    highlight: '1000+ Community Service Hours'
  }
])


// Import team images
import achibishopImg from '../assets/img/team/archibishop.jpg';
import presidentImg from '../assets/img/team/president.jpg';
import vpAcademicImg from '../assets/img/team/vp-academic.jpg';
import deanImg from '../assets/img/team/dean.jpg';
import principalImg from '../assets/img/team/Principal.jpg';
import assistantImg from '../assets/img/team/assitant.jpg';

const leadership = ref([
    {
    name: 'ARCHIBISHOP Pasiano B. Aniceto, DD',
    position: 'Chairman of the Board',
    image: achibishopImg
  },
  {
    name: 'DAVID P. STA INES, JR.',
    position: 'President',
    image: vpAcademicImg
  },
  {
    name: 'RAQUEL T. STA INES, Ph.D.',
    position: 'Executive Vice-President of Administration, Management Finance',
    image: presidentImg
  },
  {
    name: 'DANIEL PABLO T. STA INES, MS-IDT, RRT-NPS',
    position: 'Executive Assistant for VP. AMF',
    image: assistantImg
  },
  {
    name: 'DANA GENEROSA SI. MARCELO',
    position: 'Comptroller, Purchasing Department - Head',
    image: deanImg
  },
  {
    name: 'DOLORES RAQUEL S. SALVADOR, MD, MHPEd',
    position: 'B.E.D. Principal, Health Services Director',
    image: principalImg
  },
  
]);
</script>



<style scoped>
/* ===========================
   GLOBAL STYLES
=========================== */
.about-page {
  font-family: 'Poppins', sans-serif;
  color: #111827;
  line-height: 1.6;
  background: #f9fafb;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* ===========================
   HERO SECTION
=========================== */
.about-hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  text-align: center;
  background: linear-gradient(135deg,#6366f1,#8b5cf6);
  color: #fff;
  border-radius: 20px;
  overflow: hidden;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.3);
}
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255,255,255,0.15);
  border-radius: 50px;
  font-weight: 600;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255,255,255,0.2);
}
.about-hero h1 {
  font-size: clamp(2rem,5vw,3rem);
  font-weight: 800;
  margin-bottom: 1rem;
}
.about-hero h1 .highlight {
  background: linear-gradient(135deg,#6366f1,#fbbf24);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.about-hero p {
  opacity: 0.9;
  margin-bottom: 2rem;
}

/* ===========================
   HERO STATS
=========================== */
.hero-stats {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
}
.stat {
  text-align: center;
}
.stat-number {
  font-size: 2rem;
  font-weight: 800;
}
.stat-label {
  font-size: 0.875rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* ===========================
   MVV SECTION
=========================== */
.mission-vision-values {
  padding: 6rem 2rem;
}
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}
.section-header h2 {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg,#6366f1,#8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.section-header p {
  color: #6b7280;
  font-size: 1rem;
}
.mvv-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 2rem;
}
.mvv-item {
  background: #fff;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}
.mvv-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}
.mvv-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg,#6366f1,#8b5cf6);
  display:flex;
  align-items:center;
  justify-content:center;
  color:#fff;
  font-size:1.25rem;
  margin-bottom: 1rem;
}

/* ===========================
   WHY CHOOSE US
=========================== */
.why-us {
  padding: 6rem 2rem;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 2rem;
}
.feature-card {
  background: #fff;
  border-radius: 20px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}
.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}
.feature-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg,#6366f1,#8b5cf6);
  display:flex;
  align-items:center;
  justify-content:center;
  color:#fff;
  font-size:1.25rem;
  margin-bottom: 1rem;
}
.feature-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.feature-content p {
  font-size: 0.95rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
}
.feature-highlight {
  font-weight: 600;
  color: #8b5cf6;
  font-size: 0.875rem;
}

/* ===========================
   LEADERSHIP SECTION
=========================== */
.leadership-section {
  padding: 6rem 2rem;
}
.team-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 2rem;
  margin-top: 2rem;
}
.team-card {
  background: #fff;
  border-radius: 20px;
  text-align: center;
  padding: 1.5rem;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}
.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}
.team-card img {
  width: 100%;
  border-radius: 16px;
  margin-bottom: 1rem;
}
.team-card h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}
.team-card p {
  font-size: 0.875rem;
  color: #6b7280;
}

/* ===========================
   RESPONSIVE
=========================== */
@media (max-width:1024px) {
  .hero-stats { flex-direction: column; gap: 1rem; }
  .mvv-grid, .features-grid { grid-template-columns: 1fr; }
  .team-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width:768px) {
  .about-hero, .why-us, .mission-vision-values, .leadership-section { padding: 4rem 1rem; }
  .team-grid { grid-template-columns: 1fr; }
}
</style>

