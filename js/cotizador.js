const form = document.getElementById("contacto");
const nombreYA = document.getElementById("Nombre y apellido");
const mail = document.getElementById("Email");
const telefono = document.getElementById("Telefono");
const ubicacion = document.getElementById("Ubicacion");
const mCuadradosDeseados = document.getElementById("mCuadradosDeseados");
const descripcion = document.getElementById("mensaje");
let precioTotal = 0;

const validarFormulario = form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = nombreYA.value;
    const email = mail.value;
    const nroTelefono = telefono.value;
    const ubi = ubicacion.value;
    const metrosCuadradosDeseados = mCuadradosDeseados.value;
    const descripcion1 = descripcion.value;
    calculador(metrosCuadradosDeseados);
    Swal.fire({
        icon: "success",
        title: "Éxito!",
        text: "El formulario ha sido enviado",
    })
    let informacion = document.getElementById("appl");
    informacion.innerText = "Hola "+nombre+" la construcción que desea construir en "+ubi+" tiene un valor aproximado entre mano de obra y materiales (sin honorarios) de $"+precioTotal+" para mas información contactarse al 2615788821";

    sessionStorage.setItem("Nombre", nombre);
    sessionStorage.setItem("Email", email);
    sessionStorage.setItem("nroTelefono", nroTelefono);
    sessionStorage.setItem("Ubicacion", ubi);
    sessionStorage.setItem("Metros cuadrados", metrosCuadradosDeseados);
    sessionStorage.setItem("Descripción", descripcion1);
});

let calculador = (metrosCuadradosDeseados) => {
    let precioMCuadrado = 114400;
    precioTotal = precioMCuadrado*metrosCuadradosDeseados;
};

