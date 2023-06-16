var destino =prompt("ingrese su destino");
var precio=prompt("ingrese el valor");

if(destino == "mexico"){
    precio=precio-precio*0.05
    document.write(precio +"<br></br>")
    document.write("descuento del 5%")
}
else if(destino =="españa"){
    precio=precio-precio*0.10
    document.write(precio +"<br></br>")
    document.write("descuento del 10%")
}
else if(destino =="londres"){
    precio=precio-precio*0.20
    document.write(precio +"<br></br>")
    document.write("descuento del 20%")
}
else if(destino =="africa"){
    precio=precio-precio*0.25
    document.write(precio +"<br></br>")
    document.write("descuento del 25%")
}
else{
    document.write("no tiene ningun descuento")
}