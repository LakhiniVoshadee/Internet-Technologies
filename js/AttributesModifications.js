console.log("attributes modifications loader.....");

// 1. getAttribute
const link = document.querySelector("a");
console.log(link.getAttribute("href"));


// 2. setAttribute
link.setAttribute("href", "https://www.facebook.com");


link.setAttribute('target','blank')

// 3. removeAttribute

link.removeAttribute('target');

