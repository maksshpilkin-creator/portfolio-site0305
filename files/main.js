document.addEventListener('DOMContentLoaded', function () {

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ==================== SCROLL PROGRESS BAR ====================
  var progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.appendChild(progressBar);

  function updateProgress() {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });

  // ==================== HEADER SCROLL ====================
  var header = document.getElementById('header');

  function onScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateProgress();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ==================== HERO LAMP + MOCKUP ====================
  var heroSection = document.getElementById('hero');
  var heroMockup = heroSection ? heroSection.querySelector('.hero-mockup') : null;

  function revealHeroMockup() {
    if (heroMockup) heroMockup.classList.add('hero-mockup--visible');
  }

  if (heroSection) {
    if (prefersReducedMotion) {
      heroSection.classList.add('hero--inview');
      revealHeroMockup();
    } else {
      var heroLampObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            heroSection.classList.add('hero--inview');
            revealHeroMockup();
            heroLampObserver.disconnect();
          }
        });
      }, { threshold: 0.12 });
      heroLampObserver.observe(heroSection);
    }
  }

  // ==================== TYPEWRITER (hero accent) ====================
  function initTypewriter() {
    if (prefersReducedMotion) return;
    var accentEl = document.querySelector('.hero-content h1 .accent');
    if (!accentEl) return;

    var originalText = accentEl.textContent.trim();
    accentEl.textContent = '';

    var textNode = document.createElement('span');
    textNode.className = 'tw-text';
    var cursorEl = document.createElement('span');
    cursorEl.className = 'tw-cursor';
    cursorEl.setAttribute('aria-hidden', 'true');
    accentEl.appendChild(textNode);
    accentEl.appendChild(cursorEl);

    var charIndex = 0;

    function typeNextChar() {
      if (charIndex < originalText.length) {
        textNode.textContent += originalText[charIndex++];
        setTimeout(typeNextChar, 58);
      } else {
        cursorEl.classList.add('tw-cursor--blink');
        setTimeout(function () {
          cursorEl.style.transition = 'opacity 0.6s ease';
          cursorEl.style.opacity = '0';
        }, 2600);
      }
    }

    // Start typewriter once hero is in view
    function waitForHeroInview() {
      if (heroSection && heroSection.classList.contains('hero--inview')) {
        setTimeout(typeNextChar, 1100);
      } else {
        var mo = new MutationObserver(function () {
          if (heroSection.classList.contains('hero--inview')) {
            mo.disconnect();
            setTimeout(typeNextChar, 1100);
          }
        });
        if (heroSection) mo.observe(heroSection, { attributes: true, attributeFilter: ['class'] });
      }
    }

    waitForHeroInview();
  }

  initTypewriter();

  // ==================== ROTATING WORDS (hero sub) ====================
  function initWordRotator() {
    if (prefersReducedMotion) return;
    var sub = document.querySelector('.hero-sub');
    if (!sub) return;

    var words = [
      'кафе и ресторанов',
      'салонов красоты',
      'барбершопов',
      'магазинов',
      'автосервисов'
    ];

    var original = sub.innerHTML;
    var target = 'кафе, салонов и магазинов';
    if (original.indexOf(target) === -1) return;

    sub.innerHTML = original.replace(
      target,
      '<span class="word-rotator" aria-live="polite"><span class="word-rotator__inner">' + words[0] + '</span></span>'
    );

    var inner = sub.querySelector('.word-rotator__inner');
    if (!inner) return;

    var currentIndex = 0;

    setInterval(function () {
      inner.classList.add('word-rotator--out');
      setTimeout(function () {
        currentIndex = (currentIndex + 1) % words.length;
        inner.textContent = words[currentIndex];
        inner.classList.remove('word-rotator--out');
        inner.classList.add('word-rotator--in');
        setTimeout(function () {
          inner.classList.remove('word-rotator--in');
        }, 320);
      }, 180);
    }, 2800);
  }

  initWordRotator();

  // ==================== TEXT SCRAMBLE (section labels) ====================
  var SCRAMBLE_CHARS = '★•/|—АБВГДЕЖЗИКЛМН01234567890';

  function scrambleReveal(el) {
    if (prefersReducedMotion) return;
    var finalText = el.getAttribute('data-original') || el.textContent;
    el.setAttribute('data-original', finalText);
    var totalSteps = 12;
    var step = 0;

    var interval = setInterval(function () {
      var result = '';
      var revealedCount = Math.floor(finalText.length * (step / totalSteps));
      for (var i = 0; i < finalText.length; i++) {
        var char = finalText[i];
        if (char === ' ' || char === '—' || char === '–' || char === '·') {
          result += char;
        } else if (i < revealedCount) {
          result += char;
        } else {
          result += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }
      }
      el.textContent = result;
      step++;
      if (step > totalSteps) {
        el.textContent = finalText;
        clearInterval(interval);
      }
    }, 50);
  }

  // ==================== MAGNETIC BUTTONS ====================
  function initMagneticButtons() {
    if (prefersReducedMotion) return;
    if (window.matchMedia('(max-width: 900px)').matches) return;

    var btns = document.querySelectorAll('.btn');
    btns.forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var rect = btn.getBoundingClientRect();
        var x = (e.clientX - rect.left - rect.width / 2) * 0.18;
        var y = (e.clientY - rect.top - rect.height / 2) * 0.3;
        btn.style.setProperty('--mag-x', x + 'px');
        btn.style.setProperty('--mag-y', y + 'px');
      });
      btn.addEventListener('mouseleave', function () {
        btn.style.setProperty('--mag-x', '0px');
        btn.style.setProperty('--mag-y', '0px');
      });
    });
  }

  initMagneticButtons();

  // ==================== HAMBURGER MENU ====================
  var hamburger = document.querySelector('.hamburger');
  var mobileMenu = document.querySelector('.mobile-menu');
  var mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var isOpen = hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      mobileMenu.setAttribute('aria-hidden', !isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }

  // ==================== WORDS REVEAL (optional headings) ====================
  if (!prefersReducedMotion) {
    var wordsRevealHeadings = document.querySelectorAll('[data-words-reveal]');
    wordsRevealHeadings.forEach(function (heading) {
      var text = heading.textContent;
      if (!text) return;
      var words = text.trim().split(/\s+/);
      if (!words.length) return;
      heading.textContent = '';
      words.forEach(function (word, index) {
        var outer = document.createElement('span');
        var inner = document.createElement('span');
        outer.className = 'word';
        inner.textContent = word;
        inner.style.setProperty('--word-delay', (index * 0.08) + 's');
        outer.appendChild(inner);
        heading.appendChild(outer);
      });
    });
  }

  // ==================== REVEAL ON SCROLL ====================
  var revealElements = document.querySelectorAll('.reveal');
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        var explicitDelay = getComputedStyle(el).getPropertyValue('--reveal-delay').trim();

        if (explicitDelay) {
          el.style.transitionDelay = explicitDelay;
        } else {
          var parent = el.parentElement;
          if (parent) {
            var siblings = parent.querySelectorAll(':scope > .reveal');
            var index = Array.prototype.indexOf.call(siblings, el);
            if (index > 0) el.style.transitionDelay = (index * 0.1) + 's';
          }
        }

        el.classList.add('visible');

        // Scramble any .section-label inside this revealed element
        var label = el.classList.contains('section-label')
          ? el
          : el.querySelector('.section-label');
        if (label && !label.hasAttribute('data-scrambled')) {
          label.setAttribute('data-scrambled', 'true');
          scrambleReveal(label);
        }

        if (el.matches('[data-words-reveal]')) el.classList.add('is-revealed');
        var revealHeading = el.querySelector('[data-words-reveal]');
        if (revealHeading) revealHeading.classList.add('is-revealed');

        revealObserver.unobserve(el);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });

  // Stagger pricing cards
  var pricingSection = document.getElementById('pricing');
  if (pricingSection) {
    var pricingCards = pricingSection.querySelectorAll('.pricing-grid .pricing-card.reveal');
    pricingCards.forEach(function (card, index) {
      card.style.setProperty('--reveal-delay', prefersReducedMotion ? '0s' : (index * 0.08) + 's');
    });
  }

  // ==================== COUNTER ANIMATION ====================
  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-target'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 1500;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(eased * target);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  var counterEls = document.querySelectorAll('.stat-number, .metric-value');
  var counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  counterEls.forEach(function (el) {
    counterObserver.observe(el);
  });

  // ==================== FAQ ACCORDION ====================
  var faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    var button = item.querySelector('.faq-question');
    var answer = item.querySelector('.faq-answer');

    button.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');

      faqItems.forEach(function (other) {
        if (other !== item && other.classList.contains('open')) {
          other.classList.remove('open');
          other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          other.querySelector('.faq-answer').style.maxHeight = null;
          other.querySelector('.faq-answer').setAttribute('aria-hidden', 'true');
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
        answer.setAttribute('aria-hidden', 'true');
      } else {
        item.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.setAttribute('aria-hidden', 'false');
      }
    });
  });

  // ==================== SMOOTH ANCHOR SCROLL ====================
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var headerHeight = header.offsetHeight;
        var rootStyles = window.getComputedStyle(document.documentElement);
        var extraGap = parseFloat(rootStyles.getPropertyValue('--anchor-scroll-gap')) || 56;
        var top = target.getBoundingClientRect().top + window.scrollY - headerHeight - extraGap;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ==================== ACTIVE NAV SECTION ====================
  var desktopNavLinks = document.querySelectorAll('.nav-desktop a[href^="#"]');
  var mobileNavLinks = document.querySelectorAll('.mobile-menu nav a[href^="#"]');
  var allTrackedNavLinks = Array.from(desktopNavLinks).concat(Array.from(mobileNavLinks));
  var navLinksBySection = {};
  var navSectionsSorted = [];

  function registerNavLink(link) {
    var sectionId = link.getAttribute('href').slice(1);
    var sectionEl = document.getElementById(sectionId);
    if (!sectionEl) return;
    if (!navLinksBySection[sectionId]) navLinksBySection[sectionId] = [];
    navLinksBySection[sectionId].push(link);
  }

  allTrackedNavLinks.forEach(registerNavLink);

  function clearActiveNavLinks() {
    allTrackedNavLinks.forEach(function (link) { link.classList.remove('is-active'); });
  }

  function setActiveNavLink(sectionId) {
    clearActiveNavLinks();
    if (sectionId && navLinksBySection[sectionId]) {
      navLinksBySection[sectionId].forEach(function (link) { link.classList.add('is-active'); });
    }
  }

  function recomputeNavSections() {
    navSectionsSorted = Object.keys(navLinksBySection).map(function (id) {
      return { id: id, el: document.getElementById(id) };
    }).filter(function (item) { return !!item.el; }).sort(function (a, b) {
      return a.el.offsetTop - b.el.offsetTop;
    });
  }

  if (allTrackedNavLinks.length) {
    var ticking = false;

    function updateActiveSectionByScroll() {
      if (!navSectionsSorted.length) { clearActiveNavLinks(); ticking = false; return; }
      var headerHeight = header.offsetHeight;
      var rootStyles = window.getComputedStyle(document.documentElement);
      var extraGap = parseFloat(rootStyles.getPropertyValue('--anchor-scroll-gap')) || 56;
      var marker = window.scrollY + headerHeight + extraGap + 12;
      var firstOffsetTop = navSectionsSorted[0].el.offsetTop;

      if (window.scrollY === 0 || marker < firstOffsetTop) {
        clearActiveNavLinks(); ticking = false; return;
      }

      var activeSectionId = null;
      navSectionsSorted.forEach(function (item) {
        if (item.el.offsetTop <= marker) activeSectionId = item.id;
      });

      setActiveNavLink(activeSectionId);
      ticking = false;
    }

    function requestActiveSectionUpdate() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateActiveSectionByScroll);
    }

    recomputeNavSections();
    window.addEventListener('scroll', requestActiveSectionUpdate, { passive: true });
    window.addEventListener('resize', function () { recomputeNavSections(); requestActiveSectionUpdate(); });
    window.addEventListener('load', function () { recomputeNavSections(); requestActiveSectionUpdate(); });
    requestActiveSectionUpdate();
  }

});
