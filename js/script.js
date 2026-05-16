// ======================================================
// TOP 10 TILING - FINAL WEBSITE SCRIPT
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

  // ======================================================
  // MOBILE MENU
  // ======================================================

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  const menuCloseBtn = document.getElementById("menuCloseBtn");

  if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

      mainNav.classList.toggle("show");

      const isOpen = mainNav.classList.contains("show");

      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    document.querySelectorAll(".main-nav a").forEach(link => {

      link.addEventListener("click", () => {

        mainNav.classList.remove("show");

        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (menuCloseBtn && mainNav && menuToggle) {

    menuCloseBtn.addEventListener("click", () => {

      mainNav.classList.remove("show");

      menuToggle.setAttribute("aria-expanded", "false");
    });
  }

  // ======================================================
  // HEADER SCROLL EFFECT
  // ======================================================

  const header = document.querySelector(".site-header");

  if (header) {

    window.addEventListener("scroll", () => {

      if (window.scrollY > 50) {

        header.style.background = "rgba(255,255,255,0.96)";
        header.style.boxShadow = "0 18px 40px rgba(6,26,51,0.12)";

      } else {

        header.style.background = "rgba(255,255,255,0.94)";
        header.style.boxShadow = "0 12px 35px rgba(6,26,51,0.08)";
      }
    });
  }

  // ======================================================
  // ACTIVE NAVIGATION
  // ======================================================

  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".main-nav a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage) {

      link.classList.add("active");

    } else {

      link.classList.remove("active");
    }
  });

  // ======================================================
  // SCROLL ANIMATION
  // ======================================================

  const animatedItems = document.querySelectorAll(
    ".service-card, .project-card, .content-card, .process-card, .luxury-tile-card, .about-image, .about-copy"
  );

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0px)";

          observer.unobserve(entry.target);
        }
      });

    }, {
      threshold: 0.15
    });

    animatedItems.forEach(item => {

      item.style.opacity = "0";
      item.style.transform = "translateY(35px)";
      item.style.transition = "opacity 0.7s ease, transform 0.7s ease";

      observer.observe(item);
    });

  } else {

    animatedItems.forEach(item => {

      item.style.opacity = "1";
      item.style.transform = "translateY(0px)";
    });
  }

  // ======================================================
  // CONTACT / QUOTE FORM VALIDATION
  // Works with form id="contactForm" OR id="quoteForm"
  // ======================================================

  const contactForm =
    document.getElementById("contactForm") ||
    document.getElementById("quoteForm");

  if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

      const name =
        document.getElementById("name") ||
        contactForm.querySelector('[name="name"]');

      const phone =
        document.getElementById("phone") ||
        contactForm.querySelector('[name="phone"]');

      const email =
        document.getElementById("email") ||
        contactForm.querySelector('[name="email"]');

      const message =
        document.getElementById("message") ||
        contactForm.querySelector('[name="message"]');

      const service =
        contactForm.querySelector('[name="service"]');

      const namePattern =
        /^[A-Za-z\s.]{2,100}$/;

      const phonePattern =
        /^[0-9+\s]{8,15}$/;

      if (!name || !phone || !message) {
        return;
      }

      if (
        !name.value.trim() ||
        !phone.value.trim() ||
        !message.value.trim()
      ) {

        alert("Please complete all required fields.");

        e.preventDefault();

        return;
      }

      if (!namePattern.test(name.value.trim())) {

        alert("Please enter a valid name.");

        e.preventDefault();

        return;
      }

      if (!phonePattern.test(phone.value.trim())) {

        alert("Please enter a valid phone number.");

        e.preventDefault();

        return;
      }

      if (email && email.value.trim() !== "") {

        const emailPattern =
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value.trim())) {

          alert("Please enter a valid email address.");

          e.preventDefault();

          return;
        }
      }

      if (service && service.value.trim() === "") {

        alert("Please select a service.");

        e.preventDefault();

        return;
      }

      if (message.value.length > 1000) {

        alert("Message is too long. Please keep it under 1000 characters.");

        e.preventDefault();

        return;
      }

      alert(
        "Thank you for contacting Top 10 Tiling. We will respond as soon as possible."
      );
    });
  }

  // ======================================================
  // WHATSAPP BUTTON EFFECT
  // ======================================================

  const whatsapp =
    document.querySelector(".whatsapp");

  if (whatsapp) {

    setInterval(() => {

      whatsapp.style.transform = "scale(1.08)";

      setTimeout(() => {

        whatsapp.style.transform = "scale(1)";

      }, 400);

    }, 3000);
  }

  // ======================================================
  // SMOOTH SCROLL
  // ======================================================

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

      const target =
        document.querySelector(this.getAttribute("href"));

      if (target) {

        e.preventDefault();

        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // ======================================================
  // CURRENT YEAR AUTO UPDATE
  // Use: <span id="year"></span>
  // ======================================================

  const year =
    document.getElementById("year");

  if (year) {

    year.textContent =
      new Date().getFullYear();
  }

});