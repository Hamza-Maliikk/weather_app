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
let API_KEY = "a9a3666bc82ce5ca84917c0f148d6f8c"

async function getData(city){
  try{
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    let data = await response.json()
    console.log(data)
  }
  catch(error){
      console.log("Error ion weather",error)
  }
}

getData("Karachi")
