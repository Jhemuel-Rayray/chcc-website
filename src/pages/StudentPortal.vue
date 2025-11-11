<template>
  <div class="student-portal-page">
    
    <!-- Login Section -->
    <section v-if="!isLoggedIn" class="login-section">
      <div class="login-box">
        <h2>Login</h2>
        <p>Please log in to access the dashboard.</p>

        <form @submit.prevent="login">
          <input v-model="username" type="text" placeholder="Username" required />

          <div class="password-wrapper">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Password"
              required
            />
            <button type="button" class="show-pass-btn" @click="showPassword = !showPassword">
              {{ showPassword ? 'Hide' : 'Show' }}
            </button>
          </div>

          <button type="submit" class="btn-login" :disabled="!username || !password">Login</button>
        </form>

        <p class="error" v-if="error">{{ error }}</p>
      </div>
    </section>

    <!-- Admin Panel -->
    <section v-else class="admin-panel">
      <h1>Welcome, Admin!</h1>
      <p>Manage News & Updates below:</p>

      <!-- Add/Edit News Form -->
      <form @submit.prevent="addNews" class="admin-form">
        <input v-model="newsTitle" type="text" placeholder="News Title" required />
        <textarea v-model="newsContent" placeholder="News Content" required></textarea>

        <!-- Image Upload -->
        <input type="file" @change="handleFileChange" accept="image/*" />

        <!-- Preview Image with Floating Remove Button -->
        <div v-if="uploadedImage" class="preview-image-wrapper">
          <img :src="uploadedImage" alt="Preview" class="preview-image" />
          <button type="button" class="remove-image-btn" @click="uploadedImage = null">
            Remove
          </button>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn-upload">
            {{ editIndex !== null ? 'Update News' : 'Upload News' }}
          </button>

          <button 
            v-if="editIndex !== null" 
            type="button" 
            class="btn-cancel" 
            @click="resetForm"
          >
            Cancel
          </button>
        </div>
      </form>

      <!-- News List -->
      <h2>Existing News</h2>
      <ul class="news-list">
        <li v-for="(item, index) in newsList" :key="index">
          <h3>{{ item.title }}</h3>
          <p>{{ item.content }}</p>

          <img 
            v-if="item.image" 
            :src="item.image" 
            class="news-image" 
            alt="News Image"
          />

          <div class="news-actions">
            <button @click="editNews(index)">Edit</button>
            <button @click="deleteNews(index)">Delete</button>
          </div>
        </li>
      </ul>

      <button class="btn-logout" @click="logout">Logout</button>
    </section>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

// Admin credentials
const adminUser = { username: 'admin', password: 'admin' }

// States
const username = ref('')
const password = ref('')
const showPassword = ref(false)
const isLoggedIn = ref(false)
const error = ref('')

// News Data
const newsList = ref([])
const newsTitle = ref('')
const newsContent = ref('')
const uploadedImage = ref(null)
const editIndex = ref(null)

// Load saved news and login state
onMounted(() => {
  const savedNews = JSON.parse(localStorage.getItem('newsList') || '[]')
  newsList.value = savedNews

  if (localStorage.getItem('isLoggedIn') === 'true') {
    isLoggedIn.value = true
  }
})

// Save news automatically
watch(newsList, (newVal) => {
  localStorage.setItem('newsList', JSON.stringify(newVal))
}, { deep: true })

// Login
const login = () => {
  if (username.value === adminUser.username && password.value === adminUser.password) {
    isLoggedIn.value = true
    localStorage.setItem('isLoggedIn', 'true') // persist login
    error.value = ''
  } else {
    error.value = 'Incorrect username or password.'
  }
}

// Logout
const logout = () => {
  isLoggedIn.value = false
  localStorage.removeItem('isLoggedIn') // clear persisted login
  username.value = ''
  password.value = ''
  resetForm()
}

// Handle Image Upload
const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = e => uploadedImage.value = e.target.result
    reader.readAsDataURL(file)
  }
}

// Add or Update News
const addNews = () => {
  if (!newsTitle.value.trim() || !newsContent.value.trim()) return

  const newsItem = {
    title: newsTitle.value,
    content: newsContent.value,
    image: uploadedImage.value || ''
  }

  if (editIndex.value !== null) {
    newsList.value.splice(editIndex.value, 1, newsItem)
    editIndex.value = null
  } else {
    newsList.value.unshift(newsItem)
  }

  resetForm()
}

