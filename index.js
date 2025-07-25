var suma = function(){
    var valorx =document.getElementById('valor1').value 
    var valory =document.getElementById('valor2').value 
    document.getElementById('resultado').innerHTML=" El resultado de la suma es: " + (parseInt(valorx) + parseInt(valory))
}

var resta = function(){
    var valorx =document.getElementById('valor1').value 
    var valory =document.getElementById('valor2').value 
    document.getElementById('resultado').innerHTML=" El resultado de la resta es: " + (parseInt(valorx) - parseInt(valory))
}

var multiplicacion = function(){
    var valorx =document.getElementById('valor1').value 
    var valory =document.getElementById('valor2').value 
    document.getElementById('resultado').innerHTML=" El resultado de la mutiplicacion es: " + (parseInt(valorx) * parseInt(valory))
}

var division = function(){
    var valorx =document.getElementById('valor1').value 
    var valory =document.getElementById('valor2').value 
    document.getElementById('resultado').innerHTML=" El resultado de la division es: " + (parseInt(valorx) / parseInt(valory))
}