const users = [
  {
    user: "juan",
    message: "Entiendo. Lo consideraré, gracias.",
    imgURL: "../../assets/img/perfil.png",
    id: 1  // ID agregado
  },
  {
    user: "maria",
    message: "Sí, pero tienes que por lo menos ser de la comunidad.",
    imgURL: "../../assets/img/perfil.png",
    id: 2  // ID agregado
  },
  {
    user: "pedro",
    message: "Claro, puedes tenerlo a través de nuestra página web.",
    imgURL: "../../assets/img/perfil.png",
    id: 3  // ID agregado
  },
  {
    user: "ana",
    message: "Sí, puedo hacer envíos con algunas compañias conocidas como gls.",
    imgURL: "../../assets/img/perfil.png",
    id: 4  // ID agregado
  },
  {
    user: "luis",
    message: "...",
    imgURL: "../../assets/img/perfil.png",
    id: 5  // ID agregado
  },
  {
    user: "carmen",
    message: "...",
    imgURL: "../../assets/img/perfil.png",
    id: 6  // ID agregado
  },
  {
    user: "javier",
    message: "...",
    imgURL: "../../assets/img/perfil.png",
    id: 7  // ID agregado
  }
];


const chatsData = [
  {
    producto: {
      chat_id: 1,
      producto_nombre: 'Pantalón Jeans',
      producto_descripcion: 'Pantalón de mezclilla resistente para uso diario.',
      imagen_url: '../../assets/img/jeans.webp',
      publicacion_titulo: 'Pantalón Jeans, en muy buen estado',
      publicacion_valoracion: 5
    },
    mensajes: [
      {
        mensaje_id: 1,
        mensaje_contenido: 'Hola, ¿todavía está disponible el producto?',
        mensaje_fecha: '2024-11-20 08:00',
        usuario_nombre: 'Usuario 1',
        usuario_id: 1,  // ID del usuario 1
        tipo_mensaje_nombre: 'Texto'
      },
      {
        mensaje_id: 2,
        mensaje_contenido: 'Sí, está disponible. ¿Te interesa?',
        mensaje_fecha: '2024-11-20 08:15',
        usuario_nombre: 'Usuario 2',
        usuario_id: 5,  // ID del usuario 5 (usuario conectado)
        tipo_mensaje_nombre: 'Texto'
      },
      {
        mensaje_id: 3,
        mensaje_contenido: '¿Podrías darme un poco de informacion sobre las tallas?',
        mensaje_fecha: '2024-11-20 08:30',
        usuario_nombre: 'Usuario 1',
        usuario_id: 1,  // Ahora ID del usuario 2
        tipo_mensaje_nombre: 'Texto'
      },
      {
        mensaje_id: 4,
        mensaje_contenido: 'Lo siento, no puedo, está con la etiqueta borrosa.',
        mensaje_fecha: '2024-11-20 08:45',
        usuario_nombre: 'Usuario 2',
        usuario_id: 5,  // ID del usuario 5 (usuario conectado)
        tipo_mensaje_nombre: 'Texto'
      },
      {
        mensaje_id: 5,
        mensaje_contenido: 'Entiendo. Lo consideraré, gracias.',
        mensaje_fecha: '2024-11-20 09:00',
        usuario_nombre: 'Usuario 1',
        usuario_id: 1,  // Ahora ID del usuario 3
        tipo_mensaje_nombre: 'Texto'
      }
    ]
  },
  {
    producto: {
      chat_id: 2,
      producto_nombre: 'laptop-hp.webp',
      producto_descripcion: 'Portátil de alto rendimiento para trabajo y estudio.',
      imagen_url: '../../assets/img/laptop-hp.webp',
      publicacion_titulo: 'Venta de Laptop Dell XPS 13',
      publicacion_valoracion: 4
    },
    mensajes: [
      {
        mensaje_id: 6,
        mensaje_contenido: '¿El laptop tiene garantía?',
        mensaje_fecha: '2024-11-20 10:00',
        usuario_nombre: 'Usuario 2',
        usuario_id: 2,  // ID del usuario 5 (usuario conectado)
        tipo_mensaje_nombre: 'Texto'
      },
      {
        mensaje_id: 7,
        mensaje_contenido: 'Sí, tiene 1 año de garantía.',
        mensaje_fecha: '2024-11-20 10:15',
        usuario_nombre: 'Usuario 3',
        usuario_id: 5,  // ID del usuario 2
        tipo_mensaje_nombre: 'Texto'
      },
      {
        mensaje_id: 8,
        mensaje_contenido: '¿Aceptas envios fuera de la comunidad?',
        mensaje_fecha: '2024-11-20 10:30',
        usuario_nombre: 'Usuario 2',
        usuario_id: 2,  // ID del usuario 5 (usuario conectado)
        tipo_mensaje_nombre: 'Texto'
      },
      {
        mensaje_id: 9,
        mensaje_contenido: 'Sí, pero tienes que por lo menos ser de la comunidad.',
        mensaje_fecha: '2024-11-20 10:45',
        usuario_nombre: 'Usuario 3',
        usuario_id: 5,  // ID del usuario 3
        tipo_mensaje_nombre: 'Texto'
      }
    ]
  },
  {
    producto: {
      chat_id: 3,
      producto_nombre: 'Enciclopedia Infantil',
      producto_descripcion: 'Libro educativo con temas para niños.',
      imagen_url: '../../assets/img/enciclopedia-infantil.webp',
      publicacion_titulo: 'Regalo libro de enciclopaeida infantil.',
      publicacion_valoracion: 4
    },
    mensajes: [
      {
        mensaje_id: 10,
        mensaje_contenido: '¿Está disponible la Enciclopedia Infantil?',
        mensaje_fecha: '2024-11-20 11:00',
        usuario_nombre: 'Usuario 3',
        usuario_id: 3,  // ID del usuario 3
        tipo_mensaje_nombre: 'Texto'
      },
      {
        mensaje_id: 11,
        mensaje_contenido: 'Sí, está disponible.',
        mensaje_fecha: '2024-11-20 11:15',
        usuario_nombre: 'Usuario 2',
        usuario_id: 5,  // ID del usuario 5 (usuario conectado)
        tipo_mensaje_nombre: 'Texto'
      },
      {
        mensaje_id: 12,
        mensaje_contenido: '¿Puedo adquirirlo a través de la paltaforma?',
        mensaje_fecha: '2024-11-20 11:30',
        usuario_nombre: 'Usuario 3',
        usuario_id: 3,  // ID del usuario 4
        tipo_mensaje_nombre: 'Texto'
      },
      {
        mensaje_id: 13,
        mensaje_contenido: 'Claro, puedes tenerlo a través de nuestra página web.',
        mensaje_fecha: '2024-11-20 11:45',
        usuario_nombre: 'Usuario 2',
        usuario_id: 5,  // ID del usuario 5 (usuario conectado)
        tipo_mensaje_nombre: 'Texto'
      }
    ]
  },
  {
    producto: {
      chat_id: 4,
      producto_nombre: 'Libro de Química Experimental',
      producto_descripcion: 'Experimentos básicos para entender la química.',
      imagen_url: '../../assets/img/libro-quimica-experimental.webp',
      publicacion_titulo: 'Libro de quimica en buen estado para estudiar.',
      publicacion_valoracion: 5
    },
    mensajes: [
      {
        mensaje_id: 14,
        mensaje_contenido: '¿El Libro de Química tiene solucionario?',
        mensaje_fecha: '2024-11-20 12:00',
        usuario_nombre: 'Usuario 4',
        usuario_id: 4,  // ID del usuario 4
        tipo_mensaje_nombre: 'Texto'
      },
      {
        mensaje_id: 15,
        mensaje_contenido: 'Sí, tiene solucionario.',
        mensaje_fecha: '2024-11-20 12:15',
        usuario_nombre: 'Usuario 2',
        usuario_id: 5,  // ID del usuario 5 (usuario conectado)
        tipo_mensaje_nombre: 'Texto'
      },
      {
        mensaje_id: 16,
        mensaje_contenido: '¿Aceptas envíos con transporte como gls?',
        mensaje_fecha: '2024-11-20 12:30',
        usuario_nombre: 'Usuario 4',
        usuario_id: 4,  // ID del usuario 4
        tipo_mensaje_nombre: 'Texto'
      },
      {
        mensaje_id: 17,
        mensaje_contenido: 'Sí, puedo hacer envíos con algunas compañias conocidas como gls.',
        mensaje_fecha: '2024-11-20 12:45',
        usuario_nombre: 'Usuario 2',
        usuario_id: 5,  // ID del usuario 5 (usuario conectado)
        tipo_mensaje_nombre: 'Texto'
      }
    ]
  }
];



