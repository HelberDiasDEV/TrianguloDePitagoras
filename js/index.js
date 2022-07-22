function CalcularHipotenusa() {
        var v1 = document.getElementById("CatetoOposto").value; 
        var v2 = document.getElementById("CatetoAdjacente").value; 
        var CalcularHipotenusa = parseInt(v1 ** 2 + v2 ** 2) ** (1/2); 
        document.getElementById("result").innerHTML = "Resultado " + CalcularHipotenusa;
}
