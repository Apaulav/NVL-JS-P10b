var par =[];
var impar =[];
for (var i =0; i < 50; i++){
	var azar = Math.floor((Math.random() * 100) + 1);
    //document.write(azar + " ");
    
    if (azar % 2 == 0){	
    	//document.write("par");
        par.push(azar);
        }
    else{
        impar.push(azar);
    	//document.write(impar, " ");
        }  
 }
document.write("Pares ",par, "<BR>");
document.write("Impares ",impar, " ");
