(function () {
  const slides = document.querySelectorAll('.slide');
  const pag = document.querySelector('.paginacion');
  let actual = 0, timer;

  slides.forEach((_, i) => {
    const b = document.createElement('button');
    b.setAttribute('aria-label', 'Ir a la imagen ' + (i + 1));
    b.addEventListener('click', () => { mostrar(i); reiniciar(); });
    pag.appendChild(b);
  });
  const dots = pag.querySelectorAll('button');

  function mostrar(n) {
    slides[actual].classList.remove('activa');
    dots[actual].classList.remove('activo');
    actual = n;
    slides[actual].classList.add('activa');
    dots[actual].classList.add('activo');
  }
  function reiniciar() {
    clearInterval(timer);
    timer = setInterval(() => mostrar((actual + 1) % slides.length), 4000);
  }
  mostrar(0);
  reiniciar();
})();
