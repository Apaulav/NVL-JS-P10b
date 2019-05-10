var par =[];
var impar =[];
for (var i =0; i < 50; i++){
	var azar = Math.floor((Math.random() * 100) + 1);
    
    if (azar % 2 == 0){	
        par.push(azar);
        }
    else{
        impar.push(azar);
        }  
 }
document.write("Pares ",par, "<BR>");
document.write("Impares ",impar, " ");
