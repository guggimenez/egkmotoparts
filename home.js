function alternarMenu() {
    const menuLateral = document.getElementById("menu-lateral");
    menuLateral.classList.toggle("ativo");
  }
  
  document.addEventListener("click", function(event) {
    const menuLateral = document.getElementById("menu-lateral");
    const botaoMenu = document.querySelector(".botao-menu");
    
    if (menuLateral.classList.contains("ativo") &&
        !menuLateral.contains(event.target) &&
        !botaoMenu.contains(event.target)) {
      menuLateral.classList.remove("ativo");
    }
  });


  function selecionarImagem(elemento, imagemSrc) {
    document.getElementById('grandona').src = imagemSrc;

    const miniaturas = document.querySelectorAll('.miniaturas img');
    miniaturas.forEach(img => {
        img.style.border = 'none';
        img.style.boxShadow = 'none';
    });

    elemento.style.border = '2px solid #4478fc';
    elemento.style.boxShadow = '0 0 10px #4478fc';
    elemento.style.borderRadius = '10px';
}