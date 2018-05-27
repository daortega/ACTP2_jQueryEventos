$(function(){

  //2.- Abrir/cerrar tarjeta
  $(".cards").on("click",".card",function(){
    $(this).toggleClass('card--open')
  })

  //3.- Like
  $(".cards").on("click",".card__like",function(event){
    event.stopPropagation();
    event.preventDefault();
    $(this).toggleClass('card__like--red')
  })

  //4.-  Botón seguir
  $('.cards').on('click','.card__follow-btn',function(event){
    event.stopPropagation();
    $(this).toggleClass('card__follow-btn--following')

      siguiendo = $(this).attr('class')
      console.log(siguiendo)
    if ($(this).attr('class') == 'card__follow-btn card__follow-btn--following'){
      $(this).text('Siguiendo')
      console.log(true)
    } else {
      $(this).text('Seguir')
      console.log(false)
    }
  })//cerrar la tarjeta


    autor_original = $('.create__image').children().attr('src')
    fondo_original = $('.create__profile').children().attr('src')
    seguidores_original = $('[name="followers"]').val('')
    meGusta_original = $('[name="likes"]').val('')
    siguiendo_original = $('[name="following"]').val('')
    titulo_original = $('[name="name"]').val('')


    //5.- Agregar imagen, ver https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_onchange
    $( "select" ).change(function () {
    var str = "";
    $( '[name="image"] option:selected' ).each(function() {
        str += "assets/images/squared/" + $( this ).val();
      });
      //$( ".inventando" ).text( str );
      $('.create__image').children().attr('src',str)
    }).change();


    //6.- Agregar perfil autor
    $( "select" ).change(function () {
    var aut = "";
    $( '[name="author"] option:selected' ).each(function() {
          aut += "assets/images/profiles/" + $( this ).val();
        });
      $('.create__profile').children().attr('src',aut)
    }).change();

    //7.- Captura del formulario
    $('.create__submit').on('click',function(event){
      alert('yai')
      event.preventDefault();
      autor_sel = $('.create__image').children().attr('src')
      fondo_sel = $('.create__profile').children().attr('src')
      seguidores = $('[name="followers"]').val()
      meGusta = $('[name="likes"]').val()
      siguiendo = $('[name="following"]').val()
      titulo = $('[name="name"]').val()
      nombre = $('[name="author"] option:selected').text();
      console.log(titulo + ': ('+ nombre +') ' +seguidores +' '+ meGusta +' '+ siguiendo)

      //8.- Agregar código al HTML
      $('.cards').append(
      '<li class="card">'+
        '<div class="card__highlight">'+
          '<img class="card__img" src="'+ autor_sel +'" alt="">'+
        '</div>'+
        '<div class="card__content">'+
          '<div class="card__profile-container">'+
            '<img class="card__profile" src="'+ fondo_sel+'" alt="">'+
          '</div>'+
          '<a class="card__like card__like--red" href="#">'+
            '<i class="fas fa-heart"></i>'+
          '</a>'+
          '<div class="card__title">'+
            '<h2>'+ titulo +'</h2>'+
          '</div>'+
          '<div class="card__author">'+
            '<h3 class="card__author-name">'+ nombre +'</h3>'+
          '</div>'+
          '<div class="card__hidden">'+
            '<ul class="social">'+
              '<li class="social__element">'+
                '<div class="social__number">'+ seguidores +'</div>'+
                '<div class="social__text">Followers</div>'+
              '</li>'+
              '<li class="social__element">'+
                '<div class="social__number">'+meGusta+'</div>'+
                '<div class="social__text">Likes</div>'+
              '</li>'+
              '<li class="social__element">'+
                '<div class="social__number">'+ siguiendo +'</div>'+
                '<div class="social__text">Following</div>'+
              '</li>'+
            '</ul>'+
            '<div class="card__follow">'+
              '<button class="card__follow-btn">Seguir</button>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</li>')


    //9.- Limpiar formulario
    $('.create__image').children().attr('src',autor_original)
    $('.create__profile').children().attr('src',fondo_original)
    $('[name="followers"]').val('')
    $('[name="likes"]').val('')
    $('[name="following"]').val('')
    $('[name="name"]').val('')
  }) //Fin función paso 7-8-9

})//Cerran2 la función
