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
    console.log(time)
    console.log(typeof(time))

    let result = document.getElementById("result");
    let main = data.weather[0].main 
    let description = data.weather[0].description
    let icon = ""

    if(main === "Clear"){
      icon = "assets/images/clear/clear.png"
    }else if(main === "Clouds"){
        icon ="assets/images/clouds/cloud.png"
    }else if(main === "Rain"){
        icon ="assets/images/rain/heavy-rain.png"
    }else if(main === "Thunderstorm"){
        icon ="assets/images/Thunderstorm/thunder.png"
    }

    result.innerHTML = `
      <h1 class="temp">${Math.floor(data.main.temp)}°C</h1>  

      <p>${date}</p>  
      <p>${time}</p>  
      <p>${main}</p>  
      <p>${description}</p>  
      <img class="icon" src="${icon}" alt="">
      
      <p>Feels like ${data.main.feels_like}</p>  
      `;
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
