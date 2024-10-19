console.log("content manipulation....");

// 1.

const heading = document.getElementById("heading");
console.log(heading.textContent);
heading.textContent = "New Heading";


// 2.

const card = document.querySelector(".card");
// console.log(card.innerHTML);
card.innerHTML = "<h3>My Card</h3><p>This is the card</p>";

console.log(card.innerText);
card.innerText = "Just Content";


const input = document.querySelector('input[type="text"]');
console.log(input);
input.value = "Lakhini";



