function encriptar() {
    var texto = document.getElementById("ctexto1").value.toLowerCase();
    var encriptartxt = texto.replace(/e/igm,"enter");
    var encriptartxt = encriptartxt.replace(/i/igm,"imes");
    var encriptartxt = encriptartxt.replace(/a/igm,"ai");
    var encriptartxt = encriptartxt.replace(/o/igm,"ober");
    var encriptartxt = encriptartxt.replace(/u/igm,"ufat");

    document.getElementById("ctexto2").innerHTML = encriptartxt;
    document.getElementById("imgmuñeco").style.display = "none";
    document.getElementById("textoh4").style.display = "none";
    document.getElementById("textop").style.display = "none";
    document.getElementById("copy").style.display = "showUI";
    document.getElementById("copy").style.display = "inherit";
}

function desencriptar() {
    var texto = document.getElementById("ctexto1").value.toLowerCase();
    var encriptartxt = texto.replace(/enter/igm,"e");
    var encriptartxt = encriptartxt.replace(/imes/igm,"i");
    var encriptartxt = encriptartxt.replace(/ai/igm,"a");
    var encriptartxt = encriptartxt.replace(/ober/igm,"o");
    var encriptartxt = encriptartxt.replace(/ufat/igm,"u");

    document.getElementById("ctexto2").innerHTML = encriptartxt;
    document.getElementById("imgmuñeco").style.display = "none";
    document.getElementById("textoh4").style.display = "none";
    document.getElementById("textop").style.display = "none";
    document.getElementById("copy").style.display = "showUI";
    document.getElementById("copy").style.display = "inherit";
}

function copiar() {
    var contenido = document.querySelector("#ctexto2");
    contenido.select();
    document.execCommand("copy");
    alert("!Copiado¡");
}

