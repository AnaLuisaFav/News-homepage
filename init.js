const menuToggle = document.querySelector('.botao-menu');
const mainNav = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const conteudo = document.querySelector('body');

menuToggle.addEventListener('click', function() {
  if (this.classList.contains('open')) {
    overlay.style.display='none';
    conteudo.style.overflow='scroll';
    this.classList.remove('open');
    mainNav.classList.remove('open');
  } else {
    overlay.style.display='block';
    conteudo.style.overflow='hidden';
    this.classList.add('open');
    mainNav.classList.add('open');
  }

});

