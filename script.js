/* ============ LOADING SCREEN ============ */
document.addEventListener("DOMContentLoaded", function () {
  // Criar elemento de loading
  const loadingScreen = document.createElement('div');
  loadingScreen.className = 'loading';
  loadingScreen.innerHTML = '<div class="loading-spinner"></div>';
  document.body.appendChild(loadingScreen);

  // Esconder o loading quando tudo carregar
  window.addEventListener('load', function () {
    setTimeout(function () {
      loadingScreen.classList.add('hidden');

      // Remover completamente após a animação
      setTimeout(function () {
        loadingScreen.remove();
      }, 500);
    }, 1000);
  });

  // Fallback: remover após 5 segundos mesmo se o load não disparar
  setTimeout(function () {
    if (document.body.contains(loadingScreen) && !loadingScreen.classList.contains('hidden')) {
      loadingScreen.remove();
    }
  }, 5000);
});

/* ============ MENU PRINCIPAL ============ */
document.addEventListener("DOMContentLoaded", function () {
  // Elementos do Menu
  const leftMenuLis = document.querySelectorAll(".full_menu .left-menu ul li");
  const rightMenuLis = document.querySelectorAll(".full_menu .right-menu ul li");
  const leftContainer = document.querySelector(".full_menu .left-menu");
  const rightContainer = document.querySelector(".full_menu .right-menu");
  const rightContainerContent = document.querySelector(".full_menu .right-menu .Content");
  const menuWrapper = document.querySelector(".full_menu");

  // Botões de Controle
  const bars = document.querySelector(".menu-toggle");
  const closeBtn = document.querySelector(".close-menu");
  const moon = document.querySelector(".theme-toggle");

  // Verificar se é mobile
  function isMobile() {
    return window.innerWidth <= 768;
  }

  /* ============ ABRIR MENU ============ */
  bars.addEventListener("click", () => {
    menuWrapper.classList.add("activeWrapper");

    if (isMobile()) {
      leftContainer.style.width = "100%";
      rightContainer.style.width = "100%";
      leftContainer.style.opacity = "1";
      rightContainer.style.opacity = "1";
      leftContainer.style.zIndex = "1";
      rightContainer.style.zIndex = "1";

      // Mostrar conteúdo imediatamente em mobile
      rightMenuLis.forEach((li) => {
        li.style.display = "flex";
        li.style.opacity = "1";
        li.style.transform = "none";
      });

      leftMenuLis.forEach((li) => {
        li.style.display = "flex";
        li.style.opacity = "1";
        li.style.transform = "none";
      });

      rightContainerContent.style.display = "flex";
      rightContainerContent.style.opacity = "1";
      rightContainerContent.style.transform = "none";
    } else {
      leftContainer.classList.add("LeftMenuOpen");
      rightContainer.classList.add("RightMenuOpen");

      rightMenuLis.forEach((li) => {
        li.classList.add("RightContentOpen");
      });

      leftMenuLis.forEach((li) => {
        li.classList.add("LeftContentOpen");
      });

      rightContainerContent.classList.add("menuDescOpen");
    }

    // Desativar scroll quando o menu está aberto
    document.body.style.overflow = "hidden";
  });

  /* ============ FECHAR MENU ============ */
  closeBtn.addEventListener("click", () => {
    menuWrapper.classList.remove("activeWrapper");

    if (isMobile()) {
      leftContainer.style.width = "0";
      rightContainer.style.width = "0";
      leftContainer.style.opacity = "0";
      rightContainer.style.opacity = "0";
      leftContainer.style.zIndex = "-1";
      rightContainer.style.zIndex = "-1";
    } else {
      leftContainer.classList.remove("LeftMenuOpen");
      rightContainer.classList.remove("RightMenuOpen");
    }

    rightMenuLis.forEach((li) => {
      li.classList.remove("RightContentOpen");
    });

    leftMenuLis.forEach((li) => {
      li.classList.remove("LeftContentOpen");
    });

    rightContainerContent.classList.remove("menuDescOpen");

    // Ativar scroll quando o menu está fechado
    document.body.style.overflow = "auto";
  });

  /* ============ ALTERAR TEMA ============ */
  moon.addEventListener("click", () => {
    document.body.classList.toggle("activeTheme");

    // Salvar preferência de tema no localStorage
    if (document.body.classList.contains("activeTheme")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  // Verificar tema salvo
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("activeTheme");
  }

  /* ============ INICIALIZAR SWIPER ============ */
  var swiperOptions = {
    slidesPerView: 4,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: isMobile() ? 2000 : 1200,
      disableOnInteraction: false,
    },
    breakpoints: {
      1600: { slidesPerView: 4 },
      1200: { slidesPerView: 3 },
      900: { slidesPerView: 2 },
      600: { slidesPerView: 2 },
      0: { slidesPerView: 1 }
    }
  };

  var swiper = new Swiper(".MySwiper", swiperOptions);

  /* ============ SCROLL SUAVE ============ */
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

  /* ============ CONFIGURAÇÃO DE VÍDEO ============ */
  const video = document.querySelector(".Model_video");
  if (video) {
    video.muted = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    // Reduzir qualidade em mobile se necessário
    if (isMobile()) {
      video.setAttribute("poster", "Images/video-poster-mobile.jpg");
    }
  }

  /* ============ REDIMENSIONAMENTO DE TELA ============ */
  window.addEventListener("resize", function () {
    // Fechar menu se o tamanho da tela aumentar além do mobile
    if (window.innerWidth > 768 && menuWrapper.classList.contains("activeWrapper")) {
      closeBtn.click();
    }

    // Re-inicializar Swiper com novas configurações se necessário
    swiper.update();
  });
});

/* ============ SCROLLBAR HOVER ============ */
document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = `
    ::-webkit-scrollbar-thumb {
      opacity: 0.6;
    }
    :hover::-webkit-scrollbar-thumb {
      opacity: 1;
    }
  `;
  document.head.appendChild(style);
});

/* ============ MENU MOBILE ============ */
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile_menu');
const mobileCloseMenu = document.querySelector('.mobile_close_menu');

function toggleMenu() {
  mobileMenu.classList.toggle('active');
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
}

menuToggle.addEventListener('click', toggleMenu);
mobileCloseMenu.addEventListener('click', toggleMenu);

// Fechar menu ao clicar em links
document.querySelectorAll('.mobile_menu_list a').forEach(link => {
  link.addEventListener('click', toggleMenu);
});

// Fechar menu ao redimensionar para desktop
window.addEventListener('resize', function () {
  if (window.innerWidth > 720 && mobileMenu.classList.contains('active')) {
    toggleMenu();
  }
});