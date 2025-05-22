
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Vertical sections animation
  gsap.utils.toArray(".verticle-content").forEach((section, index) => {
    // Set initial state (hidden)
    gsap.set(section, { opacity: 0, y: 20 });
    
    // Content elements
    const contentItems = section.querySelectorAll(".verticle-content-item");
    const logos = section.querySelectorAll(".verticle-content-logos");
    const images = section.querySelectorAll(".verticle-content-item img:not(.verticle-content-logos)");
    const paragraphs = section.querySelectorAll(".verticle-content-item p");
    const bgGraph = section.querySelector(".bg-graph img");
    
    // Create timeline for this section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none none",
        markers: false
      }
    });
    
    // Section entrance
    tl.to(section, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out"
    });
    
    // Background graphic animation
    if (bgGraph) {
      tl.from(bgGraph, {
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      }, "-=0.5");
    }
    
    // Logo-specific animation (fade up + slight scale)
    if (logos.length) {
      tl.from(logos, {
        y: 40,
        opacity: 0,
        scale: 0.9,
        duration: 0.9,
        ease: "back.out(1.7)",
        stagger: {
          amount: 0.3,
          from: "random"
        }
      }, "-=0.4");
    }
    
    // Regular images animation
    if (images.length) {
      tl.from(images, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15
      }, "-=0.3");
    }
    
    // Text content animation (fade up)
    if (paragraphs.length) {
      tl.from(paragraphs, {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.1
      }, "-=0.4");
    }
    
    // Continuous subtle animations
    if (logos.length) {
      logos.forEach(logo => {
        gsap.to(logo, {
          y: 5,
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });
    }
    
    if (bgGraph) {
      gsap.to(bgGraph, {
        y: 15,
        duration: 5 + index,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  });

  // Enhanced hover effects
  gsap.utils.toArray(".verticle-content-item").forEach(item => {
    const img = item.querySelector("img");
    
    item.addEventListener("mouseenter", () => {
      gsap.to(item, {
        y: -8,
        duration: 0.4,
        ease: "power2.out"
      });
      
      if (img) {
        gsap.to(img, {
          scale: 1.08,
          duration: 0.4,
          ease: "power2.out"
        });
      }
    });
    
    item.addEventListener("mouseleave", () => {
      gsap.to(item, {
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.5)"
      });
      
      if (img) {
        gsap.to(img, {
          scale: 1,
          duration: 0.7,
          ease: "elastic.out(1, 0.5)"
        });
      }
    });
  });