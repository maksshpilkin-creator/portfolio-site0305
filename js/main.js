document.addEventListener('DOMContentLoaded', function () {

  var header = document.getElementById('header');
  var hamburger = document.querySelector('.hamburger');
  var mobileMenu = document.querySelector('.mobile-menu');
  var mobileLinks = mobileMenu.querySelectorAll('a');

  function onScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

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

  var revealElements = document.querySelectorAll('.reveal');
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        var parent = el.parentElement;
        if (parent) {
          var siblings = parent.querySelectorAll(':scope > .reveal');
          var index = Array.prototype.indexOf.call(siblings, el);
          if (index > 0) {
            el.style.transitionDelay = (index * 0.1) + 's';
          }
        }
        el.classList.add('visible');
        revealObserver.unobserve(el);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });

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
      if (progress < 1) {
        requestAnimationFrame(step);
      }
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

  var desktopNavLinks = document.querySelectorAll('.nav-desktop a[href^="#"]');
  var mobileNavLinks = document.querySelectorAll('.mobile-menu nav a[href^="#"]');
  var allTrackedNavLinks = Array.from(desktopNavLinks).concat(Array.from(mobileNavLinks));
  var navLinksBySection = {};
  var navSectionsSorted = [];

  function registerNavLink(link) {
    var sectionId = link.getAttribute('href').slice(1);
    var sectionEl = document.getElementById(sectionId);
    if (!sectionEl) return;
    if (!navLinksBySection[sectionId]) {
      navLinksBySection[sectionId] = [];
    }
    navLinksBySection[sectionId].push(link);
  }

  allTrackedNavLinks.forEach(registerNavLink);

  function clearActiveNavLinks() {
    allTrackedNavLinks.forEach(function (link) {
      link.classList.remove('is-active');
    });
  }

  function setActiveNavLink(sectionId) {
    clearActiveNavLinks();
    if (sectionId && navLinksBySection[sectionId]) {
      navLinksBySection[sectionId].forEach(function (link) {
        link.classList.add('is-active');
      });
    }
  }

  function recomputeNavSections() {
    navSectionsSorted = Object.keys(navLinksBySection).map(function (sectionId) {
      return {
        id: sectionId,
        el: document.getElementById(sectionId)
      };
    }).filter(function (item) {
      return !!item.el;
    }).sort(function (a, b) {
      return a.el.offsetTop - b.el.offsetTop;
    });
  }

  if (allTrackedNavLinks.length) {
    var ticking = false;

    function updateActiveSectionByScroll() {
      if (!navSectionsSorted.length) {
        clearActiveNavLinks();
        ticking = false;
        return;
      }

      var headerHeight = header.offsetHeight;
      var rootStyles = window.getComputedStyle(document.documentElement);
      var extraGap = parseFloat(rootStyles.getPropertyValue('--anchor-scroll-gap')) || 56;
      var marker = window.scrollY + headerHeight + extraGap + 12;
      var firstOffsetTop = navSectionsSorted[0].el.offsetTop;

      if (window.scrollY === 0 || marker < firstOffsetTop) {
        clearActiveNavLinks();
        ticking = false;
        return;
      }

      var activeSectionId = null;
      navSectionsSorted.forEach(function (item) {
        if (item.el.offsetTop <= marker) {
          activeSectionId = item.id;
        }
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
    window.addEventListener('resize', function () {
      recomputeNavSections();
      requestActiveSectionUpdate();
    });
    window.addEventListener('load', function () {
      recomputeNavSections();
      requestActiveSectionUpdate();
    });
    requestActiveSectionUpdate();
  }

});
