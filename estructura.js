var calificacion =prompt("ingrese su calificacion");
if(calificacion>= 7 && calificacion<9){
    document.write("aprobado")
}else if(calificacion>=9 && calificacion<=10){
    document.write("felicitaciones promedio alto");
}
else if(calificacion>=10){
    document.write("solo se aceptan notas inferiores a 10");
}
else{
    document.write("reprobado")
} 