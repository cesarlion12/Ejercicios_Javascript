/* Autor: Cesar Augusto Leon Molina
Asignatura: Programación IV
Sexto semestre ingenieria de software
CIAF Educación Superior*/

var option = window.prompt("Bienvenido al menu del Taller 4\n1. Numero impar\n2. Numero mayor\n3. Validación usuario");
option = Number(option);
switch (option) {
    case 1:
        let numero = prompt("Ingresa primer numero: ")
        let numero2 = prompt("Ingresa el segundo numero: ")

        if(numero == "" && numero2 == ""){
            document.write("No ingreso ningun numero");
        }else if(numero % 2 ==0 && numero2 =="" || numero % 2 !=0 && numero2 =="" ){
            document.write("No ingreso el segundo numero");
        }else if(numero =="" && numero2 % 2 ==0 || numero =="" && numero2 % 2 !=0){
            document.write("No ingreso el primer numero")
        }else if(numero % 2==0 && numero2 % 2==0){
            document.write("Ninguno es impar"); 
        }else if(numero % 2 !=0 && numero2 % 2 !=0){
            document.write("Ambos numeros son impares");
        }else if(numero % 2 !=0 && numero2 % 2 >=0){
            document.write("El primer numero es impar");
        }else if (numero % 2 == 0 && numero2 % 2 !=0) {
            document.write("El segundo numero es impar");
        }
        break;
    case 2:
        var num1 = prompt("Ingrese primer numero porfavor ");
        num1 = Number(num1);
        var num2 = prompt("Ingrese segundo numero Porfavor "); 
        num2 = Number(num2);
        var num3 = prompt("Ingrese tercer numero Porfavor "); 
        num3 = Number(num3);

        if(num1 > num2 && num1 > num3){
            document.write("El primer numero ingresado " + num1 + " es mayor");
        }else if(num2 > num1 && num2 > num3){
            document.write("El segundo numero ingresado " + num2 + " es mayor");
        }else if(num3 > num1 && num3 > num2){
            document.write("El tercer numero ingresado " + num3 + " es mayor");
        }else{
            document.write("Ingresar los tres numero porfavor");
        }
        break;
    case 3:
        var user = prompt("Ingrese su usuario");
        var password = prompt("Ingrese su contraseña");

        if (user == "CIAF" && password == "ciaf123") {
            document.write("Usuario y contraseña correcto");
        }else{
            document.write("Acceso denegado");
        }
        break;
    default:
        document.write("Opción Incorreta");
        break;
}