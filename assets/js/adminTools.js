const adminToolsList = [
    {
        url: "ajustes-admin.png",
        title: "Ajustes",
        description: "Personaliza tu espacio de trabajo"
    },
    {
        url: "boton-de-notificaciones.png",
        title: "Reportes",
        description: "Accede a las notificaciones"
    },
    {
        url: "chats.png",
        title: "Chats",
        description: "Accede a la lista de chats"
    },
    {
        url: "lista-negra.png",
        title: "Lista Negra",
        description: "Accede a la lista de usuarios vetados"
    },
    {
        url: "publicacion-mediumpng.png",
        title: "Publicación",
        description: "Edita y revisa las publicaciones"
    },
    {
        url: "usuarios.png",
        title: "Usuarios",
        description: "Revisa la actividad de los demás usuarios"
    }
];

function rendererAdminTools(list) {
    const tools = document.getElementById("tools");

    list.forEach(element => {
        const article = document.createElement('article');
        article.classList.add("tool-article");
        article.innerHTML = `
            <div class="tool-admin-view">
                <div class="img-view">
                    <img src="../../assets/img/${element.url}" alt="">
                </div>
                <div class="content-view">
                    <h3>${element.title}</h3>
                    <p>${element.description}</p>
                </div>
            </div>
        `;
        tools.appendChild(article);
    });
}
function renderAdminToolBar(){
    const bar = document.getElementById("bar-admin");
    bar.innerHTML = 
    `
        <div>
            <h2><i class="fa-regular fa-id-card"></i> Administador</h2>
        </div>
        <ul class="tolls-interactive-admin">
            <li><a href="index.html"><i class="fa-solid fa-house"></i> Inicio</a></li>
            <li><a href="publications.html"><i class="fa-solid fa-image"></i> Publicaciones</a></li>
            <li><a href="users.html"><i class="fa-solid fa-user"></i> Usuarios</li></a>
            <li class="separator"><a href="blackList.html"><i class="fa-solid fa-user-slash"></i> Lista negra</a></li>
            <li><a href="Reports.html"><i class="fa-solid fa-bell"></i> Reportes</a></li>
            <li><a href="Settings.html"><i class="fa-solid fa-gear"></i> Ajustes</a></li>
        </ul>
    `;
}
document.addEventListener('DOMContentLoaded', () => {
    renderAdminToolBar();
});
document.addEventListener('DOMContentLoaded', () => {
    rendererAdminTools(adminToolsList);  
});
