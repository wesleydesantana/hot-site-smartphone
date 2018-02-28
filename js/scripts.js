 $('.navbar a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    //capturando o id do link
    var id = $(this).attr('href');
    $(this).addClass('active');
    //distancia entre o elemento e o topo da página
    targetOffset = $(id).offset().top;
      
    //elemento a ser animado
    $('html, body').animate({
        //animação
      scrollTop: targetOffset -200
      //tempo da animação
    }, 500);
});





