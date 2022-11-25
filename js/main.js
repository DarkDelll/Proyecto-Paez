
let valor1
let valor2
let cantidad
let moneda1
let moneda2
const monedas = [{ moneda: 'USD', valor: 1 },
{ moneda: 'EUR', valor: 1 },
{ moneda: 'ARS', valor: 159.72 },
{ moneda: 'CLP', valor: 905 }]
function buscarmoneda() {
    
    for (const moneda of monedas) {
        if (moneda.moneda == moneda1.toUpperCase()) {
            valor1 = moneda.valor
        }
        if (moneda.moneda == moneda2.toUpperCase()) {
            valor2 = moneda.valor
        }
    }
    resultado = (valor2 / valor1) * cantidad
    return resultado
}

const btn = document.getElementById("calcular")
btn.addEventListener('click',(evt)=>{
    evt.preventDefault()
    console.log(evt)
    moneda1 = document.getElementById("monedaUno").value
    moneda2 = document.getElementById("monedaDos").value
    cantidad = document.getElementById("cantidad").value
    buscarmoneda()

})


