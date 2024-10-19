console.log("Event Listners Types...");

const box = document.querySelector(".box");
box.addEventListener('click', function () {
  console.log("You clicked the box");
});

box.addEventListener('dbclick', function () {
  console.log("You double click the box");
});


box.addEventListener('mousedown', function(){
    console.log("mouse");
});

box.addEventListener('mouseup', function(){
    console.log("mouse released...");
});

box.addEventListener('mousemove', function(){
    console.log("mouse moved....");
});

box.addEventListener('mousedown', function(){
    console.log("You double click the box");
});

box.addEventListener('mousover', function(){
    console.log("You double click the box");
});