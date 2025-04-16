const products = [
  {
    "name": "Gourmet Cheese Platter",
    "description": "A selection of the finest cheeses, served with fresh fruits and nuts.",
    "price": 29.99,
    "in_promotion": true,
    "category": "Aperitives",
    "image": "/images/gourmet_cheese_platter.webp"
  },
  {
    "name": "Stuffed Olives",
    "description": "Large olives stuffed with a mixture of cheese and herbs.",
    "price": 8.99,
    "in_promotion": false,
    "category": "Aperitives",
    "image": "/images/stuffed_olives.webp"
  },
  {
    "name": "Bruschetta",
    "description": "Toasted bread topped with a mixture of tomatoes, garlic, and basil.",
    "price": 6.50,
    "in_promotion": false,
    "category": "Aperitives",
    "image": "/images/bruschetta.webp"
  },
  {
    "name": "Truffle Fries",
    "description": "Crispy fries drizzled with truffle oil and sprinkled with parmesan.",
    "price": 12.50,
    "in_promotion": true,
    "category": "Aperitives",
    "image": "/images/truffle_fries.webp"
  },
  {
    "name": "Caviar",
    "description": "Premium black caviar served with toast and crème fraîche.",
    "price": 50.00,
    "in_promotion": false,
    "category": "Aperitives",
    "image": "/images/caviar.webp"
  },
  {
    "name": "Caprese Salad",
    "description": "A fresh salad made with mozzarella, tomatoes, basil, and balsamic.",
    "price": 9.99,
    "in_promotion": true,
    "category": "Aperitives",
    "image": "/images/caprese_salad.webp"
  },
  {
    "name": "Deviled Eggs",
    "description": "Classic deviled eggs with a creamy and tangy filling.",
    "price": 7.50,
    "in_promotion": false,
    "category": "Aperitives",
    "image": "/images/deviled_eggs.webp"
  },
  {
    "name": "Smoked Salmon Crostini",
    "description": "Crispy bread topped with smoked salmon, cream cheese, and capers.",
    "price": 14.00,
    "in_promotion": true,
    "category": "Aperitives",
    "image": "/images/smoked_salmon_crostini.webp"
  },
  {
    "name": "Mini Quiches",
    "description": "Delicious mini quiches filled with a variety of savory ingredients.",
    "price": 10.50,
    "in_promotion": false,
    "category": "Aperitives",
    "image": "/images/mini_quiches.webp"
  },
  {
    "name": "Pâté",
    "description": "Smooth, rich pâté served with fresh bread and pickles.",
    "price": 13.00,
    "in_promotion": false,
    "category": "Aperitives",
    "image": "/images/pate.webp"
  },

  {
    "name": "Grilled Salmon with Asparagus",
    "description": "Freshly grilled salmon served with a side of sautéed asparagus and garlic butter.",
    "price": 22.00,
    "in_promotion": false,
    "category": "Main Dishes",
    "image": "/images/grilled_salmon_asparagus.webp"
  },
  {
    "name": "Steak Frites",
    "description": "A perfectly cooked steak served with crispy fries and béarnaise sauce.",
    "price": 28.50,
    "in_promotion": true,
    "category": "Main Dishes",
    "image": "/images/steak_frites.webp"
  },
  {
    "name": "Chicken Parmesan",
    "description": "Breaded chicken cutlets topped with marinara sauce and melted mozzarella.",
    "price": 18.99,
    "in_promotion": false,
    "category": "Main Dishes",
    "image": "/images/chicken_parmesan.webp"
  },
  {
    "name": "Lamb Chops with Mint Jelly",
    "description": "Tender lamb chops grilled to perfection, served with mint jelly.",
    "price": 35.00,
    "in_promotion": false,
    "category": "Main Dishes",
    "image": "/images/lamb_chops_mint_jelly.webp"
  },
  {
    "name": "Vegetable Stir-Fry",
    "description": "A mix of fresh vegetables stir-fried in a savory soy sauce.",
    "price": 14.00,
    "in_promotion": true,
    "category": "Main Dishes",
    "image": "/images/vegetable_stir_fry.webp"
  },
  {
    "name": "Seafood Paella",
    "description": "A classic Spanish dish made with rice, seafood, and saffron.",
    "price": 27.50,
    "in_promotion": true,
    "category": "Main Dishes",
    "image": "/images/seafood_paella.webp"
  },
  {
    "name": "Beef Wellington",
    "description": "Tender beef wrapped in puff pastry, baked to perfection.",
    "price": 45.00,
    "in_promotion": false,
    "category": "Main Dishes",
    "image": "/images/beef_wellington.webp"
  },
  {
    "name": "Spaghetti Bolognese",
    "description": "Classic spaghetti served with a rich meat-based tomato sauce.",
    "price": 16.00,
    "in_promotion": false,
    "category": "Main Dishes",
    "image": "/images/spaghetti_bolognese.webp"
  },
  {
    "name": "Roast Chicken",
    "description": "Juicy roast chicken served with a side of roasted vegetables.",
    "price": 19.99,
    "in_promotion": true,
    "category": "Main Dishes",
    "image": "/images/roast_chicken.webp"
  },
  {
    "name": "Risotto with Mushrooms",
    "description": "Creamy risotto made with sautéed mushrooms and Parmesan cheese.",
    "price": 18.00,
    "in_promotion": false,
    "category": "Main Dishes",
    "image": "/images/risotto_mushrooms.webp"
  },

  {
    "name": "Chocolate Lava Cake",
    "description": "A rich, warm chocolate cake with a molten center, served with vanilla ice cream.",
    "price": 12.99,
    "in_promotion": false,
    "category": "Desserts",
    "image": "/images/chocolate_lava_cake.webp"
  },
  {
    "name": "Tiramisu",
    "description": "A traditional Italian dessert made with coffee-soaked ladyfingers and mascarpone.",
    "price": 9.99,
    "in_promotion": true,
    "category": "Desserts",
    "image": "/images/tiramisu.webp"
  },
  {
    "name": "Crème Brûlée",
    "description": "A creamy vanilla custard topped with a crispy caramelized sugar layer.",
    "price": 10.50,
    "in_promotion": false,
    "category": "Desserts",
    "image": "/images/creme_brulee.webp"
  },
  {
    "name": "Cheesecake",
    "description": "A rich and creamy cheesecake with a buttery graham cracker crust.",
    "price": 8.00,
    "in_promotion": true,
    "category": "Desserts",
    "image": "/images/cheesecake.webp"
  },
  {
    "name": "Apple Pie",
    "description": "Classic homemade apple pie with a flaky crust and cinnamon-spiced filling.",
    "price": 6.50,
    "in_promotion": false,
    "category": "Desserts",
    "image": "/images/apple_pie.webp"
  }
];

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

displayOffer(products);
