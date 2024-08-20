// Crear un array inicial vacío
const listaDeItems = [
    {
        medida: '165-70r13',
        marca: 'Fate', 
        cantidad: 10,
        precio:100000
    },
    {
        medida: "175/65r14",
        marca: "Fate",
        cantidad: 40,
        precio: 120000
    },
    {
        medida:"185/60r14",
        marca: "pirelli",
        cantidad:12,
        precio:130000
    }
];

function agregarItem() {
    // ingreso de cubierta al stock
    const medida = prompt('Ingrese la medida de cubierta:');
    const marca = prompt('Ingrese la marca:');
    const cantidad = parseInt(prompt('Ingrese la cantidad:'), 10);
    const precio = parseFloat(prompt('Ingrese el precio:'));

    // agregar nueva medida
    const nuevoItem = {
        medida: medida,
        marca: marca,
        cantidad: cantidad,
        precio: precio
    };


    listaDeItems.push(nuevoItem);

    console.table(listaDeItems);

    return listaDeItems;
}

agregarItem()