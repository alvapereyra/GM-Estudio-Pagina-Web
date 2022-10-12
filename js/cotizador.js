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

    nombre === "" || email === "" || nroTelefono === "" || ubi === "" || metrosCuadradosDeseados === "" || descripcion1 === "" ? fracaso() : exito (nombre, email, nroTelefono, ubi, metrosCuadradosDeseados, descripcion1, precioTotal, e);
});

let calculador = (metrosCuadradosDeseados) => {
    let precioMCuadrado = 114400;
    precioTotal = precioMCuadrado*metrosCuadradosDeseados;
};

let exito = (nombre, email, nroTelefono, ubi, metrosCuadradosDeseados, descripcion1, precioTotal, e) => {
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
            let informacion = document.getElementById("appl");
            informacion.innerText = "Hola "+nombre+" la construcción que desea construir en "+ubi+" tiene un valor aproximado entre mano de obra y materiales (sin honorarios) de $"+precioTotal+" para mas información contactarse al 2615788821";
            sessionStorage.setItem("Nombre", nombre);
            sessionStorage.setItem("Email", email);
            sessionStorage.setItem("nroTelefono", nroTelefono);
            sessionStorage.setItem("Ubicacion", ubi);
            sessionStorage.setItem("Metros cuadrados", metrosCuadradosDeseados);
            sessionStorage.setItem("Descripción", descripcion1);

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

    // let informacion = document.getElementById("appl");
    // informacion.innerText = "Hola "+nombre+" la construcción que desea construir en "+ubi+" tiene un valor aproximado entre mano de obra y materiales (sin honorarios) de $"+precioTotal+" para mas información contactarse al 2615788821";
    // sessionStorage.setItem("Nombre", nombre);
    // sessionStorage.setItem("Email", email);
    // sessionStorage.setItem("nroTelefono", nroTelefono);
    // sessionStorage.setItem("Ubicacion", ubi);
    // sessionStorage.setItem("Metros cuadrados", metrosCuadradosDeseados);
    // sessionStorage.setItem("Descripción", descripcion1);

    // fetch("https://formsubmit.co/ajax/alvaropereyragamez@gmail.com",{
    //     method: "POST",
    //     body: new FormData(e.target),
    //     })
    //     .then(res => res.ok ? res.json() : Promise.reject(res))
    //     .then(json => {})
    //     .catch (err => {
    //     console.log(err);
    //     })
    //     ;
};

let fracaso = () => {
    Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Los datos del formulario no pueden estar vacíos",
    })
};