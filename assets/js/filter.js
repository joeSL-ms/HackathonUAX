function renderFilter(filtros,decoradorLabel) {
    const component = document.getElementById("filter");
    filtros.forEach((categoria, index) => {
        const label = document.createElement("label");
        label.setAttribute("for", index);
        label.textContent = categoria;

        const input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", index);

        if (decoradorLabel) {
            label.className = decoradorLabel;
        }

        component.appendChild(input);
        component.appendChild(label);
    });
}
const categorias = ['Opción 1', 'Opción 2', 'Opción 3','Opción 4', 'Opción 5', 'Opción 6'];
renderFilter(categorias,"filter-label");