

//Navbar
$(document).scroll( function(e){
    const y = $("html").scrollTop();
    if(y > 1000) $("nav").addClass("nav-black")
    else $("nav").removeClass("nav-black")
})

//Carousel JS
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)

//Tooltip redes sociales
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
        placement : 'right'
    });
});

//boton
var myModal = new bootstrap.Modal(document.getElementById('myModal'), options)

