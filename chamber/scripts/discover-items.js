const cardsContainer = document.querySelector("#cards-container");
const visit = document.querySelector("#visit-message");
const modal = document.querySelector("#modal");


function displayMessage(){
    const now = Date.now();
    const lastVisit = localStorage.getItem("lastVisit");

    if (!lastVisit){
        visit.textContent = "Welcome! Let us know if you have any questions.";
    } else{
        const diffTime = now - parseInt(lastVisit);
        console.log
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0){
            visit.textContent = "Back so soon! Awesome!";
        } else if ( diffDays === 1){
            visit.textContent = "You last visited 1 day ago.";
        } else{
            visit.textContent = `You last visited ${diffDays} days ago.`;
        }
    };

    localStorage.setItem("lastVisit", now);
}

displayMessage();


function displayItems(data){
    data.forEach(item => {
        const div = document.createElement("div");
        div.innerHTML = `
        <figure>
            <img src="${item.image}">
        </figure>
        <h2>${item.name}</h2>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <a class="button-learn" href="${item.website}" target="_blank">Learn More</a> 
        `;
        cardsContainer.appendChild(div);
    });
}

async function fetchData(){
    try{
        const response = await fetch("data/gramadoPlaces.json");
        if(response.ok){
            const data = await response.json();
            displayItems(data)
        } else{
            throw Error(await response.text());
        }
    } catch(error){
        console.log(error)
    };
};
fetchData();