// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

// Create floating dots background
function createFloatingDots() {
  const container = document.getElementById('floatingDots');
  const dotCount = 30;
  
  for (let i = 0; i < dotCount; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${Math.random() * 100}%`;
    dot.style.width = `${Math.random() * 10 + 5}px`;
    dot.style.height = dot.style.width;
    dot.style.opacity = Math.random() * 0.5 + 0.1;
    container.appendChild(dot);
    
    // Animate each dot
    gsap.to(dot, {
        x: gsap.utils.random(-50, 50),
        y: gsap.utils.random(-50, 50),
        rotation: gsap.utils.random(-15, 15),
        duration: gsap.utils.random(8, 15),
        repeat: -1,
        repeatRefresh: true,
        yoyo: true,
        ease: "sine.inOut"
      });
  }
}

createFloatingDots();

// Magnetic button effect
document.querySelectorAll('.magnetic-btn').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const distanceX = x - centerX;
    const distanceY = y - centerY;
    
    gsap.to(btn, {
      x: distanceX * 0.2,
      y: distanceY * 0.2,
      duration: 0.5,
      ease: "power2.out"
    });
    
    gsap.to(btn.querySelector('.hover-effect'), {
      x: distanceX * 0.5,
      y: distanceY * 0.5,
      scale: 1,
      opacity: 1,
      duration: 0.3
    });
  });
  
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.5)"
    });
    
    gsap.to(btn.querySelector('.hover-effect'), {
      scale: 0,
      opacity: 0,
      duration: 0.3
    });
  });
});

// Floating elements animation
gsap.utils.toArray('.floating-element').forEach(el => {
  gsap.to(el, {
    y: gsap.utils.random(-20, 20),
    duration: gsap.utils.random(3, 6),
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
});

// Text highlight animation on scroll
gsap.utils.toArray('.text-highlight').forEach(text => {
  gsap.from(text, {
    scrollTrigger: {
      trigger: text,
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    },
    duration: 1,
    '--scaleX': 1,
    ease: "power2.out"
  });
});

// Hero section animations
const heroTl = gsap.timeline();
heroTl.from(".heading, .slash-icon", {
  duration: 1.5,
  y: 50,
  opacity: 0,
  stagger: 0.2,
  ease: "back.out(1.7)"
})
.from(".hero-text", {
  duration: 1,
  y: 30,
  opacity: 0,
  ease: "power2.out"
}, "-=0.5")
.from(".icon", {
  duration: 1,
  y: 30,
  opacity: 0,
  stagger: 0.1,
  ease: "elastic.out(1, 0.5)"
}, "-=0.3");

// Graphic element path animation
gsap.from(".graphic", {
  duration: 2,
  motionPath: {
    path: [{x: 100, y: 100}, {x: 0, y: 0}],
    curviness: 1.5
  },
  opacity: 0,
  ease: "power2.out"
});

// Interactive icon hover effects
document.querySelectorAll('.icon-container').forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    gsap.to(icon, {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out"
    });
    gsap.to(icon.querySelector('img'), {
      rotation: gsap.utils.random(-15, 15),
      duration: 0.5,
      ease: "elastic.out(1, 0.5)"
    });
  });
  
  icon.addEventListener('mouseleave', () => {
    gsap.to(icon, {
      scale: 1,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)"
    });
    gsap.to(icon.querySelector('img'), {
      rotation: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.5)"
    });
  });
});

// Values section animations
gsap.utils.toArray(".value-item").forEach((item, i) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    },
    duration: 0.8,
    x: i % 2 === 0 ? -50 : 50,
    opacity: 0,
    ease: "power2.out"
  });

  gsap.from(item.querySelector(".value-icon"), {
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    },
    duration: 0.8,
    scale: 0,
    rotation: 180,
    ease: "back.out(1.7)"
  });
});

// Footer animations
const footerTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer-section",
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  }
});
footerTl.from(".footer-logo", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power2.out"
})
.from(".footer-link", {
  duration: 0.6,
  y: 30,
  opacity: 0,
  stagger: 0.1,
  ease: "back.out(1.7)"
}, "-=0.5")
.from(".linkedin-img", {
  duration: 1,
  scale: 0,
  rotation: 360,
  ease: "elastic.out(1, 0.5)"
}, "-=0.3");

// Continuous animations
gsap.to(".slash-icon", {
  rotation: 5,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// Parallax effects
gsap.utils.toArray(".bg-graph").forEach(graph => {
  gsap.to(graph.querySelector("img"), {
    y: 100,
    scrollTrigger: {
      trigger: graph,
      scrub: true
    }
  });
});

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const mainNav = document.querySelector('nav');
const body = document.body;

menuBtn.addEventListener('click', function () {
  const isExpanded = this.classList.toggle('active');
  mainNav.classList.toggle('active');
  body.classList.toggle('menu-open');

  this.setAttribute('aria-expanded', isExpanded);

  if (mainNav.classList.contains('active')) {
    // Ensure nav is visible before animating
    gsap.set("nav a", { opacity: 0, x: 60 });
    
    gsap.to("nav a", {
      duration: 0.6,
      x: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "back.out(1.7)"
    });
  }
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    mainNav.classList.remove('active');
    body.classList.remove('menu-open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('click', (e) => {
  if (!mainNav.contains(e.target) && !menuBtn.contains(e.target)) {
    menuBtn.classList.remove('active');
    mainNav.classList.remove('active');
    body.classList.remove('menu-open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});


// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      gsap.to(window, {
        duration: 1,
        scrollTo: target,
        ease: "power2.inOut",
        onComplete: () => {
          // Add a pulse animation when reaching target
          if (target.classList.contains('section')) {
            gsap.to(target, {
              duration: 0.5,
              boxShadow: '0 0 0 10px rgba(89, 181, 92, 0.3)',
              ease: "power2.out",
              yoyo: true,
              repeat: 1
            });
          }
        }
      });
    }
  });
});