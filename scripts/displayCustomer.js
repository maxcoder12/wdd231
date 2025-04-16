const customerContainer = document.querySelector("#reviews-container");

function displayCustomer(data){
	const shuffledArr = [...data].sort(() => 0.5 - Math.random());
	shuffledArr.slice(0, 3).forEach((element) =>{
		const div = document.createElement("div");

		div.innerHTML = `
    	<img width="100%" height="auto" loading="lazy" src="${element.image}" alt="">
    	<p>${element.name}</p>
    	<p>${element.description}</p>
    	<p>Score: ${element.score}/5</p>
		`;
		
		customerContainer.appendChild(div);
	});
};


async function fetchUsers(){
	try {
		const response = await fetch("data/reviews.json");
		const data = await response.json();
		console.log(data);
		if (response.ok){
			displayCustomer(data);
		} else{
			console.log(response.status);
		};
	} catch(error){
		console.log("There was an error loading the data:", error);
	};
};

fetchUsers();