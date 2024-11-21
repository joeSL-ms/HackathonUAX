// Paso 1: Define tu lista de productos
const products = [
    { title: "Producto 1", description: "Descripción del producto 1", imageUrl: "../../assets/img/ropa b.webp" },
    { title: "Producto 2", description: "Descripción del producto 2", imageUrl: "../../assets/img/ropa b.webp" },
    { title: "Producto 3", description: "Descripción del producto 3", imageUrl: "../../assets/img/ropa b.webp" },
    { title: "Producto 4", description: "Descripción del producto 1", imageUrl: "../../assets/img/ropa b.webp" },
    { title: "Producto 5", description: "Descripción del producto 2", imageUrl: "../../assets/img/ropa b.webp" },
    { title: "Producto 6", description: "Descripción del producto 3", imageUrl: "../../assets/img/ropa b.webp" },
    { title: "Producto 7", description: "Descripción del producto 1", imageUrl: "../../assets/img/ropa b.webp" },
    { title: "Producto 8", description: "Descripción del producto 2", imageUrl: "../../assets/img/ropa b.webp" },
];

// Paso 2: Función para renderizar los productos
function renderProducts(products) {
    const container = document.getElementById('products-container');

    // Itera sobre cada producto
    products.forEach((product,index) => {
        // Crea el artículo HTML para cada producto
        const article = document.createElement('article');
        article.classList.add('product'); 
        
        // Agrega el HTML al artículo usando `innerHTML`
        article.innerHTML = `
            <div class="product-presentation">
                <img class="product-img" src="${product.imageUrl}" alt="${product.title}">
                <div class="product-description">
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                </div>
                <div class="product-content">
                    <button class="product-button">
                        <span>Solicitar</span>
                    </button>
                    <div class="heart-container">
                        <input id="toggle-heart-${index}" class="toggle-heart-input" type="checkbox" />
                        <label for="toggle-heart-${index}" class="heart-label" aria-label="like">❤</label>
                    </div>
                </div>
            </div>
        `;
        
        // Agrega el artículo al contenedor
        container.appendChild(article);
    });
}

// Ejecuta la función para renderizar los productos cuando la página cargue
document.addEventListener('DOMContentLoaded', () => renderProducts(products));