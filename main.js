var msg="hola mundo" ;
var alcance = 10 ;
var pDato = document.getElementById('dato') ;
var arreglo=[] ;
alert( "como se puede configurar js") ;
prompt("que prefiere:") ;
var nombre = prompt("Cual es tu nombre")
for ( var i=0; i< alcance ;i++) {
    console.log(i) ;
    arreglo.push(i) ;

    pDato.innerHTML = arreglo ;
}

