
// fizzbuzz
// for (let i = 1; i < 30; i++) {
//     if (i % 15 === 0) {
//         console.log("fizz")
//     } else if (i % 3 == 0) {
//         console.log('buzz')
//     } else if (i % 5 === 0) {
//         console.log('fizzbuzz')
//     } else { console.log(i) }
// }



// ordenar array
// arr = [-9, -2, 0, 2, 3]
// let raisedArr = []
// for (let i = 0; i < arr.length; i++) {
//     raisedArr.push(Math.sqrt(arr[i] ** 2));
// }
// console.log(raisedArr.sort((a, b) => a - b));



// Crea una función que pida un número por pantalla y devuelva su tabla de multiplicar en un array.
//     Ejemplo-- > Tabla del 3
//     ["3x1=3", "3x2=6", "3x3=9", "3x4=12", "3x5=15", "3x6=18", "3x7=21", "3x8=24", "3x9=27", "3x10=30"]
// let n = prompt()
// function multiplos(n) {
//     let arr = []
//     for (let i = 1; i <= 10; i++) {
//         arr.push(`${n} x ${i}= ${n*i}`)
//     }
//     return arr
// }
// multiplos(n);

// Crea una función que pida números por teclado y mételos en un array.Cuando el usuario meta un 0, dejaremos de insertar.Por último, ordena los números ordenados de menor a mayor y devuelve el array


// function notCero() {
//     let num;
//     let array = [];
//     while (true) {
//         num = prompt("Enter a number (or 0 to exit):");
//         num = parseFloat(num); // Convert the user input to a number

//         if (!isNaN(num)) {
//             if (num === 0) {
//                 break;
//             } else {
//                 array.push(num);
//             }
//         } else {
//             alert("Invalid input. Please enter a valid number.");
//         }
//     }

//     array.sort((a, b) => a - b);
//     console.log("Sorted array:", array);
// }

// notCero();