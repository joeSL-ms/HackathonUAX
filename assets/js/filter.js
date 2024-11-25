const data = [
    {
        category: [
            { name: "ropa", subcategory: ["camisetas", "pantalones", "chaquetas"] },
            { name: "tecnologia", subcategory: ["smartphones", "computadoras", "tabletas"] },
            { name: "hogar", subcategory: ["muebles", "decoración", "electrodomésticos"] },
            { name: "automoviles", subcategory: ["autos", "motos", "camionetas"] },
            { name: "deportes", subcategory: ["futbol", "baloncesto", "ciclismo"] },
            { name: "libros", subcategory: ["novelas", "ciencias", "arte"] }
        ]
    }
];

function renderFilter(data, decoradorLabel) {
    const component = document.getElementById("filter");
    const ulcomponent = document.createElement("ul");

    // Procesar las categorías
    data[0].category.forEach((category, index) => {
        // Contenedor de la categoría
        const categoryContainer = document.createElement("li");
        categoryContainer.className = "filter-colum";

        // Input y label para la categoría principal
        const labelcategory = document.createElement("label");
        labelcategory.setAttribute("for", `category-${index}`);
        labelcategory.textContent = category.name;

        const inputcategory = document.createElement("input");
        inputcategory.setAttribute("type", "checkbox");
        inputcategory.setAttribute("id", `category-${index}`);
        inputcategory.style.display = "none"; // Ocultamos el checkbox, solo usaremos el label

        if (decoradorLabel) {
            labelcategory.className = decoradorLabel;
        }

        // Contenedor para las subcategorías, oculto por defecto
        const subcategoryContainer = document.createElement("ul");
        subcategoryContainer.className = "filter-subcolum ";
        subcategoryContainer.style.display = "none"; // Ocultamos inicialmente

        // Renderizar subcategorías
        category.subcategory.forEach((subcategory, subIndex) => {
            const subcategoryliContainer = document.createElement("li");

            const labelSubcategory = document.createElement("label");
            labelSubcategory.setAttribute("for", `subcategory-${index}-${subIndex}`);
            labelSubcategory.textContent = subcategory;

            const inputSubcategory = document.createElement("input");
            inputSubcategory.setAttribute("type", "checkbox");
            inputSubcategory.setAttribute("id", `subcategory-${index}-${subIndex}`);

            subcategoryliContainer.appendChild(inputSubcategory);
            subcategoryliContainer.appendChild(labelSubcategory);
            subcategoryContainer.appendChild(subcategoryliContainer);
        });

        // Evento para mostrar/ocultar subcategorías al hacer clic en la categoría principal
        labelcategory.addEventListener("click", () => {
            const isHidden = subcategoryContainer.style.display === "none";
            subcategoryContainer.style.display = isHidden ? "flex" : "none";
        });

        // Agregar todo al contenedor principal
        categoryContainer.appendChild(inputcategory);
        categoryContainer.appendChild(labelcategory);
        categoryContainer.appendChild(subcategoryContainer);

        // Añadir al componente principal
        ulcomponent.appendChild(categoryContainer);
        component.appendChild(ulcomponent);
    });
}

// Llamada a la función
renderFilter(data, "decorador-label");
