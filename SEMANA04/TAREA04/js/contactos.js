const cuerpo = document.getElementById('cuerpo');
const contactos = JSON.parse(localStorage.getItem('contactos') || '[]');

for (let i = 0; i < contactos.length; i++) {
  cuerpo.innerHTML += `
    <tr>
      <td>${contactos[i].nombre}</td>
      <td>${contactos[i].correo}</td>
      <td>${contactos[i].celular}</td>
    </tr>
  `;
}