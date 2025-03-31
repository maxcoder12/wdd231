const membershipLevels = document.querySelector("#membership-level-container");



const modal = document.querySelector("#modal")
function displayModal(membership){

    modal.innerHTML = ` `;

    const h2 = document.createElement("h2");
    h2.textContent = membership.name;

    const pDes = document.createElement("p");
    pDes.textContent = membership.description;

    const pPri = document.createElement("p");
    pPri.textContent = `Fee: $${membership.fee}`;


    const h3 = document.createElement("h3");
    h3.textContent = "Benefits: "

    const benefitList = document.createElement("ul");
    membership.benefits.forEach(benefit => {
        const li = document.createElement("li");
        li.textContent = benefit;

        benefitList.appendChild(li);
    });

    const closeBut = document.createElement("button");

    closeBut.classList.add("close-modal");
    closeBut.textContent = "❌";
    closeBut.addEventListener("click", () =>{
        modal.close();
    });

    modal.appendChild(closeBut);

    modal.appendChild(h2);
    modal.appendChild(pDes);
    modal.appendChild(pPri);
    modal.appendChild(h3);
    modal.appendChild(benefitList);

    modal.showModal();
    
}

function displayMemberships(data) {
    data.forEach((membership, index) => {
        setTimeout(()=>{
            const article = document.createElement("article");
            article.style.animation = "displayMembership .5s linear";

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
        }, index * 500);
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