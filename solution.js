// Declare a variable named euroCities and assign an array of 5 european cities to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable secondCity and assign the second item of the array as a value.


euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
console.log({euroCities});

secondCity = euroCities[1];
console.log({secondCity});


/////////////////////////////////////////
console.log("--------------------------------------------------------------");

// Change the first item in the array to "Berlin".

euroCities[0] = "Berlin";
console.log({euroCities});

//////////////////////////////////////////////////
console.log("--------------------------------------------------------------");

// Print the length of the array euroCities.

console.log(euroCities.length);

///////////////////////////////////////////////////
console.log("--------------------------------------------------------------");

// Remove the last item of the array euroCities.

euroCities.pop();
console.log({euroCities});

///////////////////////////////////////////////////
console.log("--------------------------------------------------------------");

// Use an array method to add "Budapest" to the end of the euroCities array.

euroCities.push("Budapest");
console.log({euroCities});

///////////////////////////////////////////////////
console.log("--------------------------------------------------------------");
// Create another variable named asianCities and assign an array of at least 5 cities to the variable.

const asianCities = ["Peking", "Tokio", "Seoul", "Schanghai", "Wuhan"];


///////////////////////////////////////////////////
console.log("--------------------------------------------------------------");
// Use a method to combine euroCities and asianCities into one array. Store the result in a variable worldCities.

const worldCities = euroCities.concat(asianCities);
console.log({worldCities});




///////////////////////////////////////////////////
console.log("--------------------------------------------------------------");
// Reverse the order of worldCities.

worldCities.reverse();
console.log({worldCities});


///////////////////////////////////////////////////
console.log("--------------------------------------------------------------");
// Bonus: Remove the third item from the euroCities array.

euroCities.splice(2, 1);
console.log({euroCities});


///////////////////////////////////////////////////
console.log("--------------------------------------------------------------");
// Bonus: Use an array method to select items 2 to 4 from the array of asianCities and store this in another variable.

// const someCities = asianCities.filter((element, index) => index >= 1 && index < 3);
// console.log(someCities);

const someCities = asianCities.slice(1,3);
console.log({someCities});


///////////////////////////////////////////////////
console.log("--------------------------------------------------------------");
// Bonus: Replace the 3rd item in the array of worldCities with "Toronto".

worldCities.splice(2, 1, "Toronto");
console.log({worldCities});


///////////////////////////////////////////////////
console.log("--------------------------------------------------------------");
// Bonus: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.

worldCities.splice(1, 0, "Washington");
console.log({worldCities});


///////////////////////////////////////////////////
console.log("--------------------------------------------------------------");
// Bonus Write a program to join all elements of the result (`worldCities) into a string.
console.log("worldCities: " + `${worldCities}`);


///////////////////////////////////////////////////
console.log("--------------------------------------------------------------");
// Bonus Write a program to reverse the string: "Hello World". Extra Practice

const einMail = "Hallo Welt!"
const reverseMail = [...einMail].reverse().join("");

console.log({reverseMail});




///////////////////////////////////////////////////
console.log("--------------------------------------------------------------");
// Make an array of your siblings' names or your favorite movie characters' names. Then make an array of your favorite football player's names. And Combine these two arrays.


const movieCharacters = ["Thor", "Wolverine", "Thanos", "Spider-Man", "Iron-Man", "Hulk"];
console.log({movieCharacters});

const footballPlayers = ["Ronaldo", "Messi", "Lewandowski", "Arjen Robben", "Eden Hazard", "Mario Gomez", "Samuel Eto’o", "Toni Kroos", "Drogba", "Neymar", "Falcao"];

console.log({footballPlayers});

const favorites = movieCharacters.concat(footballPlayers);
console.log({favorites});


///////////////////////////////////////////////////
console.log("--------------------------------------------------------------");
// Add your pets' names.

favorites.push("Katze", "Hund",);
favorites.unshift("Hirsch", "Hase", "Panda");

console.log({favorites});


///////////////////////////////////////////////////
console.log("--------------------------------------------------------------");
// Reverse the order of the array.

console.log(favorites.reverse());


///////////////////////////////////////////////////
console.log("--------------------------------------------------------------");
// Access one of your parents' names.

console.log(favorites.indexOf("Panda"));
console.log(favorites[19]);


///////////////////////////////////////////////////
console.log("--------------------------------------------------------------");
// Update the name of one of your favorite football players.

console.log(favorites.indexOf("Eden Hazard"));
favorites.splice(8, 1, "Philipp Lahm");
console.log({favorites});