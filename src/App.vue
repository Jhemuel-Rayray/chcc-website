<template>
  <div id="app">
    <!-- Navbar always at the top -->
    <Navbar />

    <!-- Smooth page transition for all pages -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <!-- Footer always at the bottom -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Pooter.vue'
</script>

<style>
/* Layout ensures footer stays at bottom */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

router-view {
  flex: 1;
  display: block;
}

/* ✨ Smooth fade animation for route changes */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Optional: prevent layout jump during transition */
.fade-enter-active {
  will-change: opacity;
}
</style>
