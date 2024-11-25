// Paso 1: Define tu lista de productos
const products = [
    { title: "Camiseta Deportiva", description: "Camiseta de algodón para actividades deportivas.", imageUrl: "../../assets/img/camiseta-deportiva.webp" },
    { title: "Pantalón Jeans", description: "Pantalón de mezclilla resistente para uso diario.", imageUrl: "../../assets/img/jeans.webp" },
    { title: "Chaqueta de Invierno", description: "Chaqueta térmica ideal para el frío.", imageUrl: "../../assets/img/chaqueta-invierno.webp" },
    { title: "Smartphone Galaxy S21", description: "Teléfono móvil con cámara de 108MP y 5G.", imageUrl: "../../assets/img/smartphone-galaxy.webp" },
    { title: "Laptop HP Pavilion", description: "Portátil de alto rendimiento para trabajo y estudio.", imageUrl: "../../assets/img/laptop-hp.webp" },
    { title: "Tablet iPad Air", description: "Tablet ligera y potente con pantalla Retina.", imageUrl: "../../assets/img/ipad-air.webp" },
    { title: "Sofá Moderno", description: "Sofá de 3 plazas con diseño moderno y cómodo.", imageUrl: "../../assets/img/sofa-moderno.webp" },
    { title: "Lámpara de Pie", description: "Lámpara decorativa para iluminación ambiental.", imageUrl: "../../assets/img/lpiampara-e.webp" },
    { title: "Refrigerador LG", description: "Refrigerador con sistema no frost y ahorro de energía.", imageUrl: "../../assets/img/refrigerador-lg.webp" },
    { "title": "Libro de Matemáticas Básicas", "description": "Guía práctica para aprender operaciones básicas.", "imageUrl": "../../assets/img/libro-matematicas-basicas.webp" },
    { "title": "Enciclopedia Infantil", "description": "Libro educativo con temas para niños.", "imageUrl": "../../assets/img/enciclopedia-infantil.webp" },
    { "title": "Rompecabezas 3D", "description": "Rompecabezas educativo en 3D de la Torre Eiffel.", "imageUrl": "../../assets/img/rompecabezas-3d-torre-eiffel.webp" },
    { "title": "Set de Bloques LEGO", "description": "Bloques para construir y estimular la creatividad.", "imageUrl": "../../assets/img/lego-bloques-creatividad.webp" },
    { "title": "Pelota de Juguete", "description": "Pelota de goma resistente, ideal para niños pequeños.", "imageUrl": "../../assets/img/pelota-de-juguete.webp" },
    { "title": "Libro de Cuentos Clásicos", "description": "Colección de cuentos clásicos como 'La Cenicienta'.", "imageUrl": "../../assets/img/libro-cuentos-clasicos.webp" },
    { "title": "Libro de Física para Secundaria", "description": "Guía teórica y práctica para estudiantes de secundaria.", "imageUrl": "../../assets/img/libro-fisica-secundaria.webp" },
    { "title": "Libro de Química Experimental", "description": "Experimentos básicos para entender la química.", "imageUrl": "../../assets/img/libro-quimica-experimental.webp" },
    { "title": "Set de Juguetes Educativos", "description": "Incluye piezas de abecedario y números para aprender jugando.", "imageUrl": "../../assets/img/set-juguetes-educativos.webp" }

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