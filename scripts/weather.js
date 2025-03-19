const currentTemp = document.querySelector("#currentTemp");
const weatherIcon = document.querySelector("#weatherIcon");
const figDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=c05cda444e9f298736e0978031fe990f";

function displayResults(data){
    currentTemp.textContent = data.main.temp + "C°";
    const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconUrl);
    weatherIcon.setAttribute("alt", desc);
    figDesc.textContent = desc;
}

async function apiFetch(){
    try{
        const response = await fetch(url);

        if(response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else{
            throw Error(await response.text());
        }
    } catch(error){
        console.log(error);
    }
}

apiFetch();