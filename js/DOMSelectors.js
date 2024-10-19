console.log("DOM Selectors file is loaded....");

console.log(document);

// 1. Selectors an element by ID

const heading = document.getElementById("heading");
console.log(heading);

const h2heading = document.getElementById("h2heading");
console.log(h2heading);

//  2. Selectors an element by class name

const pharagraph = document.getElementsByClassName("pharagraph");
console.log(pharagraph);

const container = document.getElementsByClassName("container");
console.log(container);

// 3. Selectors an element by tag name

const tags = document.getElementsByTagName("p");
console.log(tags);

// 4. Selectors an element by query

const query = document.querySelector(".container .box h1");
console.log(query);

// 5. Selectors an element by query

const allSelector = document.querySelectorAll("pharagraph");
console.log(allSelector);
