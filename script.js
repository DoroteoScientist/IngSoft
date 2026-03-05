const integrantes = document.querySelectorAll('.integrante');
const btnSiguiente = document.getElementById('btnSiguiente');
const btnAnterior = document.getElementById('btnAnterior');

let indiceActual = 0;

integrantes[indiceActual].classList.add('active');

btnSiguiente.addEventListener('click', () => {
    integrantes[indiceActual].classList.remove('active');
    indiceActual = (indiceActual + 1) % integrantes.length;
    integrantes[indiceActual].classList.add('active');
    cambiarColor();
});

btnAnterior.addEventListener('click', () => {
    integrantes[indiceActual].classList.remove('active');
    indiceActual = (indiceActual - 1 + integrantes.length) % integrantes.length;
    integrantes[indiceActual].classList.add('active');
    cambiarColor();
});


function cambiarColor() {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.transition = 'background-color 2s';
};
