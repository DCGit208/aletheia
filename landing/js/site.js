(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var header = document.querySelector(".site-header");
  var btn = document.querySelector("[data-nav-toggle]");
  var nav = document.getElementById("site-nav");
  var heroParallax = document.querySelector("[data-hero-parallax]");
  var compact = false;

  if (!reduce) {
    document.documentElement.classList.add("motion-ok");
  }

  function setOpen(open) {
    if (!btn || !nav) return;
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
  }

  if (btn && nav) {
    btn.addEventListener("click", function () {
      setOpen(btn.getAttribute("aria-expanded") !== "true");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setOpen(false);
    });

    window.addEventListener("resize", function () {
      if (window.matchMedia("(min-width: 1081px)").matches) setOpen(false);
    });
  }

  function onScroll() {
    if (header) {
      var next = window.scrollY > 28;
      if (next !== compact) {
        compact = next;
        header.classList.toggle("is-compact", compact);
      }
    }

    if (!reduce && heroParallax) {
      var y = Math.min(window.scrollY, 720) * 0.018;
      heroParallax.style.transform = "translate3d(0, " + y + "px, 0)";
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var revealNodes = document.querySelectorAll("[data-reveal]");
  var heroNodes = document.querySelectorAll(".hero, .page-hero");

  function markIn(el) {
    el.classList.add("is-in");
  }

  if (reduce) {
    revealNodes.forEach(markIn);
    heroNodes.forEach(markIn);
    return;
  }

  heroNodes.forEach(function (hero) {
    window.requestAnimationFrame(function () {
      markIn(hero);
    });
  });

  if (!("IntersectionObserver" in window)) {
    revealNodes.forEach(markIn);
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        markIn(entry.target);
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -10% 0px" },
  );

  revealNodes.forEach(function (el) {
    if (el.classList.contains("hero") || el.classList.contains("page-hero")) {
      return;
    }
    io.observe(el);
  });
})();
