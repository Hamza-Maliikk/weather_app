let API_KEY = "a9a3666bc82ce5ca84917c0f148d6f8c";

async function getData(city) {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    console.log(response.status);

    let data = await response.json();

    if (!response.ok) {
      throw console.error(`Error in status ${response.status}`);
    }
    console.log(data);
    let utcSeconds = data.dt + data.timezone;
    let localData = new Date(utcSeconds * 1000);
    let date = localData.toLocaleDateString("en-US", { weekday: "long" });
    let time = localData.toLocaleTimeString("en-US");
    console.log(time);
    console.log(typeof time);

    let name = data.name;
    let result = document.getElementById("result");
    let bg = document.getElementById('bg')

    let main = data.weather[0].main;
    let description = data.weather[0].description;
    let icon = "";
    let bgimg = "";

    if (main === "Clear") {
      icon = "assets/images/clear/clear.png";
      bgimg = "./assets/images/clear/clear_bg.png";
    } else if (main === "Clouds") {
      icon = "assets/images/clouds/cloud.png";
    } else if (main === "Rain") {
      icon = "assets/images/rain/heavy-rain.png";
    } else if (main === "Thunderstorm") {
      icon = "assets/images/Thunderstorm/thunder.png";
    }

    bg.innerHTML = `
    <img class="bg_img" src=${bgimg} alt="">
    `
    result.innerHTML = `
    
    <div class="icons">
      <img src=${icon} alt="">
      </div>
    <div class="temperature">

      <h1 class="temp">${Math.floor(data.main.temp)}°C</h1>  

      <p>${date}</p>  
      <p>${time}</p>  
      <p>${main}</p>  
      <p>${description}</p>  
      <p>Feels like ${data.main.feels_like}</p>  
      <p>${name}</p> 
      </div>
      `;
  } catch (error) {
    console.log("Error in weather", error);
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
