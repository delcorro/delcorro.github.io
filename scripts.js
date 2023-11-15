// definir valor del ticket
const ticket = 200;

// definir los descuentos

let descEstudiante = 0.80;
let descTrainee = 0.50;
let descJunior = 0.15;

// tomar elementos

const formulario = document.getElementById('formulario');
const categoria = document.getElementById('categoria');
const cantidad = document.getElementById('cantidad');
const totalPagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');
const textoDescuento = document.getElementById('importeDescuento');

function calcularPago(){
    let total = cantidad.value * ticket;
    // condicionar por descuento

    switch (categoria.value) {
        case "estudiante":
            total = total - (total * descEstudiante);
            textoDescuento.textContent = `Obtuvo un descuento de $ ${(cantidad.value * ticket) - total}`;
            totalPagar
            break;
        
        case "trainee":
            total = total - (total * descTrainee);
            textoDescuento.textContent = `Obtuvo un descuento de $ ${(cantidad.value * ticket) - total}`;
            break; 
             
        case "junior":
            total = total - (total * descJunior)
            textoDescuento.textContent = `Obtuvo un descuento de $ ${(cantidad.value * ticket) - total}`;
            break
        
        default:
            textoDescuento.textContent = `No tiene descuento`;
            break;
    }

    totalPagar.textContent = `Total a Pagar: $ ${total}`;

}

btnResumen.addEventListener('click',(e)=>{
    e.preventDefault()
    calcularPago()
});