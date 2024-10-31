function renderTopNav(logo,icono1,icono2,icono3){
    const container = document.getElementById("nav");
    const nav = document.createElement("nav");
    nav.className="nav";

    nav.innerHTML = `
        <div class="logo">
          <img src="../../assets/img/${logo}" alt="logo" />
        </div>
        <div class="search-wrapper">
          <input class="search-input" type="text" placeholder="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-search" viewBox="0 0 24 24">
            <defs></defs>
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>
        </div>
        <div class="nav-elements">
          <button class="nav-button-icon"><img class="nav-icon" src="../../assets/img/${icono1}" alt=""></button>
          <button class="nav-button-icon"><img src="../../assets/img/${icono2}" alt="" class="nav-icon"></button>
          <button class="nav-button-icon"><img src="../../assets/img/${icono3}" alt="" class="nav-icon"></button>
          <button class="nav-donation">Donar</button>
        </div>
    `;
    container.appendChild(nav);
}