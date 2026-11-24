/**
 * UTKARSH HOMOEOPATHIC CLINIC & RESEARCH CENTRE
 * Core JavaScript functionality: Navigation, Modals, Forms, Lightbox & Actions
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initBookingModal();
  initLocationModal();
  initLightbox();
  initForms();
  initServiceFilter();
  initScrollAnimations();
  initHeroSlider();
  initCounterAnimation();
  initCertificateLightbox();
});

/* ----------------------------------------------------
   1. Sticky Header Effect
   ---------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.kridha-site-header, .site-header');
  const glowbar = document.querySelector('.top-announcement-glowbar');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
      if (glowbar) glowbar.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
      if (glowbar) glowbar.classList.remove('scrolled');
    }
  });
}

/* ----------------------------------------------------
   2. Mobile Hamburger Drawer Menu
   ---------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const dropdownNavLinks = document.querySelectorAll('.nav-item-has-dropdown > .nav-link');

  const kridhaToggle = document.getElementById('kridhaMobileToggle') || document.querySelector('.kridha-mobile-toggle');
  const kridhaMenu = document.querySelector('.kridha-nav-menu');

  if (kridhaToggle && kridhaMenu) {
    kridhaToggle.addEventListener('click', () => {
      kridhaToggle.classList.toggle('active');
      kridhaMenu.classList.toggle('mobile-open');
    });
  }

  // Mobile dropdown expansion in Kridha Header
  const kridhaDropdowns = document.querySelectorAll('.kridha-dropdown > .kridha-nav-link');
  kridhaDropdowns.forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        const parent = link.closest('.kridha-dropdown');
        if (parent) {
          const menu = parent.querySelector('.kridha-dropdown-menu');
          if (menu) {
            const isOpen = menu.style.display === 'block';
            document.querySelectorAll('.kridha-dropdown-menu').forEach(m => m.style.display = 'none');
            menu.style.display = isOpen ? 'none' : 'block';
          }
        }
      }
    });
  });

  if (toggleBtn && mainNav) {
    toggleBtn.addEventListener('click', () => {
      toggleBtn.classList.toggle('active');
      mainNav.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
  }

  // Mobile services & treatment dropdown taps
  dropdownNavLinks.forEach((navLink) => {
    navLink.addEventListener('click', (e) => {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        const parent = navLink.closest('.nav-item-has-dropdown');
        const menu = parent ? parent.querySelector('.dropdown-menu') : null;
        if (menu) {
          // Close other open mobile dropdowns
          document.querySelectorAll('.dropdown-menu.show-mobile').forEach((m) => {
            if (m !== menu) m.classList.remove('show-mobile');
          });
          menu.classList.toggle('show-mobile');
        }
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (mainNav && mainNav.classList.contains('active') && !mainNav.contains(e.target) && !toggleBtn.contains(e.target)) {
      toggleBtn.classList.remove('active');
      mainNav.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
}

/* ----------------------------------------------------
   3. Global Booking Modal
   ---------------------------------------------------- */
function initBookingModal() {
  const modal = document.getElementById('bookingModal');
  const openButtons = document.querySelectorAll('.open-booking-modal, .btn-book-consult');
  const closeButton = modal ? modal.querySelector('.modal-close-btn') : null;
  const bookingForm = document.getElementById('quickBookingForm');

  if (!modal) return;

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeButton) {
    closeButton.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = bookingForm.querySelector('[name="patient_name"]').value;
      const phone = bookingForm.querySelector('[name="patient_phone"]').value;
      const type = bookingForm.querySelector('[name="consult_type"]').value;

      showToast(`Appointment Request Received! Thank you, ${name}. Our clinic coordinator will contact you shortly.`);
      bookingForm.reset();
      closeModal();
    });
  }
}

/* ----------------------------------------------------
   4. Location Pin Modal
   ---------------------------------------------------- */
function initLocationModal() {
  const locationBtns = document.querySelectorAll('#locationPinBtn, .open-location-modal');
  const modal = document.getElementById('locationModal');
  const closeBtn = modal ? modal.querySelector('.modal-close-btn') : null;

  if (!modal) return;

  locationBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

/* ----------------------------------------------------
   5. Lightbox Image Viewer for Gallery
   ---------------------------------------------------- */
function initLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('galleryLightbox');
  if (!galleryItems.length || !lightbox) return;

  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close-btn');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('.gallery-item-title')?.textContent || '';
      const category = item.querySelector('.gallery-item-category')?.textContent || '';

      if (img && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || title;
        if (lightboxCaption) {
          lightboxCaption.innerHTML = `<strong>${title}</strong> &mdash; <span>${category}</span>`;
        }
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}

/* ----------------------------------------------------
   6. Contact & Inquiry Forms Validation
   ---------------------------------------------------- */
function initForms() {
  const contactForm = document.getElementById('mainContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('[name="name"]').value;
      showToast(`Thank you, ${name}! Your inquiry has been sent to Dr. Utkarsh Homoeopathic Clinic.`);
      contactForm.reset();
    });
  }

  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you for subscribing to our Homoeopathic Wellness Newsletter!');
      newsletterForm.reset();
    });
  }
}

/* ----------------------------------------------------
   7. Service & Gallery Tab Filters
   ---------------------------------------------------- */
function initServiceFilter() {
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  const filterableItems = document.querySelectorAll('[data-category]');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      filterableItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (filterVal === 'all' || itemCat === filterVal) {
          item.style.display = '';
          item.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* ----------------------------------------------------
   8. Toast Notification Utility
   ---------------------------------------------------- */
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 400);
  }, 4200);
}

/* ----------------------------------------------------
   9. Scroll Fade-in Animations
   ---------------------------------------------------- */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.feature-card, .service-card, .blog-card, .consult-box');
  
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

