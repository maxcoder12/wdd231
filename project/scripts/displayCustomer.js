const reviews = [
  {
    "name": "Alice Johnson",
    "image": "https://randomuser.me/api/portraits/women/44.jpg",
    "description": "The service was excellent and the product quality exceeded my expectations. Will definitely order again!",
    "score": 5
  },
  {
    "name": "Brian Smith",
    "image": "https://randomuser.me/api/portraits/men/34.jpg",
    "description": "Delivery took a bit longer than expected, but the item arrived in perfect condition and works as described.",
    "score": 4
  },
  {
    "name": "Clara Mendes",
    "image": "https://randomuser.me/api/portraits/women/68.jpg",
    "description": "I had some issues with the packaging, but customer support was quick to help. Overall, a good experience.",
    "score": 4
  },
  {
    "name": "Daniel Lee",
    "image": "https://randomuser.me/api/portraits/men/52.jpg",
    "description": "The product did not meet my expectations. It felt cheap and not very durable. Wouldn’t recommend.",
    "score": 2
  },
  {
    "name": "Emily Zhao",
    "image": "https://randomuser.me/api/portraits/women/12.jpg",
    "description": "Absolutely loved it! Everything from the packaging to the performance was spot-on. Great value for the price.",
    "score": 5
  },
  {
    "name": "Felipe Costa",
    "image": "https://randomuser.me/api/portraits/men/26.jpg",
    "description": "It’s okay for the price. There are better options out there, but it gets the job done.",
    "score": 3
  },
  {
    "name": "Grace Lin",
    "image": "https://randomuser.me/api/portraits/women/21.jpg",
    "description": "Customer service was unresponsive and the item arrived damaged. Really disappointing.",
    "score": 1
  },
  {
    "name": "Hugo Silva",
    "image": "https://randomuser.me/api/portraits/men/75.jpg",
    "description": "Impressed with the quality! Much better than what I expected for this price range. Recommended.",
    "score": 5
  },
  {
    "name": "Isabella Moretti",
    "image": "https://randomuser.me/api/portraits/women/36.jpg",
    "description": "The website was easy to use and checkout was smooth. Item came faster than expected. Great job!",
    "score": 5
  },
  {
    "name": "Jorge Alvarez",
    "image": "https://randomuser.me/api/portraits/men/19.jpg",
    "description": "Not bad, but not great either. It’s just fine for occasional use. Wouldn’t recommend for daily use.",
    "score": 3
  }
];

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

displayCustomer(reviews);

// async function fetchUsers(){
// 	try {
// 		const response = await fetch("data/reviews.json");
// 		const data = await response.json();
// 		console.log(data);
// 		if (response.ok){
// 			displayCustomer(data);
// 		} else{
// 			console.log(response.status);
// 		};
// 	} catch(error){
// 		console.log("There was an error loading the data:", error);
// 	};
// };

// fetchUsers();