function renderChat(users, chatData) {
  let userId = null; // Declare as let since we need to modify it
  const container = document.getElementById("chats");

  users.forEach(user => {
    const userElement = document.createElement("div");
    userElement.className = "chat-user";

    // Truncate message if it's longer than 20 characters
    const message = user.message.length > 20 ? user.message.substring(0, 20) + '...' : user.message;

    userElement.innerHTML = `
        <div class="chat-icon-user">
            <img src="${user.imgURL}" alt="Usuario">
        </div>
        <div class="chat-user-info">
            <span class="user-name">${user.user}</span>
            <span class="last-message">${message}</span>
        </div>
        `;

    userElement.setAttribute('data-user-id', user.id);

    // Add event listener to the individual user element
    userElement.addEventListener("click", () => {
      userId = parseInt(userElement.getAttribute('data-user-id'));
      const chat = chatData.find(chat => chat.producto.chat_id === userId);
      rendererChatUsers(chat, 5);
      setupChatUserToggle(userId);
    });

    container.appendChild(userElement);
  });
}

function rendererChatUsers(chatData, userIdSelf) {
  const container = document.getElementById("chat-messages");

  if (!chatData) {
    container.innerHTML = '<p>Chat no encontrado.</p>';
    return;
  }

  const productDetails = chatData.producto;
  const messages = chatData.mensajes;

  // Si no hay mensajes, asignamos un valor vacío para messagesHTML
  let messagesHTML = '';
  messages.forEach(message => {
    const { mensaje_contenido, mensaje_fecha, usuario_id } = message;

    // Comprobamos si el mensaje es del usuario logueado (userIdSelf)
    const messageClass = usuario_id === userIdSelf ? 'message-right' : 'message-left';

    messagesHTML += `
      <div class="${messageClass}">
        <p>${mensaje_contenido}</p>
        <span class="message-date">${mensaje_fecha}</span>
      </div>
    `;
  });

  // Renderizar el contenido dentro de la sección "chat-messages"
  container.innerHTML = `
    <header class="chat-header">
      <div>
        <button class="chat-object-btn"> ← </button>
      </div>
      <div class="chat-header-image">
        <img src="${productDetails.imagen_url}" alt="Imagen del producto">
      </div>
      <div class="chat-header-content">
        <h3 class="chat-object-name">${productDetails.producto_nombre}</h3>
        <p class="chat-object-description">${productDetails.producto_descripcion}</p>
      </div>
    </header>

    <div class="chat-content">
      <div class="chat-messages">
        ${messagesHTML} <!-- Los mensajes filtrados por chat se mostrarán aquí -->
      </div>
    </div>

    <div class="chat-input">
      <label for="chat-input-field" class="visually-hidden">Escribe un mensaje</label>
      <input type="text" id="chat-input-field" class="chat-input-field" placeholder="Escribe un mensaje...">
      <button class="chat-send-button">Enviar</button>
    </div>
  `;
  setupBackUser();
}
let chatSelected = null;
function setupChatUserToggle(userId) {
  const chatContainer = document.getElementById('chat-messages');
  const chatAside = document.getElementById('chats');

  // Comprobar el tamaño de la pantalla
  const isSmallScreen = window.innerWidth <= 1024;

  if (chatSelected === userId) {
    // Si el chat ya está seleccionado, ocultarlo
    chatContainer.style.display = 'none';
    if (isSmallScreen) {
      // Solo ocultamos el aside si estamos en pantalla pequeña
      chatAside.style.display = 'block';  // Vuelve a mostrar el aside cuando se cierra el chat
    }
    chatSelected = null;

  } else {
    // Si el chat es diferente al seleccionado anteriormente, mostrar el nuevo chat
    chatContainer.style.display = 'flex';
    if (isSmallScreen) {
      // Si estamos en una pantalla pequeña, ocultamos el aside
      chatAside.style.display = 'none';
    }
    // Actualizar el chat seleccionado
    chatSelected = userId;
  }
  // Alternar la visibilidad del contenedor de chats
}
function setupBackUser() {
  const BackUser = document.querySelector('.chat-object-btn');
  const chatContainer = document.getElementById('chat-messages');
  const chatAside = document.getElementById('chats');
  
  if (BackUser) {
    BackUser.addEventListener('click', function () {
      // Comprobar si el contenedor de chat está visible
      const isChatVisible = chatContainer.style.display === 'flex';
      chatSelected = null;
      if (isChatVisible) {
        // Si el chat está visible, ocultarlo y mostrar el aside
        chatContainer.style.display = 'none';
        chatAside.style.display = 'block';
      } else {
        // Si el chat no está visible, mostrarlo y ocultar el aside
        chatContainer.style.display = 'flex';
        chatAside.style.display = 'none';
      }
    });
  }
}
document.addEventListener('DOMContentLoaded', () => {
  renderChat(users, chatsData);  // Renderizamos los chats de los usuarios
});