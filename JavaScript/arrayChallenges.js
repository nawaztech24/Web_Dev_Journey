let fruits = ["Apple", "Banana", "Mango"];

console.log("Original Array:", fruits);

// 1. push() - Add element at end
fruits.push("Orange");
console.log("After push:", fruits);

// 2. pop() - Remove last element
fruits.pop();
console.log("After pop:", fruits);

// 3. unshift() - Add element at beginning
fruits.unshift("Grapes");
console.log("After unshift:", fruits);

// 4. shift() - Remove first element
fruits.shift();
console.log("After shift:", fruits);

// 5. Access element by index
console.log("First Element:", fruits[0]);

// 6. Update element
fruits[1] = "Kiwi";
console.log("After Update:", fruits);

// 7. Length of array
console.log("Length:", fruits.length);

// 8. Loop through array
for(let i = 0; i < fruits.length; i++) {
    console.log("Index", i, "=", fruits[i]);
}

// 9. Check if element exists
console.log("Contains Mango?", fruits.includes("Mango"));

// 10. Find index
console.log("Index of Mango:", fruits.indexOf("Mango"));

// 11. Reverse array
fruits.reverse();
console.log("Reversed:", fruits);

// 12. Sort array
fruits.sort();
console.log("Sorted:", fruits);

// 13. Merge arrays
let moreFruits = ["Papaya", "Guava"];
let merged = fruits.concat(moreFruits);
console.log("Merged:", merged);

// 14. Slice array
let sliced = merged.slice(1, 4);
console.log("Sliced:", sliced);

// 15. Remove/Add using splice
merged.splice(2, 1, "Pineapple");
console.log("After Splice:", merged);