let age = 20;
let marks = 75;
let hasLicense = true;
let day = 2;

// Boolean variables
let isStudent = true;
let isMember = false;

// 1. Simple if
if (age >= 18) {
    console.log("1. You are an adult.");
}

// 2. if-else
if (marks >= 50) {
    console.log("2. You passed.");
} else {
    console.log("2. You failed.");
}

// 3. if-else-if-else
if (marks >= 90) {
    console.log("3. Grade A");
} else if (marks >= 70) {
    console.log("3. Grade B");
} else if (marks >= 50) {
    console.log("3. Grade C");
} else {
    console.log("3. Fail");
}

// 4. Nested if
if (age >= 18) {
    if (hasLicense) {
        console.log("4. You can drive.");
    }
}

// 5. Boolean AND (&&)
if (age >= 18 && hasLicense) {
    console.log("5. Adult with driving license.");
}

// 6. Boolean OR (||)
if (isStudent || isMember) {
    console.log("6. Discount available.");
}

// 7. Boolean NOT (!)
if (!isMember) {
    console.log("7. Not a member.");
}

// 8. Ternary Operator
let status = (age >= 18) ? "Adult" : "Minor";
console.log("8. Status:", status);

// 9. Switch Statement
switch(day) {
    case 1:
        console.log("9. Monday");
        break;
    case 2:
        console.log("9. Tuesday");
        break;
    case 3:
        console.log("9. Wednesday");
        break;
    default:
        console.log("9. Invalid Day");
}