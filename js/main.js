/* ================================================================
   MUHAMMAD HANZLA PORTFOLIO — main.js
   Chunk 1: Navbar · Typing · Counter · Canvas Neural Net · Scroll reveal
   ================================================================ */

/* ── 1. Navbar: add .scrolled class on scroll ── */
const navbar   = document.getElementById('navbar');
const hamburger= document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
  highlightNavLink();
});

/* ── 2. Hamburger mobile menu ── */
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('mobile-open');
});
// Close menu when a link is clicked
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('mobile-open');
  });
});

/* ── 3. Active nav link on scroll ── */
function highlightNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY  = window.scrollY + 100;
  sections.forEach(sec => {
    const top    = sec.offsetTop;
    const height = sec.offsetHeight;
    const link   = document.querySelector(`.nav-link[href="#${sec.id}"]`);
    if (link) {
      link.classList.toggle('active', scrollY >= top && scrollY < top + height);
    }
  });
}

/* ── 4. Typing animation ── */
const typingEl = document.getElementById('typing-text');
const words    = ['Data Scientist', 'ML Engineer', 'Kaggle Expert', 'Deep Learning Dev', 'BS Software Engineer'];
let   wIndex   = 0, cIndex = 0, deleting = false;

function type() {
  const current = words[wIndex];
  if (!deleting) {
    typingEl.textContent = current.slice(0, ++cIndex);
    if (cIndex === current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typingEl.textContent = current.slice(0, --cIndex);
    if (cIndex === 0) {
      deleting = false;
      wIndex = (wIndex + 1) % words.length;
    }
  }
  setTimeout(type, deleting ? 60 : 110);
}
type();

/* ── 5. Counter animation (hero stats) ── */
function animateCounter(el) {
  const target   = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const step     = target / (duration / 16);
  let   current  = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { el.textContent = target; clearInterval(timer); }
    else                   { el.textContent = Math.floor(current); }
  }, 16);
}
// Fire counters when hero stats enter view
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.stat-num').forEach(animateCounter);
      counterObserver.disconnect();
    }
  });
}, { threshold: 0.5 });
const statsEl = document.querySelector('.hero-stats');
if (statsEl) counterObserver.observe(statsEl);

/* ── 6. Canvas: animated neural-network dots ── */
(function initCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx    = canvas.getContext('2d');
  let   W, H, dots;

  const DOT_COUNT  = 55;
  const MAX_DIST   = 160;
  const DOT_RADIUS = 2.2;
  const DOT_COLOR  = 'rgba(30,58,138,';
  const LINE_COLOR = 'rgba(59,130,246,';

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function initDots() {
    dots = Array.from({ length: DOT_COUNT }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * 0.55,
      vy: (Math.random() - 0.5) * 0.55,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    // Move & wrap dots
    dots.forEach(d => {
      d.x += d.vx; d.y += d.vy;
      if (d.x < 0) d.x = W; if (d.x > W) d.x = 0;
      if (d.y < 0) d.y = H; if (d.y > H) d.y = 0;
    });
    // Draw connections
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx   = dots[i].x - dots[j].x;
        const dy   = dots[i].y - dots[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.5;
          ctx.beginPath();
          ctx.strokeStyle = LINE_COLOR + alpha + ')';
          ctx.lineWidth   = 0.8;
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.stroke();
        }
      }
    }
    // Draw dots
    dots.forEach(d => {
      ctx.beginPath();
      ctx.arc(d.x, d.y, DOT_RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = DOT_COLOR + '0.5)';
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  initDots();
  draw();
  window.addEventListener('resize', () => { resize(); initDots(); });
})();

/* ── 7. Scroll reveal (IntersectionObserver) ── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ================================================================
   Chunks 2-4 will append more functionality here
   ================================================================ */

/* ================================================================
   CHUNK 2 — Skill bars animation on scroll
================================================================ */
(function initSkillBars() {
  const barsContainer = document.getElementById('skill-bars');
  if (!barsContainer) return;

  const fills = barsContainer.querySelectorAll('.skill-bar-fill');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fills.forEach(fill => {
          const target = fill.dataset.width;
          // Small delay so CSS transition fires after element is visible
          setTimeout(() => { fill.style.width = target + '%'; }, 100);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(barsContainer);
})();

/* ================================================================
   CHUNK 3 — Project filter tabs
================================================================ */
(function initProjectFilter() {
  const btns  = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !match);

        // Re-trigger reveal animation for visible cards
        if (match) {
          card.classList.remove('visible');
          setTimeout(() => card.classList.add('visible'), 50);
        }
      });
    });
  });

  // Trigger reveal on all visible cards initially
  cards.forEach(card => {
    new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 }).observe(card);
  });
})();

/* ================================================================
   CHUNK 4 — Contact form + Footer year + Back-to-top
================================================================ */

/* ── Dynamic year in footer ── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ── Contact form submission (Formspree) ── */
(function initContactForm() {
  const form     = document.getElementById('contact-form');
  const btn      = document.getElementById('submit-btn');
  const btnText  = document.getElementById('btn-text');
  const feedback = document.getElementById('form-feedback');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Loading state
    btn.disabled = true;
    btnText.textContent = 'Sending…';
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Sending…</span>';
    feedback.className = 'form-feedback';
    feedback.textContent = '';

    try {
      const data     = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        feedback.className = 'form-feedback success';
        feedback.innerHTML = '<i class="fas fa-check-circle"></i> Message sent! I\'ll reply within 24 hours.';
        form.reset();
      } else {
        throw new Error('Server error');
      }
    } catch {
      feedback.className = 'form-feedback error';
      feedback.innerHTML = '<i class="fas fa-exclamation-circle"></i> Oops! Something went wrong. Email me directly at muhammadhanzlaaltaf@gmail.com';
    } finally {
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> <span>Send Message</span>';
    }
  });
})();

/* ── Smooth back-to-top ── */
const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ── Input focus effects ── */
document.querySelectorAll('.form-input, .form-textarea').forEach(el => {
  el.addEventListener('focus', () => {
    el.closest('.form-group')?.querySelector('.form-label')
      ?.style.setProperty('color', 'var(--primary-mid)');
  });
  el.addEventListener('blur', () => {
    el.closest('.form-group')?.querySelector('.form-label')
      ?.style.setProperty('color', 'var(--text)');
  });
});
