function encriptar(){
    var texto = document.getElementById("texto-encriptar").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm,"enter");//Para que afecte tanto minusculas como letras mayúsculas
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("txtCifrado").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}

function desencriptar(){
    var texto = document.getElementById("texto-encriptar").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm,"e");//Para que afecte tanto minusculas como letras mayúsculas
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("txtCifrado").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}

function copiar(){
    var contenido = document.querySelector("#txtCifrado");
    contenido.select();
    document.execCommand("copy");

    
}