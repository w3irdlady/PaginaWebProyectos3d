let form = document.getElementById('reservaForm');
let tablaCuerpo = document.getElementById('tablaCuerpo');
let btnBorrar = document.getElementById('btnBorrar');
let seccionReservas = document.getElementById('seccionReservas');

// Capturar datos y mostrar en tabla dinámicamente
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Obtener valores de los inputs
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let fecha = document.getElementById('fecha').value;
    let mensaje = document.getElementById('mensaje').value;

    // Crear una nueva fila y celdas
    let nuevaFila = tablaCuerpo.insertRow();

    nuevaFila.insertCell(0).textContent = nombre;
    nuevaFila.insertCell(1).textContent = email;
    nuevaFila.insertCell(2).textContent = fecha;
    nuevaFila.insertCell(3).textContent = mensaje;

    // Limpiar el formulario después de enviar
    form.reset();
});
