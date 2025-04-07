const weatherImg = document.querySelector("#weatherImage");
const currentTemp = document.querySelector("#currentTemp");
const currentWind = document.querySelector("#currentWind");
const currentDate = document.querySelector("#currentDate");
const lastUpdated = document.querySelector("#updated");
const threeDaysForecast = document.querySelector("#threeDaysForecast");

const urlForecast = "https://api.openweathermap.org/data/2.5/forecast?lat=-29.40&lon=-50.904&units=metric&appid=c05cda444e9f298736e0978031fe990f";

function displayResults(data){
    let highTemp = 0;
    let lowTemp = 1000;
    const iconUrlNow = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    weatherImg.setAttribute("src", iconUrlNow);
    currentTemp.textContent = data.list[0].main.temp;
    currentWind.textContent = data.list[0].wind.speed;

    const lastModified = document.lastModified.split(" ");
    currentDate.textContent = lastModified[0];
    lastUpdated.textContent = lastModified[1]; 

    data.list.forEach(entry => {
        lowTemp = Math.min(lowTemp, entry.main.temp);
        highTemp = Math.max(highTemp, entry.main.temp)
    });

    let dailyTemps = {};
    data.list.forEach(entry => {
        let date = entry.dt_txt.split(" ")[0];
        const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        let day = weekDays[new Date(date).getDay()];
        
        if (!dailyTemps[date]){
            dailyTemps[date] = {day: day, min: entry.main.temp, max: entry.main.temp, image: entry.weather[0].icon};
        } else{
            dailyTemps[date].min = Math.min(dailyTemps[date].min, entry.main.temp);
            dailyTemps[date].max = Math.max(dailyTemps[date].max, entry.main.temp);
        };
    });

    let day = new Date().getDate()
    
    let month = new Date().getMonth() + 1;
    
    let i = 0;

    while(i < 3){
        day = `${day}`;
        if (day.length == 1){
            day = "0" + day;
        }
        const div = document.createElement("div");
        div.innerHTML = `
            <span>${dailyTemps[`2025-0${month}-${day}`].day}</span>
            <img src="https://openweathermap.org/img/w/${dailyTemps[`2025-0${month}-${day}`].image}.png">
            <span>Lowest: ${dailyTemps[`2025-0${month}-${day}`].min} C°</span>
            <span>Highest: ${dailyTemps[`2025-0${month}-${day}`].max} C°</span>
        `;
        threeDaysForecast.appendChild(div);
        day = parseInt(day);
        day++;
        i++;
    };    
}

async function apiFetch() {
    try{
        const response = await fetch(urlForecast);
        if(response.ok){
            const data = await response.json();
            displayResults(data);
        } else{
            throw Error(await response.text());
        };
    } catch(error){
        console.log(error);
    };  
};
apiFetch();