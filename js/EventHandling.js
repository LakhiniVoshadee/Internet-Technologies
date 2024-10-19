console.log("event handling....");

const saveBtn = document.getElementById("btnSave");
saveBtn.addEventListener("click", handleClick);
//    console.log('Save btn clicked!')

function handleClick() {
  alert("Save Btn clicked!");
}


saveBtn.removeEventListener("click",handleClick);