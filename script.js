let API_KEY = "a9a3666bc82ce5ca84917c0f148d6f8c";

async function getData(city) {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    let data = await response.json();
    console.log(data);
    let utcSeconds = data.dt + data.timezone;
    let localData = new Date(utcSeconds * 1000);
    let date = localData.toLocaleDateString("en-US", { weekday: "long" });
    let time = localData.toLocaleTimeString("en-US");
    let result = document.getElementById("result");
    result.innerHTML = `
      <h1 class="temp">${Math.floor(data.main.temp)}°C</h1>  

      <p>${date}</p>  
      <p>${time}</p>  
      <p>${data.weather[0].main}</p>  
      
      <p>Feels like ${data.main.feels_like}</p>  
      `;
    console.log(data.weather[0].main);
  } catch (error) {
    console.log("Error ion weather", error);
  }
}
function submitButton() {
  let inputBox = document.getElementById("input_box").value;
  console.log(inputBox);

  let numberPattern = /[0-9]/;
  let specialPattern = /[^A-Za-z0-9 ]/;

  if (
    inputBox.trim() === "" ||
    numberPattern.test(inputBox) ||
    specialPattern.test(inputBox)
  ) {
    alert("Invalid address");
  } else {
    getData(inputBox);
  }
}
