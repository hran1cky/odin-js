// // 1. Funkcia add7 - pripočíta 7 k číslu
// function add7(number) {
//   return number + 7;
// }

// // 2. Funkcia multiply - vynásobí dve čísla
// function multiply(a, b) {
//   return a * b;
// }

// // 3. Funkcia capitalize - upraví text tak, aby malo iba prvé písmeno veľké
// function capitalize(text) {
//   return text.slice(0).toLowerCase();
// }

// // 4. Funkcia lastLetter - vráti posledné písmeno z textu
// function lastLetter(text) {
//   return text.slice(-1);
// }

// // --- TESTOVANIE VÝSTUPOV ---
// console.log("--- Test 1: add7 ---");
// console.log(add7(10)); // Malo by vypísať 17

// console.log("--- Test 2: multiply ---");
// console.log(multiply(3, 2)); // Malo by vypísať 6

// console.log("--- Test 3: capitalize ---");
// console.log(capitalize("abcd")); // Malo by vypísať "Abcd"
// console.log(capitalize("ABCD")); // Malo by vypísať "Abcd"
// console.log(capitalize("aBcD")); // Malo by vypísať "Abcd"

// console.log("--- Test 4: lastLetter ---");
// console.log(lastLetter("abcd")); // Malo by vypísať "d"
// ------------------------------------------------------------------------------------------------


// 1. Získanie vstupu od používateľa
let answer = parseInt(prompt("Zadaj číslo, po ktoré chceš spustiť FizzBuzz:"));

// 2. Cyklus od 1 po zadané číslo
for (let i = 1; i <= answer; i++) {
  
  // Dôležité: Podmienka pre deliteľnosť 3 aj 5 musí byť PRVÁ!
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
