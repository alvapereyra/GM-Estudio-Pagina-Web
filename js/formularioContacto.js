const form = document.getElementById("contactanos");
const nombre1 = document.getElementById("NyA");
const mail = document.getElementById("mail");
const telefono = document.getElementById("Tel");
const mensaje = document.getElementById("mensaje1");

const validarFormulario = form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = nombre1.value;
    const email = mail.value;
    const tel = telefono.value;
    const mensaje1 = mensaje.value;

    nombre === "" || email === "" || tel === "" || mensaje1 === "" ? fracaso() : exito (nombre, email, tel, mensaje1);
});

let exito = (nombre, email, tel, mensaje1) => {
    Swal.fire({
        icon: "success",
        title: "Éxito!",
        text: "El formulario ha sido enviado",
    })
    let informacion = document.getElementById("inner");
    informacion.innerText = "Hola "+nombre+" te informamos que el formulario ha sido enviado con éxito";
    sessionStorage.setItem("Nombre", nombre);
    sessionStorage.setItem("Email", email);
    sessionStorage.setItem("nroTelefono", tel);
    sessionStorage.setItem("Descripción", mensaje1);
};

let fracaso = () => {
    Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Los datos del formulario no pueden estar vacíos",
    })
};