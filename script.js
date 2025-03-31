document.addEventListener("DOMContentLoaded", function () {
  // Menu Elements
  const leftMenuLis = document.querySelectorAll(".full_menu .left-menu ul li");
  const rightMenuLis = document.querySelectorAll(
    ".full_menu .right-menu ul li"
  );
  const leftContainer = document.querySelector(".full_menu .left-menu");
  const rightContainer = document.querySelector(".full_menu .right-menu");
  const rightContainerContent = document.querySelector(
    ".full_menu .right-menu .Content"
  );
  const menuWrapper = document.querySelector(".full_menu");

  // Toggle Buttons
  const bars = document.querySelector(".menu-toggle");
  const closeBtn = document.querySelector(".close-menu");
  const moon = document.querySelector(".theme-toggle");

  // Open Menu
  bars.addEventListener("click", () => {
    menuWrapper.classList.add("activeWrapper");
    leftContainer.classList.add("LeftMenuOpen");
    rightContainer.classList.add("RightMenuOpen");

    rightMenuLis.forEach((li) => {
      li.classList.add("RightContentOpen");
    });

    leftMenuLis.forEach((li) => {
      li.classList.add("LeftContentOpen");
    });

    rightContainerContent.classList.add("menuDescOpen");

    // Disable scroll when menu is open
    document.body.style.overflow = "hidden";
  });

  // Close Menu
  closeBtn.addEventListener("click", () => {
    menuWrapper.classList.remove("activeWrapper");
    leftContainer.classList.remove("LeftMenuOpen");
    rightContainer.classList.remove("RightMenuOpen");

    rightMenuLis.forEach((li) => {
      li.classList.remove("RightContentOpen");
    });

    leftMenuLis.forEach((li) => {
      li.classList.remove("LeftContentOpen");
    });

    rightContainerContent.classList.remove("menuDescOpen");

    // Enable scroll when menu is closed
    document.body.style.overflow = "auto";
  });

  // Toggle Theme
  moon.addEventListener("click", () => {
    document.body.classList.toggle("activeTheme");

    // Save theme preference to localStorage
    if (document.body.classList.contains("activeTheme")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  // Check for saved theme preference
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("activeTheme");
  }

  // Initialize Swiper
  var swiper = new Swiper(".MySwiper", {
    slidesPerView: 4,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 1200,
      disableOnInteraction: false,
    },
    breakpoints: {
      1600: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 3,
      },
      900: {
        slidesPerView: 2,
      },
      600: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Make video muted to enable autoplay on mobile
  const video = document.querySelector(".Model_video");
  if (video) {
    video.muted = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
  }

  // Handle window resize
  window.addEventListener("resize", function () {
    // Close menu if screen size increases beyond mobile
    if (
      window.innerWidth > 768 &&
      menuWrapper.classList.contains("activeWrapper")
    ) {
      closeBtn.click();
    }
  });
});
