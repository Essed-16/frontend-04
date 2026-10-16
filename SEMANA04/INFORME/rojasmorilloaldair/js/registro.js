const form = document.getElementById('formRegistro');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const celular = document.getElementById('celular').value.trim();

  if (!nombre || !correo || !/^[0-9]{9}$/.test(celular) || !form.correo.checkValidity()) {
    mensaje.className = 'error';
    mensaje.textContent = 'Completa todos los campos. El celular debe tener 9 dígitos.';
    return;
  }
  try {
    const registros = JSON.parse(localStorage.getItem('registros') || '[]');
    registros.push({ nombre, correo, celular, fecha: new Date().toISOString() });
    localStorage.setItem('registros', JSON.stringify(registros));
    mensaje.className = 'ok';
    mensaje.textContent = 'Registro guardado correctamente.';
    form.reset();
  } catch (err) {
    mensaje.className = 'error';
    mensaje.textContent = 'No se pudo guardar el registro.';
    console.error(err);
  }
});
