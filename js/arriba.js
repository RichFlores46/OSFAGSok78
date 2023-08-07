function irArriba(pxPantalla){
    window.addEventListener('scroll', () =>{
        var scroll = document.documentElement.scrollTop;
        //console.log(scroll);
        var botonArriba = document.getElementById('btn-arriba');

        if(scroll > 250){
            botonArriba.style.right = 20 + "px";
        }else{
            botonArriba.style.right = -100 + "px";
        }
    })
}

irArriba(500);

function scrolly(){
    window.scrollTo(0, 0);
}
