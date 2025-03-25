<!-- src/components/Layout/AppFooter.vue -->
<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- First Section: Logo and Content -->
      <div class="footer-section logo-section">
        <div class="logo">
          <img src="/WebLogo.png" alt="Company Logo" class="logo-image">
        </div>
        <div class="logo-content">
          <p>Your company description or tagline goes here. Provide a brief overview of your business or application.</p>
        </div>
      </div>

      <!-- Second Section: Quick Links -->
      <div class="footer-section links-section">
        <h4>Address</h4>
        <nav>
         <h1>Republic of Belarus Minsk city Dzerzhinsky Avenue 15</h1>
        </nav>
      </div>

      <!-- Third Section: Resources and Social Icons -->
      <div class="footer-section resources-section">
        <h4>Contact</h4>
        <nav>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </nav>
        
        <!-- Social Icons -->
        <div class="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-icon">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="social-icon">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="social-icon">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-icon">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.footer {
  color: white;
  padding: 2rem 0;
  padding-bottom: 0px;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-section {
  flex: 1;
  margin: 0 1rem;
}

.logo-section .logo-image {
  max-width: 150px;
  margin-bottom: 1rem;
}

.footer-section h4 {
  padding-bottom: 0.5rem;
  color: #fff;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section ul li a {
  color: #ddd;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: #fff;
}

.social-icons {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.social-icon {
  color: #ddd;
  margin: 0 0.5rem;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #fff;
}

.copyright {
  text-align: center;
  padding: 1rem 0;
  background-color: #222;
  margin-top: 1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
  }

  .footer-section {
    margin: 1rem 0;
    text-align: center;
  }

  .social-icons {
    justify-content: center;
  }
}
</style>