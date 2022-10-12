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

    nombre === "" || email === "" || tel === "" || mensaje1 === "" ? fracaso() : exito (nombre, email, tel, mensaje1, e);
});

let exito = (nombre, email, tel, mensaje1, e) => {
    Swal.fire({
        title: 'Esta seguro que desea enviar el formulario?',
        text: `Enviará el formulario`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Enviar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Enviado!',
                'El formulario ha sido enviado con éxito',
                'success'
            )
            let informacion = document.getElementById("inner");
            informacion.innerText = "Hola "+nombre+" te informamos que el formulario ha sido enviado con éxito";
            sessionStorage.setItem("Nombre", nombre);
            sessionStorage.setItem("Email", email);
            sessionStorage.setItem("nroTelefono", tel);
            sessionStorage.setItem("Descripción", mensaje1);

            fetch("https://formsubmit.co/ajax/alvaropereyragamez@gmail.com",{
                method: "POST",
                body: new FormData(e.target),
                })
                .then(res => res.ok ? res.json() : Promise.reject(res))
                .then(json => {})
                .catch (err => {
                console.log(err);
                })
                ;
            
            Toastify({
                text: 'Enviaste un mail!',
                duration: 3000,
                gravity: 'top',
                position: 'right',
                style: {
                    background: '#4D393B'
                }
            }).showToast();
        }
    })

    // Swal.fire({
    //     icon: "success",
    //     title: "Éxito!",
    //     text: "El formulario ha sido enviado",
    // })
    // let informacion = document.getElementById("inner");
    // informacion.innerText = "Hola "+nombre+" te informamos que el formulario ha sido enviado con éxito";
    // sessionStorage.setItem("Nombre", nombre);
    // sessionStorage.setItem("Email", email);
    // sessionStorage.setItem("nroTelefono", tel);
    // sessionStorage.setItem("Descripción", mensaje1);
};

let fracaso = () => {
    Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Los datos del formulario no pueden estar vacíos",
    })
};