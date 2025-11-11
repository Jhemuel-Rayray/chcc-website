<template>
  <div class="news-page">
    <h1 v-if="!preview">News & Updates</h1>
    <p v-if="!preview">Stay updated with the latest announcements from CHCC.</p>

    <section class="news-feed">
      <div v-if="displayNews.length === 0" class="no-news">
        No news available at the moment.
      </div>

      <div
        v-for="(item, index) in displayedNews"
        :key="index"
        class="news-card"
      >
        <div v-if="item.image" class="news-image-container">
          <img :src="item.image" :alt="item.title" />
          <!-- overlay applied by CSS pseudo-element to tint + unify image color -->
        </div>

        <div class="news-body">
          <h3 class="news-title">{{ item.title }}</h3>
          <p class="news-excerpt">{{ item.excerpt || item.content }}</p>
          <div class="news-meta">
            <span v-if="item.date">{{ item.date }}</span>
            <span v-if="item.author"> • {{ item.author }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
  news: {
    type: Array,
    default: () => []
  },
  preview: {
    type: Boolean,
    default: false
  },
  limit: {
    type: Number,
    default: 3
  }
})

const newsList = ref([])

const loadNews = () => {
  const stored = localStorage.getItem('newsList')
  newsList.value = stored ? JSON.parse(stored) : []
}

onMounted(() => {
  if (!props.news.length) loadNews()
})

// choose data source
const displayNews = computed(() => (props.news.length ? props.news : newsList.value))

// apply preview/limit logic
const displayedNews = computed(() =>
  props.preview ? displayNews.value.slice(0, props.limit) : displayNews.value
)
</script>

<style scoped>
/* Theme variables — tweak to match your site */
:root {
  --primary: #1e40af; /* deep blue */
  --accent: #6366f1;  /* purple-blue */
  --card-bg: #ffffff;
  --muted-text: #6b7280;
  --light-bg: #f8fafc;
}

/* Container */
.news-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 36px 20px;
  font-family: 'Poppins', sans-serif;
  background: var(--light-bg);
  color: #0f172a;
}

/* Heading */
.news-page h1 {
  font-size: 1.9rem;
  color: var(--primary);
  margin: 0 0 6px;
  text-align: center;
}
.news-page p {
  margin: 0 0 24px;
  color: var(--muted-text);
  text-align: center;
}

/* Grid */
.news-feed {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

/* Card */
.news-card {
  background: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.06);
  display: flex;
  flex-direction: column;
  transition: transform .22s ease, box-shadow .22s ease;
}
.news-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
}

/* Image container — fixed 16:9 ratio, image cover + overlay tint */
.news-image-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 */
  background: #e6eefc; /* fallback background color if image missing */
}
.news-image-container img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  /* subtle desaturate and contrast so bright images don't clash */
  filter: grayscale(25%) contrast(95%) brightness(95%);
  transform-origin: center;
  transition: transform .35s ease;
}
.news-card:hover .news-image-container img {
  transform: scale(1.02);
}
/* overlay tint to unify colors (uses primary color with low opacity) */
.news-image-container::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(30,64,175,0.15), rgba(99,102,241,0.08));
  pointer-events: none;
}

/* Body */
.news-body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.news-title {
  margin: 0;
  font-size: 1.125rem;
  color: var(--primary);
  line-height: 1.2;
}
.news-excerpt {
  margin: 0;
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.5;
}

/* Meta */
.news-meta {
  margin-top: auto;
  font-size: 0.82rem;
  color: var(--muted-text);
}

/* empty state */
.no-news {
  grid-column: 1 / -1;
  text-align: center;
  color: var(--muted-text);
  font-style: italic;
  padding: 30px 10px;
}

/* small screens: reduce paddings and font sizes */
@media (max-width: 768px) {
  .news-page { padding: 20px 12px; }
  .news-body { padding: 12px; }
  .news-title { font-size: 1.05rem; }
  .news-excerpt { font-size: 0.92rem; }
  .news-meta { font-size: 0.8rem; }
}
</style>
