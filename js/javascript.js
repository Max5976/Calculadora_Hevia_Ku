let resultado;
let memoria = "";
let mMasPresionado;
let pantalla = document.getElementById('Pantalla') ;
console.log(pantalla);

function guardarValor(valor) {
    pantalla.value += valor;
}

function guardarResultado() {
    if (resultado !== null && !isNaN(resultado)) {
        memoria = resultado;
        pantalla.value = "Guardado en memoria: " + memoria;
    } else {
        pantalla.value = "Nada que guardar";
    }
}
function guardarRes() {
    if (resultado === null || isNaN(resultado)) {
        pantalla.value = "";
        pantalla.value += "No es posible guardar algo que no existes."
        mMasPresionado = false;
    }
    else {
        pantalla.value = "";
        pantalla.value += "Se guardó el número " + resultado + ". Si guardas otro número éste se irá."
        memoria = resultado;
        mMasPresionado = false;
    }
}

function calcular(){
    if (pantalla.value !== "") {
        resultado = eval(pantalla.value);
        if (resultado === null || isNaN(resultado)) {
            pantalla.value = "";
            pantalla.value += "Error";t
            if (mMasPresionado === true) {
                guardarRes();
            }
        }   
        else {
            pantalla.value = "";
            pantalla.value += resultado;
            if (mMasPresionado === true) {
                guardarRes();
            }
        }
    }
    
}
function borrarUltimo() {
    let texto = pantalla.value;
    let nuevoTexto = "";
    for (let i = 0; i < texto.length - 1; i++) {
        nuevoTexto += texto[i];
    }
    pantalla.value = nuevoTexto;
}
function usarMemoria() {
    if (memoria !== null) {
        pantalla.value += memoria;
    } else {
        pantalla.value = "Memoria vacía";
    }
}
function borrarTodo() {
    pantalla.value = "";
    resultado = null;
}
