/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
    let NumeroUno;
    let NumeroDos;
    let sumar;
    NumeroUno = document.getElementById("txtNumeroUno").value;
    NumeroDos = document.getElementById("txtNumeroDos").value;
    NumeroUno = parseInt(NumeroUno);
    NumeroDos = parseInt(NumeroDos);
    sumar = NumeroUno + NumeroDos;
    alert("el resultado es: " + sumar);



}

