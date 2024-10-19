console.log("Element Handling....");

const divNew = document.createElement("div");
console.log(divNew);
divNew.id = "alert";
divNew.className = "alert alert-success";
divNew.textContent = "YOU HAVE SUCCESSFULLY REGISTERED!";
divNew.style.backgroundColor = "lightgreen";
divNew.style.color = "white";
divNew.style.padding = "16px";
divNew.style.margin = "20px";
divNew.style.borderRadius = "15px";

console.log(divNew);

const card = document.querySelector(".card");

card.append(divNew, "Additional Text");

// card.appendChild(divNew);

// card.insertBefore(divNew, card.firstChild);

// card.removeChild(divNew);

const divNew2 = document.createElement("div");
console.log(divNew2);

divNew2.id = "error";
divNew2.className = "error error-danger";

divNew2.textContent = "ERROR!";
divNew2.style.backgroundColor = "red";
divNew2.style.color = "white";
divNew2.style.padding = "16px";
divNew2.style.margin = "20px";
divNew2.style.borderRadius = "15px";
divNew2.style.textAlign = "center";

card.replaceChild(divNew2, divNew);

const cloneDiv = divNew2.cloneNode(true);
card.appendChild(cloneDiv);

console.log(card.hasChildNodes());

card.remove();