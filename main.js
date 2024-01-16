var Imagen1 = "";
var Imagen2 = "";
var Imagen3 = "";
var Imagen4 = "";
var Imagen5 = "";
var Imagen6 = "";
var Imagen7 = "";
var Estatus = "";
var Objetos = [];
function preload() {
    Imagen1 = loadImage("1.png");
    Imagen2 = loadImage("2.jpg");
    Imagen3 = loadImage("3.jpg");
    Imagen4 = loadImage("4.jpg");
    Imagen5 = loadImage("5.jpg");
    Imagen6 = loadImage("6.png");
    Imagen7 = loadImage("7.jpg");
}
function setup(){
    Canvas = createCanvas(1100, 550);
    Canvas.position(25 , 300);
    Modelo = ml5.objectDetector("cocossd", Asd);
    document.getElementById("Estatus").innerHTML = "Calculando imagenes...";
}
function draw(){
    image(Imagen2, 0, 0, 1100, 550);
    if (Estatus != "") {       
        for (let i = 0; i < Objetos.length; i++) {
            document.getElementById("Estatus").innerHTML = "imagenes Encontradas (:";
            
    stroke("black");
    noFill();
    rect(Objetos[i].x, Objetos[i].y - 100, Objetos[i].width/2 , Objetos[i].height/2);
    textSize(20);
    rojo = Math.floor((Math.random() * 255)) + 1;
    verde = Math.floor((Math.random() * 255)) + 1;
    azul = Math.floor((Math.random() * 255)) + 1;
    fill(rojo, verde, azul);
    text(Objetos[i].label, Objetos[i].x, Objetos[i].y - 100);
        }
    }
}
function Asd(){
    console.log("Ya esta (:");
    Estatus = true;
    Modelo.detect(Imagen2, Resultados);
}
function Resultados(errores, ResultadosBu) {
    if (errores) {
        console.error(errores);
    }
    else{
        console.log(ResultadosBu);
        Objetos = ResultadosBu;
        console.log(Objetos);
    }
}
function Siguiente(){
    window.location = "A2.html";
}