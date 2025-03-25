const container = document.querySelector("#eventsContainer");

let allNews = undefined;
let index = 0;


function nextSlide(){
    index = (index + 1) % allNews.length;
    const offset = -index * 100;
    container.style.transform = `translateX(${offset}%)`;
}

setInterval(nextSlide, 3000);

function displayNews(data) {
    data.forEach(news => {
        const div = document.createElement("div");
        div.classList.add("new-item");

        const figure = document.createElement("figure");

        const img = document.createElement("img");
        img.setAttribute("src", news.image_url);
        img.setAttribute("alt", news.title);

        const figcaption = document.createElement("figcaption");
        figcaption.textContent = news.description;

        figure.appendChild(img);
        figure.appendChild(figcaption);

        div.appendChild(figure);

        container.appendChild(div);
    });

    allNews = document.querySelectorAll(".new-item");    
    
};

async function fetchApi(){
    const response = await fetch("data/currentEvents.json");
    const data = await response.json();

    displayNews(data);
}
fetchApi();
