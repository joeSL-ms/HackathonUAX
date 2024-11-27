const usersBan = [
    { id: "user1", idchat: "chat1", name: "Pepe", razon: "Comportamiento abusivo en el chat" },
    { id: "user2", idchat: "chat2", name: "Lola", razon: "Publicación de contenido inapropiado" },
    { id: "user3", idchat: "chat3", name: "Juan", razon: "Spam constante en los mensajes" },
    { id: "user4", idchat: "chat4", name: "Ana", razon: "Uso de lenguaje ofensivo" },
    { id: "user5", idchat: "chat5", name: "David", razon: "Violación de las políticas de privacidad" },
    { id: "user6", idchat: "chat6", name: "Carlos", razon: "Publicación de información falsa" },
    { id: "user7", idchat: "chat7", name: "Laura", razon: "Intimidación a otros usuarios" },
    { id: "user8", idchat: "chat8", name: "Maria", razon: "Comportamiento tóxico y agresivo" },
    { id: "user9", idchat: "chat9", name: "Pedro", razon: "Intentos de hackeo y explotación de vulnerabilidades" },
    { id: "user10", idchat: "chat10", name: "Javier", razon: "Distribución de enlaces maliciosos" },
    { id: "user11", idchat: "chat11", name: "Sandra", razon: "Falta de respeto a otros usuarios" },
    { id: "user12", idchat: "chat12", name: "Raúl", razon: "Desobedecer repetidamente las normas del foro" },
    { id: "user13", idchat: "chat13", name: "Marta", razon: "Impersonación de otros usuarios" },
    { id: "user14", idchat: "chat14", name: "Alfredo", razon: "Distribución de contenido explícito" },
    { id: "user15", idchat: "chat15", name: "Lucia", razon: "Cuentas múltiples para manipular el sistema" },
    { id: "user16", idchat: "chat16", name: "Felipe", razon: "Vulgaridad repetida en los comentarios" },
    { id: "user17", idchat: "chat17", name: "Cristina", razon: "Acoso hacia otros usuarios" },
    { id: "user18", idchat: "chat18", name: "Victor", razon: "Involucrarse en actividades fraudulentas" },
    { id: "user19", idchat: "chat19", name: "Eva", razon: "Utilización indebida del sistema de mensajería" },
    { id: "user20", idchat: "chat20", name: "Ricardo", razon: "Intentos de manipulación del algoritmo de recomendación" }
];

let currentPage = 0; // Página inicial

// Función para renderizar la lista de usuarios baneados con paginación
function renderUserBanList() {
    const userlist = document.getElementById("user-ban-list");
    const article = document.createElement("article");
    article.className = "user-list";
    article.innerHTML = `<h2>Usuarios Baneados</h2>`;

    // Calcular el rango de usuarios a mostrar para la página actual
    const start = currentPage * 5;
    const end = start + 5;
    const pageUsers = usersBan.slice(start, end); // Obtener los usuarios de la página actual

    // Iterar sobre los usuarios de la página actual
    pageUsers.forEach(user => {
        article.innerHTML += `
            <div class="user-item">
                <span>${user.name}</span>
                <p><strong>Razón de Baneo:</strong> ${user.razon}</p>
                <div class="user-actions">
                    <button onclick="deleteUser('${user.id}')">
                        <i class="fa-solid fa-check" alt="Desbanear" title="Desbanear" style="font-size: 2em"></i>
                    </button>
                    <button onclick="viewHistory('${user.id}')">
                        <i class="fa-solid fa-clock-rotate-left" alt="Historial" title="Historial" style="font-size: 2em"></i>
                    </button>
                    <button onclick="startChat('${user.idchat}')">
                        <img src="https://cdn-icons-png.flaticon.com/512/724/724715.png" alt="Contactar" title="Contactar">
                    </button>
                </div>
            </div>
        `;
    });

    // Agregar los botones de paginación si hay más páginas
    const pagination = document.createElement('div');
    pagination.className = "pagination";
    
    // Botón de retroceso
    if (currentPage > 0) {
        pagination.innerHTML += `<button onclick="prevPage()"><< Retroceder</button>`;
    }

    // Botón de avance
    if (end < usersBan.length) {
        pagination.innerHTML += `<button onclick="nextPage()">Avanzar >></button>`;
    }

    // Agregar los botones de navegación al artículo
    article.appendChild(pagination);

    // Limpiar el contenedor y agregar el artículo
    userlist.innerHTML = '';
    userlist.appendChild(article);
}

// Función para avanzar a la siguiente página
function nextPage() {
    currentPage++;
    renderUserBanList();
}

// Función para retroceder a la página anterior
function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        renderUserBanList();
    }
}

// Función para borrar usuario (ejemplo de acción)
function deleteUser(userId) {
    alert(`Usuario con ID ${userId} eliminado.`);
}

// Función para ver historial de baneos (ejemplo de acción)
function viewHistory(userId) {
    alert(`Mostrando historial de baneos para el usuario con ID ${userId}.`);
}

// Cargar el contenido cuando se haya cargado la página
document.addEventListener("DOMContentLoaded", () => {
    renderUserBanList();
});
