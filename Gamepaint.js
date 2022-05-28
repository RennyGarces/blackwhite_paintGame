   var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = 'white';
    pincel.fillRect(0, 0, 1500, 300);

    raio = 10;
    var desenha = false;
    tela.onmousemove = function(evento) {
        var x = evento.pageX
        var y = evento.pageY 
        var cores = 'black'
        console.log(x + ',' + y);


        if(evento.shiftKey){
            cores = 'white';
        }

        if(evento.ctrltKey && evento.altKey) {

        }else if(evento.ctrlKey && raio + 1 <= 30){
            raio = raio + 1;

        } else if(evento.altKey && raio - 3 >=10){
         raio = raio - 3;
     }


     if(desenha){
         pincel.fillStyle = cores;
         pincel.beginPath();
         pincel.arc(x, y, raio, 0, 2 * 3.14);
         pincel.fill();

     }
 }

 tela.onmousedown = function(){

    desenha = true;
}
tela.onmouseup = function (){

    desenha = false;
}