// Reset Form
const resetForm = () => {
  newsTitle.value = ''
  newsContent.value = ''
  uploadedImage.value = null
  editIndex.value = null
}

// Edit News
const editNews = (index) => {
  const item = newsList.value[index]
  newsTitle.value = item.title
  newsContent.value = item.content
  uploadedImage.value = item.image || null
  editIndex.value = index
}

// Delete News
const deleteNews = (index) => {
  if (confirm('Are you sure you want to delete this news?')) {
    newsList.value.splice(index, 1)
    if (editIndex.value === index) resetForm()
  }
}
</script>

<style scoped>
/* ===== Student Portal ===== */
.student-portal-page {
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  background: #f3f4f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 15px;
}

/* ===== LOGIN ===== */
.login-section {
  width: 100%;
  max-width: 420px;
}
.login-box {
  background: linear-gradient(145deg, #1e3a8a, #1e40af);
  padding: 40px;
  border-radius: 20px;
  color: white;
  text-align: center;
  box-shadow: 0 15px 35px rgba(0,0,0,0.3);
}
.login-box input {
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  border: none;
  margin: 10px 0;
  font-size: 1rem;
}
.password-wrapper { position: relative; }
.show-pass-btn {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #ffd700;
  cursor: pointer;
}
.btn-login {
  width: 100%;
  padding: 14px;
  margin-top: 15px;
  background: #ffd700;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
}
.btn-login:hover { background: #fbbf24; }

/* ===== ADMIN PANEL ===== */
.admin-panel {
  width: 100%;
  max-width: 750px;
  background: #ffffff;
  padding: 35px;
  border-radius: 22px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.25);
}
.admin-panel h1 { color: #1e40af; margin-bottom: 10px; font-weight: 700; }

/* ===== FORM ===== */
.admin-form input,
.admin-form textarea {
  width: 100%;
  padding: 14px;
  margin-bottom: 12px;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
  font-size: 1rem;
  background: #f9fafb;
}
.admin-form textarea { min-height: 120px; resize: vertical; }

/* ===== PREVIEW IMAGE ===== */
.preview-image-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
}
.preview-image {
  width: 100%;
  border-radius: 12px;
  margin-top: 10px;
}
.remove-image-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: #ef4444;
  color: white;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: 0.25s;
  font-size: 0.85rem;
}
.remove-image-btn:hover {
  background: #dc2626;
  transform: translateY(-1px);
}

/* ===== FORM ACTION BUTTONS ===== */
.form-actions {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
.btn-upload {
  background: #2563eb;
  color: white;
  padding: 12px 25px;
  border-radius: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
}
.btn-upload:hover { background: #1d4ed8; }
.btn-cancel {
  background: #ef4444;
  color: white;
  padding: 12px 25px;
  border-radius: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
}
.btn-cancel:hover { background: #dc2626; }

/* ===== NEWS LIST ===== */
.news-list {
  list-style: none;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.news-list li {
  background: #1e40af;
  color: #f9fafb;
  padding: 20px;
  border-radius: 16px;
}
.news-list h3 {
  margin-bottom: 8px;
  font-size: 1.2rem;
  color: #fef3c7;
}
.news-image { width: 100%; border-radius: 12px; margin-top: 10px; }

/* ===== NEWS ACTIONS ===== */
.news-actions {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
.news-actions button {
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
}
.news-actions button:nth-child(1) { background: #fbbf24; color: white; }
.news-actions button:nth-child(2) { background: #ef4444; color: white; }
.news-actions button:nth-child(1):hover { background: #f59e0b; }
.news-actions button:nth-child(2):hover { background: #dc2626; }

/* ===== LOGOUT ===== */
.btn-logout {
  margin-top: 20px;
  background: #ef4444;
  border: none;
  color: white;
  padding: 14px 28px;
  border-radius: 16px;
  font-weight: 700;
  cursor: pointer;
}
.btn-logout:hover { background: #dc2626; }

/* ===== RESPONSIVE ===== */
@media(max-width: 768px) {
  .admin-panel, .login-box { padding: 25px; }
  .news-actions { flex-direction: column; gap: 6px; }
  .form-actions { flex-direction: column; gap: 8px; }
}
</style>
