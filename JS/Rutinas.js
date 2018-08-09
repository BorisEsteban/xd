function Mensaje(){
    alert("Hola Mundo");
}
function Formulario(){
    var nombre=document.getElementById("txtNom").value;
    var rut=document.getElementById("txtRut").value;
    
    var largo=rut.length;
    if (largo!=8) {
        alert("Rut mal ingresado");
        return;
    }
    var suma=0; 
    var multp = 3;
    for (var index = 0; index < 8; index++) {
        var caracter=rut.substring(index, index+1);
        suma=suma+(parseInt(caracter)*multp);
        multp--;
        if (multp == 1) {
            multp = 7;
        }
    }
    alert("Suma: "+(suma % 11));
    alert("Digito: "+(11-suma%11))
}