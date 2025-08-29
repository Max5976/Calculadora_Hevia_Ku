let resultado;
let memoria = "";
let mMasPresionado;
let pantalla = document.getElementById('Pantalla') ;
console.log(pantalla);

function guardarValor(valor) {
    pantalla.value += valor;
}

function guardarResultado() {
    if (resultado === null || isNaN(resultado)) {
        pantalla.value = "";
        pantalla.value += "No es posible guardar algo que no existe."
        mMasPresionado = false;
    }
    else {
        mMasPresionado = true;
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
            pantalla.value += "Error";
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

