

let boxCategoria = document.querySelector('#comboboxCategoria');
let textoProducto = document.querySelector('#producto');
let botonBuscar = document.querySelector('#botonBuscar');

const buscarElementos = (event) => {
    event.preventDefault();

    obtenerProductosAPI();
    imprimirPantalla();
}

const obtenerProductosAPI = () => {

    const uri = 'https://disenoydesarrolloapi.azurewebsites.net/api/Producto';
    let categoria = boxCategoria.value;
    let producto = textoProducto.value;

    autosUri = `${uri}?categoria=${categoria}&nombre=${producto}`;

    fetch(autosUri)
        .then(response => response.json())
        .then(data => imprimirPantalla(data))
}

const imprimirPantalla = (data) => {
    let contenidoTabla = document.querySelector('#contenidoTabla');

    data.forEach(elemento => {
        contenidoTabla.innerHTML += `<tr>
        <td>${elemento.codigo}</td>
        <td>${elemento.nombre}</td>
        <td>${elemento.categoria}</td>
        <td>S/.${elemento.precio}</td>
        <td>${elemento.proveedor}</td>
        <td><input type="checkbox"></td>
        <td><button class='boton-eliminar'> Eliminar </button></td>
        </tr>`;
    });
}

botonBuscar.addEventListener('click',buscarElementos);