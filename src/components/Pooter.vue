<template>
  <footer class="footer">
    <!-- University Name -->
    <div class="footer-title">
      <h2>CONCEPCION HOLY CROSS COLLEGE INC.</h2>
    </div>

    <!-- Footer Links Grid -->
    <div class="footer-links">
      <div class="footer-column">
        <h4>Connect With Us</h4>
        <a href="#">Contact Us</a>
        <a href="#">A to Z Directory</a>
        <a href="#">Social Media</a>
      </div>

      <div class="footer-column">
        <h4>Information For</h4>
        <a href="#">Current Students</a>
        <a href="#">Prospective Students</a>
        <a href="#">Faculty & Staff</a>
        <a href="#">Alumni</a>
        <a href="#">Parents</a>
        <a href="#">Visitors & Media</a>
      </div>

      <div class="footer-column">
        <h4>Security & Emergency</h4>
        <a href="#">COVID-19</a>
        <a href="#">Campus Safety</a>
        <a href="#">Emergency Management</a>
      </div>

      <div class="footer-column">
        <h4>Digital Resources</h4>
        <a href="#">Library</a>
        <a href="#">Student Email</a>
        <a href="#">Faculty Portal</a>
      </div>

      <div class="footer-column">
        <h4>Branding & Policies</h4>
        <a href="#">Data Privacy</a>
        <a href="#">Acceptable Use Policy</a>
        <a href="#">Report Website Issues</a>
      </div>
    </div>

    <!-- Bottom Copyright -->
    <div class="footer-bottom">
      <p>
        &copy; {{ new Date().getFullYear() }} Concepcion Holy Cross College Inc.. All rights reserved.
        | info@chcc.edu.ph | (045) 923 0747
      </p>
    </div>

    <!-- Social Icons -->
    <div class="footer-socials">
      <a href="#"><i class="pi pi-envelope"></i></a>
      <a href="#"><i class="pi pi-facebook"></i></a>
      <a href="#"><i class="pi pi-twitter"></i></a>
      <a href="#"><i class="pi pi-instagram"></i></a>
      <a href="#"><i class="pi pi-youtube"></i></a>
      <a href="#"><i class="pi pi-linkedin"></i></a>
    </div>
  </footer>
</template>

<script setup>
</script>

<style>
.footer {
  background: #f9f9f9;
  padding: 2rem 0rem 0;
  color: #000;
}

.footer-title {
  text-align: center;
  margin-bottom: 2rem;
}

.footer-title h2 {
  font-size: 1.8rem;
  color: #0a2c82; /* deep blue */
  font-weight: bold;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-column h4 {
  font-weight: bold;
  margin-bottom: 0.75rem;
}

.footer-column a {
  display: block;
  color: #0a2c82;
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-column a:hover {
  color: #1e40af;
  text-decoration: underline;
}

.footer-bottom {
  background: #0a2c82;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
  font-size: 0.9rem;
}

.footer-socials {
  background: #0a2c82;
  text-align: center;
  padding: 1rem 0;
}

.footer-socials a {
  color: white;
  margin: 0 0.5rem;
  font-size: 1.3rem;
  transition: color 0.2s;
}

.footer-socials a:hover {
  color: #ffd700; /* gold hover effect */
}
</style>
