var Estatus = "";
var Objetos = [];
function preload() {
}
function setup(){
    Canvas = createCanvas(725, 550);
    Canvas.position(220 , 300);
    Camara = createCapture(VIDEO);
    Camara.size(725, 550);
    Camara.hide();
    Modelo = ml5.objectDetector("cocossd", Asd);
    document.getElementById("Estatus").innerHTML = "Calculando imagenes...";
}
function draw(){
    image(Camara, 0, 0, 725, 550);
    if (Estatus != "") {  
    Modelo.detect(Camara, Resultados);
        for (let i = 0; i < Objetos.length; i++) {
            document.getElementById("Estatus").innerHTML = "imagenes Encontradas (:";
            document.getElementById("CaO").innerHTML = Objetos.length;
            console.log(Objetos.length);
    stroke("black");
    noFill();
    rect(Objetos[i].x, Objetos[i].y, Objetos[i].width/2 , Objetos[i].height/2);
    textSize(20);
    rojo = Math.floor((Math.random() * 255)) + 1;
    verde = Math.floor((Math.random() * 255)) + 1;
    azul = Math.floor((Math.random() * 255)) + 1;
    fill(rojo, verde, azul);
    text(Objetos[i].label, Objetos[i].x, Objetos[i].y);
        }
    }
}
function Asd(){
    console.log("Ya esta (:");
    Estatus = true;
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
function Anterior(){
    window.location = "A5.html";
}