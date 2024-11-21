const searchSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-search" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="M21 21l-4.35-4.35"></path>
  </svg>
`;

function renderTopNav(logo, icon1, icon2, icon3) {
  const container = document.getElementById("nav");
  container.innerHTML = ""; // Limpiar el contenido anterior
  const nav = document.createElement("nav");
  nav.className = "nav";

  nav.innerHTML = `
    <div class="logo">
      <img src="../../assets/img/${logo}" alt="logo" />
    </div>
    <div class="search-wrapper">
      <input class="search-input" type="text" placeholder="Search">
      ${searchSVG}
    </div>
    <div class="nav-elements">
      <button class="nav-button-icon" id=""><img class="nav-icon" src="../../assets/img/${icon1}" alt=""></button>
      <button class="nav-button-icon" id="chat-toggle-btn"><img class="nav-icon" src="../../assets/img/${icon2}" alt=""></button>
      <button class="nav-button-icon" id=""><img class="nav-icon" src="../../assets/img/${icon3}" alt=""></button>
      <button class="nav-donation" id="donation-toggle-btn">Donar</button>
    </div>
  `;

  container.appendChild(nav);
  setupChatToggle();
  setupDonationToggle();
}

function renderTopNavTablet(logo, icon1, icon2, icon3) {
  const container = document.getElementById("nav");
  container.innerHTML = ""; // Limpiar el contenido anterior
  const nav = document.createElement("nav");
  nav.className = "navTablet";

  nav.innerHTML = `
    <div class="logo">
      <img src="../../assets/img/${logo}" alt="logo" />
    </div>
    <div class="navTablet-content">
      <div class="nav-elements">
        <button class="nav-donation" id="donation-toggle-btn">Donar</button>
      </div>
      <div class="search-wrapper">
        <input class="search-input" type="text" placeholder="Search">
        ${searchSVG}
      </div>
      <div class="nav-elements">
        <button class="nav-button-icon"><img class="nav-icon" src="../../assets/img/${icon1}" alt=""></button>
        <button class="nav-button-icon" id="chat-toggle-btn"><img class="nav-icon" src="../../assets/img/${icon2}" alt=""></button>
        <button class="nav-button-icon"><img class="nav-icon" src="../../assets/img/${icon3}" alt=""></button>
      </div>
    </div>
  `;

  container.appendChild(nav);
  setupChatToggle();
  setupDonationToggle();
}

function renderTopNavMobile(logo, icon) {
  const container = document.getElementById("nav");
  container.innerHTML = ""; // Limpiar el contenido anterior
  const nav = document.createElement("nav");
  nav.className = "navMobile";

  nav.innerHTML = `
    <div class="logo">
      <img src="../../assets/img/${logo}" alt="logo" />
    </div>
    <div class="navMobile-content">
      <div class="nav-elements">
        <button class="nav-donation" id="donation-toggle-btn">Donar</button>
      </div>
      <div class="search-wrapper">
        <input class="search-input" type="text" placeholder="Search">
        ${searchSVG}
      </div>
      <div class="nav-elements">
        <label><img class="nav-icon" src="../../assets/img/${icon}" alt=""></label>
        <input type="checkbox"/>
      </div>
    </div>
  `;

  container.appendChild(nav);
  setupChatToggle();
  setupDonationToggle();
}

function updateNavDisplay() {
  const width = window.innerWidth;
  if (width <= 842) {
    // Para móviles
    renderTopNavMobile("../img/InFamilyLogo.png", "../img/ajusteIcon.png");
  } else if (width <= 1024) {
    // Para tabletas
    renderTopNavTablet("../img/InFamilyLogo.png", "../img/corazonIcon.png", "../img/chatsIcon.png", "usuarioIcon.png");
  } else {
    // Para computadoras de escritorio
    renderTopNav("../img/InFamilyLogo.png", "../img/corazonIcon.png", "../img/chatsIcon.png", "usuarioIcon.png");
  }
}

// Inicializa el display correcto y agrega un listener para el cambio de tamaño
window.addEventListener('resize', updateNavDisplay);
updateNavDisplay(); // Llama a la función para la primera carga

function setupChatToggle() {
  const chatToggleBtn = document.getElementById('chat-toggle-btn');
  if (chatToggleBtn) {
    chatToggleBtn.addEventListener('click', function() {
      const chatContainer = document.getElementById('chats_general');

      // Verificar el estado actual y alternar entre mostrar u ocultar
      if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'flex'; // Mostrar los chats
      } else {
        chatContainer.style.display = 'none'; // Ocultar los chats
      }
    });
  }
}
function setupDonationToggle() {
  const donationToggleBtn = document.getElementById('donation-toggle-btn');
  if (donationToggleBtn) {
    donationToggleBtn.addEventListener('click', function() {
      const donationUrl = 'donacion.html';
      window.open(donationUrl, '_self');
    });
  }
}