/* ----------------------------------------------------
   10. Hero 4-Slide Right-to-Left Automatic Carousel (4s)
   "home page jo slide chalti h right to left wali ... 4 slide rakho jo automatic slide ho or text bhi alag likha hua aye usme"
   ---------------------------------------------------- */
function initHeroSlider() {
  const slider = document.getElementById('heroSlider') || document.getElementById('heroSliderSection');
  if (!slider) return;

  // New Kridha Hero Slider
  const kridhaSlides = slider.querySelectorAll('.kridha-hero-slide');
  const kridhaDots = slider.querySelectorAll('.kridha-dot');
  const prevBtn = document.getElementById('sliderPrev') || document.getElementById('heroPrevBtn');
  const nextBtn = document.getElementById('sliderNext') || document.getElementById('heroNextBtn');

  if (kridhaSlides.length > 0) {
    let currentSlide = 0;
    const totalSlides = kridhaSlides.length;
    const intervalTime = 5500; // 5.5s delay matching kridhahospital.in
    let autoSlideTimer = null;

    function goToSlide(index) {
      kridhaSlides[currentSlide].classList.remove('active');
      if (kridhaDots[currentSlide]) {
        kridhaDots[currentSlide].classList.remove('active');
      }

      currentSlide = (index + totalSlides) % totalSlides;

      kridhaSlides[currentSlide].classList.add('active');
      if (kridhaDots[currentSlide]) {
        kridhaDots[currentSlide].classList.add('active');
      }
    }

    function nextSlide() {
      goToSlide(currentSlide + 1);
    }

    function prevSlide() {
      goToSlide(currentSlide - 1);
    }

    function startAutoplay() {
      stopAutoplay();
      autoSlideTimer = setInterval(nextSlide, intervalTime);
    }

    function stopAutoplay() {
      if (autoSlideTimer) {
        clearInterval(autoSlideTimer);
        autoSlideTimer = null;
      }
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        nextSlide();
        startAutoplay();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        prevSlide();
        startAutoplay();
      });
    }

    kridhaDots.forEach(dot => {
      dot.addEventListener('click', () => {
        const targetIndex = parseInt(dot.getAttribute('data-slide'), 10);
        if (!isNaN(targetIndex)) {
          goToSlide(targetIndex);
          startAutoplay();
        }
      });
    });

    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', startAutoplay);

    // Touch Swipe for Mobile
    let touchStartX = 0;
    let touchEndX = 0;
    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        nextSlide();
        startAutoplay();
      } else if (touchEndX - touchStartX > 50) {
        prevSlide();
        startAutoplay();
      }
    }, { passive: true });

    startAutoplay();
    return;
  }

  // Legacy track fallback
  const track = document.getElementById('heroSliderTrack');
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('#heroIndicators .indicator-dot');
  if (!track || !slides.length) return;

  let legacyIndex = 0;
  const legacyTotal = slides.length;
  let legacyTimer = null;

  function updateLegacy(index) {
    legacyIndex = (index + legacyTotal) % legacyTotal;
    track.style.transform = `translateX(-${legacyIndex * 25}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === legacyIndex));
  }

  setInterval(() => {
    updateLegacy(legacyIndex + 1);
  }, 4500);
}

/* ----------------------------------------------------
   11. Smooth Stat Numbers Count-Up Animation
   "like count chalte huye show kre jab bhi web open ho"
   ---------------------------------------------------- */
function initCounterAnimation() {
  const counters = document.querySelectorAll('.count-up');
  if (!counters.length) return;

  let hasAnimated = false;

  function runCounters() {
    if (hasAnimated) return;
    hasAnimated = true;

    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target')) || 0;
      const suffix = counter.getAttribute('data-suffix') || '';
      const decimals = parseInt(counter.getAttribute('data-decimals') || '0', 10);
      const useComma = counter.getAttribute('data-format') === 'comma';
      const duration = 2200; // 2.2 seconds smooth count
      const startTime = performance.now();

      function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        const currentVal = easeProgress * target;

        let formattedVal;
        if (decimals > 0) {
          formattedVal = currentVal.toFixed(decimals);
        } else {
          const rounded = Math.floor(currentVal);
          formattedVal = useComma ? rounded.toLocaleString('en-IN') : rounded.toString();
        }

        counter.textContent = formattedVal + suffix;

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        } else {
          // Guarantee exact final value
          let finalVal = decimals > 0 
            ? target.toFixed(decimals) 
            : (useComma ? Math.floor(target).toLocaleString('en-IN') : Math.floor(target).toString());
          counter.textContent = finalVal + suffix;
        }
      }

      requestAnimationFrame(updateNumber);
    });
  }

  // Trigger on page open
  runCounters();

  // Also observe if container comes into viewport
  if ('IntersectionObserver' in window) {
    const statsContainer = document.querySelector('.hero-stats-row');
    if (statsContainer) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            runCounters();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      observer.observe(statsContainer);
    }
  }
}

/* ----------------------------------------------------
   11. Certificate Golden Frame Lightbox
   ---------------------------------------------------- */
function initCertificateLightbox() {
  const modal = document.getElementById('certLightboxModal');
  const imgEl = document.getElementById('certLightboxImage');
  const captionEl = document.getElementById('certLightboxCaption');
  const closeBtn = document.querySelector('.cert-lightbox-close');
  const cards = document.querySelectorAll('.golden-frame-card');

  if (!modal || !cards.length) return;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const src = card.getAttribute('data-cert-src');
      const title = card.getAttribute('data-cert-title') || '';
      if (src && imgEl) {
        imgEl.src = src;
        if (captionEl) captionEl.textContent = title;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });
}

