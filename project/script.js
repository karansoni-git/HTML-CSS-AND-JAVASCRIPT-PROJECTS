function firstPage() {
  var tl = gsap.timeline();

  tl.from(".header nav h1,.header nav h4,.header nav button", {
    y: -80,
    duration: 0.3,
    opacity: 0,
    stagger: 0.1,
  });

  tl.from(
    ".header nav h1 i",
    {
      duration: 0.2,
      opacity: 0,
      scale: 0,
      rotate: 360,
      stagger: 0.2,
    },
    "-=0.5"
  );

  tl.from(
    ".header nav h1 span",
    {
      duration: 0.3,
      y: -30,
      ease: "elastic.out",
      opacity: 0,
    },
    "-=0.3"
  );

  tl.from(".left-side h1", {
    x: -200,
    duration: 0.4,
    opacity: 0,
  });

  tl.from(".left-side p", {
    x: -100,
    duration: 0.2,
    opacity: 0,
  });

  tl.from(".left-side button", {
    scale: 0,
    duration: 0.2,
    opacity: 0,
  });
  tl.from(
    ".right-side img",
    {
      duration: 0.4,
      opacity: 0,
    },
    "-=0.4"
  );
  tl.from(
    ".sponsered img",
    {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.1,
    },
    "-=0.7"
  );
}
firstPage();

function secondPage() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".main",
      scroller: "body",
      start: "top 70%",
      end: "top 0%",
      scrub: 3,
    },
  });

  tl.from(".services h2", {
    x: -100,
    duration: 0.2,
    opacity: 0,
  });

  tl.from(".services p", {
    y: -20,
    duration: 0.1,
    opacity: 0,
  });

  tl.from(
    "#left1",
    {
      x: -200,
      y: -200,
      duration: 0.3,
      opacity: 0,
    },
    "line1"
  );

  tl.from(
    "#right1",
    {
      x: 200,
      y: -200,
      duration: 0.3,
      opacity: 0,
    },
    "line2"
  );

  tl.from(
    "#left2",
    {
      x: -200,
      y: 200,
      duration: 0.3,
      opacity: 0,
    },
    "line2"
  );

  tl.from(
    "#right2",
    {
      x: 200,
      y: 200,
      duration: 0.3,
      opacity: 0,
    },
    "line1"
  );
}

secondPage();

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer",
    scroller: "body", 
    start: "top 80%",
    end: "top 30%",
    scrub: 3,
  },
});

tl.from(".text h2", {
  duration: 0.2,
  y: -40,
  opacity: 0,
});

tl.from(".text p", {
  duration: 0.2,
  x: -100,
  opacity: 0,
  markers: true,
});

tl.from(".text button", {
  duration: 0.2,
  scale: 0,
  opacity: 0,
});
tl.from(".image img", {
  duration: 0.3,
  transform: "skew(30deg)",
  opacity: 0,
});

tl.from(".case-study h2", {
  duration: 0.3,
  opacity: 0,
  x: -100,
  y: -100,
});

tl.from(".case-study p", {
  duration: 0.3,
  opacity: 0,
  x: 100,
  y: -100,
});

tl.from(".section-3,.section-3 .box", {
  x: -120,
  duration: 0.3,
  stagger: 0.2,
  opacity: 0,
});
