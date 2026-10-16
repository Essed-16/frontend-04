const form = document.getElementById('formContacto');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const celular = document.getElementById('celular');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (nombre.value == '' || correo.value == '' || celular.value == '') {
    mensaje.innerHTML = 'Completa todos los campos';
    return;
  }

  const datos = {
    nombre: nombre.value,
    correo: correo.value,
    celular: celular.value
  };

  const contactos = JSON.parse(localStorage.getItem('contactos') || '[]');
  contactos.push(datos);
  localStorage.setItem('contactos', JSON.stringify(contactos));

  fetch('http://167.71.101.78/senati/fpw/reserva.php', {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    if (data.status === 200) {
      mensaje.innerHTML = "SE REGISTRÓ SATISFACTORIAMENTE";
    } else {
      mensaje.innerHTML = "Error: " + data.message;
    }
  })
  .catch(error => console.log(error));

  form.reset();
});