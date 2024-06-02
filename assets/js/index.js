precio = 400000

precioSpan = document.querySelector(".precio-base");
precioSpan.innerHTML = precio

let sumar = document.querySelector("#sumar")
let restar = document.querySelector("#restar")



sumar.addEventListener("click",()=>{
    let cantidad = document.querySelector(".cantidad")
let valor = cantidad.innerHTML
    cantidad.innerHTML = parseInt(valor) + 1
    let total = document.querySelector(".valor-total")
    total.innerHTML = parseInt(cantidad.innerHTML) * precio
    restar.disabled = false;
})

restar.addEventListener("click",()=>{
    let cantidad = document.querySelector(".cantidad")
let valor = cantidad.innerHTML
    cantidad.innerHTML = parseInt(valor) - 1
    let total = document.querySelector(".valor-total")
    total.innerHTML =  precio * parseInt(cantidad.innerHTML)
    if (total.innerHTML == 0) {
        restar.disabled = true;
      } else{
        restar.disabled = false;
      }
    })


