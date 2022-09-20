const Servicios = [
    {nombre:"Cálculo Estructural"}, 
    {nombre:"Dirección e Inspección de obras"}
]

let nombre = prompt("Ingrese su nombre: ");
let repetir = true;
let precioMCuadrado = 114400;
let precioTotalMCuadrados = 0;
let mCuadradosDeseados = 0;
let precioHoraInspector = 2000;
let horasXInspector = 0;
let cantidadInspectores = 0;
let precioInspeccion 
let ubicacion = "";

function cotizador() {
    precioTotalMCuadrados = precioMCuadrado*mCuadradosDeseados;
}

function inspeccion(){
    precioInspeccion = cantidadInspectores*(horasXInspector*precioHoraInspector);
}

do{
    let opcion = Number(prompt("Bienvenido "+nombre+" ¿que servicio desea? \n 1- Cálculo Estructural \n 2- Dirección e Inspección de obras: "));
    switch(opcion){
        case 1:
            alert("Escogiste: Cálculo Estructural")
            ubicacion = prompt("Ingrese la ubicación donde desea construir: ");
            mCuadradosDeseados = Number(prompt("Ingrese la cantidad de metros cuadrados que desea construir: "));
            cotizador();
            let informacion = document.getElementById("appl");
            informacion.innerText = "Hola "+nombre+" la construcción que desea construir en "+ubicacion+" tiene un valor aproximado entre mano de obra y materiales (sin honorarios) de $"+precioTotalMCuadrados+" para mas información contactarse al 2615788821";
            // alert("La construcción que desea construir en "+ubicacion+" tiene un valor aproximado entre mano de obra y materiales (sin honorarios) de $"+precioTotalMCuadrados+" para mas información contactarse al 2615788821")
            repetir = false;
            break;
    
        case 2:
            alert("Escogiste: Dirección e Inspección de obras")
            ubicacion = prompt("Ingrese la ubicación donde desea construir: ");
            cantidadInspectores = Number(prompt ("Ingrese la cantidad de inspectores que necesita: "));
            horasXInspector = Number(prompt ("Ingrese la cantidad de horas que inspeccionara cada inspector su construcción: "));
            inspeccion();
            let informacion1 = document.getElementById("appl");
            informacion1.innerText = "Hola "+nombre+" la construcción que desea construir en "+ubicacion+" tiene un valor de inspección de $"+precioInspeccion+" aproximadamente, para mas información contactarse al 2615788821"
            // alert("La construcción que desea construir en "+ubicacion+" tiene un valor de inspección de $"+precioInspeccion+" aproximadamente, para mas información contactarse al 2615788821")
            repetir = false;
            break;

        default:
            alert("No se elijio ningún servicio, vuelva a intentarlo")
            break;
    }

} while(repetir);