const membershipLevels = document.querySelector("#membership-level-container");

const modal = document.querySelector("#modal")
function displayModal(membership){

    modal.innerHTML = ` `;

    const closeBut = document.createElement("button");
    closeBut.classList.add = "close-modal";
    closeBut.textContent = "❌";
    closeBut.addEventListener("click", () =>{
        modal.close();
    });

    const h2 = document.createElement("h2");
    h2.textContent = membership.name;

    const pDes = document.createElement("p");
    pDes.textContent = membership.description;

    const pPri = document.createElement("p");
    pPri.textContent = `Fee: $${membership.fee}`;

    const benefitList = document.createElement("ul");
    membership.benefits.forEach(benefit => {
        const li = document.createElement("li");
        li.textContent = benefit;

        benefitList.appendChild(li);
    });

    modal.appendChild(h2);
    modal.appendChild(pDes);
    modal.appendChild(pPri);
    modal.appendChild(benefitList);

    modal.showModal();
    
}

function displayMemberships(data) {
    data.forEach(membership => {
        const article = document.createElement("article");

        const h3 = document.createElement("h2");
        h3.textContent = membership.name;

        const button = document.createElement("button");
        button.textContent = "Learn More";

        button.addEventListener("click", () =>{
            displayModal(membership);
        });

        article.appendChild(h3);
        article.appendChild(button);

        membershipLevels.appendChild(article);
    });
    
} 

async function fetchData(){
    try{
        const response = await fetch("data/membershipLevels.json");
        if(response.ok){
            const data = await response.json();
            displayMemberships(data)
        } else{
            throw Error(await response.text());
        }
    } catch(error){
        console.log(error)
    };
};
fetchData();