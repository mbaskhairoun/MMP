/* ============================================
   UofT Temerty Medicine Alumni - Main JS
   ============================================ */

// Mobile Navigation Toggle
function toggleNav() {
  const nav = document.getElementById('main-nav');
  nav.classList.toggle('open');
}

// Close mobile nav when clicking a link
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('#main-nav a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      const nav = document.getElementById('main-nav');
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
      }
    });
  });

  // Filter buttons (visual toggle only for static site)
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Add subtle scroll animation for cards
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .event-card, .feature-card, .spotlight-card, .mission-card, .leader-card').forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });
  }
});
