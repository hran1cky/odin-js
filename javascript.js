// 1. Funkcia add7 - pripočíta 7 k číslu
function add7(number) {
  return number + 7;
}

// 2. Funkcia multiply - vynásobí dve čísla
function multiply(a, b) {
  return a * b;
}

// 3. Funkcia capitalize - upraví text tak, aby malo iba prvé písmeno veľké
function capitalize(text) {
  return text.slice(0).toLowerCase();
}

// 4. Funkcia lastLetter - vráti posledné písmeno z textu
function lastLetter(text) {
  return text.slice(-1);
}

// --- TESTOVANIE VÝSTUPOV ---
console.log("--- Test 1: add7 ---");
console.log(add7(10)); // Malo by vypísať 17

console.log("--- Test 2: multiply ---");
console.log(multiply(3, 2)); // Malo by vypísať 6

console.log("--- Test 3: capitalize ---");
console.log(capitalize("abcd")); // Malo by vypísať "Abcd"
console.log(capitalize("ABCD")); // Malo by vypísať "Abcd"
console.log(capitalize("aBcD")); // Malo by vypísať "Abcd"

console.log("--- Test 4: lastLetter ---");
console.log(lastLetter("abcd")); // Malo by vypísať "d"