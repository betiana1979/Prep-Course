// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if ( x >= y) { return X ;
    
  } 
  return y;
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if (edad >= 18) {return "allowed"
    
  } else { return "Not allowed"
    
  }
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  if (status === 1) { return " online"
    
  } 
  if (status === 2 ) { return "Away"
    
  }
  else {
    return "Offline"
  } 
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  if ( idioma ==="aleman" ) {return "Guten Tag!";}
  if ( idioma === "mandarin") {return "Ni Hao!"; }
  if  (idioma === "ingles") {return "Hello!";}
  else return "Hola!";
  // Tu código:
}

function colors(color) {
  switch (color) {
    case blue :
      return  "This is blue";
      
      break;
   case red:
      return  "This is red";
        
      break;
   case green:
        return  "This is green";
          
        break;
   case orange:
          return  "This is orange";
            
          break;
    default:
      return "Color not found";
      break;
  }
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
}

function esDiezOCinco(numero) {
  if (numero === 10 || numero === 5) { 
    return true;
    
  } else { return false;
    
  }
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  return numero < 50 && numero >20 ;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  return numero === Math.floor (numero);
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  switch (numero) {
    case ( numero % 3 ) === 0:
      return "fizz"
      
      break;
    case ( numero % 5 ) === 0:
        return "buzz"
        
        break;
    case ( numero % 3 ) === 0 && ( numero % 5 ) === 0:
          return "fizzbuzz"
          
          break;
        default:
          return numero;
      break;
  }
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
var a = false ;
  if (num1 > num2 && num1 > num3 && num1 > 0){
  return "Número 1 es mayor y positivo";
  a = true ;}
  if ( num1 < 0 || num2 < 0 || num3 < 0 )//Si alguno de los tres números es negativo, retornar ---> 
  {return "Hay negativos";
  a = true;
}
  if (num3 > num1 && num3 > num2)
  {return num3 = num3 + 1;
  a = true }
  if  ( num1 === 0 || num2 === 0 || num3 === 0 )
  {return "error"
a= true ;
}
if (a = false ) {return "falso";
}
  //aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
}
function esPrimo(numero) {
  var primo = 1;
  for ( i =  2 ; i  < numero ; i++) {
    if  (numero%i === 0){
    primo = primo + 1;}
  }
  if (primo === 1){
    return "true";

  }
  else {return "falso";}
    
  }
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos


function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if (valor) {return "soy verdadero";}
  else {return "soy falso";}

}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí  
  for ( var i=0 ; i<11 ; i++){
    return "6 x " + i + " = " + 6*i ;
  }
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  if (numero > 100 && numero<1000) { return true ;
 
    
  } else {
return false;    
  }
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var i=0;
  while (i<8) {
    numero = numero + 5 ;
    i++;

  }
  return numero;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
