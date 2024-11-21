const users = [
  {
    user: "juan",
    message: "Que haces por aqui a estas horas?",
    imgURL: "../../assets/img/perfil.png",
    id: 1  // ID agregado
  },
  {
    user: "maria",
    message: "¿Nos vemos más tarde?",
    imgURL: "../../assets/img/perfil.png",
    id: 2  // ID agregado
  },
  {
    user: "pedro",
    message: "¡Feliz cumpleaños!",
    imgURL: "../../assets/img/perfil.png",
    id: 3  // ID agregado
  },
  {
    user: "ana",
    message: "¿Has terminado el proyecto?",
    imgURL: "../../assets/img/perfil.png",
    id: 4  // ID agregado
  },
  {
    user: "luis",
    message: "Vamos a la playa este fin de semana.",
    imgURL: "../../assets/img/perfil.png",
    id: 5  // ID agregado
  },
  {
    user: "carmen",
    message: "¿Puedes ayudarme con esto?",
    imgURL: "../../assets/img/perfil.png",
    id: 6  // ID agregado
  },
  {
    user: "javier",
    message: "No olvides la reunión de mañana.",
    imgURL: "../../assets/img/perfil.png",
    id: 7  // ID agregado
  }
];


const chatsData = [
  {
    producto: {
      chat_id: 1,
      producto_nombre: 'Smartphone Samsung Galaxy S22',
      producto_descripcion: 'Smartphone con pantalla AMOLED y cámara de 50 MP.',
      imagen_url: '../../assets/img/ropa b.webp',
      publicacion_titulo: 'Venta de Smartphone S22',
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
        mensaje_contenido: '¿Podrías bajar un poco el precio?',
        mensaje_fecha: '2024-11-20 08:30',
        usuario_nombre: 'Usuario 1',
        usuario_id: 1,  // Ahora ID del usuario 2
        tipo_mensaje_nombre: 'Texto'
      },
      {
        mensaje_id: 4,
        mensaje_contenido: 'Lo siento, no puedo bajar el precio, está a buen valor.cndeklcnecnecn ecnekcndm',
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
      producto_nombre: 'Laptop Dell XPS 13',
      producto_descripcion: 'Laptop ultradelgada con pantalla 4K y procesador Intel i7.',
      imagen_url: '../../assets/img/laptop.webp',
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
        mensaje_contenido: '¿Aceptas pago con tarjeta de crédito?',
        mensaje_fecha: '2024-11-20 10:30',
        usuario_nombre: 'Usuario 2',
        usuario_id: 2,  // ID del usuario 5 (usuario conectado)
        tipo_mensaje_nombre: 'Texto'
      },
      {
        mensaje_id: 9,
        mensaje_contenido: 'Sí, acepto pagos con tarjeta.',
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
      producto_nombre: 'Monitor LG 27" UltraWide',
      producto_descripcion: 'Monitor 4K con pantalla curva de 27 pulgadas.',
      imagen_url: '../../assets/img/monitor.webp',
      publicacion_titulo: 'Venta de Monitor LG UltraWide',
      publicacion_valoracion: 4
    },
    mensajes: [
      {
        mensaje_id: 10,
        mensaje_contenido: '¿Está disponible el monitor?',
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
        mensaje_contenido: '¿Puedo comprarlo a través de la tienda online?',
        mensaje_fecha: '2024-11-20 11:30',
        usuario_nombre: 'Usuario 3',
        usuario_id: 3,  // ID del usuario 4
        tipo_mensaje_nombre: 'Texto'
      },
      {
        mensaje_id: 13,
        mensaje_contenido: 'Claro, puedes comprarlo a través de nuestra página web.',
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
      producto_nombre: 'Smartwatch Fitbit Versa 3',
      producto_descripcion: 'Reloj inteligente con monitorización de salud y deporte.',
      imagen_url: '../../assets/img/smartwatch.webp',
      publicacion_titulo: 'Venta de Smartwatch Fitbit Versa 3',
      publicacion_valoracion: 5
    },
    mensajes: [
      {
        mensaje_id: 14,
        mensaje_contenido: '¿El reloj tiene seguimiento de actividad física?',
        mensaje_fecha: '2024-11-20 12:00',
        usuario_nombre: 'Usuario 4',
        usuario_id: 4,  // ID del usuario 4
        tipo_mensaje_nombre: 'Texto'
      },
      {
        mensaje_id: 15,
        mensaje_contenido: 'Sí, tiene seguimiento de actividad y calorías.',
        mensaje_fecha: '2024-11-20 12:15',
        usuario_nombre: 'Usuario 2',
        usuario_id: 5,  // ID del usuario 5 (usuario conectado)
        tipo_mensaje_nombre: 'Texto'
      },
      {
        mensaje_id: 16,
        mensaje_contenido: '¿Aceptas envíos internacionales?',
        mensaje_fecha: '2024-11-20 12:30',
        usuario_nombre: 'Usuario 4',
        usuario_id: 4,  // ID del usuario 4
        tipo_mensaje_nombre: 'Texto'
      },
      {
        mensaje_id: 17,
        mensaje_contenido: 'Sí, puedo hacer envíos internacionales.',
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
}
let chatSelected = null;
function setupChatUserToggle(userId) {
  // Seleccionar el contenedor de los mensajes
  const chatContainer = document.getElementById('chat-messages');
  if (chatSelected === userId) {
    chatContainer.style.display = 'none';
    chatSelected = null;

  } else {
    chatContainer.style.display = 'flex';
    chatSelected = userId;
  }
  // Alternar la visibilidad del contenedor de chats
}

document.addEventListener('DOMContentLoaded', () => {
  renderChat(users, chatsData);  // Renderizamos los chats de los usuarios
});