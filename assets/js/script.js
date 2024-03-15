// Funciones

// Declaraciones de función

/**
 * function nombre () {}
 *
 *  pasar la función nombre a expresión de función
 *
 * const nombre  = function() {}
 *
 */

// Expresión de función

/**
 * función anonima  ==>  function () {}
 *
 * const Sumar = function(num_1, num_2){
 *  return num_1 + num_2
 * }
 *
 *Pasar a arrow function de una línea

 const sumar = (num_1, num_2) => num_1 + num_2 ;
 */

// arrow functions == () => {}

/**
 * const restar = (num_1, num_2) =>   num_1 - num_2 ;
 *
 */

// Parametros de funciones

/**
 * parametros ==  undefined
 *
 * const restar = (num_1 = 3, num_2 = 1) =>   num_1 - num_2 ;
 *
 * restar()
 *
 *
 * rest operator
 * const tabla_de_multiplicar = (multiplicador, ...números) => {
 *  ...números = arreglo o array  [1,2,3,4,5,6]
 * }                               0,1,2,3,4,5
 *

 */

const generar_tabla = (multiplicador, ...numeros) => {
	for (const posicion of numeros) {
		console.log(
			`${multiplicador} x ${numeros[posicion]} = ${
				multiplicador * numeros[posicion]
			}`
		);
	}
	console.log({ multiplicador, numeros });
};

generar_tabla(2, 1, 2, 3, 4, 5, 6, 7, 8, 9);
