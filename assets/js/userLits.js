const users = [
    { id: "user1", idchat: "chat1", name: "Pepe" },
    { id: "user2", idchat: "chat2", name: "Lola" },
    { id: "user3", idchat: "chat3", name: "Juan" },
    { id: "user4", idchat: "chat4", name: "Ana" },
    { id: "user5", idchat: "chat5", name: "David" },
    { id: "user6", idchat: "chat6", name: "Carlos" },
    { id: "user7", idchat: "chat7", name: "Laura" },
];

function renderUserList(users) {
    const userlist = document.getElementById("user-list");
    const article = document.createElement("article");
    article.className = "user-list";
    article.innerHTML = `<h2>Usuarios</h2>`;

    // Iterar sobre los usuarios
    users.forEach(user => {
        article.innerHTML += `
            <div class="user-item">
                <span>${user.name}</span>
                <div class="user-actions">
                    <button onclick="deleteUser('${user.id}')">
                        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" alt="Eliminar" title="Eliminar">
                    </button>
                    <button onclick="blockUser('${user.id}')">
                        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828663.png" alt="Bloquear" title="Bloquear">
                    </button>
                    <button onclick="startChat('${user.idchat}')">
                        <img src="https://cdn-icons-png.flaticon.com/512/724/724715.png" alt="Contactar" title="Contactar">
                    </button>
                </div>
            </div>
        `;
    });

    // Agregar el artículo al contenedor
    userlist.appendChild(article);
}


// Ejecutar la función al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    renderUserList(users);
});