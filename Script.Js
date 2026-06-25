document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
    offset: 50,
    easing: 'ease-in-out'
  });

  // Navbar Scroll Effect
  const navbar = document.getElementById("main-navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Active Nav Link Update
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= (sectionTop - 150)) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  // View More Projects Button
  const toggleBtn = document.getElementById("toggleProjectsBtn");
  const moreProjects = document.getElementById("moreProjects");

  if (toggleBtn && moreProjects) {
    toggleBtn.addEventListener("click", () => {
      if (
        moreProjects.style.display === "none" ||
        moreProjects.style.display === ""
      ) {
        moreProjects.style.display = "flex";
        toggleBtn.innerText = "Show Less";
      } else {
        moreProjects.style.display = "none";
        toggleBtn.innerText = "View More Projects";
      }
    });
  }

  // Particles
  if (window.particlesJS) {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 70,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: ["#32f906", "#d0ff00"]
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.4,
          random: true
        },
        size: {
          value: 3,
          random: true
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#32f906",
          opacity: 0.15,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.5,
          random: true,
          out_mode: "out"
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 180,
            line_linked: {
              opacity: 0.6
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  }
});