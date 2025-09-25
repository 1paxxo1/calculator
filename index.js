/* 
  Función auxiliar: obtenerValores
  - Toma los valores de los inputs (valor1 y valor2).
  - Valida que no estén vacíos y que sean números.
  - Retorna los valores como enteros dentro de un objeto.
*/
function obtenerValores() {
    var valorx = document.getElementById('valor1').value;
    var valory = document.getElementById('valor2').value;

    // Validación: verificar que ambos campos tengan contenido
    if (valorx.trim() === "" || valory.trim() === "") {
        document.getElementById('resultado').innerHTML = " Error: ingresa ambos números.";
        return null; // detenemos la ejecución
    }

    // Convertimos a número entero
    var num1 = parseInt(valorx);
    var num2 = parseInt(valory);

    // Validación: comprobar que realmente sean números
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerHTML = " Error: solo se permiten números.";
        return null;
    }

    return { num1, num2 };
}

/* 
  Función: suma
  Realiza la suma si los valores son válidos.
*/
var suma = function() {
    var valores = obtenerValores();
    if (valores) { // solo ejecuta si obtenerValores no devolvió null
        document.getElementById('resultado').innerHTML = 
            " El resultado de la suma es: " + (valores.num1 + valores.num2);
    }
};

/* 
  Función: resta
*/
var resta = function() {
    var valores = obtenerValores();
    if (valores) {
        document.getElementById('resultado').innerHTML = 
            " El resultado de la resta es: " + (valores.num1 - valores.num2);
    }
};

/* 
  Función: multiplicación
*/
var multiplicacion = function() {
    var valores = obtenerValores();
    if (valores) {
        document.getElementById('resultado').innerHTML = 
            " El resultado de la multiplicación es: " + (valores.num1 * valores.num2);
    }
};

/* 
  Función: división
  - Se agrega validación extra para evitar división por cero.
*/
var division = function() {
    var valores = obtenerValores();
    if (valores) {
        if (valores.num2 === 0) {
            document.getElementById('resultado').innerHTML = "⚠️ Error: no se puede dividir entre 0.";
        } else {
            document.getElementById('resultado').innerHTML = 
                " El resultado de la división es: " + (valores.num1 / valores.num2);
        }
    }
};
