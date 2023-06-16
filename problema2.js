var ladoA=prompt("ingrese lado a");
var ladoB=prompt("ingrese lado b");
var ladoC=prompt("ingrese lado c");

if(ladoA==ladoB && ladoB ==ladoC){
    document.write("equilatero");
}else if(ladoA==ladoB || ladoB==ladoC || ladoA !=ladoC){
    document.write("isosceles");
}else{
    document.write("escaleno");
}