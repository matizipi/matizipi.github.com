//DOM
// devuelve un elemento // all = recorre todo el arbbol buscando todos los elem =
/**let links = document.querySelectorAll("a");

links.forEach(function(link){
console.log(link)
})**/

/**let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener("click",function(){
        console.log(this);
    })
    });**/

let boton = document.querySelectorAll(".close");

boton.forEach(function(link){
    link.addEventListener("click",function(ev){
        /* evita el comportamiento default de la accion =
        ev.preventDefault();
        return false;
        */
        ev.preventDefault();
        let content = document.querySelector(".content");
        //quitarle las clases de animacion que tiene
        content.classList.remove("animate__bounceIn");
        content.classList.remove("animate__animated");

        //agregarle clases para animar la salida
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        //despues de 600 mili seg tiempo realiza la funcion
        setTimeout(function(){
            //vuelve a la pag anterior
            location.href="/boletines";
        },600);
        

    });
});


