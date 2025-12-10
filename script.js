gsap.registerPlugin(ScrollTrigger);
//hero animaciones
const heroTL = gsap.timeline();

heroTL
  .from(".containerHero h1", {
    opacity: 0,
    y: -40,
    duration: 1
  })
  .from(".containerHero p", {
    opacity: 0,
    y: -20,
    duration: 0.8
  }, "-=0.5")
  .from(".containerHero img", {
    opacity: 0,
    scale: 0.6,
    duration: 1
  }, "-=0.4");


//   titulo de la section

gsap.from("#featuresTitle", {
  scrollTrigger: {
    trigger: "#featuresTitle",
    start: "top 85%",
  },
  opacity: 0,
  y: 40,
  duration: 1
});


//cards

gsap.from("#card1", {
  scrollTrigger: {
    trigger: "#card1",
    start: "top 90%",
  },
  opacity: 0,
  y: 100,
  duration: 1
});

gsap.from("#card2", {
  scrollTrigger: {
    trigger: "#card2",
    start: "top 90%",
  },
  opacity: 0,
  y: 100,
  duration: 1
});

gsap.from("#card3", {
  scrollTrigger: {
    trigger: "#card3",
    start: "top 90%",
  },
  opacity: 0,
  y: 100,
  duration: 1
});

gsap.from("#card4", {
  scrollTrigger: {
    trigger: "#card4",
    start: "top 90%",
  },
  opacity: 0,
  y: 100,
  duration: 1
});


// cuenta-cta infinito.....

gsap.to("#ctaButton", {
  scale: 1.07,
  repeat: -1,
  yoyo: true,
  duration: 1.2,
  ease: "power1.inOut"
});


//footer

gsap.from("#mainFooter", {
  scrollTrigger: {
    trigger: "#mainFooter",
    start: "top 95%",
  },
  opacity: 0,
  y: 50,
  duration: 1.2
});
