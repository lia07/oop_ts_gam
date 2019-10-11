

function myCallbackFunction(nombre){
console.log(nombre);
}

function saludar(nombre){
    console.log(`hola ${nombre}`);
}

//saludar('alvaro');

function despedir(){
    console.log('hasta luego');
}
    //unctionn darBienvenida(message, myCallbackFunction){
    //console.log(`hola ${nombre}`);
    function darBienvenida(message, myfunction, myfuncion2){
    console.log(message);
    myCallbackFunction('gladys');
    myCallbackFunction('Erlinda');
    myCallbackFunction('Ariel');
    //myCallbackFunction('Gio');
    //myCallbackFunction2('Gio');
}

darBienvenida('Bienvenida a Academy', saludar, despedir);

function hello(){
}
var hola=function(){
    console.log('Hola mundo');
}
//hello();
setTimeout(function(){console.log('Hola alumnos');},10000);
//setTimeout(()=>{Console.log('hola alumnos');},10000)
setTimeout(hello,10000);



function saludar(nombre){
    console.log('Hola' + nombre);
}
function procesarEntradaUsuario(collback){
    
}
