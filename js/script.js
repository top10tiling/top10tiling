// ======================================================
// TOP 10 TILING - FINAL WEBSITE SCRIPT
// ======================================================

// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", () => {

    mainNav.classList.toggle("show");

    const expanded =
      menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute(
      "aria-expanded",
      !expanded
    );
  });

  // CLOSE MENU WHEN LINK CLICKED
  document.querySelectorAll(".main-nav a").forEach(link => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("show");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );
    });
  });
}

// ======================================================
// HEADER SCROLL EFFECT
// ======================================================

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    header.style.background =
      "rgba(255,255,255,0.96)";

    header.style.boxShadow =
      "0 18px 40px rgba(6,26,51,0.12)";

  } else {

    header.style.background =
      "rgba(255,255,255,0.94)";

    header.style.boxShadow =
      "0 12px 35px rgba(6,26,51,0.08)";
  }
});

// ======================================================
// ACTIVE NAVIGATION
// ======================================================

const currentPage =
  window.location.pathname.split("/").pop();

document.querySelectorAll(".main-nav a").forEach(link => {

  const href = link.getAttribute("href");

  if (
    href === currentPage ||
    (currentPage === "" && href === "index.html")
  ) {

    link.classList.add("active");
  }
});

// ======================================================
// SCROLL ANIMATION
// ======================================================

const animatedItems = document.querySelectorAll(
  ".service-card, .project-card, .content-card, .process-card, .luxury-tile-card"
);

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.style.opacity = "1";

      entry.target.style.transform =
        "translateY(0px)";
    }
  });

}, {
  threshold: 0.15
});

animatedItems.forEach(item => {

  item.style.opacity = "0";

  item.style.transform =
    "translateY(40px)";

  item.style.transition =
    "all 0.7s ease";

  observer.observe(item);
});

// ======================================================
// CONTACT FORM VALIDATION
// ======================================================

const contactForm =
  document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener("submit", function (e) {

    const name =
      document.getElementById("name");

    const phone =
      document.getElementById("phone");

    const email =
      document.getElementById("email");

    const message =
      document.getElementById("message");

    const namePattern =
      /^[A-Za-z\s.]{2,100}$/;

    const phonePattern =
      /^[0-9+\s]{8,15}$/;

    if (
      !name.value.trim() ||
      !phone.value.trim() ||
      !email.value.trim() ||
      !message.value.trim()
    ) {

      alert(
        "Please complete all required fields."
      );

      e.preventDefault();

      return;
    }

    if (!namePattern.test(name.value)) {

      alert(
        "Please enter a valid name."
      );

      e.preventDefault();

      return;
    }

    if (!phonePattern.test(phone.value)) {

      alert(
        "Please enter a valid phone number."
      );

      e.preventDefault();

      return;
    }

    if (message.value.length > 1000) {

      alert(
        "Message is too long."
      );

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

    whatsapp.style.transform =
      "scale(1.08)";

    setTimeout(() => {

      whatsapp.style.transform =
        "scale(1)";
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
// ======================================================

const year =
  document.getElementById("year");

if (year) {

  year.textContent =
    new Date().getFullYear();
}