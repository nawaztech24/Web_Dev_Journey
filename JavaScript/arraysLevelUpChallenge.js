

/********************************************************************
  QUESTION 1
  Store all teas before "chai"
********************************************************************/

// Original tea array
let teas1 = ["green tea", "black tea", "chai", "oolong tea"];

// Empty array to store result
let selectedTeas = [];

// Start loop from index 0
for(let i = 0; i < teas1.length; i++) {

    // Stop loop when chai is found
    if(teas1[i] === "chai") {
        break;
    }

    // Add tea into new array
    selectedTeas.push(teas1[i]);
}

// Print result
console.log("Q1:", selectedTeas);



/********************************************************************
  QUESTION 2
  Skip Paris
********************************************************************/

// Cities array
let cities1 = ["London", "New York", "Paris", "Berlin"];

// Empty result array
let visitedCities = [];

// Loop through array
for(let i = 0; i < cities1.length; i++) {

    // Skip Paris
    if(cities1[i] === "Paris") {
        continue;
    }

    // Add remaining cities
    visitedCities.push(cities1[i]);
}

// Print result
console.log("Q2:", visitedCities);



/********************************************************************
  QUESTION 3
  Stop when 4 is found
********************************************************************/

// Numbers array
let numbers1 = [1, 2, 3, 4, 5];

// Empty array
let smallNumbers = [];

// for...of gets values directly
for(let num of numbers1) {

    // Stop at 4
    if(num === 4) {
        break;
    }

    // Store number
    smallNumbers.push(num);
}

// Print result
console.log("Q3:", smallNumbers);



/********************************************************************
  QUESTION 4
  Skip herbal tea
********************************************************************/

// Tea array
let teas2 = ["chai", "green tea", "herbal tea", "black tea"];

// Empty result array
let preferredTeas = [];

// Loop through array
for(let tea of teas2) {

    // Skip herbal tea
    if(tea === "herbal tea") {
        continue;
    }

    // Add remaining teas
    preferredTeas.push(tea);
}

// Print result
console.log("Q4:", preferredTeas);



/********************************************************************
  QUESTION 5
  Store cities before Berlin
********************************************************************/

// Object containing populations
let citiesPopulation = {
    London: 8900000,
    "New York": 8400000,
    Paris: 2200000,
    Berlin: 3500000
};

// Empty object
let cityPopulations = {};

// Loop through object keys
for(let city in citiesPopulation) {

    // Stop when Berlin is found
    if(city === "Berlin") {
        break;
    }

    // Store city and population
    cityPopulations[city] = citiesPopulation[city];
}

// Print result
console.log("Q5:", cityPopulations);



/********************************************************************
  QUESTION 6
  Store cities with population above 3 million
********************************************************************/

// Object containing cities
let worldCities = {
    Sydney: 5000000,
    Tokyo: 9000000,
    Berlin: 3500000,
    Paris: 2200000
};

// Empty object
let largeCities = {};

// Loop through object
for(let city in worldCities) {

    // Skip population below 3 million
    if(worldCities[city] < 3000000) {
        continue;
    }

    // Store city
    largeCities[city] = worldCities[city];
}

// Print result
console.log("Q6:", largeCities);



/********************************************************************
  QUESTION 7
  Skip chai using forEach()
********************************************************************/

// Tea array
let teas3 = ["earl grey", "green tea", "chai", "oolong tea"];

// Empty result array
let availableTeas = [];

// forEach loop
teas3.forEach(function(tea) {

    // Skip chai
    if(tea === "chai") {
        return;
    }

    // Add tea
    availableTeas.push(tea);
});

// Print result
console.log("Q7:", availableTeas);



/********************************************************************
  QUESTION 8
  Skip Sydney
********************************************************************/

// Cities array
let cities2 = ["Berlin", "Tokyo", "Sydney", "Paris"];

// Empty array
let traveledCities = [];

// forEach loop
cities2.forEach(function(city) {

    // Skip Sydney
    if(city === "Sydney") {
        return;
    }

    // Store city
    traveledCities.push(city);
});

// Print result
console.log("Q8:", traveledCities);



/********************************************************************
  QUESTION 9
  Multiply by 2 and skip 7
********************************************************************/

// Number array
let numbers2 = [2, 5, 7, 9];

// Empty result array
let doubledNumbers = [];

// for loop
for(let i = 0; i < numbers2.length; i++) {

    // Skip 7
    if(numbers2[i] === 7) {
        continue;
    }

    // Multiply by 2 and store
    doubledNumbers.push(numbers2[i] * 2);
}

// Print result
console.log("Q9:", doubledNumbers);



/********************************************************************
  QUESTION 10
  Stop when tea name length is greater than 10
********************************************************************/

// Tea array
let teas4 = [
    "chai",
    "green tea",
    "black tea",
    "jasmine tea",
    "herbal tea"
];

// Empty array
let shortTeas = [];

// for...of loop
for(let tea of teas4) {

    // Stop when length becomes greater than 10
    if(tea.length > 10) {
        break;
    }

    // Store tea
    shortTeas.push(tea);
}

// Print result
console.log("Q10:", shortTeas);