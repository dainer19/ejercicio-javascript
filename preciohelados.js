var s =prompt("ingrese el sabor del helado");
var d

if(s == "oreo"){
    d=1500-1500*0.05
    document.write("el precio con descuento es: " + "<br>" + d   )
}
else if(s == "fresa"){
    document.write( "el precio es de 2000")
}
else if(s == "vainilla"){
    document.write("el precio es de 3000")
}
else if(s == "brawnie"){
    d=5000-5000*0.10
    document.write("el precio con descuento es : " + d)
}
else{
    document.write("lo sentimos no tenemos ese sabor de helado")
}