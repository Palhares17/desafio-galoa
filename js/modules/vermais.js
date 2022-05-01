export default function initVermais() {
    const vermais = document.querySelector('.vermais');
    const oculto = document.querySelector('.oculto');
    const textoSumir = document.querySelector('.sumir');
    const vermenos = document.querySelector('.vermenos');

    vermais.addEventListener('click', () => {
        textoSumir.classList.toggle('oculto');
        oculto.classList.toggle('oculto');

    });

    vermenos.addEventListener('click', () => {
        textoSumir.classList.toggle('oculto');
        oculto.classList.toggle('oculto');
    });
}