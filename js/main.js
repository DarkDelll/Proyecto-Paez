//alert()
let moneda
function seleccionARS() {
    cant = prompt("¿Cuantos ARS?")
    div = prompt("Convertir a")
    switch (div.toUpperCase()) {
        case "USD": moneda = Math.trunc(Number(cant) / 155.08) + " DOLARES AMERICANOS"
            break
        case "EUR": moneda = Math.trunc(Number(cant) / 155.08) + " EUROS"
            break
        case "CLP": moneda = Math.trunc(Number(cant) * 6.24) + " PESOS CHILENOS"
            break
        case "SALIR": break
        default: document.write("<p>Opcion no válida</p>")
    }
    return moneda

}

function seleccionEUR() {
    cant = prompt("¿Cuantos EUR?")
    div = prompt("Convertir a")
    switch (div.toUpperCase()) {
        case "CLP": moneda = Math.trunc(Number(cant) * 967.5) + " PESOS CHILENOS"
            break
        case "USD": moneda = Math.trunc(Number(cant) * 1) + " DOLAR AMERICANO"
            break
        case "ARS": moneda = Math.trunc(Number(cant) * 155.08) + " PESOS ARGENTINOS"
            break
        case "SALIR": break
        default: document.write("<p>Opcion no válida</p>")

    }
    return moneda

}



function seleccionCLP() {
    cant = prompt("¿Cuantos CLP?")
    div = prompt("Convertir a")
    switch (div.toUpperCase()) {
        case "USD": moneda = Math.trunc(Number(cant) / 967.5) + " DOLARES AMERICANOS"
            break
        case "EUR": moneda = Math.trunc(Number(cant) / 967.5) + " EUROS"
            break
        case "ARS": moneda = Math.trunc(Number(cant) / 6.24) + " PESOS ARGENTINOS"
            break
        case "SALIR": break
        default: document.write("<p>Opcion no válida</p>")

    }
    return moneda

}

function seleccionUSD() {
    cant = prompt("¿Cuantos USD?")
    div = prompt("Convertir a")
    switch (div.toUpperCase()) {
        case "CLP": moneda = Math.trunc(Number(cant) * 967.5) + " PESOS CHILENOS"
            break
        case "EUR": moneda = Math.trunc(Number(cant) * 1) + " EUROS"
            break
        case "ARS": moneda = Math.trunc(Number(cant) * 155.08) + " PESOS ARGENTINOS"
            break
        case "SALIR": break
        default: document.write("<p>Opcion no válida</p>")

    }
    return moneda

}


function menuOpciones() {
    document.write("<p>----------------------</p>")
    document.write("<p>MONEDAS</p>")
    document.write("<p> USD (Dolar Estadounidense)</p>")
    document.write("<p> CLP (Peso Chileno)</p>")
    document.write("<p> EUR (Euro)</p>")
    document.write("<p> ARS (Peso Argentino)</p>")
    document.write("<p>PARA FINALIZAR INGRESAR SALIR</p>")
}

function seleccionDiv() {
    menuOpciones();
    let div = prompt(("seleccionar Moneda"))
    switch (div.toUpperCase()) {
        case "USD": seleccionUSD(); document.write("<p>" + moneda + "</p>")
            break
        case "CLP": seleccionCLP(); document.write("<p>" + moneda + "</p>")
            break
        case "EUR": seleccionEUR(); document.write("<p>" + moneda + "</p>")
            break
        case "ARS": seleccionARS(); document.write("<p>" + moneda + "</p>")
            break
        default: document.write("<p>Opcion no válida</p>")

    }


}
seleccionDiv()
let otra = prompt("¿Desea otra operación? (SI/NO)")
if (otra.toUpperCase() == "NO") {
    document.write("<p>Gracias por utilizar el conversor</p>")
    document.write("<p>=====================================</p>")
} else {
    while (otra.toUpperCase() == "SI") {
        seleccionDiv();
        otra = prompt("¿Desea otra operación? (SI/NO)")
    }
    document.write("<p>Gracias por utilizar el conversor</p>")
    document.write("<p>=====================================</p>")
}   
