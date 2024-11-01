// Alterar imagem do slide

function alteraImagem(finalDaClasse) {
    const arrow1 = document.querySelector('.arrow1' + finalDaClasse);
    const arrow2 = document.querySelector('.arrow2' + finalDaClasse);
    let contador = 1;
    arrow1.addEventListener('click', (item) => {
        contador--;
        if (contador < 1) {
            contador = 4;
        }
        document.querySelector('#radio' + contador + finalDaClasse).checked = true;
    })
    arrow2.addEventListener('click', (item) => {
        contador++;
        if (contador > 4) {
            contador = 1;
        }
        document.querySelector('#radio' + contador + finalDaClasse).checked = true;
    })
}
alteraImagem('a');
alteraImagem('b');
alteraImagem('c');
alteraImagem('d');
alteraImagem('e');
alteraImagem('f');
alteraImagem('g');
alteraImagem('h');

// Scroll Suave

const linksInternos = document.querySelectorAll('.menu-lista a[href^="#"]');

function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = (section.offsetTop) - 96;
    window.scrollTo({
        top: topo,
        behavior: 'smooth',
    })
}

linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
})

// Menu responsivo

const menuIcone = document.querySelector('.menu-icon-container');
const menuLista = document.querySelector('.menu-lista');
const menuX = document.querySelector('.menu-x');

menuIcone.addEventListener('click', (e) => {
    menuLista.classList.add('classe-flex');
})
menuX.addEventListener('click', (e) => {
    menuLista.classList.remove('classe-flex');
})
if (window.innerWidth <= 750) {
    linksInternos.forEach((link) => {
        link.addEventListener('click', (e) => {
            menuLista.classList.remove('classe-flex');
        })
    })
}
