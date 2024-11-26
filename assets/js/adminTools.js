const adminToolsList = [
    {
        url: "ajustes-admin.png",
        title: "Ajustes",
        description: "Personaliza tu espacio de trabajo"
    },
    {
        url: "boton-de-notificaciones.png",
        title: "Notificaciones",
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

document.addEventListener('DOMContentLoaded', () => {
    rendererAdminTools(adminToolsList);  
});
