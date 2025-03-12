const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.querySelector("#cards");

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        const card = document.createElement("section");

        const img = document.createElement("img");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        const p2 = document.createElement('p');

        let fullName = `${prophet.name} ${prophet.lastname}`;

        img.setAttribute("src", prophet.imageurl);
        img.setAttribute("alt", `Portrait of ${fullName}`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "300");
        img.setAttribute("hegiht", "200");

        h2.textContent = fullName;

        p.textContent = `${prophet.birthdate}, ${prophet.birthplace} - ${prophet.death}`;

        p2.textContent = `Children: ${prophet.numofchildren}`;

        card.appendChild(img);
        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(p2);

        cards.appendChild(card);
    });
}

async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();
