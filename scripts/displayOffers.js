const offersContainer = document.querySelector("#offers-container");
const promotionContainer = document.querySelector("#promotions-container");

function displayOffer(data){
	const shuffledArr = [...data].sort(() => 0.5 - Math.random());
	const promotionOnes = shuffledArr.filter(product => product.in_promotion);
	promotionOnes.slice(0, 4).forEach((element) =>{
		const div = document.createElement("div");
		div.innerHTML = `
	    	<img width="300" height="400" src="${element.image}" alt="">
	   		<div>
	   		    <p>${element.name}</p>
	   		    <p>${element.description}</p>
	   		    <p>Price: $${element.price}</p>
	   		    <a class="green-button" href="order.html">Order</a>
	   		</div>
		`;
		offersContainer.appendChild(div);
	});

	let promotion = data[Math.floor(Math.random() * data.length)];

	promotionContainer.innerHTML = `
		<figure>
    	    <img width="300" height="400" src="${promotion.image}" alt="${promotion.name}">
    	</figure>
    	<div>
    	    <h3>${promotion.name}</h3>
    	    <p>${promotion.description}</p>
    	    <p>Price: <span>$${promotion.price}</span></p>
    	    <a class="green-button" href="order.html">Order</a>
    	</div>
	`;

};

async function fetchUsers(){
  try {
    const response = await fetch("data/product.json");
    const data = await response.json();
    console.log(data);
    if (response.ok){
      displayOffer(data);
    } else{
      console.log(response.status);
    };
  } catch(error){
    console.log("There was an error loading the data:", error);
  };
};

fetchUsers();
