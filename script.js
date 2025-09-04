// console.log(inputBox);

// console.log(inputBox);

function submitButton() {
  let inputBox = document.getElementById("input_box").value;
  console.log(inputBox);
  
  let numberPattern = /[0-9]/;
  let specialPattern = /[^A-Za-z0-9 ]/; 

  if (
    inputBox.trim() === "" || numberPattern.test(inputBox) || specialPattern.test(inputBox)) {
    alert("Invalid address");
  }
}

async function (){
    await fetch('')
}
