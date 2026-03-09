const form = document.getElementById('cataForm');
const tablaCuerpo = document.getElementById('tablaCuerpo');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Captura de datos
    const origen = document.getElementById('origen').value;
    const tostado = document.getElementById('tostado').value;
    const puntuacion = document.getElementById('puntuacion').value;
    const notas = document.getElementById('notas').value;

    // Crear fila con el mismo método que usaste antes
    const nuevaFila = tablaCuerpo.insertRow();

    nuevaFila.insertCell(0).textContent = origen;
    nuevaFila.insertCell(1).textContent = tostado;
    nuevaFila.insertCell(2).innerHTML = `<strong>${puntuacion}/10</strong>`;
    nuevaFila.insertCell(3).textContent = notas || "Sin notas";

    // Efecto visual y reset
    form.reset();
    console.log("Nueva cata registrada con éxito.");
});