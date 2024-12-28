let cityInput=document.getElementById("searchInput");
let search=document.getElementById("search");
let weatherIcon=document.getElementById("weatherImg");

const api_key = "dac13bc0da9bd7bd6e0f85ceb23b2b5c";
const api_url =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric";

async function checkWeather(city) {
  const response = await fetch(`${api_url}&appid=${api_key}&q=${city} `);
  let data = await response.json();
  console.log(data);

 if (response.ok === true) {
    document.querySelector(".city").innerHTML = data.name;

    document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)} °C`

    document.querySelector(".weather").innerHTML = data.weather[0].main;
  
    document.querySelector(".text1 span").innerHTML = `${Math.round(data.main.humidity)} %`;
  
    document.querySelector(".text2 span").innerHTML = `${Math.round(data.wind.speed)} km/hr`;

    if(data.weather[0].main==="Clouds"){
        weatherIcon.src="./assets/cloud.png";
    }
    else if(data.weather[0].main==="Rain"){
        weatherIcon.src="./assets/rain.png";

    }
    else if(data.weather[0].main==="Clear"){
        weatherIcon.src="./assets/Clear1.png";
        
    }
    else if(data.weather[0].main==="Mist"){
        weatherIcon.src="./assets/mist.png";
    }
    else if(data.weather[0].main==="Haze"){
        weatherIcon.src="./assets/Haze.png";
        weatherIcon.style.width = "150px"; 
        weatherIcon.style.height = "140px";
    }

    else if(data.weather[0].main==="Drizzle"){
        weatherIcon.src="./assets/drizzle.png";
    }
    else if(data.weather[0].main==="Smoke"){
        weatherIcon.src="./assets/smoke.png";
        weatherIcon.style.filter = "invert(1)"
   

    }  
}

else{
   
    document.querySelector(".city").innerHTML = "City not found";
    document.querySelector(".temp").innerHTML = "N/A";
    document.querySelector(".text1 span").innerHTML = "N/A";
    document.querySelector(".text2 span").innerHTML = "N/A";
 
}

}



function searchCity(){
    let city=cityInput.value.trim();
    if(city){
        checkWeather(city);
    }
    else{
        alert("Please enter a city name");
    }
}