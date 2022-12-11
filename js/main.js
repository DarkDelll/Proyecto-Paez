const moneda1 = document.querySelector("#monedaUno")
const moneda2 = document.querySelector("#monedaDos")
const cantidad = document.querySelector("#cantidad")

let x = 0
const valormonedaDoss = document.querySelector("#valormonedaDos")

async function valormoneda(lur){
    const result = await fetch(lur)
    const dato = await result.json()
    return dato
}

function render(valori){
    valormonedaDoss.setAttribute("value",valori.result.toFixed(2))
}

async function calcularCambio(){
    const url = "https://api.exchangerate.host/convert?from="+moneda1.value+"&to="+moneda2.value+"&amount="+cantidad.value
    const valor = await valormoneda(url)
    render(valor)
}
calcularCambio()
moneda1.addEventListener('change',async ()=>{
    url = "https://api.exchangerate.host/convert?from="+moneda1.value+"&to="+moneda2.value+"&amount="+cantidad.value
    const monedas = await valormoneda(url)
    render(monedas)
})
moneda2.addEventListener('change',async ()=>{
    url = "https://api.exchangerate.host/convert?from="+moneda1.value+"&to="+moneda2.value+"&amount="+cantidad.value
    const monedas = await valormoneda(url)
    render(monedas)
})
cantidad.addEventListener('input',async ()=>{
    url = "https://api.exchangerate.host/convert?from="+moneda1.value+"&to="+moneda2.value+"&amount="+cantidad.value
    const monedas = await valormoneda(url)
    render(monedas)
})

function removeAllChilds(a)
 {
 var a=document.getElementById(a);
 while(a.hasChildNodes())
	a.removeChild(a.firstChild);	
 }
const contenedor = document.getElementById("res")
const btn = document.querySelector("#guardar")
btn.addEventListener('click',async ()=>{
    removeAllChilds("res")
    url = "https://api.exchangerate.host/convert?from="+moneda1.value+"&to="+moneda2.value+"&amount="+cantidad.value
    const monedas = await valormoneda(url)
    const resultadofinal = monedas.result.toFixed(2)
    let items= cantidad.value + " " + moneda1.value + " a " + moneda2.value + " = " +resultadofinal+moneda2.value
    localStorage.setItem("resultados"+x,items)
    x+=1
    if(localStorage.length != 0){
        for(let i=0; i<localStorage.length; i+=1 ){
            const elementop = document.createElement("p")
            elementop.innerHTML = localStorage.getItem("resultados"+i)
            contenedor.appendChild(elementop)
        }
    }

})
if(localStorage.length != 0){
    for(let i=0; i<localStorage.length; i+=1 ){
        const elementop = document.createElement("p")
        elementop.innerHTML = localStorage.getItem("resultados"+i)
        contenedor.appendChild(elementop)
    }
}

const limpiar = document.getElementById("botonLimpiar")
limpiar.addEventListener('click', (evt)=>{
    localStorage.clear()
    removeAllChilds("res")
    x = 0
})

