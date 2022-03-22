

function calcularPrecioConDescuento(precio,descuento){
    
    return (precio * (100-descuento)) / 100;
}

function clickcalcularPrecioConDescuento() {
    const precio= document.getElementById("InputPrace").value;
    const descuento= document.getElementById("InputPorcentaje").value;
    console.log({
        precio,
        descuento
    })

    const precionConDescuento = calcularPrecioConDescuento(Number(precio), Number(descuento));

    const parrafoP = document.getElementById("ResultP");

    parrafoP.innerText = `El precio con descuento es: ${precionConDescuento}`
    
    return
}


/*
console.log({
    precioOriginal,
    descuento,
    porcentajePrecionConDescuento,
    precioConDescuento
});
*/

