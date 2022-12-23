const botonEncriptar = document.getElementById("encriptar");
const botonDesencriptar = document.getElementById("desencriptar");
const botonCopiar = document.getElementById("copiar");
const botonLimpiar = document.getElementById("limpiar");
const validas = /[a-z]/gi

function encriptar()
{
    let nuevoTexto = document.getElementById("mensaje").value;
    nuevoTexto;
    nuevoTexto = nuevoTexto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    nuevoTexto;

    document.getElementById("encriptado").value = nuevoTexto;
    document.getElementById("encriptado").style.color = "#ffff";
}

function desencriptar()
{
    let nuevoTexto = document.getElementById("mensaje").value;
    nuevoTexto;
    nuevoTexto = nuevoTexto
        .replace(/enter/g, 'e')
        .replace(/imes/g,'i')
        .replace(/ai/g,'a')
        .replace(/ober/g,'o')
        .replace(/ufat/g,'u');

    nuevoTexto;

    document.getElementById("encriptado").value = nuevoTexto;
    document.getElementById("encriptado").style.color = "#ffff";
}

function limpiar()
{
    document.getElementById("encriptado").value =  '';
    document.getElementById("mensaje").value = '';
}

function copiar()
{
    let textCopi = document.getElementById("encriptado");
    textCopi.select();
    document.execCommand("copy");
    document.getElementById("mensaje").value = "";
    document.getElementById("encriptado").value = "";
}

function validar()
{
    let valida = true;
    const mensaje = document.getElementById("mensaje").value;
    const minMsg = mensaje.toLowerCase();
    if(mensaje != minMsg)
    {
        valida = false;
        alert("¡En este campo solo se aceptan letras minúsculas!");
        limpiar();
    }else if(mensaje.length == 0)
    {
        valida = false;
        alert("¡Inserte algo en el campo!")
    }else
    {
        valida = true;
    }
}

botonEncriptar.addEventListener("click", validar);
botonEncriptar.addEventListener("click",encriptar);
botonLimpiar.addEventListener("click",limpiar);
botonCopiar.addEventListener("click",copiar);
botonDesencriptar.addEventListener("click",validar);
botonDesencriptar.addEventListener("click",desencriptar);